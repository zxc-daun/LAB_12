//To fix this vulnerability, all we need to do is cast the user input to a string. 

//Now, if an object such as $ne is provided, it will result in the following invalid Mongo query


app.post('/login', function (req, res){
    let user = String(req.body.username);
    let pass = String(req.body.password);
 
    let query = {
        username: user,
        password: pass
    }
 
    db.collection('user').findOne(query, function (err, user) {
        if (err || !user) {
            response.status(401).json({
                status: "error",
                message: "Invalid credentials.",
              });
        } else {
            res.json({username: user.username });
        }
    });
});