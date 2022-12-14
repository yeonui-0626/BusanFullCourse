package com.ssafy.fullcourse.domain.place.entity;

import com.ssafy.fullcourse.domain.place.dto.HotelDetailRes;
import com.ssafy.fullcourse.domain.place.entity.baseentity.BasePlace;
import com.ssafy.fullcourse.domain.review.entity.HotelReview;
import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Hotel extends BasePlace {
    @Column(nullable = false, length = 30)
    private String name;
    @Column(nullable = false, length = 20)
    private String sido;

    @Column(nullable = false, length = 20)
    private String gugun;

    @Column(nullable = false)
    private Float lat;

    @Column(nullable = false)
    private Float lng;

    @Column(length = 200)
    private String url;

    @Column(length = 20)
    private String tel;

    @Column(length = 300)
    private String imgUrl;

    @Column(nullable = false)
    private Long addedCnt = 0L;

    @Column(nullable = false)
    private Long reviewCnt = 0L;

    @Column(nullable = false)
    private Long likeCnt = 0L;

    @Column(nullable = false)
    private Float reviewScore = 0F;

    @OneToMany(mappedBy = "place", cascade = CascadeType.REMOVE)
    List<HotelReview> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "place", cascade = CascadeType.REMOVE)
    List<HotelLike> likes = new ArrayList<>();


    public HotelDetailRes toDetailDto(){
        HotelDetailRes res = new HotelDetailRes();
        res.setName(this.getName());
        res.setSido(this.getSido());
        res.setGugun(this.getGugun());
        res.setLat(this.getLat());
        res.setLng(this.getLng());
        res.setUrl(this.getUrl());
        res.setTel(this.getTel());
        res.setAddedCnt(this.getAddedCnt());
        res.setReviewCnt(this.getReviewCnt());
        res.setLikeCnt(this.getLikeCnt());
        res.setReviewScore(this.getReviewScore());
        res.setImgUrl(this.getImgUrl());
        return res;
    }

    public void updateReviewScore(Float reviewScore) {
        this.reviewScore = reviewScore;
    }
}
