'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const shopsRoutes = require('./routes/shops-routes');

const commentsRoutes = require('./routes/comment-routes');
const storeRoutes = require('./routes/store-routes');
const productRoutes = require('./routes/product-routes');

const eventRoutes = require('./routes/event-routes');
const clientRoutes = require('./routes/client-routes');
const authenticationRoutes = require('./routes/authentication-routes');




const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',shopsRoutes.routes);
app.use('/api',commentsRoutes.routes);
app.use('/api',storeRoutes.routes);
app.use('/api',eventRoutes.routes);
app.use('/api',clientRoutes.routes);
app.use('/api',authenticationRoutes.routes);
app.use('/api',productRoutes.routes);





app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
