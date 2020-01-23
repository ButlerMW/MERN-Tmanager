const TeamController = require("../controllers/team.controller");
module.exports = function(app){
    app.post('/api/players/new', TeamController.createTeam);
    app.get('/api/players/:id', TeamController.getTeam);
    app.get('/api/players', TeamController.getAllTeam);
    app.delete('/api/players/delete/:id', TeamController.deleteTeam);
    app.put('/api/players/edit/:id', TeamController.updateTeam);
}