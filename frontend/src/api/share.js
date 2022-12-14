import client from './client';

export const getMyFullcourse = async () => {
  const res = await client.get(`api/fullcourse/my`);
  return res;
};

export const getSharedFc = async (data, page, sort) => {
  const res = await client.post('api/share/fullcourse/search', data, {
    params: { page, size: 9, sort },
  });
  return res;
};

export const getSharedFcDetail = async (sharedFcId, email) => {
  const res = await client.get(`api/share/fullcourse/${sharedFcId}`, {
    params: { email },
  });
  return res;
};

export const postSharedFc = async (data) => {
  const res = await client.post('api/share/fullcourse', data);
  console.log(res);
  return res;
};

export const postSharedFcComment = async (data) => {
  const res = await client.post('api/share/comment', data);
  return res;
};

export const deleteSharedFcComment = async (sharedFcId, commentId) => {
  const res = await client.delete(
    `api/share/comment/${sharedFcId}/${commentId}`,
  );
  return res;
};

export const getSharedFcLikeList = async () => {
  const res = await client.get('api/share/fullcourse/like');
  return res;
};

export const postSharedFcLike = async (sharedFcId) => {
  const res = await client.post(`api/share/like/${sharedFcId}`);
  return res;
};

export const getMySharedFc = async () => {
  const res = await client.get('/api/share/fullcourse/my');
  return res;
};

export const deleteSharedFc = async (sharedFcId) => {
  const res = await client.delete(`api/share/fullcourse/${sharedFcId}`);
  return res;
};
