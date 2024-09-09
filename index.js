import http from 'http'
import express from 'express'
import path from 'path'
import flash from 'connect-flash'
import {  fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import session  from 'express-session'


const app = express();

// Definindo __dirname em ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurando o session
app.use(session({
    secret:'chaveSuperSecreta',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))

// Configurando connect-flash
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// Configurando o body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurando express para ler json
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json());





app.get('/', (req, res) => {
    res.send('E us gurizes')
})























app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})


 