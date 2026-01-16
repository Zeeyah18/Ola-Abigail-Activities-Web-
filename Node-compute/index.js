import express, { json } from 'express';

const app = express();
app.use(express.json());
const port = 3000;


app.post('/add', (req, res) => {
    const {fnum, snum} = req.body;
    const sum = fnum + snum;
    res.status(201).json({ success:true, sum: sum});
});

app.post('/subtract', (req, res) => {
    const {fnum, snum} = req.body;
    const difference = fnum - snum;
    res.status(201).json({ success:true, difference: difference});
});

app.post('/multiply', (req, res) => {
    const {fnum, snum} = req.body;
    const product = fnum * snum;
    res.status(201).json({ success:true, product: product});
});

app.post('/divide', (req, res) => {
    const {fnum, snum} = req.body;
    const qoutient = fnum / snum;
    res.status(201).json({ success:true, qoutient: qoutient});
});

app.listen(port, () => {
    console.log('Server listening on port ${PORT}');
});