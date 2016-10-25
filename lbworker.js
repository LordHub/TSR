var zmq = require('zmq');
var req = zmq.socket('req'); // to contact the broker

var backend  = process.argv[2];
var ready = process.argv[4]; //Text to be used in the availability message5, e.g: ‘READY’
var done = process.argv[5]; //Text to be used for messages carrying the result of a request6, e.g: ‘DONE’.
var activated = process.argv[6]; //A  boolean  (true/ false)  indicating  if  the verbosemode  is  activated (providing profuse output at the console).

//STEP 1 req peer has identity set to the id received
var id = process.argv[3];

req.connect(backend);//connect to the broker

req.on(backend, function(msg){ 
	req.send(id);)
} );



rp.bind(backend,function(err) { // to connect to the backend
    if (err) throw err;
});
rp.on('message', function(msg) {
    msg[2] = "Done"; 
    rp.send(msg);
});
