package com.ssafy.fullcourse.domain.review.entity;

import com.ssafy.fullcourse.domain.place.entity.Activity;
import com.ssafy.fullcourse.domain.review.entity.baseentity.BaseReview;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class ActivityReview extends BaseReview<Activity> {
//    @ManyToOne(fetch = LAZY)
//    @JoinColumn(name = "activityId")
//    private Activity activity;

    @OneToMany(mappedBy = "review", cascade = CascadeType.REMOVE)
    List<ActivityReviewLike> reviewLikes = new ArrayList<>();

}
