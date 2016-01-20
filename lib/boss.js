// This two-sep inheritance is useful when you need to accomplish inheritance between custom types

var Employee = require('./employee.js');

function Boss() {
    Employee.call(this);
    this.bonus = 200;
}

Boss.prototype = Object.create(Employee.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Employee,
        writable: true
    }
});

Object.seal(Boss);

module.exports = Boss;
