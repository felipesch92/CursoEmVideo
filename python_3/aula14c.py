n = 1
c = 0
p = 0
i = 0
while n != 0:
    n = int(input('Digite um valor: '))
    if n != 0:
        c += 1
        if n % 2 == 0:
            p += 1
        else:
            i += 1
print('Dos {} números digitados {} são pares e {} são ímpares.'.format(c, p, i))
