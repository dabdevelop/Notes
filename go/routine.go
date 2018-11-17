package main

import "fmt"

func main(){
	ch := make(chan int)
	go func(){
		sum := 0
		defer func() {
			ch <- sum
		}()
		for i := 0; i < 100; i++{
			sum += i
		}
	}()
	// ch <- 2
	// x := <- ch
	// <- ch
	fmt.Println(<- ch)
}
