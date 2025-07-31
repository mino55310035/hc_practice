import random

l = ['A', 'B', 'C', 'D', 'E', 'F']
random.shuffle(l)

division_type = random.choice([3, 2])

if division_type == 3:
    print(sorted(l[0: 3]))
    print(sorted(l[3: ]))
elif division_type == 2:
    print(sorted(l[0: 2]))
    print(sorted(l[2:]))

