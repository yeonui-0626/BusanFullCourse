package com.ssafy.fullcourse.domain.place.entity;

import com.ssafy.fullcourse.domain.place.dto.HotelDetailRes;
import com.ssafy.fullcourse.domain.place.entity.baseentity.BasePlace;
import com.ssafy.fullcourse.domain.review.entity.HotelReview;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
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

    @Column(length = 100)
    private String url;

    @Column(length = 20)
    private String tel;

    @Column(nullable = false)
    private Long addedCnt;

    @Column(nullable = false)
    private Long reviewCnt;

    @Column(nullable = false)
    private Long likeCnt;

    @Builder.Default
    @OneToMany(mappedBy = "place", cascade = CascadeType.REMOVE)
    List<HotelReview> reviews = new ArrayList<>();

    @Builder.Default
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
        return res;
    }
}
