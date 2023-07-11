//To run use http://localhost:8000/Amplify.html

//Importing express module
const express = require('express');
//Import the mysql module
const mysql = require('mysql');
//Import the file upload module
const fileUpload = require('express-fileupload');
//Import the body parser module to handle post
const bodyParser = require('body-parser');
//Import cookie parser to deal with cookies
const cookieParser = require('cookie-parser');
//Import session module for logging in
const session = require('express-session')
//Import path module for path
const path = require('path')


//Using the express function to return app object
const app = express();
//Use body parser JSON
app.use(bodyParser.json())
//Using path module
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'uploads')))
// Parse incoming request data
app.use(bodyParser.urlencoded({ extended: false }));

//Setting up express to serve HTML files
app.use(express.static('public'));
app.use(express.static('uploads'));
//Use file upload
app.use(fileUpload());
//Use cookies
app.use(cookieParser());
//Introducing a cookie
app.use(
    session({
        secret: 'AmplifyCookie',
        cookie: { maxAge: 10000000 },
        resave: false,
        saveUninitialized: true
    })
);

//Create a connection object with the user details
const con = mysql.createConnection({
    host: "localhost",
    user: "VA",
    password: "Vishesh_2004",
    database: "cw3amplify",
    debug: false
})

//Create a connection pool with the user details
let connectionPool = mysql.createPool({
    connectionLimit: 1,
    host: "localhost",
    user: "VA",
    password: "Vishesh_2004",
    database: "cw3amplify",
    debug: false
});

con.connect(err => {
    if (err) throw err;
    console.log('Database Connected\n');
});


//Gets all users
exports.getAllUsers = (response) => {
    let sqlSelectUser = "SELECT * FROM user;"
    //Execute query 
    connectionPool.query(sqlSelectUser, (err, result) => {
        if (err) throw err;
        response.send(result);
        console.log(result);
    });
};

//Gets all customers
exports.getAllAudio = (response) => {
    let sqlSelectAudio = "SELECT audio.AudioID, audio.Name, audio.Artist, audio.Genre, audio.AudioFile, user.Username, audio.Rating FROM audio INNER JOIN user ON audio.UserID = user.UserID ORDER BY audio.Name;";
    //Execute query 
    connectionPool.query(sqlSelectAudio, (err, result) => {
        if (err) throw err;
        response.send(result);
        console.log(result);
    });
};

//Gets all customers
exports.getAllAudioPop = (response) => {
    let sqlSelectAudioPop = "SELECT  * FROM audio WHERE Genre='Pop' ORDER BY RAND() LIMIT 3;";
    //Execute query 
    connectionPool.query(sqlSelectAudioPop, (err, result) => {
        if (err) throw err;
        response.send(result);
        console.log(result);
    });
};

//Gets all customers
exports.getAllAudioAlt = (response) => {
    let sqlSelectAudioAlt = "SELECT  * FROM audio WHERE Genre='Altrock' ORDER BY RAND() LIMIT 3;";
    //Execute query 
    connectionPool.query(sqlSelectAudioAlt, (err, result) => {
        if (err) throw err;
        response.send(result);
        console.log(result);
    });
};

exports.getAllAudioMetal = (response) => {
    let sqlSelectAudioMetal = "SELECT  * FROM audio WHERE Genre='Heavymetal' ORDER BY RAND() LIMIT 3;";
    //Execute query 
    connectionPool.query(sqlSelectAudioMetal, (err, result) => {
        if (err) throw err;
        response.send(result);
        console.log(result);
    });
};

exports.getAllComments = (response) => {
    let sqlSelectComment = "SELECT comment.UserComment, audio.Name, user.Username FROM comment INNER JOIN user INNER JOIN audio ON audio.AudioID = comment.AudioID AND user.UserID = comment.UserID WHERE comment.AudioID = " + 15 + ";";
    //Execute query 
    connectionPool.query(sqlSelectComment, (err, result) => {
        if (err) throw err;
        response.send(result);
        console.log(result);
    });
};


//Set up post to handle login
app.post('/login', function (request, response) {
    console.log(request.body);
    let un = request.body.loginUsername;
    let pw = request.body.loginPassword;
    console.log("Name: " + un + "\nPassword: " + pw);
    // connect to db
    sqlLogin = "SELECT * FROM user WHERE Username = '" + un + "' AND Password = '" + pw + "';";
    let userfound = false;
    con.query(sqlLogin, [un, pw], (err, result) => {
        if (err) {
            response.status(500).send('Database error');
        } else if (result.length > 0) {
            for (let user of result) {
                if (user.Username === un) {
                    request.session.loginUsername = un;
                    console.log(request.session.loginUsername);
                    userfound = true;
                    break;
                }
            }
            //checklogin();
            console.log(request.session);
            if (userfound == true) {
                console.log("Logged in\n" + JSON.stringify(result) + userfound);
                response.status(200);
                let login = false;
                console.log(request.session)
                if (!("loginUsername" in request.session))
                    login = false;
                else {
                    login = true;
                    console.log('{"login":true, "username": "' +
                        request.session.loginUsername + '" }');
                    let sessionInfo = request.session;
                    response.send(sessionInfo);
                }
                console.log("Login Check Result: " + login);
            }
            else {
                console.log("Incorrect Credentials");
            }
            //response.send(userfound);
        } else {
            response.status(401).send('Invalid username or password');
        }
    });
});

//Using GET for logout
app.get('/logout', (request, response) => {
    let end = false;
    request.session.destroy((error) => {
        if (error) {
            console.error('Error destroying session:', error);
            response.status(500).send('Internal server error');
            return;
        }
        else {
            end = true;
        }
        console.log("Logged Out: " + end);
        response.send(end);
    });
});

