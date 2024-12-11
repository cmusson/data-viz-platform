import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IVariable {
  name: string;
  selected: boolean;
}

export interface IVariables {
  1: IVariable[];
  2: IVariable[];
  3: IVariable[];
}

const initialState: IVariables = {
  1: [
    { name: 'Carbon 1', selected: false },
    { name: 'Co2 Distribution', selected: true },
    { name: 'Fleet sizing', selected: true },
  ],
  2: [
    { name: 'Parking Rate', selected: false },
    { name: 'Border Rate', selected: true },
    { name: 'Request rate', selected: true },
    { name: 'Variable 1', selected: false },
    { name: 'Variable 1', selected: false },
    { name: 'Variable 1', selected: true },
  ],
  3: [
    { name: 'Variable 1', selected: false },
    { name: 'Variable 1', selected: true },
    { name: 'Variable 1', selected: true },
  ],
};

const variablesSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    updateSelected: (
      state,
      action: PayloadAction<{ group: keyof IVariables; index: number }>
    ) => {
      const { group, index } = action.payload;
      if (state[group][index]) {
        state[group][index].selected = !state[group][index].selected;
      }
    },
  },
});

export const { updateSelected } = variablesSlice.actions;
export default variablesSlice.reducer;
