import express from "express";
import axios from 'axios';

const router = express.Router();

//* @route GET api/pokemon 
//* @desc Listado de los pokemon alfabéticamente
//* @access Público

router.get('/', async (req,res) => { 
    try {
        console.log(req.url)
        console.log(req.query)
        let pokemons;
        if(!req.query.limit){
            pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
            
        }else{
            pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon${req.url}`);
        } 
        pokemons = pokemons.data.results.map( item => item.name);
        pokemons.sort();
        res.json(pokemons);
    } catch (error) {
        console.log('error fetching pokemons', error.message)
        res.status(400).json({error: 'no se puede traer los pokemon'})
    }
})

export default router;