# ntificaciones_crud
El API provee un sistema de gestión de notificaciones implementado con una arquitectura basada en colas

## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones
- NestJS
- MongoDB

### Variables de Entorno
```
USER: process.env.NOTIFICACIONES_CRUD_USER,
PASS: process.env.NOTIFICACIONES_CRUD_PASS,
HOST: process.env.NOTIFICACIONES_CRUD_HOST,
PORT: process.env.NOTIFICACIONES_CRUD_PORT,
DB: process.env.NOTIFICACIONES_CRUD_DB,
HTTP_PORT: process.env.NOTIFICACIONES_CRUD_HTTP_PORT,
AUTH_DB: process.env.NOTIFICACIONES_CRUD_AUTH_DB 
```
**Nota:** Las variables se pueden encontrar en el fichero src/config/configuration.ts

### Ejecución del Proyecto 


```
# 1. Obtener el repositorio de git
git clone https://github.com/udistrital/notificaciones_crud.git

# 2. Moverse a la carpeta del repositorio 
cd notificaciones_crud

# 3. Moverse a la rama **develop**
git pull origin develop && git checkout develop

# 4. Instalar dependencias
npm install 

# 5. Alimentar todas las variables de entorno que utiliza el pryecto.
NOTIFICACIONES_CRUD_HTTP_PORT=8080... 

```
### Ejecución Pruebas 
Pruebas unitarias

```
En proceso
```
## Estado CI
| Develop | Relese 0.0.1 | Master |
| -- | -- | -- |
| [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/notificaciones_crud/status.svg?ref=refs/heads/develop)](https://hubci.portaloas.udistrital.edu.co/udistrital/notificaciones_crud) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/notificaciones_crud/status.svg?ref=refs/heads/release/0.0.1)](https://hubci.portaloas.udistrital.edu.co/udistrital/notificaciones_crud) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/notificaciones_crud/status.svg)](https://hubci.portaloas.udistrital.edu.co/udistrital/notificaciones_crud) |

### Modelo de Datos
![Modelo de datos notificaciones](/database/notificaciones_crud.png)

### Licencia
This file is part of notificaciones_crud.

notificaciones_crud is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

notificaciones_crud is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with sintomas_crud. If not, see https://www.gnu.org/licenses/.

p
