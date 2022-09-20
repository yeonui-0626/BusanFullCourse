package com.ssafy.fullcourse.domain.review.entity;

import com.ssafy.fullcourse.domain.place.entity.Travel;
import com.ssafy.fullcourse.domain.review.entity.baseentity.BaseReview;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@SuperBuilder
public class TravelReview extends BaseReview<Travel> {

    @Builder.Default
    @OneToMany(mappedBy = "review", cascade = CascadeType.REMOVE)
    private List<TravelReviewLike> reviewLikes = new ArrayList<>();
}
