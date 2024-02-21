import mongoose from "mongoose";

const EntrenadorSchema = new mongoose.Schema({
    Nombre:{
        type: String,
        required: true
    },
    Apellidos:{
        type: String,
        required: true
    },
    Telefono:{
        type: String,
        required: true
    },
    Medallas:{
        type: Number,
        required: true
    },
    
})

const Entrenador = mongoose.model('Entrenador', EntrenadorSchema);
export default Entrenador;