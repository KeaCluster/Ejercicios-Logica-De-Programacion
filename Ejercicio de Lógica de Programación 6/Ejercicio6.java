package org.generation.SA_LPDN;

import java.util.Scanner;

public class Ejercicio6 {
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese un string: ");
		String inputString = scanner.nextLine();
		
		System.out.println( reverseString(inputString) );
		scanner.close();
		}
		
	
	public static String reverseString(String input) {
		String outputString = "";
		for(int i = 1; i <= input.length(); i++) {
			 outputString += input.charAt(input.length()-i);
		}
		return outputString;
	}
}
