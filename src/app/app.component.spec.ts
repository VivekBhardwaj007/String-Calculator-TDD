import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // START : configuration of test scripts
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });
  // END : configuration of test scripts

  // START : running before every test script
  beforeEach(() => {
    // TestBed is main utility which will use for configuration
    fixture = TestBed.createComponent(AppComponent);

    // Getting instance of component
    app = fixture.componentInstance;

    // Detecting changes
    fixture.detectChanges();
  });
  // END : running before every test script

  // START : chekcing Component Initiated or not
  it('Component Initiated', () => {
    expect(app).toBeTruthy();
  });
  // END : chekcing Component Initiated or not

  // START : New group of test scripts
  // Basic functionalities here
  describe('Basic Functionality', () => {
    // START : passing blank string
    it("should return zero when '' is passed", () => {
      expect(app.add('')).toEqual(0);
    });
    // END : passing blank string

    // START : Passing only single number string
    it('should return the number itself when a single number is passed', function () {
      expect(app.add('1')).toEqual(1);
    });
    // START : Passing only single string

    // START : Passing 2 number string
    it('should return the sum of the numbers if two are given', function () {
      expect(app.add('1,2')).toEqual(3);
    });
    // END : Passing 2 number string

    // START : Paasing more than 2 number string
    it('should return the sum of the numbers if more than two are given', function () {
      expect(app.add('1,2,3')).toEqual(6);
    });
    // END : Paasing more than 2 number string
  });
  // END : New group of test scripts

  // START : New group of test scripts
  // Unknow AMount of Number - dynamic
  describe('Unknow Amount OF Number', () => {
    it('should return the sum of an unknown amount of numbers', function () {
      // Function declaration
      // Accpt 2 params 1. length, 2. maximum number
      let array = (len: number, maximum: number) =>
        [...new Array(len)].map(() => Math.round(Math.random() * maximum));

      // Generating radom number and passing into arrray function
      let result = array(
        Math.floor(Math.random() * 100 + 1),
        Math.floor(Math.random() * 100 + 1)
      );

      // Getting sum of every number
      let sum = result.reduce((a, b) => a + b, 0);

      // Converting array into string
      let argument = result.join();

      // Checking Values
      // If expectation matched with result then passed.
      expect(app.add(argument)).toEqual(sum);
    });
  });
  // END : New group of test scripts

  // START : New group of test scripts
  // Complex seperator added in string
  describe('Complex Delimiters', () => {
    // START : Passing value with 'enter' instead of comma
    it('should allow \\n in between the input number string', function () {
      expect(app.add('1\n2,3')).toEqual(6);
    });
    // END : Passing value with 'enter' instead of comma

    // START : Checking string with sperator
    it('should allow //;\n in between the input string', function () {
      expect(app.add('//;\n1;2')).toEqual(3);
    });
    // END : Checking string with sperator

    // START : Checking string with more complex sperator
    it('#add should allow multiple, arbitrary length user-defined separators', function () {
      expect(app.add('//[*][%]\n1*2%3')).toBe(6);
    });
    // END : Checking string with more complex sperator
  });
  // END : New group of test scripts

  // START : New group of test scripts
  // Handle Invalid Inputs
  describe('Handle Invalid Inputs', () => {
    // START : Passing negative numbers in string
    it('should not allow negative numbers', function () {
      expect(() => {
        app.add('-1,2.3');
      }).toThrow(new Error('Negatives not allowed!'));
    });
    // END : Passing negative numbers in string
  });
  // END : New group of test scripts
});
