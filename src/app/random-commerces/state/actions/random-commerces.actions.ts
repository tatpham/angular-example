import { createAction, props } from '@ngrx/store';

import { RandomCommerce } from '../../rancom-commerces.model';

export const loadRandomCommerces = createAction('[RandomCommerce] Load Random Commerces');
export const loadRandomCommercesSuccess = createAction('[RandomCommerce] Load Random Commerces Success', props<{ commerces: RandomCommerce[] }>());
export const loadRandomCommercesFailure = createAction('[RandomCommerce] Load Random Commerces Failure', props<{ error: string }>());
