import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

type Product = {
    title: string;
    subtitle: string;
    id: string;
    image: string;
};

export type DashboardState = {
    product: {
        title: string;
        subtitle: string;
        id: string;
        image: string;
    };
};

export const initialDashboardState: DashboardState = {
    product: {
        title: '',
        subtitle: '',
        id: '',
        image: '',
    },
};

const slice = createSlice({
    name: 'dashboard',
    initialState: initialDashboardState,
    reducers: {},
});

const { reducer } = slice;

export const {} = slice.actions;

export default reducer;
