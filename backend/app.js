var express = require('express');
var app = express();

app.post("/", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var p = req.query['palindrome'];
    if(check(p))
    {
    res.status(200);
    res.json({code: 200,message:"Is palindrome"});
    }else{
        res.status(400);
        res.json({code:400,message:"Not palindrome"});
    }


});

function check(s,i) {
    return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&check(s,++i);
}

var server = app.listen(80, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("server on http://%s:%s", host, port)

})
