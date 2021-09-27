build:
	- GOOS=js GOARCH=wasm go build -o public/main.wasm
run:
	- goexec 'http.ListenAndServe(":8080", http.FileServer(http.Dir("public")))'