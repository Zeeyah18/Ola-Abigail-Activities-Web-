import express, { json } from 'express';

const app = express();
app.use(express.json());
const port = 3000;

const list = [
    {
        id: 1,
        title: "Assignments",
        status: "pending",
    },
    {
        id: 2,
        title: "Daily Chores",
        status: "pending",
    }
]

const item = [
    {
        id: 1,
        list_id: 1,
        description: "Programming",
        status: "pending"
    },
    {
        id: 2,
        list_id: 1,
        description: "Web Dev",
        status: "pending"
    },
    {
        id: 3,
        list_id: 2,
        description: "Wash Dish",
        status: "pending"
    },
    {
        id: 4,
        list_id: 2,
        description: "Clean the room",
        status: "pending"
    }
]

app.get('/', (req, res) => {
    res.send('Hello from your Express app!');
});

app.get('/home', (req, res) => {
    res.send('This is homepage.');
});

app.get('/get-list', (req, res) => {
    res.status(200).json({ success:true, list });
});

app.post('/add-list', (req, res) => {
    const {listTitle} = req.body;

    list.push({
        id: list.length + 1,
        title: listTitle,
        status: "pending"
    });

    res.status(200).json({ success:true, list, message: "List successfully added" });
});

app.get('/edit-list', (req, res) => {
    res.send('Angry!');
});

app.get('/delete-list', (req, res) => {
    res.send('Confused!');
});

app.get('/get-items/:id', (req, res) => {
    const listId = req.params.id;
    const filtered = item.filter(
        item => item.list_id == listId);

        if (filtered.length ===0) {
            return res.status(200).json ({ success: false, message: ' list not found' });
        }

    res.status(200).json({ success:true, items:filtered });
});

app.get('/add-item', (req, res) => {
    res.send('Running');
});

app.get('/edit-item', (req, res) => {
    res.send('excited!');
});

app.get('/delete-item', (req, res) => {
    res.send('Disappear.');
});

app.listen(port, () => {
    console.log('Server listening on port ${PORT}');
});