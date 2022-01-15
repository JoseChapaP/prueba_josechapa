# Prueba técnica.

Para probar este repositorio:

1. Clonar este repositorio en local:

```console
git clone https://github.com/JoseChapaP/prueba_josechapa.git
```

2. Entra en el directorio del proyecto:

```console
cd prueba-tecnica
```

3. Instala las dependencias:

```console
npm install
```

4. Lanza el servidor para ver la aplicación en http://localhost:4200/:

```console
ng serve
```

La página principal cargara el listado de Indicadores económicos disponibles

5. puede simular errores en los servicios cambiando la url de la API en el archivo Services/indicadores.service.ts:

```console
por ejemplo https://mindicador.cl/api/ cambiar a https://mindicador.cl/api2/
```
