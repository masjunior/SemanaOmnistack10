const {Router} = require ('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.post('/devs', DevController.store);

routes.get('/devs',DevController.index);
routes.get('/search', SearchController.index);


routes.delete('/devs/:id', (request, response) =>{
    console.log(request.params);
    return response.json({message:'Hello World DELETE'});
});

routes.put('/devs/:id', (request, response) =>{
    console.log(request.params);
    return response.json({message:'Hello World PUT'});
});


module.exports = routes;