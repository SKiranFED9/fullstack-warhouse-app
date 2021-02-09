import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseProductListComponent } from './ware-house-product-list.component';

describe('WareHouseProductListComponent', () => {
  let component: WareHouseProductListComponent;
  let fixture: ComponentFixture<WareHouseProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHouseProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHouseProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
