import { Route } from '@angular/router';
import { RandomCommercesListContainerComponent } from './random-commerces/containers/list-container/random-commerces-list-container.component';

export const appRoutes: Route[] = [
  {
    path: '', component: RandomCommercesListContainerComponent
  },
];