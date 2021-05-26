# ℹ️ Descripción de la kata:
La kata consiste en representar un marcador de una bolera en un juego de bolos.

* Cada juego que intentamos representar **tiene 10 turnos** o **frames** para cada uno de los jugadores

Para ellos tendremos un marcador de 10 frames (como en el de la imagen 👇)
![https://i.ibb.co/Mk1VHtg/2021-05-19-11-13.png](https://i.ibb.co/Mk1VHtg/2021-05-19-11-13.png)

* Por cada **frame** el jugador tendrá dos tiradas para tirar los 10 **bolos** (**pins**).

* La **puntuación total** (**score**) del frame será el número total de bolos tumbados(knocked) + el bonus de hacer **plenos** (**strike**) o **semi-pleno** (**spear**).

* Un **semi-pleno** es cuando un jugador tumba los 10 bolos en 2 **lanzamientos** (**rolls**), el bonus previamente mencionado es el número de bolos tumbados en el próximo lanzamiento de este jugador.

* Un **pleno** es cuando un jugador tumba los 10 bolos en 1 solo lanzamiento, el frame se completa con ese lanzamiento. El bonus para ese frame es el valor de los próximos 2 lanzamientos que el jugador haga.

* En **el décimo frame** el jugador que haga un semi-pleno o un pleno podrá tener un lanzamiento extra para completar el frame. Sea como sea en la décimo frame no podrán realizarse más de 3 lanzamientos.

👀 Algunas de las anotaciones podría ayudar a tener un lenguaje en común para realizar la kata.

➕️ Más información: [https://kata-log.rocks/bowling-game-kata](https://kata-log.rocks/bowling-game-kata)

# Base para hacer tests

Configuración básica para empezar a hacer una kata o aprender a hacer tests en los siguientes lenguajes:

- PHP y PHPUnit
- Javascript con Jest
- Java, Junit y Mockito

# Configuración específica por lenguaje

## PHP
1. Instalar [composer](https://getcomposer.org/) `curl -sS https://getcomposer.org/installer | php`
2. `composer install` (estando en la carpeta php)
3. `./vendor/bin/phpunit`

## Javascript
1. Instalar [Node](http://nodejs.org/)
2. `npm install` (Estando en la carpeta javascript)
3. `npm test`

## Java
1. Instalar las dependencias y tests con Maven [mvn test]
2. Ejecutar los tests con el IDE

# Documentación
## Javascript
[Jest](https://jestjs.io)

## PHP
[PHPUnit](https://phpunit.readthedocs.io/)

[Prophecy](https://github.com/phpspec/prophecy) para dobles de prueba

## Java
[JUnit](https://github.com/junit-team/junit/wiki)

[Mockito](http://site.mockito.org/mockito/docs/current/org/mockito/Mockito.html)
