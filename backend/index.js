const express = require('express')
const app = express();
const cors = require('cors')

const MainRouter = require('./routes/index.js')

app.use(express.json());
app.use(cors());

app.use('/api/v1',MainRouter);