(function(){
	'use strict';

	angular
		.module('gdgAdmin')
		.service('dataService', dataService)

	dataService.$inject = ['$http']
	
	function dataService($http){
		this.getData = getData
		this.save = save
		this.getEventById = getEventById
		this.update = update
		this.deletePatrocinador = deletePatrocinador

		function getData(){
			return $http.get('http://localhost:3000/patrocinador')
				.then(function(result){
					// console.log(result.data)
					return result.data
				})
				.catch(function (error){
					console.log(error)
				})
		}

		function save(data) {
			return $http.post('http://localhost:3000/patrocinador', data)
		}


		function getEventById(id) {
			return $http.get('http://localhost:3000/patrocinador/' + id)
		}

		function update(data) {
			return $http.put('http://localhost:3000/patrocinador/' +data.id, data)

		}

		function deletePatrocinador(id) {
			return $http.delete('http://localhost:3000/patrocinador/' + id)
		}
	}
})()