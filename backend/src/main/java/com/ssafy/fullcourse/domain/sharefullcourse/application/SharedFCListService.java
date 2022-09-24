package com.ssafy.fullcourse.domain.sharefullcourse.application;

import com.ssafy.fullcourse.domain.sharefullcourse.dto.SharedFCListDto;
import com.ssafy.fullcourse.domain.sharefullcourse.dto.SharedFCTagDto;
import com.ssafy.fullcourse.domain.sharefullcourse.entity.SharedFCLike;
import com.ssafy.fullcourse.domain.sharefullcourse.entity.SharedFullCourse;
import com.ssafy.fullcourse.domain.sharefullcourse.repository.SharedFCLikeRepository;
import com.ssafy.fullcourse.domain.sharefullcourse.repository.SharedFCRepositoryCustom;
import com.ssafy.fullcourse.domain.sharefullcourse.repository.SharedFCRepository;
import com.ssafy.fullcourse.domain.user.entity.User;
import com.ssafy.fullcourse.domain.user.exception.UserNotFoundException;
import com.ssafy.fullcourse.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SharedFCListService {

    private final SharedFCRepository sharedFCRepository;
    private final SharedFCLikeRepository sharedFCLikeRepository;
    private final SharedFCRepositoryCustom sharedFCRepositoryCustom;
    private final UserRepository userRepository;


    public Page<SharedFCListDto> getSharedFCList(String email, String keyword, Pageable pageable) {
        Page<SharedFullCourse> page;
        if (keyword==null) page=sharedFCRepository.findAll(pageable);
        else page=sharedFCRepository.findFCListByTitleContains(keyword, pageable);

        return page.map(share -> new SharedFCListDto(share,
                sharedFCLikeRepository.findByUser_EmailAndSharedFullCourse(email,share).isPresent(),
                share.getSharedFCTags().stream().map(SharedFCTagDto::new).collect(Collectors.toList())));
    }

    public Page<SharedFCListDto> getSharedFCLikeList(String email, String keyword, Pageable pageable) {
        Optional<User> user = userRepository.findByEmail(email);
        if(!user.isPresent()) return null;
        User findUser = user.get();


        Page<SharedFCLike> page = sharedFCLikeRepository.findFCLikeByUser(findUser, pageable);

        return page.map(share -> new SharedFCListDto(share.getSharedFullCourse(),
                share.getSharedFullCourse().getSharedFCTags().stream().map(SharedFCTagDto::new).collect(Collectors.toList())));
    }

    //내 공유 풀코스 조회
    public Page<SharedFCListDto> getSharedFCListByUser(String email, Pageable pageable){
        User user = userRepository.findByEmail(email).orElseThrow(()->new UserNotFoundException());

        Page<SharedFullCourse> page = sharedFCRepository.findByUser(user, pageable);
        return page.map(share -> new SharedFCListDto(share,
                share.getSharedFCTags().stream().map(SharedFCTagDto::new).collect(Collectors.toList())));
    }

    // 공유 풀코스 태그&날짜 조회
    public Page<SharedFCListDto> searchByTagAndDay(List<String> tags, List<Integer> days, Pageable pageable){
        Page<SharedFullCourse>  sharedFullCourses = sharedFCRepositoryCustom.searchByTagsAndDays(tags,days,pageable);
        return sharedFullCourses.map(
                share -> new SharedFCListDto(share,share.getSharedFCTags().stream().map(SharedFCTagDto::new).collect(Collectors.toList())));
    }
}
