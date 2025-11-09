import express from 'express';


const app = express();

app.use(express.json());

// Routes
app.get('/api/1', (req, res)=>
{
    res
});

// Global error handler (should be after routes)


export default app;