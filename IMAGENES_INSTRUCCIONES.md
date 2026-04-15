<!-- Instrucciones para agregar imágenes de productos -->
# Instrucciones - Imágenes de Productos


## Ubicación de Imágenes

Las imágenes deben colocarse en la carpeta:
```
/src/assets/images/
```

## Imágenes Necesarias

El proyecto requiere las siguientes imágenes de productos:

1. **product1.jpg** - Remera Deportiva Azul (250x250px recomendado)
2. **product2.jpg** - Pantalón Running Negro (250x250px recomendado)
3. **product3.jpg** - Zapatillas Running Pro (250x250px recomendado)
4. **product4.jpg** - Campera Impermeable (250x250px recomendado)
5. **product5.jpg** - Shorts Deportivos (250x250px recomendado)
6. **product6.jpg** - Medias Deportivas (250x250px recomendado)

## Opción Alternativa - Usar Placeholders Online

Si aún no tienes las imágenes, puedes usar servicios de placeholder online:

1. Descarga temporalmente imágenes de placeholders:
   - https://placehold.co/250x250
   - https://via.placeholder.com/250x250
   
2. O modifica el ProductService para usar URLs directas de placeholders:

```typescript
image: 'https://placehold.co/250x250?text=Product+1'
```

## Archivo de Logo

También se necesita un logo:
```
/src/assets/logo.png
```

Tamaño recomendado: 40x40px (según el navbar)

## Paso a Paso

1. Crea la carpeta `/src/assets/images/` si no existe
2. Coloca tus imágenes de productos (.jpg o .png)
3. Asegúrate de que los nombres coincidan con los especificados en ProductService
4. El proyecto se ejecutará normalmente con las imágenes a la vista

¡Listo! El proyecto funcionará correctamente una vez agregues las imágenes.
