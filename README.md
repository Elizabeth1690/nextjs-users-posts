Next.js Users & Posts

Este es un proyecto basado en Next.js 14 y React 18 que consume la API de JSONPlaceholder para mostrar usuarios, publicaciones y comentarios. Se han aplicado buenas prácticas en la organización de carpetas, manejo de estado y optimización del fetch de datos.

Tecnologías utilizadas

Next.js 14: Framework de React para aplicaciones modernas.

React 18: Última versión con mejoras de rendimiento.

TypeScript: Tipado fuerte para una mejor mantenibilidad.

React Query (TanStack Query): Para manejo eficiente de caché y fetch de datos.

Tailwind CSS (opcional): Para estilos rápidos y personalizables.

ShadCN (opcional): Biblioteca de UI basada en Radix UI.

Instalación y Ejecución

Clonar el repositorio:

git clone https://github.com/tuusuario/nextjs-users-posts.git
cd nextjs-users-posts

Instalar dependencias:

npm install

# o

yarn install

Ejecutar el servidor de desarrollo:

npm run dev

# o

yarn dev

Abrir en el navegador: http://localhost:3000

Estructura del Proyecto

nextjs-users-posts/
├── public/ # Archivos estáticos
├── src/
│ ├── app/ # Rutas y estructura de Next.js 14 (App Router)
│ │ ├── users/ # Página de usuarios
│ │ │ ├── page.tsx # Listado de usuarios (Server Component)
│ │ │ ├── [id]/ # Detalle de usuario
│ │ │ │ ├── page.tsx # Página de detalle de usuario (Server Component)
│ │ │ │ ├── loading.tsx # Skeleton loader (lazy loading)
│ │ ├── posts/ # Página de publicaciones
│ │ │ ├── page.tsx # Listado de publicaciones (Server Component)
│ │ │ ├── [id]/ # Detalle de publicación
│ │ │ │ ├── page.tsx # Página de detalle de publicación (Server Component)
│ │ │ │ ├── loading.tsx # Skeleton loader (lazy loading)
│ │ ├── layout.tsx # Layout global de la app
│ │ ├── page.tsx # Página de inicio (redirección a /users)
│ ├── components/ # Componentes reutilizables
│ │ ├── UserCard.tsx # Tarjeta de usuario
│ │ ├── PostCard.tsx # Tarjeta de publicación
│ │ ├── CommentForm.tsx # Formulario para agregar comentarios (mock)
│ │ ├── SearchInput.tsx # Input de búsqueda reutilizable
│ │ ├── Button.tsx # Botón reutilizable (posible uso de ShadCN)
│ ├── hooks/ # Hooks personalizados
│ │ ├── useUsers.ts # Hook para obtener usuarios con React Query
│ │ ├── usePosts.ts # Hook para obtener publicaciones con React Query
│ │ ├── useComments.ts # Hook para obtener comentarios con React Query
│ ├── lib/ # Utilidades y configuraciones globales
│ │ ├── api.ts # Funciones para llamar a la API de JSONPlaceholder
│ │ ├── fetchers.ts # Fetchers optimizados para React Query
│ │ ├── types.ts # Tipos de datos de la API
│ ├── providers/ # Proveedores de estado/contexto
│ │ ├── QueryProvider.tsx # Proveedor de TanStack Query
│ ├── utils/ # Utilidades generales
│ │ ├── formatDate.ts # Función para formatear fechas
│ │ ├── truncateText.ts # Función para truncar texto
├── .eslintrc.js # Configuración de ESLint
├── .prettierrc # Configuración de Prettier
├── next.config.js # Configuración de Next.js
├── tsconfig.json # Configuración de TypeScript
├── package.json # Dependencias del proyecto
├── README.md # Documentación del proyecto

Decisiones Técnicas

Uso de Server Components en Users y Posts

Se optó por Server Components en las rutas /users y /posts para aprovechar:

Mejor rendimiento: Renderizado en el servidor, evitando cargar datos innecesarios en el cliente.

SEO optimizado: Genera HTML estático con los datos.

Menor carga en el cliente: Reducción del JavaScript enviado al navegador.

Manejo de Datos con React Query

Se utilizó React Query para optimizar el fetching de datos desde JSONPlaceholder. Beneficios:

Cache automático: Reduce peticiones innecesarias a la API.

Revalidación automática: Datos actualizados sin necesidad de recargar la página.

Lazy fetching: Solo se cargan los datos cuando es necesario.

Ejemplo de hook para obtener usuarios:

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";

export const useUsers = () => {
return useQuery(["users"], fetchUsers, {
staleTime: 1000 _ 60 _ 5, // Cache por 5 minutos
});
};

Uso de ShadCN (Opcional)

Se puede utilizar ShadCN para mejorar la UI con componentes accesibles y altamente personalizables.
