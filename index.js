const http = require('http'); // Import node.js core module

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req);
    console.log(res);

    //send a hello world response 
    if(req.url == '/'){
        res.write('home');
    }else if(req.url == '/ping'){
        res.write('/pong')
    }else{
    res.write('hello world!'); //write a response to the client
    }


    res.end(); //end the response

});

//start your server
server.listen(PORT,() => {
    //callback triggered when server is successfully listening.hurray!
    console.log("server listening on: http://localhost:",PORT);
});
