def soma(*val):
    s = 0
    for v in val:
        s += v
    print(f'Somando os valores {val} temos {s}')


soma(2, 3)
soma(10, 5, 20)
soma(15, 27, 38)
soma(5500, (5500*0.15))
