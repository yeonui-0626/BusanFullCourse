package com.ssafy.fullcourse.domain.fullcourse.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Getter
@ApiModel("FullCourseRes")
@Builder
public class FullCourseTotalRes {

    @ApiModelProperty(name="등록 날짜", example="2022-07-06")
    Date regDate;

    @ApiModelProperty(name="시작일", example="2022-08-08")
    Date startDate;

    @ApiModelProperty(name="종료일", example="2022-08-11")
    Date endDate;

    @ApiModelProperty(name="썸네일", example="url")
    String thumbnail;

    @ApiModelProperty(name = "방문 여부")
    boolean isShared;

    @ApiModelProperty(name = "유저 이메일")
    String userEmail;

    @ApiModelProperty(name="장소들", example="{1:[{type}], ]}")
    HashMap<Integer, List<FullCourseDetailRes>> places;

}
