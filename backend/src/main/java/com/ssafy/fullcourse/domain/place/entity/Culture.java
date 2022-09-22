package com.ssafy.fullcourse.domain.place.entity;

import com.ssafy.fullcourse.domain.place.dto.CultureDetailRes;
import com.ssafy.fullcourse.domain.place.entity.baseentity.BasePlace;
import com.ssafy.fullcourse.domain.review.entity.CultureReview;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Culture extends BasePlace {
    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false)
    private Float lat;

    @Column(nullable = false)
    private Float lng;

    @Column(length = 20)
    private String gugun;

    @Column(nullable = false, length = 50)
    private String address;

    @Column(nullable = false, length = 30)
    private String day;

    @Column(length = 5000)
    private String content;

    @Column(length = 100)
    private String imgUrl;

    @Column(nullable = false)
    private Long addedCnt = 0L;

    @Column(nullable = false)
    private Long reviewCnt = 0L;

    @Column(nullable = false)
    private Long likeCnt = 0L;

    @OneToMany(mappedBy = "place", cascade = CascadeType.REMOVE)
    List<CultureReview> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "place", cascade = CascadeType.REMOVE)
    List<CultureLike> likes = new ArrayList<>();


    public CultureDetailRes toDetailDto(){
        CultureDetailRes res = new CultureDetailRes();
        res.setName(this.getName());
        res.setLat(this.getLat());
        res.setLng(this.getLng());
        res.setGugun(this.getGugun());
        res.setAddress(this.getAddress());
        res.setDay(this.getDay());
        res.setContent(this.getContent());
        res.setImgUrl(this.getImgUrl());
        res.setAddedCnt(this.getAddedCnt());
        res.setReviewCnt(this.getReviewCnt());
        res.setLikeCnt(this.getLikeCnt());
        return res;
    }
}