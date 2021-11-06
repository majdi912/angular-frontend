import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipDetailsComponent } from './equip-details.component';

describe('EquipDetailsComponent', () => {
  let component: EquipDetailsComponent;
  let fixture: ComponentFixture<EquipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
