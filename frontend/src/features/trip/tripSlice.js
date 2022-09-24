import { createSlice } from '@reduxjs/toolkit';
import { fetchTravelPlace } from './tripActions';

const initialState = {
  startDate: null,
  endDate: null,
  tripDay: null, //여행일수
  tripDates: [], //여행 하루하루 날짜
  travelPlaceList: null, //여행명소리스트 //null이랑 빈배열로 받는거랑 무슨차일까
  placeItem : []
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
      console.log(action.payload);
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    calcTripDay: (state, action) => {
      state.tripDay = action.payload;
    },
    setDates: (state, action) => {
      state.tripDates = action.payload;
    },
    setPlaceItem: (state, action) => {
      console.log("뭐담기지",action.payload)
      console.log("이게뭐임", state.placeItem)
      state.placeItem.push(action.payload)
    }
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

export const { setStartDate, setEndDate, calcTripDay, setDates, setPlaceItem } =
  tripSlice.actions;

export default tripSlice.reducer;
