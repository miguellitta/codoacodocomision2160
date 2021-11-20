package javaao;

import java.util.Scanner;

public class JavaAO {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su apellido");
        String apellido = entrada.nextLine();
        System.out.println("Ingrese su edad");
        int edad = entrada.nextInt();
        entrada.nextLine();
        System.out.println("Ingrese su hobbie");
        String hobbie = entrada.nextLine();
        System.out.println("Ingrese su editor de codigo preferido");
        String edPref = entrada.nextLine();
        System.out.println("Ingrese el sistema operativo que utiliza");
        String soUt = entrada.nextLine();
        System.out.println("Bienvenid@! " + nombre);
        System.out.println("Su edad es: " + edad);
        System.out.println("Su hobbie es: " + hobbie);
        System.out.println("Su editor de codigo preferido es: " + edPref);
        System.out.println("El sistema operativo que utiliza es: " + soUt);
    }
    
}