//Handle POST requests sent to /upload path
app.post('/upload', function (request, response) {
    //Check to see if a file has been submitted on this path
    if (!request.files || Object.keys(request.files).length === 0) {
        return response.status(400).send('{"upload": false, "error": "Files missing"}');
    }

    // The name of the input field (i.e. "myFile") is used to retrieve the uploaded file
    let myFile = request.files.myFile;
    var myAudioName = request.body.myAudioName;
    var myArtist = request.body.myArtist;
    var myGenre = request.body.myGenre;
    var myRating = request.body.myRating;
    var myImg = request.body.myImg;

    /* Use the mv() method to place the file in the folder called 'public' on the server.
        This is in the current directory */
    myFile.mv('./public/' + myFile.name, function (err) {
        if (err)
            return response.status(500).send('{"filename": "' +
                myFile.name + '", "upload": false, "error": "' +
                JSON.stringify(err) + '"}');

        const queryAddAudio = "INSERT INTO audio (Name, UserID, Artist, Genre, ImageFile, AudioFile, Rating)" + "VALUES ('" + myAudioName + "','" + 11 + "','" + myArtist + "','" + myGenre + "','" + myImg + "','" + myFile.name + "','" + myRating + "');";
        con.query(queryAddAudio, (err, results) => {
            con.release();
            if (err) throw err;
        });       
        response.send(result);
    });
});

// Set up a POST for registration
app.post('/register', (request, response) => {
    var myUsername = request.body.myUsername;
    var myPassword = request.body.myPassword;
    var myDob = request.body.myDob;
    var myGender = request.body.myGender;
    var myNationality = request.body.myNationality;
    const queryAddUser = "INSERT INTO user (Username, Password, DOB, Gender, Nationality)" + "VALUES ('" + myUsername + "','" + myPassword + "','" + myDob + "','" + myGender + "','" + myNationality + "');";
    // Get a connection from the pool
    connectionPool.query(queryAddUser, (err, results) => {
        if (err) throw err;
        console.log(results)
    });
});

//set up post for searching
app.post('/search', (request, response) => {
    var search = request.body.searchItem;
    console.log(search);
    const querySearch = "SELECT * FROM audio WHERE Name = '" + search + "';";
    connectionPool.query(querySearch, (err, results) => {
        if (err) throw err;
        if (results.Name == search) {
            console.log(search);
            console.log(results);
        }
        response.send(results);
    });
});

//set up post for adding comment
app.post('/addcomment', (request, response) => {
    var myComment = request.body.comment;
    const queryAddComment = "INSERT INTO comment (UserComment, AudioID, UserID)" + "VALUES ('" + myComment + "'," + 15 + "," + 16 + ");";
    // Get a connection from the pool
    connectionPool.query(queryAddComment, (err, result) => {
        if (err) throw err;
        console.log(result)
        response.send(result);
    });
});

app.post('/player', function (request, response) {
    var ID = request.body.id;
    console.log("Value is " + ID);
    let sqlAudioPlayer = "SELECT audio.AudioID, audio.Name, audio.Artist, audio.Genre, audio.AudioFile, user.Username, audio.ImageFile FROM audio INNER JOIN user ON audio.UserID = user.UserID WHERE audio.AudioID = " + 3;
    //Execute query 
    connectionPool.query(sqlAudioPlayer, (err, result) => {
        if (err) throw err;
        else if (result.AudioID == ID) {
            console.log(search);
            console.log(result);
        };
        response.send(result);
    });

});

//Setting up get requests for audio, comment etc
app.get('/audio', handleGetRequestAud);//Returns all customers
app.get('/audiopop', handleGetRequestAudPop);//Returns all customers
app.get('/audioalt', handleGetRequestAudAlt);//Returns all customers
app.get('/audiometal', handleGetRequestAudMetal);//Returns all customers
app.get('/comment', handleGetRequestComment);//Returns all customers

//The functions below handle the get requests for various purposes like getting audio, getting audio of one genre, comments etc

function handleGetRequestAud(request, response) {

    audioVal = request.body.openPlayer;
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'audio' we return all audio
    if (pathEnd === 'audio') {
        //Call function to return data
        exports.getAllAudio(response);
    }
    else {//The path is not recognized. Return an error message
        response.send("{error: 'Path not recognized'}")
    }
}

function handleGetRequestAudPop(request, response) {
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'audiopop' we return all pop genre audio
    if (pathEnd === 'audiopop') {
        //Call function to return data
        exports.getAllAudioPop(response);
    }
    else {//The path is not recognized. Return an error message
        response.send("{error: 'Path not recognized'}")
    }
}

function handleGetRequestAudAlt(request, response) {
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'audioalt' we return all alternative rock genre audio
    if (pathEnd === 'audioalt') {
        //Call function to return data
        exports.getAllAudioAlt(response);
    }
    else {//The path is not recognized. Return an error message
        response.send("{error: 'Path not recognized'}")
    }
}

function handleGetRequestAudMetal(request, response) {
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'audiometal' we return all heavy metal genre audio
    if (pathEnd === 'audiometal') {
        //Call function to return data
        exports.getAllAudioMetal(response);
    }
    else {//The path is not recognized. Return an error message
        response.send("{error: 'Path not recognized'}")
    }
}

function handleGetRequestComment(request, response) {
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'comment' we return comments
    if (pathEnd === 'comment') {
        //Call function to return data
        exports.getAllComments(response);
    }
    else {//The path is not recognized. Return an error message
        response.send("{error: 'Path not recognized'}")
    }
}


// Set up the server to listen on a port
app.listen(8000, () => {
    console.log('Server listening on port 8000!');
});

