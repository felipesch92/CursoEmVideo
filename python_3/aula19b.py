filme = dict()
filme['titulo'] = 'Star Wars'
filme['ano'] = 1977
filme['diretor'] = 'George Lucas'
print(filme.values())
print(filme.keys())
print(filme.items())
for k, v in filme.items():
    print(f'O {k} é {v}')
locadora = []
locadora.append(filme)
print(locadora)
print(locadora[0]['ano'])
