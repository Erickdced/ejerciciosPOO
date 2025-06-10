class Persona 
{
    constructor (nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse()
    {
        console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " años ");
    }
}

class Profesor extends Persona
{
    constructor (nombre, edad, materia, grupo)
    {
        super(nombre, edad)
        this.materia = materia; 
        this.grupo = grupo;
    }

    presentarse()
    {
        console.log("Hola mi nombre es " + this.nombre + " y tengo " + this.edad + " años " + " y doy " + this.materia);
    }
}

class Alumno extends Persona
{
    constructor (nombre, edad, grupo, calificaciones)
    {
        super(nombre, edad);
        this.grupo = grupo;
        this.calificaciones = calificaciones;
        this.promedio = 0;
    }

    presentarse()
    {
        console.log("Hola mi nombre es " + this.nombre + " y tengo " + this.edad + " años y estoy en el grupo" + this.grupo);
    }

    obtenerPromedio()
    {
        let suma = 0;
        for (let i = 0; i < this.calificaciones.length; i++)
        {
            suma += this.calificaciones[i];
        }
        this.promedio = suma/this.calificaciones.length;
        console.log("el promedio de " + this.nombre + " es igual a " + this.promedio);
    }
    obtenerMaximo()
    {
        let maximo = Math.max((...this.calificaciones));
        console.log("La calificación más alta de " + this.nombre + " fue " + maximo);
    }
}

let calificaciones = [9,7,8,9,10];
let alumno1 = new Alumno("nicho", 19, "61D", calificaciones);
let profesor = new Profesor("carlos", 28, "61D", "LACE");

alumno1.presentarse();
alumno1.obtenerPromedio();
alumno1.obtenerMaximo();
profesor.presentarse();