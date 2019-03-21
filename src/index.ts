import { AwesomeThing } from './awesomething';
import { IAwesomeThing } from './awesomething.interface';

export class AwesomeProcessor {
  public static createAwesomeThing(name: string, value: string | number): IAwesomeThing {
    return new AwesomeThing(name, value, Math.floor(Math.random() * 10) + 1);
  }
}
