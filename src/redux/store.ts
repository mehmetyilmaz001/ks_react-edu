import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import TodoReducer from "./reducers/TodoReducer";

const store = configureStore({ reducer: {
    todo: TodoReducer,
    auth: AuthReducer
} });


export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, Store, null, Action<string>>;


export default store;