/* Genre model */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {type: String, max: 100}
    }
);

// // Virtual for genre's name
// GenreSchema
// .virtual('name')
// .get(function () {
//     return this.name;
// });

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
    return '/catalog/genre/' + this._id;
});

//Export model
module.export = mongoose.model('Genre', GenreSchema);