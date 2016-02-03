(function() {
    "use strict";
    var assert = require('assert');
    var question = require('../index');
    var q1 = new question().qlist[0];
    describe('q1 tests', function() {
        var originalData = [
            {firstName: 'Mark', lastName: 'Lee', ext: '22122', extType: 'AO'},
            {firstName: 'Anson', lastName: 'Gao', ext: '41232', extType: 'DigitalUser'},
            {firstName: 'Anson', lastName: 'Chen', ext: '51232', extType: 'FaxUser'},
            {firstName: 'John', lastName: 'Ai', ext: '32100', extType: 'VitrualUser'},
            {firstName: 'John', lastName: 'Ai', ext: '12100', extType: 'Dept'}
        ];
        it('sortExtensionsByName', function() {
            var expectedData = [
                {firstName: 'Anson', lastName: 'Chen', ext: '51232', extType: 'FaxUser'},
                {firstName: 'Anson', lastName: 'Gao', ext: '41232', extType: 'DigitalUser'},
                {firstName: 'John', lastName: 'Ai', ext: '12100', extType: 'Dept'},
                {firstName: 'John', lastName: 'Ai', ext: '32100', extType: 'VitrualUser'},
                {firstName: 'Mark', lastName: 'Lee', ext: '22122', extType: 'AO'}
            ];
            assert.deepEqual(expectedData, q1.sortExtensionsByName(originalData));
        });
        it('sortExtensionsByExtType', function() {
            var expectedData = [
                {firstName: 'Anson', lastName: 'Gao', ext: '41232', extType: 'DigitalUser'},
                {firstName: 'John', lastName: 'Ai', ext: '32100', extType: 'VitrualUser'},
                {firstName: 'Anson', lastName: 'Chen', ext: '51232', extType: 'FaxUser'},
                {firstName: 'Mark', lastName: 'Lee', ext: '22122', extType: 'AO'},
                {firstName: 'John', lastName: 'Ai', ext: '12100', extType: 'Dept'}
            ];
            assert.deepEqual(expectedData, q1.sortExtensionsByExtType(originalData));
        });
    });
})();
