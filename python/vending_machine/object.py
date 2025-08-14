class Suica:
    def __init__(self, balance=500):
        self._balance = balance

    @property
    def balance(self):
        return (self._balance)

    @balance.setter
    def balance(self, balance):
        self._balance = balance

    def deposit(self, price):
        if price >= 100:
            self._balance += price
            return self._balance
        else:
            raise Exception("100円未満はチャージできません")

class Juice:
    def __init__(self, name, price):
        self._name = name
        self._price = price


class Vending_machine:
    def __init__(self):
        self.juice_list = [
            {"item": Juice("ペプシ", 150), "stock": 5},
            {"item": Juice("いろはす", 120), "stock": 5},
            {"item": Juice("モンスター", 350), "stock": 5},
        ]
        self._sales = 0

    def purchase(self, suica, item):
        if suica.balance >= self.juice_list[item]["item"]._price and self.juice_list[item]["stock"] > 0:
            self.juice_list[item]["stock"] -= 1
            self._sales += self.juice_list[item]["item"]._price
            suica.balance -= self.juice_list[item]["item"]._price
        else:
            raise Exception("購入できません")

    @property
    def sales(self):
        return self._sales

    def can_buy(self, suica, item):
        if suica.balance >= self.juice_list[item]["item"]._price and self.juice_list[item]["stock"] > 0:
            return True
        else:
            return False

    def can_buy_list(self, suica):
        list = []
        for i in range(len(self.juice_list)):
            if self.can_buy(suica, i):
                list.append(self.juice_list[i]["item"]._name)
        return list

    def restock(self, item_index, stock):
        self.juice_list[item_index]["stock"] += stock
        return self.juice_list[item_index]["stock"]