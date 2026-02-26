const calulatorApi = require('./calculatorapi');
jest.spyOn(calulatorApi, 'getNumberFromAPI').mockReturnValue(42);

    test('calculateTotal should return 52 when getNumberFromAPI is mocked to return 42', () => {
        const total = calulatorApi.calculateTotal();
        expect(total).toBe(52);
    });
