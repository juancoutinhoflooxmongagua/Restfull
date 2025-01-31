module.exports = (app)=>{
    app.get('/', (req, res) => { 
        console.log('URL:', req.url);
        console.log('METHOD:', req.method);
    
        res.status(200)
           .set('Content-Type', 'text/html')
           .send('<h1>RODANDO</h1>');
    });
    
};
