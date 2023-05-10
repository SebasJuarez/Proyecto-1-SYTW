## Proyecto 1

Sistemas y Tecnologias Web

El proyecto fue utilizanfo como base la pagina: [Ticket ASA](https://ticketasa.gt)

El link a Firebase es: [Firebase](https://proyecto1-sytw-5b6d8.web.app )

--------------------------------------------

## Components
El proyecto se dividio en varios componentes. Dos de ellos fueron el footer y la barra de navegacion.

### Media
En la carpeta de media se pueden ver las imagenes que se utilizaron en el proyecto aunque la mayoria de las imagenes fueron importadas de la pagina web.

### Footer
El footer es un componente que crea en la pagina principal toda la informacion de la parte de hasta abajo de la pagina web con los datos de la direccion de correo, direccion fisica y el numero de telefono. 

Este componente no genera nada de gran importancia ya que solo crea diferentes divs se pueden adjuntar en diferentes paginas si es que fuera necesario.

### Navbar
Luego, dentro de la carpeta de Navbar, se encuentra el componente que genera la barra de navegacion entre las "paginas". No tienen links a los que lleve pero se les puede agregar.
Este tiene dos archivos. El primero Navbar.jsx, maneja todos los datos y lo que se va renderizando en la pagina. Lo que se ve en el Navbar.scss son los estilos y como es que se configuro esta barra para que se viera lo mas parecido posible.

Lo mas importante de Navbar es que utliza la siguiente funcion:
```bash
{MenuItems.map((item, index) => {
            return (
              <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.Title}
                  </a>
                </li>
            );
          })}
```
Esta funcion hace que los items de los datos que se agregan en un archivo llamado "MenuItems", que es solo un componente como de lista, se generen dentro de la barra de navegacion automaticamente.
En la funcion se puede ver como es que se llama al nombre del index y el item.

### APP
Luego se tiene el documento de app que es el que maneja toda la pagina web.
 #### SimpleImageSlider
 este es un componente que se intalla dentro de la pagina principal en la que se crea un slider de las imagenes que se importan. Se agregan los links de las imagenes, sean locales o en linea, y luego dentro de los parametros de SIS, se agregan la altura y el ancho, como la variable de las imagenes.
 ```bash
 <SimpleImageSlider
         width={1481}
         height={580}
         images={sliderImages}
         showNavs={true}
      />
 ```
Para iniciar el proyecto localmente se tiene que iniciar en consola con el codigo que se presenta a continuacion que crea una pagina local en http://localhost:5173.

el codigo es:
```bash
yarn run dev
```
En el caso de que se quiera instalar algo, como algunas dependencias, se debe introducir como:

```bash
npm install (la dependencia o el componente que se quiere instalar)
```
Ya con esto se puede modificar o arreglar algo si es que se necesitara.

---------------------------------------------------------------------------------------------------------------------------------------------------

Como adicional, se pueden tomar en cuenta algunas tecnologias como algunos de los botones que tienen simbolos de redes sociales. Estos iconos fueron importados de un link de una pagina de iconos que los genera todos, para la creacion de los cuadros, no es mas que un background color de los componentes de cada uno.

El link de estos simbolos, que se debe agregar en el HTML, es:

```bash
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```
Y con esto ya no deberia haber problemas con la generacion de los simbolos.

Las tecnologias que se utilizaron en este proyecto fueron:

### React
Esta es la tecnologia base de mi pagina web, maneja todas las funciones y mejora la IHC.
### JavaScript (JSX)
Esta extencion no es la misma que la javascrips que se utiliza normalmente ya que el JSX es una que se utiliza de manera constante con React ya que ayuda a "describir cómo debería ser la interfaz de usuario"
### Vite
Es un compilador que mejora el tiempo y el uso de react ya que actualiza de manera constante el trabajo y se pueden ver los cambios inmediatamente
### Sass
Es una mejora a CSS ya que cambia la manera en que se ordenan los documentos y mejora la interaccion con los desarrolladores.
### Firebase
Firebase solo se uitiliza para que se pueda mostrar en la web mi pagina.
