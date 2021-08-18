const express = require("express");
const userRouter = require('./userRouter');
const bd = require('./bdConfig.js')



const app = express();
app.use(express.json()); 
const usuario = [];
const port = process.env.port || "8000";


app.use('/', userRouter);
  



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
 
