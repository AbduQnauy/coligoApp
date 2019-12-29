import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import checkAllReducer from "./reducers/checkAllReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  flag: checkAllReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["flag"]
  // whitelist: [""]
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
