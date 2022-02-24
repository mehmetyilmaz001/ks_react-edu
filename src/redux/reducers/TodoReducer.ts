import { createSlice } from "@reduxjs/toolkit";
import { Todo } from '../../model/Todo';

interface TodoReducerType {
    list: Todo[]
}

const initialState: TodoReducerType = {
    list: [
        { title: "Learn React", completed: false, date: Date.now() + 1 },
        { title: "Learn TypeScript", completed: false, date: Date.now() + 2 },
        { title: "Learn Next.js", completed: false, date: Date.now() + 3 },
    ]
}

const todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
      setList: (state, action) => void (state.list = action.payload),
    },
});

export const {
    setList
} = todo.actions;

export default todo.reducer;