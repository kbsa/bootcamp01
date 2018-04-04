(function(){
	'use strict';

	angular
		.module('gdgAdmin')
		.controller('patrocinadorFormController',patrocinadorFormController)

	patrocinadorFormController.$inject = ['$scope', '$state', '$stateParams', 'dataService']
	
	function patrocinadorFormController($scope, $state, $stateParams, dataService){
		var vm = this;
        vm.patrocinador = {};
        vm.table_name = 'patrocinador';
        activate();
        
        vm.submitPatrocinador = function () {
            if ($state.current.name == 'patrocinador-form') {
                return dataService.saveEntity(vm.table_name, vm.patrocinador)
                    .then(function (result) {
                        $state.go('patrocinador');
					})
					.catch(function(error) {
						console.log(error)
					});
            } else {
                return dataService.updateEntity(vm.table_name, vm.patrocinador)
                    .then(function (result) {
                        $state.go('patrocinador');
                    });
            } 
		}
		
		function activate() {
            if ($state.current.name == 'patrocinador-edit') {
                getPatrocinadorById()
                .then(function(patrocinador) {
                    vm.patrocinador = patrocinador;
				})
				.catch(function(error) {
					console.log(error)
				});
			}
		}
	}
})()