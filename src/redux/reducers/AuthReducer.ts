import { createSlice } from "@reduxjs/toolkit";

interface AuthReducerType {
    user: null
}

const initialState: AuthReducerType = {
    user: null
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setUser: (state, action) => void (state.user = action.payload),
    },
});

export const {
    setUser
} = auth.actions;

export default auth.reducer;