const Characters = require('../data');

module.exports = async (req, res) => {
	const character = await Characters.list();
	res.status(200).json(character);
};
