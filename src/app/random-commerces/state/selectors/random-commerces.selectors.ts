import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CommerceState } from '../reducers/random-commerces.reducers';

export const selectCommerceState = createFeatureSelector<CommerceState>('randomCommerces');

export const selectCommerces = createSelector(
  selectCommerceState,
  (state) => state.commerces
);

export const selectLoading = createSelector(
  selectCommerceState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectCommerceState,
  (state) => state.error
);
