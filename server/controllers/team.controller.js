const { Team } = require('../models/team.model');

module.exports.createTeam = (req, res) => {
    const { name, position, game1, game2, game3 } = req.body;
    Team.create({
        name,
        position,
        status: {
            game1,
            game2,
            game3}
    })
        .then(team => res.json(team))
        .catch(err => res.status(500).json(err));
}

module.exports.getTeam = (req, res) => {
    Team.findOne({_id: req.params.id})
        .then(team => res.json(team))
        .catch(err => res.json(err));
}

module.exports.getAllTeam = (req, res) => {
    Team.find({})
        .then(team => res.json(team))
        .catch(err => res.json(err));
}

module.exports.updateTeam = (req, res) => {
    Team.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
        .then(updatedTeam => res.json(updatedTeam))
        .catch(err => res.status(500).json(err));
}

module.exports.deleteTeam = (req, res) => {
    Team.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}