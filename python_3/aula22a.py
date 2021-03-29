def fat(n):
    f = 1
    for x in range(1, n+1):
        f *= x
    return f


n = int(input('Valor: '))
print(fat(n))
