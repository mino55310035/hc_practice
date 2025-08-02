import random

l = ['A', 'B', 'C', 'D', 'E', 'F']
random.shuffle(l)

division_type = random.choice([3, 2])

print(l[0:division_type])
print(l[division_type:])

