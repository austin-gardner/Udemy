var database = [
    {
        username: "austin",
        password: "secret"
    },
    {
        username: "katelyn",
        password: "supersecret"
    },
    {
        username: "bob",
        password: "1234"
    }
];

var newsfeed = [
    {
        username: "austin",
        timeline: "First post!",
    },
    {
        username: "austin",
        timeline: "Is anyone else on here?",
    },
    {
        username: "katelyn",
        timeline: "Hey I'm here too!",
    },
];

function isValidUser(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password){
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if(isValidUser(user, pass)) {
        console.log("Welcome, " + user + "!");
        console.log(newsfeed);
    } else {
        alert("Error, your username and password did not match.");
    }
}

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
signIn(usernamePrompt, passwordPrompt);
