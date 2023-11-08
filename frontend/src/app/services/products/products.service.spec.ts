import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { PRODUCTS } from "../../data/mock-products";
import { Product } from 'src/app/models/product';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
  });

  it('service created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all products', (done) => {
    service.getAllProducts().subscribe((products) => {
      expect(products).toEqual(PRODUCTS);
      done();
    });
  });

  it('should return a product by id', (done) => {
    // From mockdata
    const productId = 1; 
    
    service.getProductById(productId).subscribe((product) => {
      const foundProduct:Product | undefined = PRODUCTS.find((p) => p.id === productId);
      
      expect(foundProduct).toBeDefined(); 

      if (foundProduct) {
        expect(product).toEqual(foundProduct);
      }
      done();
    });
  });

  it('should throw an error if product is not found', (done) => {
    const invalidProductId = 1000; // Replace with a non-existing product id
    expect(() => {
      service.getProductById(invalidProductId).subscribe();
    }).toThrowError(`Product with id ${invalidProductId} not found`);
    done();
  });
});
