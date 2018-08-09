/* BookInstance model */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
  }
);

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);

/*────────────────────────────────────────────────────────────────────────
|   enum: This allows us to set the allowed values of a string. 
|   - used here to specify the availability status of books
|   - prevents mis-spellings/arbitrary values for status
──────────────────────────────────────────────────────────────────────────
|   default: sets the default status for newly created instances
|   - used here to set default status of bookinstances to maintenance 
|     and the default due_back date to now 
──────────────────────────────────────────────────────────────────────────
|   (note how you can call the Date function when setting the date)
──────────────────────────────────────────────────────────────────────────*/