const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Clarifai = require('clarifai');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const app = new Clarifai.App({
    apiKey: '4ad6313329ec4efbabaad9d5386f1a62'
});

app.post('/imageurl', (req, res) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('uable to work with API'));
})

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'austin',
        password : '',
        database : 'smart-brain'
    }
});

app.get('/', (req, res)=> {
    res.send('success');
})

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json('incorrect form submission');
    }
    db.select('email', 'hash').from('login')
        .where('email', req.body.email)
        .then(data => {
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
            if (isValid) {
                db.select('*').from('users')
                    .where('email', req.body.email)
                    .then(user => {
                        res.json(user[0]);
                    })
                    .catch(err => res.status(400).json('unable to get user'));
            } else {
                res.status(400).json('wrong credentials');
            }
        })
        .catch(err => res.status(400).json('wrong credentials'));
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    if(!email || !name || !password) {
        return res.status(400).json('incorrect form submission');
    }
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
            .returning('*')
            .insert({
                email: loginEmail[0],
                name: name,
                joined: new Date()
            })
            .then(user => {
                res.json(user[0]);
            })
            .catch(err => res.status(400).json('unable to register'));
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    db.select('*').from('users').where('id', id)
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(400).json('Not found')
            }
        })
        .catch(err => res.status(400).json('error getting user'));
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users').where('id', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0]);
        })
        .catch(err => res.status(400).json('uable to get entries'));
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000');
})