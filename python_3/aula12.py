num = int(input('Digite um número inteiro: '))

while num < 0:
    print('Sem ser negativo!')
    num = int(input('Digite novamente: '))
if num % 2 == 0:
    print('O número {} é Par!'.format(num))
else:
    print('O número {} é Impar!'.format(num))
