

<div align="center">

![Alt Text](https://i.ytimg.com/vi/58l0SURwYpc/hqdefault.jpg)
    
<!-- Encabezado -->
## 2D Raycasting
### [Prueba en línea](https://2draycastingtest.000webhostapp.com/)
### Marzo 2022
### Autor 


| Nombre | Numero De Cuenta | Correo |
|:-------------:| :-----:|:-----:|
| Edgar Josué Benedetto Godoy | `20171033802` | [Gmail](mailto:ejbg597@gmail.com) |

</div>

_____
_____

### Introducción
En un mapa 2D de arriba hacia abajo, a veces es útil calcular qué áreas son visibles desde un punto determinado. Por ejemplo, es posible que desee ocultar lo que no es visible desde la ubicación del jugador, o puede querer saber qué áreas estarían iluminadas por una antorcha. 

### Conceptos 
1. Boundary: Segmento entre dos puntos.
2. Ray: Posee posición y dirección.
3. Intercept: La intersección de un ray con un boundary debe devolver un punto. Para el calculo de la intercepción se utiliza la [fórmula de la intersección de dos rectas](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection) con la diferencia que el ray es infinito por lo que se modifica el rango de **u** que pasa de ser 0.0 ≤ u ≤ 1.0 a u > 0, por lo que se obtiene una intersección entre un ray y un boundary.

### Solución
1. ¿El rayo golpea al boundary?
2.  Obtener el punto si se golpean y sino no.
3.  Dibujar los unicamente los ray que interceptan con un boundary.


### Documentación
 
* [Paper Original](https://www.redblobgames.com/articles/visibility/)
* [Vídeo Tutorial](https://www.youtube.com/watch?v=TOEi6T2mtHo&list=LL&index=11&t=15s)
* [Libreria P5 Collide 2D](https://github.com/bmoren/p5.collide2D)
* [Documentación P5js](https://p5js.org/es/get-started/#settingUp)
