class Pokemon:
    def __init__(self, name, type1, type2, hp):
        self.name = name
        self.type1 = type1
        self.type2 = type2
        self.hp = hp
    
    def attack(self):
        print(f"{self.name}の攻撃")

class Pikachu(Pokemon):
    def __init__(self, name, type1, type2, hp):
        super().__init__(name, type1, type2, hp)
    
    def attack(self):
        print(f"{self.name} の10万ボルト!")

def main():
    pika = Pikachu("ピカチュウ", "でんき", "", 100)
    
    pika.attack()  

if __name__ == "__main__":
    main()