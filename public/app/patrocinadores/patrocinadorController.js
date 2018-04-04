(function(){
	'use strict';

	angular
		.module('gdgAdmin')
		.controller('patrocinadorController',patrocinadorController)

	patrocinadorController.$inject = ['$scope', 'dataService']
	
	function patrocinadorController($scope, dataService){
		var vm = this;
        vm.patrocinadores = [];
        vm.table_name = 'patrocinador';
        activate();

        function getPatrocinadores() {
            return dataService.getEntityAll(vm.table_name)
            .then(function (result) {
                return result;
			});
		}
		
		vm.deletePatrocinadores = function (id) {
            return dataService.deleteEntity(vm.table_name, id)
            .then(function (result) {
                activate();
			});
        }

        function activate() {
            getPatrocinadores()
            .then(function (result) {
                vm.patrocinadores = result;
			});
        }





				
			// swal({
			// 	title: "Estás seguro ?",
			// 	text: "Una vez eliminado, no puede ser recuperado",
			// 	icon: "warning",
			// 	buttons: true,
			// 	dangerMode: true,
			// })
			// 	.then((isConfirm) => {
			// 		if(isConfirm) {
			// 			dataService.deletePatrocinador(id)
			// 				.then(function (result) {
			// 					console.log(result)
			// 					$state.go($state.current, {}, {reload:true})
			// 				})
			// 				.catch(function(error) {
			// 					console.log(error)
			// 				})
			// 		} else {

			// 		}
			// 	})

			
		
	}
}())