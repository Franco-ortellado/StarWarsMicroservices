module.exports = (req, res, next) => {
	const {model} = req.params;

	// Si la solicitud es para favicon.ico, simplemente ignórala
	if (req.url.includes('favicon.ico')) {
		return res.status(204).end(); // Responde con un código 204 (No Content) sin cuerpo de respuesta
	}

	if (['Character', 'Film', 'Planet'].includes(model)) {
		return next();
	} else {
		throw new Error('Invalid Model: ' + model);
	}
};
