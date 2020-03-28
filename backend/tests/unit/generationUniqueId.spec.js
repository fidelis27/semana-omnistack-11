const generationUniqueId = require('../../src/utils/generationUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generationUniqueId();
        expect(id).toHaveLength(8);

    })
})