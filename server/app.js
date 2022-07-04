const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser')

app.use(express.json());


app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/public/views')
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)

    
app.get('/', async (req, res) => {
	res.render('index.html')
})

app.listen(3000, () => {
	console.log('Server on Port 3000')
})