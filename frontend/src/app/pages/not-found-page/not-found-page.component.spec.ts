import { TestBed, ComponentFixture } from "@angular/core/testing";

import { NotFoundPageComponent } from './not-found-page.component'



describe("NotFoundComponent", () => {
  let fixture: ComponentFixture<NotFoundPageComponent>;
  let NotFoundComponent: NotFoundPageComponent;
  let compiled: HTMLElement;

  // Set up the testing environment before each test
  beforeEach(() => {
    
    TestBed.configureTestingModule({
  
      // Import necessary testing modules
      imports: [],
      // Declare the components used in the testing module
      declarations: [NotFoundPageComponent]
    })
  })

  beforeEach(() => {
     // Create a fixture for the component under test
     fixture = TestBed.createComponent(NotFoundPageComponent);
     // Get component instance
     NotFoundComponent = fixture.componentInstance;
     compiled = fixture.nativeElement;
     fixture.detectChanges();

  })

  it('should create the not-found page', () => {

    // Check if component is created
    expect(NotFoundComponent).toBeTruthy(); 

  });

  it("should contain a <h1> tag", () => {
    
    expect(compiled.querySelector('h1')).toBeTruthy();

  })
  it("should contain a <h2> tag", () => {
    
    expect(compiled.querySelector('h2')).toBeTruthy();

  })

  it("should contain an <a> tag", () => {

    const link = compiled.querySelector("a")

    expect(link).toBeTruthy()    

  })

})