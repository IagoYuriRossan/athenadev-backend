import express from 'express'

const app = express();
app.use(express.json())

console.log('teste')

export default app;