def par(n=1):
    if n % 2 == 0:
        return True
    else:
        return False

while True:
    n = int(input('Número: '))
    if n == 999:
        break
    if par(n):
        print('O número é par.')
    else:
        print('O número é impar.')
