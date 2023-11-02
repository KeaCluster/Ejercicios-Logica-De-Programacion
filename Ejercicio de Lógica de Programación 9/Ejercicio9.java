package org.generation.SA_LPDN;

import java.util.HashMap;
import java.util.Scanner;

	

public class Ejercicio9 {
	
	
	public static void main(String[] args) {

		Scanner scn = new Scanner(System.in);
		System.out.println("ingresa un palabra en español para obtener su traducción: ");
		String inputWord = scn.nextLine();
		
		System.out.println(printTranslate(inputWord));
		scn.close();
		
	}
	
	public static String printTranslate(String word) {
		if(dictionary().containsKey(word)) {
			return dictionary().get(word);
		} else {
			return "la palabra no se encuantra en el diccionario";
		}
	}
	
	public static HashMap<String, String> dictionary(){
		HashMap<String, String> dictionary = new HashMap<>();
		dictionary.put("tener", "have");
		dictionary.put("poder", "can");
		dictionary.put("pensar", "think");
		dictionary.put("trabajar", "work");
		dictionary.put("tiempo", "time");
		dictionary.put("ojo", "eye");
		dictionary.put("semana", "week");
		dictionary.put("dia", "day");
		dictionary.put("mano", "hand");
		dictionary.put("teclado", "keyboard");
		dictionary.put("vida", "life");
		dictionary.put("nuevo", "new");
		dictionary.put("despues", "after");
		dictionary.put("siempre", "always");
		dictionary.put("cantidad", "amount");
		dictionary.put("atencion", "attention");
		dictionary.put("reina", "queen");
		dictionary.put("hermano", "brother");
		dictionary.put("comprar", "buy");
		dictionary.put("book", "libro");
		
		return dictionary;
	}
}
