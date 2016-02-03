(function() {
    "use strict";
    function Question() {
        this.qlist = [];
        var q1 = require('./qs/q1');
        this.qlist.push(new q1());
    }
    module.exports = Question;
})();
