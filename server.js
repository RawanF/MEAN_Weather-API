const express = require("express");
const app = express();
app.use(express.static( __dirname + '/public/dist/public' ));
// app.get('/', (req, res) => {
//     CityName = req.body.CityName;
//     app.get('https://samples.openweathermap.org/data/2.5/weather?q='+CityName+',uk&appid=b6907d289e10d714a6e88b30761fae22', (requ, resp) => {
//     })
//     .then(data => resp.json(data))
//     .catch(err => resp.json(err));
// });
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(8000, () => console.log("listening on port 8000")); 