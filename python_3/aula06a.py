# A variavel recebendo input é string
n1_str = input('Digite um número: ')
n2_str = input('Digite mais um número: ')

# Transformando o valor de input para inteiro
n1_int = int(n1_str)
n2_int = int(n2_str)
soma = n1_int + n2_int

print('O resultado da soma de ', n1_str, '+', n2_str, 'é igual a:', soma)
print('A soma vale {}'.format(soma))
