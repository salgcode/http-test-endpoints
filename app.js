const express = require('express')
const bodyParser = require('body-parser')
const findMin = require("./myMinNumber");
const findMax = require("./myMaxNumber");

const app = express()
const port = 3000

app.use(bodyParser.json({ type: "application/json" }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/status', (req, res) => {
  res.json({ status: "OK" })
})

app.post('/add', (req, res) => {
  let input = req.body;
  let a = parseInt(input.a) || 0;
  let b = parseInt(input.b) || 0;
  let result = a + b;
  let output = {
    "a": a,
    "b": b,
    "result": result
  };
  res.json(output);
})

//write one endpoint to find square of a given number {num: 2} ==> {num: 2, square: 4}
app.post('/square', (req, res) => {
  let input = req.body;
  let a = parseInt(input.num) || 0;
  let result = a * a
  let output = {
    "a": a,

    "result": result
  };
  res.json(output);
});
//write one endpoint to find min number of a given array. no validation required. 

//output = findMin(input)

app.post('/min', (req, res) => {
  let input = req.body;
  let arr = input.numArray || [];
  let minNumber = findMin(arr)
  let output = {
    "numArray": arr,

    "result": minNumber
  };
  res.json(output);
});

app.post('/max', (req, res) => {
  let input = req.body;
  let arr = input.numArray || [];
  let maxNumber = findMax(arr)
  let output = {
    "numArray": arr,

    "result": maxNumber
  };
  res.json(output);
});

app.listen(port, () => {
  console.log(`math app listening on port ${port}`)
})

