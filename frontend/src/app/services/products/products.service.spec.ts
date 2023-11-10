import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { environment } from '../../../environments/environment';
import { PRODUCTS } from 'src/app/data/mock-products';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });

    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllProducts', () => {
    it('should return mock products if useApi is false', () => {
      Object.defineProperty(environment, 'useApi', { get: () => false });

      service.getAllProducts().subscribe((data) => {
        expect(data).toEqual(PRODUCTS);
      });
    });

    it('should make a GET request to the API if useApi is true', () => {
      Object.defineProperty(environment, 'useApi', { get: () => true });

      const mockResponse = { data: PRODUCTS, statusCode: 200 };

      service.getAllProducts().subscribe((data) => {
        expect(data).toEqual(PRODUCTS);
      });

      const req = httpTestingController.expectOne(`${service.baseUrl}/products`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });

  });
});
