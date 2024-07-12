export const selectAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUploadData = (state) => state.upload.data ?? [];
export const selectUploadLoading = (state) => state.upload.loading;
export const selectUploadError = (state) => state.upload.error;
