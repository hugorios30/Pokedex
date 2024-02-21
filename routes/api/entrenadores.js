import express from "express";
import Entrenador from "../../models/Entrenador.js";

const router = express.Router();

//* @route GET api/entrenadores
//* @desc obtener todos los entrenadores
//* @access Público

router.get('/', async (req, res) => {
    try {
        const entrenadores = await Entrenador.find()
        console.log(entrenadores);
        return res.json(entrenadores);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({entrenadoresNoEncontrados: 'No se encontraron entrenadores'})
    } 
})

//* @route POST api/entrenadores
//* @desc agregar un nuevo entrenador
//* @access Público

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const entrenador = await Entrenador.create(req.body)
        return res.json({msg: 'Entrenador agregado exitosamente'});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({err: 'No se pudo agregar el entrenador'})
    } 
})

//* @route PUT api/entrenadores/:id
//* @desc editar un entrenador por id
//* @access Público

router.put('/:id', async (req, res) => {
    try {
        console.log(req.params.id, req.body);
        const entrenador = await Entrenador.findByIdAndUpdate(req.params.id, req.body)
        return res.json({msg: 'Entrenador editado exitosamente'});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({err: 'No se pudo editar el entrenador'})
    } 
})
//* @route DELETE api/entrenadores/:id
//* @desc eliminar un entrenador por id
//* @access Público

router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const entrenador = await Entrenador.findByIdAndDelete(req.params.id)
        return res.json({msg: 'Entrenador eliminado exitosamente'});
    } catch (error) {
        console.log(error.message);
        res.status(404).json({err: 'No se pudo eliminar el entrenador o no se encontró'})
    } 
})

export default router;


