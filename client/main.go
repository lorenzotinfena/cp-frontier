package main

import (
	"fmt"
	"syscall/js"
)

var document js.Value

func submit(val js.Value, val2 []js.Value) interface{} {
	fmt.Println("aaaaaaa")
	fmt.Println(document.Call("getElementById", "code"))
	return nil
}
func registerCallbacks() {
	js.Global().Set("submit", js.FuncOf(submit))
}

func main() {
	registerCallbacks()
	document = js.Global().Get("document")
}
