import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FullcourseMap from '../../components/user/fullcourse/FullcourseMap';
import FullcourseSide from '../../components/user/fullcourse/FullcourseSide';
import { fetchFullcourseDetail } from '../../features/trip/tripActions';
import styled from 'styled-components';
import { fetchDiary } from '../../features/user/userActions';

const DetailBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DetailFullcoursePage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { fullcourseDetail } = useSelector((state) => state.trip);
  // const { places } = useSelector((state) => state.trip.fullcourseDetail);
  const [days, setDays] = useState(null);

  const fcId = params.fcId;

  useEffect(() => {
    dispatch(fetchFullcourseDetail(fcId));
  }, [dispatch, fcId]);

  // useEffect(() => {
  //   dispatch(fetchDiary(fullcourseDetail.fcdId));
  // }, [dispatch, fcId]);

  useEffect(() => {
    if (fullcourseDetail) {
      const startDate = fullcourseDetail.startDate.slice(0, 10);
      const endDate = fullcourseDetail.endDate.slice(0, 10);

      const arr1 = startDate.split('-');
      const arr2 = endDate.split('-');

      const start = new Date(arr1[0], arr1[1], arr1[2]);
      const end = new Date(arr2[0], arr2[1], arr2[2]);

      const tmp = days_between(start, end);
      setDays(tmp);
    }
  }, [fullcourseDetail]);

  //일 수 세기
  const days_between = (date1, date2) => {
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;
    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);
    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY) + 1;
  };

  return (
    <DetailBlock>
      <FullcourseSide
        days={days}
        userInfo={userInfo}
        fullcourseDetail={fullcourseDetail}
      />
      <FullcourseMap />
      {/* <MyFullcourseMemo /> */}
    </DetailBlock>
  );
};

export default DetailFullcoursePage;