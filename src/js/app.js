var clinicApp = angular.module('clinicApp', ['ngRoute']);

clinicApp.run(function runWithDependencies($rootScope) {
	$rootScope._ = _;
	$rootScope.moment = moment;
});
