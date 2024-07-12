import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import logger from "redux-logger";
import UploadSlice from "./reducers/UploadSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["isAuthenticated", "user"],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: { auth: persistedAuthReducer, upload: UploadSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
export const persistor = persistStore(store);

export default store;
