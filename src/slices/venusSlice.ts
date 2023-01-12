import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'venus',
  age: 5925000000
};

export const venusSlice = createSlice({
  name: 'venus',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.age += 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.age += action.payload;
    }
  }
});

export const { increment, incrementByAmount } = venusSlice.actions;

export const selectVenus = (state: any) => state.venus.age;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.venus.value)`

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default venusSlice.reducer;
