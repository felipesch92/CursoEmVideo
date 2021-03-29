dados = ['Pedro', 25]
dados1 = ['Maria', 19]
dados2 = ['João', 32]
pessoas = []
pessoas.append(dados[:])
pessoas.append(dados1[:])
pessoas.append(dados2[:])
print(dados)
print(pessoas)
for p in pessoas:
    print(p)
