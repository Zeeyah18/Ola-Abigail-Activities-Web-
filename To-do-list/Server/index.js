import express from 'express';
import { pool } from './db.js';

const app = express();
const PORT = 3000;  

app. use (express.json());

app.get('/get-lists',async (req, res) => {
    const list = await pool.query ('SELECT * FROM  list')
    res.status(200).json({ success: true, lists: list.rows });
});

app.post('/add-list', async (req, res) => {
    const { listtitle } = req.body;

    await pool.query(
        'INSERT INTO list (title, status) VALUES ($1, $2)',
        [listtitle, "pending"]);

    res.status(200).json({ success: true, message: 'List added successfully' }); 
});

app.post('/edit-list', async (req, res) => {
    const { id,listtitle } = req.body;

    await pool.query('UPDATE list SET title = $2 WHERE id= $1', [id, listtitle]);
    res.status(200).json({ success: true, message: 'List updated successfully' }); 
});

app.post('/delete-list', async (req, res) => {
    const { id } = req.body;

    await pool.query('DELETE FROM list WHERE id = $1', [id]);
    res.status(200).json({ success: true, message: 'List deleted successfully' }); 
});

app.get('/get-items/:id', async (req, res) => {
    const listId =  req.params.id;
    const fillteredItems = items.filter(
     item => item.listId == listId);
 
     if(fillteredItems.length === 0) {
         return res.status(404).json({ success: false, message: 'No items found for the given list ID' });
     }
 
     res.status(200).json({ success: true, items: fillteredItems }); 
    
 });

 app.post('/get-items',async (req, res) => {
    const list = await pool.query ('SELECT * FROM  items')
    res.status(200).json({ success: true, lists: list.rows });
});

 app.post('/add-items', async (req, res) => {
    const { listId, desc } = req.body;

    await pool.query('INSERT INTO items (list_id, description, status) VALUES ($1, $2, $3)', [listId, desc, "pending"]);
    res.status(200).json({ success: true, message: 'Items added successfully' }); 
});

app.post('/edit-items', async (req, res) => {
    const { id, desc } = req.body;

    await pool.query('UPDATE items SET description = $2 WHERE id =$1', [id, desc]);
    res.status(200).json({ success: true, message: 'Items updated successfully' }); 
});

app.post('/delete-items', async (req, res) => {
    const { id } = req.body;

    await pool.query('DELETE FROM items WHERE id = $1', [id]);
    res.status(200).json({ success: true, message: 'Items deleted successfully' }); 
});
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});