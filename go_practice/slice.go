package main

import "fmt"

type MyIntSlice []int


func (m MyIntSlice) Unique() MyIntSlice {
    seen := make(map[int]bool)

    result := []int{}
    for _, v := range m {
        if !seen[v] {
            seen[v] = true
            result = append(result, v)
        }
    }
    return result
}

func main() {
    m := MyIntSlice{1, 2, 2, 3, 3, 3, 4, 5}
    fmt.Println(m.Unique())
}