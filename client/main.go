package main

import (
	"fmt"
	"syscall/js"
)

var document js.Value

func submit(val js.Value, val2 []js.Value) interface{} {
	fmt.Println("aaaaaaa")
	code := document.Call("getElementById", "code")
	Code := js.Global().Get("Code")
	Code.Call("setCode", code)
	fmt.Println(Code.Call("getCode"))
	return nil
}
func registerCallbacks() {
	js.Global().Set("submit", js.FuncOf(submit))
}

func main() {
	c := make(chan struct{}, 0)
	registerCallbacks()
	<-c
}
