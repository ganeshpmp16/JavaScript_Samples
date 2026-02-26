

describe('fetchData', () => {
  test('should fetch data successfully', async () => {
    const mockResponse = { name: 'John', age: 30 };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    });

    const result = await fetchData('https://api.example.com/data');
    expect(result).toEqual(mockResponse);
  });

  test('should throw an error if response is not ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false
    });

    await expect(fetchData('https://api.example.com/data')).rejects.toThrow('Network response was not ok');
  });
});