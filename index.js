const app = require('express')()
const port = 3000

app.get('/', (req, res) => res.send("<h1>Home Page</h1>"))
app.get('/About', (req, res) => res.send("<h1>Home About</h1>"))
app.get('/ContactUs', (req, res) => res.send("<h1>Home ContactUs</h1>"))

app.listen(process.env.PORT || port, () => console.log(`app running on port ${port}`))