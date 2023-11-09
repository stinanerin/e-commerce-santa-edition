import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageComponent } from './info-page.component';

describe('InfoPageComponent', () => {
  let fixture: ComponentFixture<InfoPageComponent>;
  let InfoComponent: InfoPageComponent;
  let compiled: HTMLElement;

  // Set up the testing environment before each test
  beforeEach(() => {
    
    TestBed.configureTestingModule({
  
      // Import necessary testing modules
      imports: [],
      // Declare the components used in the testing module
      declarations: [InfoPageComponent]
    })
  })

  beforeEach(() => {
     // Create a fixture for the component under test
     fixture = TestBed.createComponent(InfoPageComponent);
     // Get component instance
     InfoComponent = fixture.componentInstance;
     compiled = fixture.nativeElement;
     fixture.detectChanges();

  })

  it('should create the info page', () => {

    // Check if component is created
    expect(InfoComponent).toBeTruthy(); 

  });

  it("should contain a <h1> tag", () => {
    
    expect(compiled.querySelector('h1')).toBeTruthy();

  })


  it("should contain an <a> tag", () => {

    const link = compiled.querySelector("a")

    expect(link).toBeTruthy()    

  })


  it('should have certain properties', () => {
    expect(InfoComponent.message).toBeDefined(); 
    expect(InfoComponent.CTA).toBeDefined(); 
  });

});
