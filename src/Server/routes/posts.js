app.get('/api/users', (req, resp) => {
    database.query('SELECT * FROM USERS', (err, res) => {
        if (err){
            return resp.serverStatus(500);
        }
        resp.json(res);
    });
});