import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectedIconState {
  icon: {
    id: string;
    label: string;
    icon: any;
  } | null;
}

const initialState: SelectedIconState = {
  icon: null,
};

export const selectedIconSlice = createSlice({
  name: "selectedIcon",
  initialState,
  reducers: {
    setSelectedIcon: (
      state,
      action: PayloadAction<{
        id: string;
        label: string;
        icon: any;
      } | null>
    ) => {
      state.icon = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedIcon } = selectedIconSlice.actions;

export const selectSelectedIcon = (state: SelectedIconState) => state.icon;

export default selectedIconSlice.reducer;
