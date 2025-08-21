from abc import ABC, abstractmethod

class Pokemon(ABC):
    @property
    @abstractmethod
    def name(self):
        pass
    
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
    
    def attack(self):
        print(f"{self.name} のこうげき！")

class Pikachu(Pokemon):
    def __init__(self, name, type1, type2, hp):
        self._name = name
        self._type1 = type1
        self._type2 = type2
        self._hp = hp
    
    @property
    def name(self):
        return self._name
    
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
        super().attack()  
        print(f"{self.name} の10万ボルト!")

def main():
    pika = Pikachu("ピカチュウ", "でんき", "", 100)
    pika.attack()

if __name__ == "__main__":
    main()