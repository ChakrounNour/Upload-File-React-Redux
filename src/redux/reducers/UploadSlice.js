import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import UploadDataService from "../../data/service/upload.service";

export const uploadFile = createAsyncThunk(
  "upload/uploadFile",
  async ({ file, accessToken }, { rejectWithValue }) => {
    try {
      const response = await UploadDataService.create(file, accessToken);

      if (response.status === 200) {
        if (response.data.data === null) {
          toast.warning("No new lines added");
        } else {
          toast.success("File uploaded successfully");
        }
        return response.data;
      } else {
        toast.error("Incorrect file was selected");
        return rejectWithValue("Incorrect file was selected");
      }
    } catch (error) {
      toast.error("An error occurred during file upload");
      return rejectWithValue(error.message);
    }
  }
);

export const UploadSlice = createSlice({
  name: "upload",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default UploadSlice.reducer;
