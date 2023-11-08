import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui/header/header.component';

// Describe the test suite for the component
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let compiled: HTMLElement;

  // Set up the testing environment before each test
  beforeEach(() => TestBed.configureTestingModule({
    // Import necessary testing modules
    imports: [RouterTestingModule],
    // Declare the components used in the testing module
    declarations: [AppComponent, HeaderComponent]
  }));

  beforeEach(() => {
    // Create a fixture for the component under test
    fixture = TestBed.createComponent(AppComponent);
    // Get component instance
    appComponent = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();

  })

  // Test case
  it('should create the app', () => {

    // Check if component is created
    expect(appComponent).toBeTruthy(); 

  });

  it('should contain a <main> tag', () => {
    expect(compiled.querySelector('main')).toBeTruthy();
  });

  it("should contain the <app-header> component", () => {
    expect(compiled.querySelector('app-header')).toBeTruthy()
  })

});
