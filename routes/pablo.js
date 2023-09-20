var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello, this is a GET response from Pablo.');
});

router.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'small'
    })
})

router.post('/tshirt/:id', (req, res) => {
    
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!!'})
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});

module.exports = router;
