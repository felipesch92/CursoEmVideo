def soma(a=0, b=0, c=0):
    """
    Função que soma 3 valores e mostra os valores na tela
    :param a: primeiro valor
    :param b: segundo valor
    :param c: terceiro valor
    :return: sem retorno
    """
    s = 0
    s += a + b + c
    print(f'A soma vale {s}', end=' ')


soma(5, 4, 1)
soma(8, 4)
soma(4)
