package main
import (
	"fmt"
	"time"
)

func main(){
	timens := int64(time.Now().Nanosecond())
	fmt.Println(timens)
}
