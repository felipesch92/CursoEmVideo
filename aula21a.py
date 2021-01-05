from time import sleep


def cont(i, f, p):
    """
    -> Faz uma contagem e mostra na tela.
    :param i: início da contagem
    :param f: fim da contagem
    :param p: passo da contagem
    :return: sem retorno
    Função criada por Felipe Schmaedecke.
    """
    c = i
    while c <= f:
        print(f'{c}', end='..')
        sleep(0.4)
        c += p
    print('FIM!')


cont(2, 20, 2)
help(cont)
