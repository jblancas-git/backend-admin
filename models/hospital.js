var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hospitalSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es un valor requerido!']},
    img: { type: String, required: false},
    usuario: {type: Schema.Types.ObjectId, ref: 'Usuario'},
    date_new: {type: Date, default: Date.now},
    date_upd: {type: Date, required: false, default: null}
}, { collection: 'hospitales'});

module.exports = mongoose.model('Hospital', hospitalSchema);
