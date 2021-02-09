import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseProductEditComponent } from './ware-house-product-edit.component';

describe('WareHouseProductEditComponent', () => {
  let component: WareHouseProductEditComponent;
  let fixture: ComponentFixture<WareHouseProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHouseProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHouseProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
