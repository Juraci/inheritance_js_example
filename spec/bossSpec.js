describe('Boss', function() {
    var Boss = require('../lib/boss.js');

    it('has salary of $1000,00', function() {
        var boss = new Boss;
        expect(boss.salary()).toBe(1000);
    });
});
