'''
Manipulación de Listas en Python
Escribe un programa en Python que solicite al usuario
ingresar una lista de números enteros separados por comas. Luego,
el programa debe
'''
numeros_entrada = input("Dame una lista de números enteros separados por comas ")
numeros = [int(num.strip()) for num in numeros_entrada.split(",")]
#Mostrar la longitud de la lista ingresada.
print("longitud de la lista: ", len(numeros))

#Calcular y mostrar la suma de todos los números en la lista.
suma = sum(numeros)
print("La suma de todos los dijitos es: ", suma)

#Verificar si un número específico ingresado por el usuario está presente en la lista. Si está presente, mostrar su índice en la lista.
numero_a_buscar = int(input("Dame un numero para buscarlo en la lista: "))
if numero_a_buscar in numeros:
    indice = numeros.index(numero_a_buscar)
    print("El numero ", numero_a_buscar, " si se encuentra en la lista con el indice[", indice , "]")
else:
    print("No esta en la lista ") 

#Eliminar el último elemento de la lista y mostrar la lista actualizada
numeros.pop()
print("Se elimino el ultimo elemento y la lista queda asi : ", numeros)