import { FormStore } from '../index';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof FormStore.getState>;
export type AppDispatch = typeof FormStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction // Replace with UnknownAction in RTK 2.0
>;
