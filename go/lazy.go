package main

import "fmt"

var se chan int

func f() int {
	return <- se
}

func lazy() chan int {
	temp := make(chan int)
	one, two := 1, 0
	go func() {
		temp <- one
		for {
			one, two = one+two, one
			temp <- one
		}
	}()
	return temp
}

func main(){
	se = lazy()
	for i := 0; i < 10; i++{
		fmt.Println(f())
	} 
}
