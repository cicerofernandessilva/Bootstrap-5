Funcion saludar
	Mostrar "Hola! Bienvenido!";
FinFuncion

Funcion saludar2(user)
	Mostrar "Hola! Bienvenido ", user, "!";
FinFuncion
Funcion soma(n1,n2)
	Mostrar n1 + n2;
FinFuncion


Algoritmo sin_titulo
	
//	textoUno = 'Mi primer texto';
//	
//	mostrar textoUno;
//	
//	numeroUno = 10 ;
//	
//	Mostrar numeroUno;
//	
//	booleano = Verdadero;
//	
//	Mostrar booleano;
//	
//	Mostrar "escribe su nombre";
//	leer nombreUser;
//	
//	Mostrar "Bienvenido ", nombreUser, "!";
//
//	mostrar 'Escribe un número ";
//	
//	leer a;
//	
//	mostrar 'Escribe otro número ";
//	
//	leer b;
//	
//	
//	resultado = a + b;
//	
//	Mostrar "A soma é ", resultado, "!";
	
//	soma = 10 + 20;
//	Mostrar soma;
//	
//	div = 10 / 2;
//	Mostrar div;
//	
//	sub = 10 - 2;
//	Mostrar sub;
//	
//	mult = 10 * 2;
//	Mostrar mult;
//	
//	// relacionais
//	
//	mayorque = 10 > 20;
//	
//	Mostrar mayorque
//	
//	menorque = 10 < 20;
//	Mostrar menorque;
//	
//	mayorIgual = 10 >= 5;
//	Mostrar mayorIgual;
//	distintoDif = 10 <> 11;
//	Mostrar distintoDif
//	
//	opLogicos = 10 == 10 y 20 > 10;
//	Mostrar opLogicos
//	opLogicos2 = 10 <> 10 o 20 >= 10;
//	Mostrar "opLogicos2 ", opLogicos2;
//	opLogicos3 = 10 <> 10 y 20 >= 10;
//	Mostrar "opLogicos3 ", opLogicos3;
//	Mostrar "Escribe un numero del 1 al 10 ";
//	
//	leer nUser;
//	
//	Si ( nUser <= 10 )
//		Mostrar "Cunpriste el objetivo";
//	SiNo
//		Mostrar "mal mal mal";
//	FinSi
	
//	Mostrar "Escolha una opcione";
//	
//	Mostrar "1. Bueno";
//	Mostrar "2. Mejor";
//	Mostrar "3. Gracias";
//	
//	Leer opcionElegida;
//	
//	Segun opcionElegida Hacer
//		
//		1:
//			Mostrar "Bueno, gracias!"
//		2:
//			Mostrar "Hejor que bueno, gracias!"
//		3:
//			Mostrar "Gracias! No volte nuevamente!"
//		De Otro Modo:
//			Mostrar "Opcione no valida!"
//	FinSegun
//	n = 0;
//	
//	Mientras (n < 10 ) Hacer
//		Mostrar n;
//		n = n + 1;
//	FinMientras
	//	Mostrar n
	
	//jogo de adivinhar
//	nAzar = Aleatorio(1, 10);
//	Mostrar nAzar;
//	vidas = 3;
//	Mostrar "Advine el número rango de 1 al 10"
//	Mostrar "Quantidade de vidas ", vidas;
//	Mostrar "Ingrese un número"
//	Leer nUser;
//	
//	Mientras ( nAzar <> nUser y vidas > 1 ) Hacer
//		Si ( nAzar > nUser )
//			Mostrar "¡Cometiste un error! ¡El valor introducido es demasiado bajo!"
//
//			vidas = vidas - 1;
//			Mostrar "Quantidade de vidas ", vidas;
//		SiNo
//			Mostrar "¡Cometiste un error! ¡El valor introducido es demasiado alto!"
//			vidas = vidas - 1;
//			Mostrar "Quantidade de vidas ", vidas;
//		FinSi
//		Leer nUser
//		
//	FinMientras
//	
//	Si ( nAzar == nUser )
//		Mostrar "Felicitaciones Advinaste!";
//	SiNo
//		Mostrar "Se te acabo las vidas!"
//	FinSi
	
	//array
	
//	Dimension frutas[4]
//	frutas[1] = "manzana";
//	frutas[2]= "platano";
//	frutas[3]= "sandia";
//	frutas[4]= "mani";
//	
//	Mostrar frutas[1]
//	Mostrar frutas[2]
//	Mostrar frutas[3]
//	Mostrar frutas[4]
//	
//	//for com array
//	Para i Desde 1 Hasta 4 Hacer
//		Mostrar "for ", frutas[i];
//	FinPara
//	Para Cada elemento de frutas Hacer
//		Mostrar "elemento ", elemento;
//	FinPara
	//Funcion 
	saludar();
	Mostrar "digita su nomebre";
	Leer user;
	saludar2(user);
	Mostrar "Digite o primeiro número da soma";
	Leer n1;
	Mostrar "Digite o segundo número da soma";
	Leer n2;
	Mostrar "Muy bueno ", user,"!";
	Mostrar "O resultado da soma foi ";soma(n1,n2);
	
	
	
	
FinAlgoritmo
