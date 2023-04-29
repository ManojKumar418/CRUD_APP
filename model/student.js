const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  roll: {
    type: String,
    required: [true, 'Roll field is required']
  },
  present: {
    type: Boolean,
    default: true
  }

});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
