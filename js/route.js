(function(){
	'use strict';

	angular
		.module('gdgAdmin')
		.config(routeConfig)

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider']
	
	function routeConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home')
		
		$stateProvider
			.state('patrocinador', {url: '/patrocinador', templateUrl: 'patrocinador.html', controller: 'patrocinadorController'})
			.state('patrocinador-form', {url: '/patrocinador-form', templateUrl: 'patrocinador-form.html', controller: 'patrocinadorFormController'})
			.state('patrocinador-edit', {url: '/patrocinador-form/:id', templateUrl: 'patrocinador-form.html', controller: 'patrocinadorEditController'})

	}
}())