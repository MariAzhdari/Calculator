const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

let num1 =req.body.num1;
let num2 = req.body.num2;
let result =num1+ num2;

  res.send(`The result of the calculation is  ${result} `);
});

//BMI 
app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", (req, res) => {
  let w = parseFloat(req.body.weight);
  let h = parseFloat(req.body.hight);
  let bmi = w /(Math.pow(h,2))

  res.send(`The result of the  bmi calculation ${bmi}
  `);
});






app.listen(3000, () => {
  console.log(`Example app listening on port `);
});