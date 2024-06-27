# Instalacion de node.js

Debemos revistar que tengamos la ultima version de node.js

```
node -v

```

Luego debemos instalar en la pagina web de node.js

```
https://nodejs.org/en
```

despues de la instalacion verificamos e intalamos en git bash

```
 npm install -g json-server

```
despues creamos una carperta vacia llamada server, en ella creamos un archivo tipo db.json, en el se van a colocar los datos que irian en la base de datos (tablas) con esto simulamos el backend

iniciamos el servidor con el siguiente comando

```
 npx json-server db.json
```
y para apagar el servidor con control C, la url del servidor es la siguiente

```
http://127.0.0.1:3000/   ----  http://localhost:3000/
```
