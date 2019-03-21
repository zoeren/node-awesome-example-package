import { IAwesomeThing } from './awesomething.interface';

export class AwesomeThing implements IAwesomeThing {
  private pName: string;
  private pValue: string | number;
  private pAwesomeness: number;

  constructor(name: string, value: string | number, awesomeness: number) {
    this.pName = name;
    this.pValue = value;
    this.pAwesomeness = awesomeness;
  }

  public set name(value: string) {
    this.pName = value;
  }

  public get name(): string {
    return this.pName;
  }

  public set value(value: string | number) {
    this.pValue = value;
  }

  public get value(): string | number {
    return this.pValue;
  }

  public set awesomeness(value: number) {
    this.pAwesomeness = value;
  }

  public get awesomeness(): number {
    return this.pAwesomeness;
  }
}
