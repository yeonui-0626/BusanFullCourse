import { createSlice } from '@reduxjs/toolkit';
import { fetchTravelPlace } from './tripActions';
import format from 'date-fns/format';

const initialState = {
  startDate: null,
  endDate: null,
  tripDay: null, //여행일수
  tripDates: [], //여행 하루하루 날짜
  travelPlaceList: null, //여행명소리스트 //null이랑 빈배열로 받는거랑 무슨차일까
  placeItem: [],
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = format(action.payload, 'yyyy-MM-dd');
      
    },
    setEndDate: (state, action) => {
      state.endDate = format(action.payload, 'yyyy-MM-dd');
    },
    calcTripDay: (state, action) => {
      state.tripDay = action.payload;
    },
    setDates: (state, action) => {
      state.tripDates = action.payload;
    },
    setPlaceItem: (state, action) => {
      state.placeItem.push(action.payload);
    },
  },
  extraReducers: {
    //여행명소 리스트 목록 조회
    [fetchTravelPlace.fulfilled]: (state, { payload }) => {
      state.travelPlaceList = payload.data.content;
    },
    [fetchTravelPlace.rejected]: (state, { payload }) => {
      state.error = payload.error;
    },
  },
});

export const {
  setStartDate,
  setEndDate,
  calcTripDay,
  setDates,
  setPlaceItem,
} = tripSlice.actions;

export default tripSlice.reducer;
