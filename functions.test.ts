const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('the arrays are the same items', () => {

        let arr = [1, 2, 3, 4]
        let results = shuffleArray(arr)
        let myVar = true

        for(let i = 0; i < results.length; i++) {
            if(arr.includes(results[i]) === false) {
                myVar = false
                return 
            }


        expect(myVar).toBe(true);
}

    test('shuffleArray should return an array', () => {
        expect(shuffleArray.isArray(['value'])).toBe(true);
})

})
})