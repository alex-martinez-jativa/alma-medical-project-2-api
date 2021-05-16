const PORT = 3001;
const fs = require('fs');
const data = fs.readFileSync('./data/boat_ramps.geojson.json');
   
const rampsData = JSON.parse(data);
const express = require("express");
const app = express();
   
const cors=require('cors');
    
app.listen(PORT, 
    () => console.log(`Server Starts on port ${PORT}`));
    
app.use(express.static('public'));
app.use(cors());
  
app.get('/ramps', alldata);
   
function alldata(req, res) {
    res.send(rampsData);
}
  