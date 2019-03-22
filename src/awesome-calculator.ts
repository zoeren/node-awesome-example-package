export class AwesomeCalculator {
  public static calculate(term: string): number {
    term = term.trim();
    if (!this.regexTerm.test(term)) {
      throw new Error('invalid term');
    }

    // tslint:disable-next-line:no-eval
    const result = eval(term);
    return result as number;
  }

  private static regexTerm: RegExp = /^(\d|\+|\-|\*|\/|\.){3,}$/;
}