import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCommercesListComponent } from './random-commerces-list.component';

describe('RandomCommercesListComponent', () => {
  let component: RandomCommercesListComponent;
  let fixture: ComponentFixture<RandomCommercesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RandomCommercesListComponent]
    });
    fixture = TestBed.createComponent(RandomCommercesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
