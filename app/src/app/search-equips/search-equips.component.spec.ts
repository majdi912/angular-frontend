import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEquipsComponent } from './search-equips.component';

describe('SearchEquipsComponent', () => {
  let component: SearchEquipsComponent;
  let fixture: ComponentFixture<SearchEquipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEquipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEquipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
