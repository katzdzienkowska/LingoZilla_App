const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('/helpers/create_router');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('education_hub');
        const educationCollection = db.collection('education');
        const educationRouter = createRouter(educationCollection);
        app.use('/api/education', educationRouter);
    });

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
})