from abc import ABC, abstractmethod

class Pokemon(ABC):

    def __init__(self):
        self._name = ""

    @property
    @abstractmethod
    def type1(self):
        pass

    @property
    @abstractmethod
    def type2(self):
        pass

    @property
    @abstractmethod
    def hp(self):
        pass

    @abstractmethod
    def attack(self):
        pass

    def change_name(self, new_name):
        if new_name == "うんこ":
            print("不適切な名前です")
            return
        self._name = new_name

    def get_name(self):
        return self._name

class Pikachu(Pokemon):
    def __init__(self, name, type1, type2, hp):
        super().__init__()
        self._name = name
        self._type1 = type1
        self._type2 = type2
        self._hp = hp

    @property
    def type1(self):
        return self._type1

    @property
    def type2(self):
        return self._type2

    @property
    def hp(self):
        return self._hp

    def attack(self):
        print(f"{self._name}の十万ボルト")

