const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('the arrays are the same items', () => {
        expect(shuffleArray).toMatchObject(shuffleArray);
})

    test('shuffleArray should return an array', () => {
        expect(shuffleArray.isArray(['value'])).toBe(true);
})

})