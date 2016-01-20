describe('Employee', function() {
    var Employee = require('../lib/employee.js');

    it('has a salary of $800,00', function() {
        var employee = new Employee;
        expect(employee.salary()).toBe(800);
    });
});
