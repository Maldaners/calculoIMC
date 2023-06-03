# Cálculo do Índice de Massa Corporal
import os
 
altura = float(input("Digite sua altura em metros: "))
peso = float(input("Digite seu peso em Kg: "))
 
imc = peso / altura**2
 
print("Seu IMC é: %.4f" % imc)
 
if imc < 18.5:
	print("Magreza")
elif 18.5  <= imc  < 24.9:
	print("Normal")
elif 24.9 <= imc < 30:
	print("Sobrepeso")
elif imc > 30:
	print("Obesidade")

 