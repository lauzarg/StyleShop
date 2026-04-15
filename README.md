# StyleShop - Tienda Online de Ropa Funcional

Proyecto Angular de tienda online para ropa deportiva funcional.

## Descripción del Proyecto

StyleShop es una aplicación web moderna desarrollada con Angular, que implementa los requisitos de una tienda online completa incluyendo:

- **Home**: Página de bienvenida con productos destacados
- **Catálogo**: Visualización completa de productos en grid con filtros por categoría
- **Carrito**: Sistema completo de carrito de compras
- **Navbar**: Navegación principal con badge del carrito

## Tecnologías Utilizadas

- **Angular 17**: Framework frontend
- **Bootstrap 5**: Framework CSS
- **TypeScript**: Lenguaje de programación
- **RxJS**: Programación reactiva
- **CSS3**: Estilos personalizados

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── home/
│   │   ├── catalog/
│   │   └── cart/
│   ├── services/
│   │   ├── product.service.ts
│   │   └── cart.service.ts
│   ├── models/
│   │   └── product.model.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
├── environments/
├── index.html
├── main.ts
└── styles.css
```

## Instalación

1. Clonar o descargar el proyecto
2. Instalar dependencias:
```bash
npm install
```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Abre tu navegador en `http://localhost:4200/`

## Compilación

Para compilar el proyecto para producción:

```bash
npm run build
```

## Funcionalidades

### Home
- Navbar con logo StyleShop y enlaces de navegación
- Sección hero destacada
- Grid de productos destacados (primeros 3 productos)
- Botón para acceder al catálogo completo

### Catálogo (Shop)
- Grid responsiva de productos
- Filtros por categoría (Remeras, Pantalones, Calzado, Camperas)
- Cada producto muestra:
  - Imagen
  - Nombre
  - Descripción
  - Precio
  - Botón "Agregar al Carrito"
- Diseño responsive

### Carrito
- Vista completa de productos en el carrito
- Cantidad ajustable por producto
- Botón para eliminar productos
- Resumen de compra con total
- Opción para vaciar carrito
- Botón de checkout

### Navbar
- Logo StyleShop
- Enlaces: Home, Shop, Cart
- Badge dinámico que muestra cantidad de items en carrito
- Diseño sticky (fijo en la parte superior)

## Servicios

### ProductService
- `getProducts()`: Obtiene lista completa de productos
- `getProductById(id)`: Obtiene un producto específico

### CartService
- `addToCart(product)`: Agrega un producto al carrito
- `removeFromCart(productId)`: Elimina un producto del carrito
- `updateQuantity(productId, quantity)`: Actualiza la cantidad de un producto
- `getCartItems()`: Obtiene los items del carrito
- `getTotalPrice()`: Calcula el precio total
- `getTotalItems()`: Calcula la cantidad total de items
- `clearCart()`: Vacía el carrito

## Próximas Mejoras

- Integración con backend real
- Autenticación de usuarios
- Sistema de pagos
- Búsqueda de productos
- Reseñas y calificaciones
- Historial de pedidos
- Wishlist/Favoritos

## Autor

Desarrollado como proyecto educativo para el curso FULLSTACK II - ISPC

## Licencia

MIT
