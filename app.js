const express = require ('express');
const bodyParser = require ('body-parser');
const guest = require('./routes/apiRoutes');

//initialize express app 
const app = express()

app.use('/guest', guest);

//listen to port 
let PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
});