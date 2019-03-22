"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AwesomeCalculator = /** @class */ (function () {
    function AwesomeCalculator() {
    }
    AwesomeCalculator.calculate = function (term) {
        term = term.trim();
        if (!this.regexTerm.test(term)) {
            throw new Error('invalid term');
        }
        // tslint:disable-next-line:no-eval
        var result = eval(term);
        return result;
    };
    AwesomeCalculator.regexTerm = /^(\d|\+|\-|\*|\/|\.){3,}$/;
    return AwesomeCalculator;
}());
exports.AwesomeCalculator = AwesomeCalculator;
