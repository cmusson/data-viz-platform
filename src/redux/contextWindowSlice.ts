import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContextWindowState {
  isOpen: boolean;
  contextVariable: string;
}

const initialState: ContextWindowState = {
  isOpen: false,
  contextVariable: '',
};

const ContextWindowSlice = createSlice({
  name: 'ContextWindow',
  initialState,
  reducers: {
    openContextWindow: (state) => {
      state.isOpen = true;
    },
    closeContextWindow: (state) => {
      state.isOpen = false;
    },
    setContextVariable: (state, action: PayloadAction<string>) => {
      state.contextVariable = action.payload;
    },
  },
});

export const { openContextWindow, closeContextWindow, setContextVariable } =
  ContextWindowSlice.actions;
export default ContextWindowSlice.reducer;
