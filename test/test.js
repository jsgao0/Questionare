(function() {
    "use strict";
    var assert = require('assert');
    var question = require('../index');
    var q1 = new question().qlist[0];
    describe('q1 tests', function() {
        var originalData = {
            extensions: [
                {firstName: 'Mark', lastName: 'Lee', ext: '22122', extType: 'AO'},
                {firstName: 'Anson', lastName: 'Gao', ext: '41232', extType: 'DigitalUser'},
                {firstName: 'Anson', lastName: 'Chen', ext: '51232', extType: 'FaxUser'},
                {firstName: 'John', lastName: 'Ai', ext: '32100', extType: 'VitrualUser'},
                {firstName: 'John', lastName: 'Ai', ext: '12100', extType: 'Dept'}
            ],
            saleItems: [
                {month: 1, date: 2, transationId: "xxx", salePrice: 2},
                {month: 1, date: 3, transationId: "xxx", salePrice: 2},
                {month: 1, date: 5, transationId: "xxx", salePrice: 2},
                {month: 1, date: 12, transationId: "xxx", salePrice: 2},
                {month: 1, date: 25, transationId: "xxx", salePrice: 2},
                {month: 2, date: 2, transationId: "xxx", salePrice: 2},
                {month: 2, date: 2, transationId: "xxx", salePrice: 2},
                {month: 3, date: 2, transationId: "xxx", salePrice: 2},
                {month: 4, date: 2, transationId: "xxx", salePrice: 1},
                {month: 5, date: 2, transationId: "xxx", salePrice: 1},
                {month: 5, date: 2, transationId: "xxx", salePrice: 1},
                {month: 5, date: 2, transationId: "xxx", salePrice: 1},
                {month: 6, date: 2, transationId: "xxx", salePrice: 1},
                {month: 6, date: 2, transationId: "xxx", salePrice: 1},
                {month: 7, date: 2, transationId: "xxx", salePrice: 1},
                {month: 7, date: 2, transationId: "xxx", salePrice: 1},
                {month: 7, date: 2, transationId: "xxx", salePrice: 1},
                {month: 8, date: 2, transationId: "xxx", salePrice: 1},
                {month: 9, date: 2, transationId: "xxx", salePrice: 1},
                {month: 10, date: 2, transationId: "xxx", salePrice: 1},
                {month: 11, date: 2, transationId: "xxx", salePrice: 1},
                {month: 11, date: 2, transationId: "xxx", salePrice: 1},
                {month: 11, date: 2, transationId: "xxx", salePrice: 1},
                {month: 11, date: 2, transationId: "xxx", salePrice: 1},
                {month: 12, date: 2, transationId: "xxx", salePrice: 1},
                {month: 12, date: 2, transationId: "xxx", salePrice: 1}
            ],
            keys: {
                allKeys: [0,1,2,3,4,5,6,7,8,9],
                usedKeys: [2,3,4]
            }
        };



        it('sortExtensionsByName', function() {
            var expectedData = [
                {firstName: 'Anson', lastName: 'Chen', ext: '51232', extType: 'FaxUser'},
                {firstName: 'Anson', lastName: 'Gao', ext: '41232', extType: 'DigitalUser'},
                {firstName: 'John', lastName: 'Ai', ext: '12100', extType: 'Dept'},
                {firstName: 'John', lastName: 'Ai', ext: '32100', extType: 'VitrualUser'},
                {firstName: 'Mark', lastName: 'Lee', ext: '22122', extType: 'AO'}
            ];
            assert.deepEqual(expectedData, q1.sortExtensionsByName(originalData.extensions));
        });
        it('sortExtensionsByExtType', function() {
            var expectedData = [
                {firstName: 'Anson', lastName: 'Gao', ext: '41232', extType: 'DigitalUser'},
                {firstName: 'John', lastName: 'Ai', ext: '32100', extType: 'VitrualUser'},
                {firstName: 'Anson', lastName: 'Chen', ext: '51232', extType: 'FaxUser'},
                {firstName: 'Mark', lastName: 'Lee', ext: '22122', extType: 'AO'},
                {firstName: 'John', lastName: 'Ai', ext: '12100', extType: 'Dept'}
            ];
            assert.deepEqual(expectedData, q1.sortExtensionsByExtType(originalData.extensions));
        });
        it('sumByQuater', function() {
            var expectedData = [
                {quater: 1, totalPrices: 16, transactionNums: 8},
                {quater: 2, totalPrices: 6, transactionNums: 6},
                {quater: 3, totalPrices: 5, transactionNums: 5},
                {quater: 4, totalPrices: 7, transactionNums: 7}
            ];
            assert.deepEqual(expectedData, q1.sumByQuater(originalData.saleItems));
        });
        it('averageByQuater', function() {
            var expectedData = [
                {quater: 1, averagePrices: 2, transactionNums: 8},
                {quater: 2, averagePrices: 1, transactionNums: 6},
                {quater: 3, averagePrices: 1, transactionNums: 5},
                {quater: 4, averagePrices: 1, transactionNums: 7}
            ];
            assert.deepEqual(expectedData, q1.averageByQuater(originalData.saleItems));
        });
        it('getUnUsedKeys', function() {
            var expectedData = [0,1,5,6,7,8,9];
            assert.deepEqual(expectedData, q1.getUnUsedKeys(originalData.keys.allKeys, originalData.keys.usedKeys));
        });
    });
})();
