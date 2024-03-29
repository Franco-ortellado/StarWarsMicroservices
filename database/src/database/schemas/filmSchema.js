const {Schema} = require('mongoose');

filmSchema = new Schema({
	_id: String,
	title: String,
	opening_crawl: String,
	director: String,
	producer: String,
	release_date: Date,
	characters: [{type: String, ref: 'character'}],
	planets: [{type: String, ref: 'planet'}],
});

filmSchema.statics.list = async function () {
	return await this.find()
		.populate('characters', ['_id', 'name'])
		.populate('planets', ['_id', 'name']);
};

filmSchema.statics.get = async function (id) {
	return await this.findById(id)
		.populate('characters', ['_id', 'name'])
		.populate('planets', ['_id', 'name']);
};

filmSchema.statics.insert = async function (film) {
	return await this.create(film);
};

module.exports = filmSchema;
