import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { loadRandomCommerces } from '../../state/actions/random-commerces.actions';
import { selectCommerces, selectError, selectLoading } from '../../state/selectors/random-commerces.selectors';
import { RandomCommercesListComponent } from '../../components/list/random-commerces-list.component';

@Component({
  standalone: true,
  selector: 'app-random-commerces-list-container',
  templateUrl: './random-commerces-list-container.component.html',
  styleUrls: ['./random-commerces-list-container.component.scss'],
  imports: [CommonModule, RandomCommercesListComponent]
  
})
export class RandomCommercesListContainerComponent implements OnInit{
  readonly commerces$ = this.store.select(selectCommerces);
  readonly isLoading$ = this.store.select(selectLoading);
  readonly hasError$ = this.store.select(selectError);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadRandomCommerces());
  }
}
