export class Calendar {
  private readonly OFFSET: number = 5;

  public currentMonth: number;
  public currentYear: number;

  public currentDate: Date;

  constructor() {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
  }

  get month0(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET, 1);
  }

  get month1(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 1, 1);
  }

  get month2(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 2, 1);
  }

  get month3(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 3, 1);
  }

  get month4(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 4, 1);
  }

  get month5(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 5, 1);
  }

  get month6(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 6, 1);
  }

  get month7(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 7, 1);
  }

  get month8(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 8, 1);
  }

  get month9(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 9, 1);
  }

  get month10(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 10, 1);
  }

  get month11(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 11, 1);
  }

  set month0(value: Date) {
    this.currentDate = value;
  }

  set month1(value: Date) {
    this.currentDate = value;
  }

  set month2(value: Date) {
    this.currentDate = value;
  }

  set month3(value: Date) {
    this.currentDate = value;
  }

  set month4(value: Date) {
    this.currentDate = value;
  }

  set month5(value: Date) {
    this.currentDate = value;
  }

  set month6(value: Date) {
    this.currentDate = value;
  }

  set month7(value: Date) {
    this.currentDate = value;
  }

  set month8(value: Date) {
    this.currentDate = value;
  }

  set month9(value: Date) {
    this.currentDate = value;
  }

  set month10(value: Date) {
    this.currentDate = value;
  }

  set month11(value: Date) {
    this.currentDate = value;
  }

}
