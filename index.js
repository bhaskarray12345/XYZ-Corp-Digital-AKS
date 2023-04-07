const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const PORT = 8080;
const response = [{
    id: 100,
    name: "Bhaskar",
    address: "Barrackpore"
},
{
    id: 101,
    name: "Indrani",
    address: "Serampore"
}]


app.get('/', (req, res) => {
    res.end(JSON.stringify(response))
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})