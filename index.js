

//Install the package with npm install node-fetch in terminal.//
//Import the package at the top of your index.js file//
//using this code below//
import fetch from 'node-fetch'

// Import the express library and assign it to a variable
import express from 'express'

// Create an instance of an express application 
const app = express()

// Add this line below the line that says: const app = express()
app.use(express.json())

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
console.log(req.query)
 // res.send("Write an instruction for a drawing here. For example: draw a line across the page, draw 10 circles of different sizes, draw a duck.")//
 // Replace the response line you already have with something like this-
 res.json({ data: "nice to meet you here" })
})

//这个是get first name 和 get last name 的框架frame work 格式 导览体系//
app.get('/firstName/:firstName/lastName/:lastName', (req, res) => {
  //需要一个console来Read the query string//
  console.log(req.params)
  //这个是输出的信息的格式。//
  //其中， ${req.params.firstName} ${req.params.lastName}代表引用listen到的信息//
  //简化后的格式为 ${req.params.}
  //res代表response//
  //req代表request//
  res.json({ data: `The full name is ${req.params.firstName} ${req.params.lastName}` })
})
//在guest terminal种输入下面的代码//
//curl "127.0.0.1:3001/firstName/Or/lastName/Zubalsky"//
//后host terminal便会接收到信息 { firstName: 'Or', lastName: 'Zubalsky' }//
//从而使guest terminal产出content:  : {"data":"The full name is Or Zubalsky"} //

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})



// Example of an application route that makes a request to another server
// inorder to run it, type//
//curl 127.0.0.1:3001/advice//
//in the guest terminal//
app.get('/advice', async (req, res) => {
  // Make a request to another wbesite and wait for a response
  const response = await fetch('https://api.adviceslip.com/advice')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  // Get the advice text string from the response body object
  const advice = body.slip.advice

  res.json({ data: advice })
})

