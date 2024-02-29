const express = require('express');
const routes = require('./api/routes/test');
const routes2 = require('./api/routes/test2');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);
app.use(routes2);


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});