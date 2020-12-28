pessoas = {'nome': 'Felipe', 'sexo': 'M', 'idade': 22}
del pessoas['sexo']
pessoas['nome'] = 'Leandro'
pessoas['peso'] = 79.8
for k, v in pessoas.items():
    print(f'{k} = {v}')
