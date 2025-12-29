Proyecto React + Vite — Estructura de Carpetas

Este proyecto está organizado para escalar de forma ordenada, manteniendo separadas las responsabilidades entre UI, lógica, servicios, assets y páginas.

📁 Estructura del Proyecto
mi-proyecto/
├── public/                     # Archivos estáticos accesibles por URL
│   ├── logo.png                # Logo principal del proyecto
│   ├── favicon.ico             # Icono del navegador
│   ├── fonts/                  # Tipografías globales
│   ├── flags/                  # Banderas para el cambio de idioma
│   │   ├── es.png
│   │   ├── en.png
│   │   └── pt.png
│   └── icons/                  # Íconos globales para el navbar u otros
│
├── src/
│   ├── assets/                 # Archivos importados desde componentes
│   │   └── images/             
│
│   ├── components/             # Componentes reutilizables de UI
│   │   ├── Navbar/
│   │   ├── forms/
│   │   └── buttons/
│
│   ├── shared/                 # Componentes genéricos reutilizables
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── ModalBase.jsx
│
│   ├── views/                  # Vistas / páginas principales
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   └── AdminPanel.jsx
│
│   ├── context/                # Contextos globales: Auth, Idioma, Tema
│   │   └── AuthContext.jsx
│
│   ├── services/               # Lógica de conexión con APIs o Firebase
│   │   ├── authService.js
│   │   └── userService.js
│
│   ├── utils/                  # Funciones auxiliares y helpers
│   │   ├── validators.js
│   │   ├── formatDate.js
│   │   └── userRoles.js
│
│   ├── hooks/                  # Custom hooks
│   │   ├── useAuth.js
│   │   └── useLanguage.js
│
│   ├── router/                 # Configuración de rutas y protección
│   │   └── AppRouter.jsx
│
│   ├── App.jsx                 # App principal
│   └── main.jsx                # Punto de entrada de Vite
│
└── index.html

📂 ¿Cuándo usar cada carpeta?
```
Carpeta	Uso

public/	          Archivos estáticos accesibles por URL. 
                  No se importan ni procesan. Ej: logos,  
                  fuentes, banderas

src/assets/	      Imágenes y archivos que sí se importan desde
                  componentes

components/	      Partes visuales específicas (Navbar, Cards,
                  etc.)

shared/           Componentes genéricos reutilizables en todo 
                  el proyecto

views/	          Las páginas o pantallas del sitio 
                  (Home, Login, Admin, etc.)

context/	      Manejo global de estado como Auth o Idioma

services/	      Lógica que interactúa con API, Firebase o 
                  backend
utils/	          Funciones auxiliares reutilizables

hooks/	          Custom hooks (useAuth, useLanguage, etc.)

router/	          Configuración de navegación y rutas protegidas
```
🧠 Resumen de buenas prácticas

✔ Guardar logos, íconos, fuentes y banderas en /public

✔ Guardar imágenes que importes en código en src/assets/

✔ Separar lógica (services) de componentes (components)

✔ Mantener páginas completas en views

✔ Crear contexts para no pasar props por todo el proyecto

🚀 Requisitos Previos
npm create vite@latest
npm install
npm run dev