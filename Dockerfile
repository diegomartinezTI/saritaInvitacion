# Usa una imagen base con Node.js
FROM node:18 AS build

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias y la configuración del proyecto
COPY package*.json ./
RUN npm install  --save-dev css-loader style-loader

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación React
RUN npm run build

# Usa una imagen base ligera para servir los archivos estáticos
FROM nginx:alpine

# Copiar los archivos construidos a la carpeta de Nginx
COPY --from=build /app/build /usr/share/nginx/html
# Copiar la configuración de Nginx al contenedor
COPY nginx.conf /etc/nginx/nginx.conf
# Exponer el puerto en el que Nginx servirá la aplicación
EXPOSE 8080

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]