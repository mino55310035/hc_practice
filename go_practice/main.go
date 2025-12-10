package main

import "fmt"

func main() {
	var s []interface{}
	s = append(s, 1, "2", 10, "11")
	for _, v := range s {
		switch v.(type) {
		case int:
			fmt.Printf("%02d\n", v)
		case string:
			fmt.Printf("%02s\n", v)
		}
	}
}
