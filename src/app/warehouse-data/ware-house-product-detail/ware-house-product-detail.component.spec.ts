import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseProductDetailComponent } from './ware-house-product-detail.component';

describe('WareHouseProductDetailComponent', () => {
  let component: WareHouseProductDetailComponent;
  let fixture: ComponentFixture<WareHouseProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHouseProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHouseProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
