const express = require('express');
const app = express();
const path = require('path');

const PORT = 4000;

// app.get('/', (req, res) => {
//     res.send("Hello world!");
// });

app.use(express.static(path.join(__dirname, './Migrate/dist/Migrate')))

app.listen(PORT, () => {
    console.log(`Server listening on localhost://${PORT}`);
});