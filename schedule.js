const cron = require('node-cron');

cron.schedule('* * * * *', function () {
    console.log('running a task every minute');
});

cron.schedule('* * 9 * *', function () {
    console.log('running a task on 9th of every month');
});

cron.schedule('* * * * Wednesday', function () {
    console.log('running a task on every wednesday');
});

const param = '59 23 * * *';
if (cron.validate(param)) {
    cron.schedule(param, function () {
        console.log('Happy birthday friend');
    });
}

module.exports = cron;