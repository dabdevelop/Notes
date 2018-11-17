package main

import (
	"fmt"
	"strconv"
)

type Person struct {
	age int
	name string
}

func main() {
	// var array [5]int
	// array = [5]int{1,2,3,4,5}

	// array := [5]int{1,2,3,4,5}
	// array := [...]int{1,2,3,4,5}
	// array := []int{1,2,3,4,5}
	// array := [5]int{1: 1, 4: 3}

	// for i := 0; i < len(array); i++ {
	//  fmt.Printf("%d", array[i])
	// }

	// modify(&array)
	// for i, v := range array {
	//	fmt.Printf("i: %d, v: %d\n", i, v)
	// }
	// slice := make([]int, 5, 10)
	// slice = []int{1, 2, 3, 4, 5}
	// slice := []int{4: 1}
	// slice1 := slice[:]
	// newSlice := append(slice, 6)
	// fmt.Println(len(newSlice), cap(newSlice))
	// slice2 := []int{1, 2, 4}
	// newSlice = append(newSlice, slice2...)
	// fmt.Printf("%v", newSlice)
	// f := func(v int) {
	//	fmt.Println(a)
		// fmt.Println(v)
	// }
	// iterate(newSlice, f)
	// dict := make(map[int]string)
	// dict := map[int]string{}
	// var dict map[int]string
	// dict := map[int]string{1: "张三", 2: "李四"}
	// dict[1] = "小白"
	// dict[2] = "小黑"
	// iterateMap(dict, func(k int, v string){
	//	fmt.Printf("k: %d, v: %s\n", k, v)
	// })
	jim := Person{10, "Jim"}
	jim.setName("David")
	// jim := Person{name: "Jim", age: 10}
	fmt.Println(&jim)
}

// func (p Person) String() string {
//    return "age: " + strconv.Itoa(p.age) + "; name: " + p.name
// }

func (p *Person) String() string {
	return "age: " + strconv.Itoa(p.age) + "; name: " + p.name
}

func (p *Person) setName(name string) {
	p.name = name
}

func modify(a *[5]int) {
	a[1] = 3
	fmt.Println(a)
}

func iterate(slice []int, do func(int)) {
	for _, v := range slice {
		do(v)
	}
}

func iterateMap(dict map[int]string, do func(int, string)) {
	for k, v := range dict {
		do(k, v)
	}
}
