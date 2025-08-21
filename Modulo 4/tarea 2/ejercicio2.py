'''
Gestión de Estudiantes con Diccionarios
Crea un programa en Python que permita a un profesor gestionar una lista de estudiantes. 
'''
estudiantes = {}
def desplegar_menu():
    print("\nGestión de Estudiantes con Diccionarios")
    print("MENU:")
    print(" 1. Agrega un nuevo estudiante")
    print(" 2. Mostrar lista de estudiantes")
    print(" 3. Buscar estudiate")
    print(" 4. Eliminar estudiante")
    print(" 5. Salir")

while True:   
    desplegar_menu()
    opcion = input("\nElige una opcion: ")
    if opcion == "1":
        alumno = input("\nIngresa el nombre del estudiante: ")
        calificacion = input("Ingresa la calificacion: ")
        estudiantes[alumno] = calificacion
        print("Se agrego el alumno.")
    elif opcion == "2":
        if estudiantes:
            print("\nLista de estudiantes:")
            for alumno, calificacion in estudiantes.items():
                print(alumno," : ", calificacion)
        else:
            print("No hay estudiantes registrados.")
    elif opcion == "3":
        alumno = input("\nDame el nombre del alumno que deseas buscar: ")
        if alumno in estudiantes:
            print(alumno, " tiene una calificación de ",estudiantes[alumno])
        else:
            print("No está en la lista.")
    elif opcion == "4":
        alumno = input("\nDame el nombre del alumno que deseas eliminar: ") 
        if alumno in estudiantes:
            del estudiantes[alumno]
            print("El alumno fue eliminado")
        else:
            print("No está en la lista.")
    elif opcion == "5":
        print("\nBye, regresa pronto.")
        break
    else:
        print("\nla opcion no es valida")

    



