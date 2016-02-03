(function() {
    "use strict";
    var assert = require('assert');
    var question = require('../index');
    var q1 = new question().qlist[0];
    describe('sortExtensionsByName', function() {
        var originalData = [
            {firstName: 'Mark', lastName: 'Lee', ext: '22122', extType: 'DigitalUser'},
            {firstName: 'Anson', lastName: 'Gao', ext: '41232', extType: 'DigitalUser'},
            {firstName: 'Anson', lastName: 'Chen', ext: '51232', extType: 'DigitalUser'},
            {firstName: 'John', lastName: 'Ai', ext: '32100', extType: 'DigitalUser'},
            {firstName: 'John', lastName: 'Ai', ext: '12100', extType: 'Dept'}
        ];
        var expectedData = [
            {firstName: 'Anson', lastName: 'Chen', ext: '51232', extType: 'DigitalUser'},
            {firstName: 'Anson', lastName: 'Gao', ext: '41232', extType: 'DigitalUser'},
            {firstName: 'John', lastName: 'Ai', ext: '12100', extType: 'Dept'},
            {firstName: 'John', lastName: 'Ai', ext: '32100', extType: 'DigitalUser'},
            {firstName: 'Mark', lastName: 'Lee', ext: '22122', extType: 'DigitalUser'}
        ];
        it('', function() {
            assert.deepEqual(expectedData, q1.sortExtensionsByName(originalData));
        });
    });
})();
