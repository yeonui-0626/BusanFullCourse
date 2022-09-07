package com.ssafy.fullcourse.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActivityReview {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @Column(nullable = false)
    private String content;

    private String reviewImg;

    @Column(nullable = false)
    private Float score;

    @Column(nullable = false)
    private Long likeCnt;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "activityId")
    private Activity activity;

    @OneToMany(mappedBy = "review", cascade = CascadeType.REMOVE)
    private List<ActivityReviewLike> reviewLikes = new ArrayList<>();
}
