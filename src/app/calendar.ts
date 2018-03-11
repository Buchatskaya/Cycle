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


  get monthStart0(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET, 1);
  }

  get monthStart1(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 1, 1);
  }

  get monthStart2(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 2, 1);
  }

  get monthStart3(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 3, 1);
  }

  get monthStart4(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 4, 1);
  }

  get monthStart5(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 5, 1);
  }

  get monthStart6(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 6, 1);
  }

  get monthStart7(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 7, 1);
  }

  get monthStart8(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 8, 1);
  }

  get monthStart9(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 9, 1);
  }

  get monthStart10(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 10, 1);
  }

  get monthStart11(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 11, 1);
  }

  get monthEnd0(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 1, 0);
  }

  get monthEnd1(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 2, 0);
  }

  get monthEnd2(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 3, 0);
  }

  get monthEnd3(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 4, 0);
  }

  get monthEnd4(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 5, 0);
  }

  get monthEnd5(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 6, 0);
  }

  get monthEnd6(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 7, 0);
  }

  get monthEnd7(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 8, 0);
  }

  get monthEnd8(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 9, 0);
  }

  get monthEnd9(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 10, 0);
  }

  get monthEnd10(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 11, 0);
  }

  get monthEnd11(): Date {
    return new Date(this.currentYear, this.currentMonth - this.OFFSET + 12, 0);
  }

  get month(): Date|null {
    return null;
  }

  set month(value: Date) {
    this.currentDate = value;
  }


}
