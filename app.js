const express = require('express');
const { sequelize } = require('./models');
const app = express();
const path = require('path');
const user = require('./routes/userRoute');
const series = require('./routes/seriesRoute');
app.use('/admin', user);
app.use('/admin', series);

app.get('/', (req, res) => {

    res.send('test');
});

app.listen({ port: 80 }, async () => {
    await sequelize.authenticate();
});