package main

import (
	"fmt"
)

func main() {
	m := map[int]string{
	  1: "01",
	  2: "02",
	  3: "03",
	}
	
	key, err := findKeyByValue(m, "03") // key→3, err→nil
	key, err = findKeyByValue(m, "05") // key→0にすること(初期値なので), errはある
	_, _ = key, err
  }

  func findKeyByValue(m map[int]string, value string) (int, error) {
	for k, v := range m {
		if v == value {
			return k, nil
		}
	}
	return 0, fmt.Errorf("key not found")
  }