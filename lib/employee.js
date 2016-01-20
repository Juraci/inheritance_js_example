function Employee() {
    this.bonus = 0;
}

Employee.prototype.salary = function() {
    return 800 + this.bonus;
};

module.exports = Employee;
