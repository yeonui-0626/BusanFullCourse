import client from './client';

export const getTravelPlaceList = async (placeType) => {
  const res = await client.get(`api/place/${placeType}/list`);
  return res;
};

export const postTrip = async (data) => {
  const res = await client.post(`api/fullcourse`, data);
  return res;
};