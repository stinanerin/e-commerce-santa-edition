import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGalleryPageComponent } from './product-gallery-page.component';

describe('ProductGalleryPageComponent', () => {
  let component: ProductGalleryPageComponent;
  let fixture: ComponentFixture<ProductGalleryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGalleryPageComponent]
    });
    fixture = TestBed.createComponent(ProductGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
