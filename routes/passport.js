/**
 * Created by Hasitha Isuru on 07/07/2018.
 */
var LocalStrategy   = require('passport-local').Strategy;

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12246368",
    password: "CeVtni3mrY"
});

connection.query('USE sql12246368');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log("here id "+user.username.toString());
        done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        console.log("herexc id "+user);
        connection.query("select * from userlogin where username = '"+user+"'",function(err,rows){
            done(err, rows[0]);
        });
    });


    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            connection.query("select * from userlogin where username = '"+email+"'",function(err,rows){
                console.log(rows);
                console.log("above row object");
                if (err)
                    return done(err);
                if (rows.length) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {

                    // if there is no user with that email
                    // create the user
                    var newUserMysql = new Object();

                    newUserMysql.email    = email;
                    newUserMysql.password = password; // use the generateHash function in our user model

                    var insertQuery = "INSERT INTO users ( username, password ) values ('" + email +"','"+ password +"')";
                    console.log(insertQuery);
                    connection.query(insertQuery,function(err,rows){
                        newUserMysql.id = rows.insertId;

                        return done(null, newUserMysql);
                    });
                }
            });
        }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form
            console.log('pass '+username);
            console.log('passsssssssssssssssssss');
            console.log('pass pass '+password);
            connection.query("SELECT * FROM `userlogin` WHERE `username` = '" + username + "'",function(err,rows){
                console.log('passsssssssssssssssssssq');
                if (err)
                    return done(err);
                if (!rows.length) {
                    console.log('passsssssssssssssssssssa');
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }
                console.log('passssssssssssssssssssaas');
                // if the user is found but the password is wrong
                if (!( rows[0].password == password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                console.log('passsssssssssssssssssssqqq');
                return done(null, rows[0]);

            });



        }));

};