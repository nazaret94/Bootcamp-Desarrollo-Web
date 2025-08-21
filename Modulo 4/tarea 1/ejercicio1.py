'''

Ejercicio 1
Introducción a la programación
Elabore un programa en python que posibilite la lectura de dos
valores diferentes, identifique cuál de los dos valores es el mayor y lo
muestre
'''
valor_1 = int(input("Dame el primer valor : "))
print(valor_1)
valor_2 = int(input("Dame el segundo valor: "))
print(valor_2)

if valor_1 == valor_2:
    print("El valor 1 y el valor 2 son iguales")
else:
    if valor_1 < valor_2:
        print("El valor mas grande es el", valor_2)
    else:
        print("El valor mas grande es el", valor_1)