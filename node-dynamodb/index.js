const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.use('/api/members', require('./routes/api/members'))

app.listen(port,()=>{
    console.log(`port is listening at ${port}`);
})
