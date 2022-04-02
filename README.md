# Muebleria Perez
## 📝 Preparación del entorno de desarrollo

###  🖥️ Softwares requeridos
- [NodeJs](https://github.com/JonasG4/SistemaDeInventario/edit/master/README.md#-nodejs) 
- [PostgreSQL](https://github.com/JonasG4/SistemaDeInventario/edit/master/README.md#-postgresql)


---
### 🟢 NODEJS
#### 📥 __Descargar Instalador__
Es necesario que todos tengamos la misma versión de *NodeJs* para evitar errores, entonces usaremos la versión `Node v16.14.2` que es la más estable actualmente. Sino lo tienen instalado será necesario que lo [descarguen aqui](https://nodejs.org/es/download/ "Ir al sitio oficial de NodeJs") si ya lo tienen instalado puden verificar usando el comando `node --version` si es un versión inferior deben actualizarlo descargando la version `Node v16.14.2` y reinstalándolo. 

---
### 🐘 __POSTGRESQL__
#### 📥 __Descargar Instalador__
Usaremos la version `psql v14.2` la cual pueden conseguir descargando el [instalador aqui](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads "Click para descargar").
Una vez descargado usen [éste tutorial](https://www.youtube.com/watch?v=cHGaDfzJyY4) para instalarlo. En ese video se usa la version `psql v11.15` pero ustedes utilizen la version `psql 14.2` los pasos de instalación son los mismos. Otra diferencia es el **pgAdmin4** que es la interfaz gráfica de postgres. A él le abre en el navegador, pero debido a la versión ahora se ejecuta como programa. **No olviden la contraseña que colocarán en el instalador, ya que sera necesaria para que ingresen a su servidor localhost**

#### ⌨️ __Agregar Postgres al path del sistema__
1. Copien esta direccion de carpeta. 
```console
C:\Program Files\PostgreSQL\14\bin
```
2. En el buscador de windows escriban `Editar las variables de entorno` y ejecuten el programa.   

![0](https://user-images.githubusercontent.com/48955198/161305276-f79bd4cc-4b6d-482c-8706-5baad4acf193.png)   

3. Aparecerá ésta ventana. Le dan click en `variables de entorno`   

![a](https://user-images.githubusercontent.com/48955198/161305422-f57b012b-065d-4144-a90a-85308f90b2bd.png)   

4. En variables del sistema seleccionan el `path` y se dan click en `Editar`   

![b](https://user-images.githubusercontent.com/48955198/161305609-edde41f3-975d-491e-8351-776cacbb701d.png)   

5. Dan click en `Nuevo` y les agregará un nuevo campo donde pegaran la dirección de carpeta que copiaron. Le dan `Aceptar`.    

![c](https://user-images.githubusercontent.com/48955198/161305838-1886006a-765a-457a-aabc-80346fc0e635.png)   

6. Abran el CMD, si ya lo tenian abierto, cierrenlo y abranlo de nuevo, y ejecuten la siguiente linea para comprobar que se agrego correctamente:
```console
psql --version
```
7. Si les imprimió la versión `psql (PostgreSQL) 14.2` entonces hasta el momento todo funciona correctamente. Ahora intente iniciar sesión en psql desde consola ejecutando la siguiente linea. Les pedirá una contraseña que será la misma que escribieron cuando lo instalaron: 
```console
psql -U postgres
```
**Si les aparece la siguiente linea asi `postgres=#` significa que todo funciona correctamente.**

---
### 💡 Software recomendados (OPCIONALES)
#### 📬 POSTMAN como alternativa a RESTMAN
Si ya tienen **RESTMAN** y se sienten cómodo usandolo entonces no es necesario que instalen **POSTMAN** 
##### 📥 __Descargar Instalador__
- [Ir al sitio oficial](https://www.postman.com/downloads/ "Click para ir al sitio oficial")

#### 🧩 Extensiones para Visual Studio Code
- Para React
  - [Snnipets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- Para Tailwinds
  - [Tailwinds IntellinSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- Otros
  - [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap) : Para tomar capturas bonitas de código
  - [Npm IntellinSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): Te da sugiere dependencias instaladas al usar `require`
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) : Para indentar el codigo

### 📖 Documentación
- [React](https://es.reactjs.org/docs/hello-world.html)
- [Tailwinds](https://tailwindcss.com/docs/installation)
- [Postgres](https://www.postgresql.org/docs/current/index.html)
