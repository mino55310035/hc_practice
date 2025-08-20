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
    def __init__(self, name, price):
        self._name = name
        self._price = price

    @property
    def name(self):
        return self._name

    @property
    def price(self):
        return self._price

class Vending_machine:
    def __init__(self):
        self._stock = []
        
        items = [
            ("ペプシ", 150),
            ("いろはす", 120),
            ("モンスター", 230)
        ]
        for name, price in items:
            for _ in range(5):
                self._stock.append(Juice(name, price))

        self._sales = 0

    def purchase(self, suica, item_name):
        if not self.can_buy(suica, item_name):
            raise Exception("購入できません")
        for juice in self._stock:
            if juice.name == item_name:
                self._stock.remove(juice)
                self._sales += juice.price
                suica.pay(juice.price)
                break
    @property
    def sales(self):
        return self._sales

    def can_buy(self, suica, item_name):
        for juice in self._stock:
            if juice.name == item_name and suica._balance >= juice.price:
                return True
        else:
            return False

    def can_buy_list(self, suica):
        return list({juice.name for juice in self._stock if self.can_buy(suica, juice.name)})

    def restock(self, item_name, amount):
        price = None
        for juice in self._stock:
            if juice.name == item_name:
                price = juice.price
                break
        if price is None:
            raise ValueError(f"{item_name}は存在しません")
        for _ in range(amount):
            self._stock.append(Juice(item_name, price))


        

        