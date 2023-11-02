package org.generation.SA_LPDN;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Ejercicio8 {
	
	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		System.out.println("ingresa 10 numeros separados por comas: ");
		String[] inputNumbers = scn.nextLine().split(",");
		System.out.println(Arrays.toString(inputNumbers));
		
		int[] inputParse = toNumber(inputNumbers);
		
		
		System.out.println(primeSort(inputParse));
		
		scn.close();
	}
	
	public static int[] toNumber(String[] inputNumbers) {
		int[] initialNumbers = new int[10];
		
		for(int i=0; i<inputNumbers.length; i++) {
			initialNumbers[i] = Integer.parseInt(inputNumbers[i]);
		}
		
		return initialNumbers;
	}
	
	public static ArrayList<Integer> primeSort(int[] numbersArr) {
		ArrayList<Integer> primeNumbers = new ArrayList<>();
		ArrayList<Integer> nonPrimeNumbers = new ArrayList<>();
		
		for(int number: numbersArr) {
			
			if(isPrime(number)) {
				primeNumbers.add(number);
			}else {
				nonPrimeNumbers.add(number);
			}
		}
		
		for(int number: nonPrimeNumbers) {
			primeNumbers.add(number);
		}
		return primeNumbers;
		
	}
	
	public static boolean isPrime(int n) {
		
		if(n < 1) {
			return false;
		}
		for(int i=2; i<n; i++) {
			if(n % i == 0)
			return false;
		}
		
		return true;
		
	}

}
