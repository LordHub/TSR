// Client
var zmq = require('./nzmq3');
var rq = zmq.socket('req');
var counter=0;
var text = process.argv[4]; //Text to be sent in the service request message. E.g.: ‘
work_harder

var id = process.argv[3];
var endpoint = process.argv[2];//endpointURL for the broker’s frontend
rq.send("Work"); //El cliente manda trabajo



function onSuccess(msg) {
    console.log("Done" +msg);
}

function onError(err) {
    console.log('Error: '+err);
}

rq.connect(frontend);
rq.on('message', onSuccess);
rq.on('error', onError);
// The "Hello" string is sent every second
/*setInterval( function() {
    rq.request(2,'Hello ', counter++);
}, 1010 );*/

