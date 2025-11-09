const  express 'express';


const app = express();

app.use(express.json());

// Routes
app.get('/api/1', (req, res)=>
{
    res.status(200).json({sam:"heklds"});
});



export default app;