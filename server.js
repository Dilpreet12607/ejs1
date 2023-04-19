import express from 'express'; 
const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/',(req, res)=>{
    res.render('index');
});
app.get('/about',(req, res)=>{
    res.render('about');
});
app.get('/contact',(req, res)=>{
    res.render('contact');
});
app.get('*',(req, res)=>{
    res.render('error');
});
app.listen(5000);