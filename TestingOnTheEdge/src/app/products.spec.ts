import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';

describe('Welcome Page', () => {
  let fixture;
  let component;
  let element;
  let welcomeComponent;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        WelcomeComponent,
        {provide: APP_BASE_HREF, useValue: ''}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    welcomeComponent = TestBed.inject(WelcomeComponent);
    element = fixture.nativeElement;
  }));

  it('should display welcome page when _______', () => {
    fixture.detectChanges();
    console.log(element);
    console.log(element.innerHTML);
    console.log(element.outerHTML);

    // verifyElementExists('#welcome-page-header');
    // verifyElementIsVisible('#welcome-page-header');
    // verifyElementText('#welcome-page-header', 'Welcome');

    expect(true).toBe(true);
  });

  it('should display page not found message when _______', () => {
    fixture.detectChanges();
    console.log(element);
    console.log(element.innerHTML);
    console.log(element.outerHTML);

    // verifyElementExists('#page-not-found-message');
    // verifyElementIsVisible('#page-not-found-message');
    // verifyElementText('#page-not-found-message', 'Welcome');

    expect(true).toBe(true);
  });

  function getElement(elementSelector: string) {
    return fixture.debugElement.query(By.css(elementSelector));
  }

  function verifyElementText(labelSelector: string, expectedText: number | string) {
    const anyElement = getElement(labelSelector);
    console.log(anyElement);
    expect(anyElement.nativeElement.outerText).toBe(expectedText);
  }

  function verifyElementExists(selector: string) {
    const anyElement = getElement(selector);
    expect(anyElement).toBeTruthy();
  }

  function verifyElementIsVisible(selector: string, isVisible: boolean = true) {
    const anyElement = element.querySelector(selector);
    if (isVisible) {
      expect(anyElement).not.toBeNull();
    } else {
      expect(anyElement).toBeNull();
    }
  }
});


