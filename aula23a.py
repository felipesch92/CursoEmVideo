try:
    a = int(input('Numerador: '))
    b = int(input('Denominador: '))
    r = a / b
except (ValueError, TypeError):
    print('Tivemos um problema com o tipo de dado que vocẽ digitou!')
except ZeroDivisionError:
    print('Não é possível dividir um número por zero!')
except Exception as erro:
    print(f'O erro encontrado foi {erro}')
else:
    print(f'O resultado é: {r:.1f}')
finally:
    print('Volte sempre! Muito obrigado!')
