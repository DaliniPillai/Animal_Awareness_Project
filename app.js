//setting up the dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

//importing routes
const animalsRoutes = require('./routes/animalsRoutes');

//setting up port

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);

});
//setting up views 
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//setting up static file
app.use('/static', express.static(path.join(__dirname, 'public')));

//setting up logger 
app.use(logger('dev'));

//setting up body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// setting up routes
app.get('/', function(req,res) {
  res.render('index', {
    message: 'Animal Awareness',
    documentTitle: 'Animal Awareness',
    showMore: true,
  });
});
app.use('/animals', animalsRoutes);

/*importing the petFinderHelper function for the search view */
//const petFinderHelpers = require('./services/petFinder/petFinderHelpers'); 
/*animal and stories routes route*/




/* handling 404 */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});