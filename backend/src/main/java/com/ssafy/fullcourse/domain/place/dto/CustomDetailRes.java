package com.ssafy.fullcourse.domain.place.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CustomDetailRes {
    private String name;
    private Float lat;
    private Float lng;
    private String address;
    private String content;
}
