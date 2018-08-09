/* Author model */
// The scheme defines an author has having String SchemaTypes 
// for the first and family names, that are required (max 100 chars) 
// and Date fields for the date of birth and death.

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);

/* 
Note:
──────────────────────────────────────────────────────────────────────────
|  Declaring our URLs as a virtual in the schema is a good idea because  |
|  then the URL for an item only ever needs to be changed in one place.  |
|─────────────────────────────────────────────────────────────────────────
|  At this point a link using this URL wouldn't work, because we         |
|  haven't got any routes handling code for individual model instances.  |
──────────────────────────────────────────────────────────────────────────
*/