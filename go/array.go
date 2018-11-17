package main

import "fmt"

func main() {
	var a = [5]int{4, 6, 8, 2, 5}
	fmt.Println(a)
	sort2(a)
}

func sort1(a [5]int) {
	for i := 0; i < len(a); i++ {
		for j := 0; j < len(a)-i-1; j++ {
			if a[j] > a[j+1] {
				a[j], a[j+1] = a[j+1], a[j]
				fmt.Println(a)
			}
		}

	}
}

func sort2(a [5]int){
	var tmp int
	for i:=1; i<len(a);i++{
		tmp = a[i]
		for j:=i-1; j>=0 && a[j]>tmp; j--{
			a[j],a[j+1]=a[j+1],a[j]
			fmt.Println(a)
		}
	}
}
