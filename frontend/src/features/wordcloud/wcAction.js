import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWordCloud } from '../../api/wordcloud';
export const createWordCloud = createAsyncThunk(
  'wac/createWordCloud',
  async (placeName, { rejectWithValue }) => {
    try {
      const { data } = await getWordCloud(placeName);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
