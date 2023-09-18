import { createReducer, on } from '@ngrx/store';

import { loadRandomCommerces, loadRandomCommercesFailure, loadRandomCommercesSuccess } from '../actions/random-commerces.actions';
import { RandomCommerce } from '../../rancom-commerces.model';

export interface CommerceState {
  commerces: RandomCommerce[];
  loading: boolean;
  error: string | null;
}

export const initialState: CommerceState = {
  commerces: [],
  loading: false,
  error: null,
};

export const commerceReducer = createReducer(
  initialState,
  on(loadRandomCommerces, (state) => ({ ...state, loading: true, error: null })),
  on(loadRandomCommercesSuccess, (state, { commerces }) => ({ ...state, commerces, loading: false, error: null })),
  on(loadRandomCommercesFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
