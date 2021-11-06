import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipComponent } from './create-equip.component';

describe('CreateEquipComponent', () => {
  let component: CreateEquipComponent;
  let fixture: ComponentFixture<CreateEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
