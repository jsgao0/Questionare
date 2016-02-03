(function() {
    function q1() {
        /**
          extensions is an Array and each item has such format:
          {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
          lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
        **/

        /**
          Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
        **/
        this.sortExtensionsByName = function(extensions) {
            if(!Array.isArray(extensions)) throw 'The input is not an array.';
            var firstNameList = extensions.map(function(e) {
              return e.firstName;
            }).sort();
            var lastNameList = extensions.map(function(e) {
              return e.lastName;
            }).sort();
            return extensions.sort(function(left, right) {
              if(left.firstName !== right.firstName) return firstNameList.indexOf(left.firstName) - firstNameList.indexOf(right.firstName);
              if(left.lastName !== right.lastName) return lastNameList.indexOf(left.lastName) - lastNameList.indexOf(right.lastName);
              return left.ext - right.ext;
            });
        };


        /**
          Question 2: sort extensions by extType follow these orders ASC
          DigitalUser < VitrualUser < FaxUser < AO < Dept.
        **/
        this.sortExtensionsByExtType = function(extensions) {
        };


        /**
          saleItems is an Array has each item has such format:
          {
        	month: n, //[1-12],
        	date: n, //[1-31],
        	transationId: "xxx",
        	salePrice: number
          }
        **/

        /**
          Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
          [
          	{quater: 1, totalPrices: xxx, transactionNums: n},
          	{....}
          ]
        **/

        this.sumByQuater = function(saleItems) {

        };

        /**
          Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
          [
            {quater: 1, averagePrices: xxx, transactionNums: n},
            {....}
          ]
        **/

        this.averageByQuater = function(saleItems) {

        };


        /**
          Question 5: please create a tool to generate Sequence
          Expected to be used like:
          var sequence1 = new Sequence();
          sequence1.next() --> return 1;
          sequence1.next() --> return 2;

          in another module:
          var sequence2 = new Sequence();
          sequence2.next() --> 3;
          sequence2.next() --> 4;
        **/




        /**
            Question 6:
            AllKeys: 0-9;
            usedKeys: an array to store all used keys like [2,3,4];
            We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
        **/

        this.getUnUsedKeys = function(allKeys, usedKeys) {
        	//TODO
        };
    }

    module.exports = q1;
})();
