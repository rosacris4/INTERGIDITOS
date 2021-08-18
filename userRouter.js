const express = require("express");
const router = express.Router();

const usuario = [];


router.post('/user', function(req, res) {
    
        const { nome } = req.body; 
        geeks.push(nome);
        const { email } = req.body; 
        geeks.push(email);
        const { contato } = req.body; 
        geeks.push(contato);

        return res.json(usuario);
});

router.get('/users', function(req, res) {
    return res.json(usuario);
    
});
module.exports = router;