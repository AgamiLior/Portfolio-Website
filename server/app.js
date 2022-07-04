const express = require('express');
const app = express();
const path = require('path');
let port = process.env.PORT || 3000;
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

app.listen(port, () => {
	console.log(`Server on Port ${port}`)
})