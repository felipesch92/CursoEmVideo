def soma(a, b=[]):
    s = a + b
    print(f'A soma de a {a} + b {b} é igual a {s}')


def mostraLista(lista):
    for l in lista:
        print(l)

soma(8, 7)
soma(b=10, a=15)
mostraLista([10, 20, 'Felipe', 38.5, True])
