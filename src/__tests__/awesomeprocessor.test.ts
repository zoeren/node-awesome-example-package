import {AwesomeProcessor} from "../index";


test('should create awesome thing', () => {
    expect(AwesomeProcessor.createAwesomeThing('Awesomo-2000', 'Some shitty text'))
        .toBeDefined();
});
