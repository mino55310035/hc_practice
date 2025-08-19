from curses import ALL_MOUSE_EVENTS


class Suica:
    def __init__(self, balance=500):
        self._balance = balance

    @property
    def balance(self):
        return (self._balance)

    @balance.setter
    def balance(self, balance):
        self._balance = balance

    def deposit(self, amount):
        if amount >= 100:
            self._balance += amount
            return self._balance
        else:
            raise ValueError("100円未満はチャージできません")

    def pay(self, amount):
        if self._balance >= amount:
            self._balance -= amount
        else:
            raise ValueError("残高不足です")



class Juice:
    def __init__(self, name, price, stock):
        self._name = name
        self._price = price
        self._stock = stock

    @property
    def name(self):
        return self._name

    @property
    def price(self):
        return self._price

    @property
    def stock(self):
        return self._stock


class Vending_machine:
    def __init__(self):
        self.juice_list = [
            Juice("ペプシ", 150),
            Juice("いろはす", 120),
            Juice("モンスター", 350)
        ]

        self._stock = []
        for _ in range(5):
            self._stock.append(Juice("ペプシ", 150))
        for _ in range(5):
            self._stock.append(Juice("いろはす", 120))
        for _ in range(5):
            self._stock.append(Juice("モンスター", 350))
        
        
        self._sales = 0

    def purchase(self, suica, item_index):
        if not self.can_buy(suica, item_index):
            raise Exception("購入できません")
        juice = self.juice_list[item_index]
        self._stock.remove(juice)
        self._sales += juice.price
        suica.pay(juice.price)

    @property
    def sales(self):
        return self._sales

    def can_buy(self, suica, item_index):
        juice = self.juice_list[item_index]
        for j in self._stock:
            if j.name == juice.name and suica._balance > juice.price:
                return True
        else:
            return False

    def can_buy_list(self, suica):
        item_list = []
        for i in range(len(self.juice_list)):
            if self.can_buy(suica, i):
                item_list.append(self.juice_list[i].name)
        return item_list

    def restock(self, item_index, amount):
        juice = self.juice_list[item_index]
        for _ in range(amount):
            self._stock.append(Juice(juice.name, juice.price))


        

        