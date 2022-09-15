import client from './client';

export const loginNaver = async (data) => {
  const res = await client.post('api/user/naver', data);
  return res;
};

export const loginKakao = async (data) => {
  const res = await client.post('api/user/kakao', data);
  return res;
};

export const getUserInfo = async () => {
  const res = await client.get('api/user');
  return res;
};

export const getMyFullcourse = async (userId) => {
  const res = await client.get(`fullcourse/my/${userId}`);
  return res;
};

export const updateUserInfo = async (nickname, imgFile) => {
  const formData = new FormData();
  formData.append('file', imgFile);
  formData.append(
    'userDto',
    new Blob([JSON.stringify(nickname)], { type: 'application/json' }),
  );
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  console.log(formData);
  const res = await client.post('api/user', formData, config);
  console.log(res);
  return res;
};
