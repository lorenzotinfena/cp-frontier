# cp-frontier

The goal of this project is to create a competitive programming app better than the top existing website, solving problems like the boring reading and writing in stdin and astdout, using main functions unique for any user, that calls for every test case a function called "Solve", passing the minimum required arguments in a standard way between languages and return the result. Input and output are both built-in in the main function, this seems more ugly, but is more fast and simple.
The score is a weighted mean from the time and memory used, and the programming language used, otherwise a language like python in most case will be the worst.

The protocol used for API is GRPC.

# Get started
## Client
1. Compile protos for server and client with the script in /protos
2. Go in /client/public and run ```npm install && npm run build``` to compile the index.js, grpc and proto library, in order to expose the messages and services to wasm
3. Go in /client and run ```make build``` to compile main.go to wasm, and run ```make run``` to start webserver