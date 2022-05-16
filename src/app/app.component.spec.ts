import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component Initiated', () => {
    expect(app).toBeTruthy();
  });

  it("should return zero when '' is passed", () => {
    expect(app.add('')).toEqual(0);
  });

  it('should return the number itself when a single number is passed', function () {
    expect(app.add('1')).toEqual(1);
  });

  it('should return the sum of the numbers if two are given', function () {
    expect(app.add('1,2')).toEqual(3);
  });

  it('should return the sum of the numbers if more than two are given', function () {
    expect(app.add('1,2,3')).toEqual(6);
  });

  it('should return the sum of an unknown amount of numbers', function () {
    let array = (len: number, maximum: number) =>
      [...new Array(len)].map(() => Math.round(Math.random() * maximum));

    let random_number = Math.floor(Math.random() * 100 + 1);
    let result = array(random_number, random_number);

    let sum = result.reduce((a, b) => a + b, 0);

    let argument = result.join();
    expect(app.add(argument)).toEqual(sum);
  });

  it('should allow \\n in between the input number string', function () {
    expect(app.add('1\n2,3')).toEqual(6);
  });

  it('should not allow negative numbers', function () {
    expect(() => {
      app.add('-1,2.3');
    }).toThrow(new Error('Negatives not allowed!'));
  });
});
