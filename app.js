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

let blogData = [];
let blogIndex = {};
app.post('/blog-links', (req, res) => {
  let input = req.body;
  let inserted = 0;
  input.forEach(item => {
    let id = `${item.title}:${item.link}`;
    if (!blogIndex[id]) {
      blogIndex[id] = item;
      blogData.push(item);
      inserted++;
    }
  });
  let output = { "inserted": inserted, "request_size": input.length };
  res.json(output);
});

app.get('/blog-links', (req, res) => {
  res.json(blogData);
});

app.get('/view-links', (req, res) => {
  let header = `<html><head><title>View Blog</title>
      <style>
      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    
    .card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        width: 300px;
        background-color: #f9f9f9;
    }
    
    .card p {
        margin: 5px 0;
    }
    
    .card a {
        text-decoration: none;
        color: #007bff;
    }
    
    .card a:hover {
        text-decoration: underline;
        color: #0056b3;
    }
    
    @media (max-width: 768px) {
        .card-container {
            justify-content: center;
        }
    }
    </style>
  </head><body>`;
  let cards = '';
  let webType = /web/i;
  let backendType = /backend/i;

  blogData.forEach(item => {
    if (webType.test(item.category) || backendType.test(item.category)) {
      cards += `<div class="card-container"><div class="card"><p>${item.title}</p><p>Published on: ${item.publishedDate}</p>
        <p>Category: ${item.category}</p>
        <p>Source: ${item.source}</p>
        <a href="${item.link}" target="_blank">Go</a>
      </div ></div>`;
    }
  });

  let footer = "</body></html>";
  let output = header + cards + footer;
  res.send(output);
});


app.listen(port, () => {
  console.log(`math app listening on port ${port} `)
})

