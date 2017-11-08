import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsRowComponent } from './ingredients-row.component';

describe('IngredientsRowComponent', () => {
  let component: IngredientsRowComponent;
  let fixture: ComponentFixture<IngredientsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
