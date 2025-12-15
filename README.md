# Proyecto Final - TalentoTech Backend API

Una API RESTful para gestión de productos con autenticación JWT, construida con Node.js, Express y Firebase.

## 🚀 Características

- **Autenticación JWT**: Sistema de login con tokens JWT
- **Gestión de Productos**: CRUD completo de productos
- **Base de Datos Firebase**: Firestore como base de datos NoSQL
- **Middleware de Autenticación**: Protección de rutas con JWT
- **CORS Habilitado**: Soporte para requests cross-origin
- **Variables de Entorno**: Configuración segura con dotenv

## 📋 Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase con proyecto configurado

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/lukasebastianherrera/ProyectoFinal-BackEnd-Node-TalentoTech
   cd proyecto-final
   ```

2. **Instala las dependencias**
   ```bash
   npm install express cors body-parser firebase dotenv jsonwebtoken
   ```

3. **Configura las variables de entorno**
   - Copia el archivo `.env-example` a `.env`
   - Completa las variables requeridas:
     ```env
     PORT=3005
     FIREBASE_API_KEY=tu_api_key
     FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
     FIREBASE_PROJECT_ID=tu_proyecto_id
     FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
     FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
     FIREBASE_APP_ID=tu_app_id
     JWT_SECRET_KEY=tu_clave_secreta_jwt
     ```

4. **Configura Firebase**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilita Firestore Database
   - Obtén las credenciales del proyecto

## ▶️ Ejecución

```bash
npm start
```

El servidor se iniciará en `http://localhost:3005` (o el puerto configurado en `.env`).

## 📚 Endpoints de la API

### Autenticación

#### POST /auth/login
Inicia sesión y obtiene un token JWT.

**Request Body:**
```json
{
  "email": "user@email.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Productos (Requieren Autenticación)

Todos los endpoints de productos requieren el header `Authorization: Bearer <token>`

#### GET /api/products
Obtiene todos los productos.

**Response:**
```json
[
  {
    "id": "1",
    "name": "Producto 1",
    "price": 100
  }
]
```

#### GET /api/products/:id
Obtiene un producto por ID.

#### POST /api/products/create
Crea un nuevo producto.

**Request Body:**
```json
{
  "name": "Nuevo Producto",
  "price": 150
}
```

#### PUT /api/products/:id
Actualiza un producto existente.

**Request Body:**
```json
{
  "name": "Producto Actualizado",
  "price": 200
}
```

#### DELETE /api/products/:id
Elimina un producto.

## 🏗️ Estructura del Proyecto

```
proyecto-final/
├── src/
│   ├── controllers/
│   │   ├── authController.js      # Controlador de autenticación
│   │   └── productsController.js  # Controlador de productos
│   ├── middlewares/
│   │   └── authentication.js      # Middleware JWT
│   ├── models/
│   │   ├── firebase.js            # Configuración Firebase
│   │   └── productsModel.js       # Modelo de productos
│   ├── routes/
│   │   ├── authRoutes.js          # Rutas de autenticación
│   │   └── productsRoutes.js      # Rutas de productos
│   └── utils/
│       └── tokenGenerator.js      # Utilidad para generar tokens JWT
├── .env                           # Variables de entorno (no versionado)
├── .env-example                   # Ejemplo de variables de entorno
├── .gitignore                     # Archivos ignorados por Git
├── index.js                       # Punto de entrada de la aplicación
├── package.json                   # Dependencias y scripts
└── README.md                      # Este archivo
```

## 🔧 Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Express.js**: Framework web
- **Firebase/Firestore**: Base de datos NoSQL
- **JSON Web Tokens (JWT)**: Autenticación
- **CORS**: Soporte cross-origin
- **dotenv**: Gestión de variables de entorno

## 🧪 Testing

Para probar la API, puedes usar herramientas como:

- **Postman**: Para hacer requests HTTP
- **Thunder Client** (extensión de VS Code)
- **curl**: Desde línea de comandos

### Ejemplo de uso con curl:

```bash
# Login
curl -X POST http://localhost:3005/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@email.com","password":"password123"}'

# Obtener productos (con token)
curl -X GET http://localhost:3005/api/products \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

## 📝 Notas

- Las rutas de productos están protegidas por autenticación JWT
- Los datos se almacenan en Firebase Firestore
- El usuario por defecto es `user@email.com` / `password123`
- En producción, implementa validaciones más robustas y encriptación de contraseñas

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

**Desarrollado como proyecto final del curso Backend - TalentoTech**
