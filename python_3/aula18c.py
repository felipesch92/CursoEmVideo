galera = list()
dado = list()
totmai = totmen = 0
for x in range(0, 3):
    dado.append(input('Nome: '))
    dado.append(int(input('Idade: ')))
    galera.append(dado[:])
    dado.clear()
print(galera)
for p in galera:
    if p[1] >= 18:
        print(f'{p[0]} é maior de idade.')
        totmai += 1
    else:
        print(f'{p[0]} é menor de idade.')
        totmen += 1
print(f'{totmai} Maiores de idade, {totmen} Menores de idade.')
