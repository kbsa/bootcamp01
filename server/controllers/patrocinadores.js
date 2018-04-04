var patrocinador = require('../models').patrocinadores

module.exports = {
	//Lista de eventos
	index(request, response) {

		patrocinador.findAll()
		.then(function(patrocinador) {
			response.status(200).json(patrocinador)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	},
	//retornar un evento
	show(request, response) {
		patrocinador.findById(request.params.id,{})
		.then(function(patrocinador) {
			response.status(200).json(patrocinador)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	},

	create(request, response) {
		patrocinador.create(request.body)
		.then(function(patrocinador) {
			response.status(200).json(patrocinador)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	},

	update(request, response) {
		patrocinador.update(request.body, {
			where: {
				id: request.params.id
			}
		})
		.then(function(patrocinador) {
			response.status(200).json(patrocinador)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	},

	delete(request, response) {
		patrocinador.destroy({
			where: {
				id: request.params.id
			}
		})
		.then(function(patrocinador) {
			response.status(200).json(patrocinador)
		})
		.catch(function(error) {
			response.status(500).json(error)
		})
	}
}