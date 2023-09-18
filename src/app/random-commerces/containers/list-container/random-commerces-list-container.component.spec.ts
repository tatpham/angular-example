import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { RandomCommercesListContainerComponent } from './random-commerces-list-container.component';
import { loadRandomCommerces } from '../../state/actions/random-commerces.actions';

describe('RandomCommercesListContainerComponent', () => {
  let component: RandomCommercesListContainerComponent;
  let fixture: ComponentFixture<RandomCommercesListContainerComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RandomCommercesListContainerComponent],
      providers: [
        provideMockStore({
          initialState: {
            randomCommerces: {
              commerces: [],
              isLoading: false,
            }
          },
        }),
      ],
    });
    fixture = TestBed.createComponent(RandomCommercesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch load action on init', () => {
    const action = loadRandomCommerces();
    const dispatchSpy = spyOn(store, 'dispatch');

    component.ngOnInit();

    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
