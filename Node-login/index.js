import express, { json } from 'express';

const app = express();
app.use(express.json());
const port = 3000;

const user = [{
    username: "Abi",
    password:"Abi",
    confirm:"Abi",
}
]

app.get('/', (req, res) => {
    res.send('Hello from your Express app!');
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    res.status(201).json({ success:true, message:"Successfully"});
});

app.post('/register', (req, res) => {
    const {username, password, confirm} = req.body;

    user.push({
        username: username,
        password: password,
        confirm: confirm
    });
if(confirm != password){
    return res.status(400).json({ success:false, message: "Invalid password in confirm" });
}
if (username == user.username){
    return res.status(400).json({ success:false, message: "Username already exist" });
}
else {
    return res.status(201).json({ success:true, user, message: "User registered successfully" });
}
});

app.listen(port, () => {
    console.log('Server listening on port ${PORT}');
});