package main

import (
	"fmt"
	"syscall/js"
	"github.com/gomarkdown/markdown/parser"
	"github.com/gomarkdown/markdown"
)

func main() {
	fmt.Println("....")

	extensions := parser.CommonExtensions | parser.AutoHeadingIDs
	pa := parser.NewWithExtensions(extensions)


	
	md := []byte(`
	## markdown document
	
	# test
	
	ulla
	
	- fdsaf
	- fdafdsf
	`)
	h := string(markdown.ToHTML(md, pa, nil))
	fmt.Println("------------------")
	fmt.Println(h)
	document := js.Global().Get("document")
	p := document.Call("createElement", "p")
	p.Set("innerHTML", h)


	document.Get("body").Call("appendChild", p)
}
