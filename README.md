## Getting Started

Install and run node

```
npm install
node app.js
```

then you can test the following endpoints from something like Postman, Curl or any API testing framework.

## APIs
### Check App Status

```
curl http://localhost:3000/status
```

### Add numbers
Adds two numbers and shows the output. This is a simple example to provide a POST url for testing purpose.

```
curl -H"Content-Type: application/json" -X POST -d '{"a": 2, "b": 3}' http://localhost:3000/add
```

Find Square

```
curl -H"Content-Type: application/json" -X POST -d '{"a": 2}' http://localhost:3000/square
```


Find Min

```
curl -H"Content-Type: application/json" -X POST -d '{"numArray": [2,30,1,4,56]}' http://localhost:3000/min
```

Find Max

```
curl -H"Content-Type: application/json" -X POST -d '{"numArray": [2,30,1,4,56,-90]}' http://localhost:3000/max
```

