const axios = require('axios');
var players = [];

module.exports = {

    create: (req, res) => {
        let promise = axios.get('http://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Golden_state_warriors')
        promise.then(response => {
          console.log(response.data)
          players = response.data.player;
          res.status(200).send(response.data)
        }).catch(console.log)
    },
    read: (req, res) => {
        res.status(200).send(players)
            

    },
    update: (req, res) => {
        let index = req.params.index;
        let newPlayer = req.body.name;
        players[index] = newPlayer;
        res.send(players)
    },
    // complete: (req, res) => {
        
    // },
    delete: (req, res) => {
        let index = req.params.id;
        players.splice(index, 1)
        res.send(players)
    }

            

}