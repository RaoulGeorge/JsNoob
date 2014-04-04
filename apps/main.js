require(['config/global'], function () {
    require(['startup/viewmodel'], function (application) {
    	console.log('1');
        new application().activate();
    });
});
