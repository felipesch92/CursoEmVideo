n1 = float(input('Nota 1: '))
n2 = float(input('Nota 2: '))
m = (n1 + n2)/2
print('A sua média foi de: {:.1f}'.format(m))
if m >= 6:
    print('Sua média foi boa!')
else:
    print('Sua média foi ruim!')
print('PARABÉNS' if m >= 6 else 'ESTUDE MAIS!')
