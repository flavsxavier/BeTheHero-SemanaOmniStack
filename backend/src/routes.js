const express = require('express');

// Controllers
const SectionController = require('./controllers/SectionController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/IncidentController');
const IncidentController = require('./controllers/IncidentController');

// Routes
const routes = express();

routes.post('/login', SectionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
