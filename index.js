const express = require("express")

const app = express()

// app.all(express.json())
app.use(express.json())

app.get("/", (request, response) => {
    response.json({
        message: "Hello, world!"
    })
})

app.get("/some-path/:someId", (request, response) => {
    const pathParam = request.params.someId
    const queryParam = request.query["some-id"]
    const someHeader = request.get("some-header")
    const someBody = request.body
    console.log("hey, someBody!")

    response.json({
        pathParam,
        queryParam,
        someHeader,
        someBody,
    })
})


const PORT = 3000
app.listen(PORT, () => {
    console.log('Listening on port {PORT}')
})