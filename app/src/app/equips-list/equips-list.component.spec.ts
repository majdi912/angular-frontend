import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipsListComponent } from './equips-list.component';

describe('EquipsListComponent', () => {
  let component: EquipsListComponent;
  let fixture: ComponentFixture<EquipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
