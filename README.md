# The art of generality 
## English
This is a simple gallery webpage with login/reset-password/register and a gallery, nothing to complex but a good first start imho
- Usage of localstorage
- Uses preflight template (Tailwindcss base css) to start with a good css
- To load initial images to a gallery, create in assets a gallery folder and load images there, load a files.json with the following format, where the name of the image is the name of the property 
```json
"p5v8DENKY60": {
    "user_name": "Reinhart Julian",
    "user_url": "https://unsplash.com/@reinhartjulian?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit",
    "photo_url": "https://unsplash.com/photos/p5v8DENKY60?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
  },
  "S35L8gdaHxA": {
    "user_name": "Joel Muniz",
    "user_url": "https://unsplash.com/@jmuniz?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit",
    "photo_url": "https://unsplash.com/photos/S35L8gdaHxA?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
  },
  ...
  }
```
## Español
Esto es una simple pagina de galeria con Inicio de sesion/Reseteo de contraseña/Registro y una galeria, nada complejo pero un buen inicio en mi opinion
- Usa localstorage
- Uso el CSS de tailwindcss de preflight como base del CSS
- Para cargar imagenes iniciales a la galeria, en assets crear una carpeta folder, crear un archivo .json del siguiente formato, donde los nombres de las propiedades son el nombre de la foto.

```json
"p5v8DENKY60": {
    "user_name": "Reinhart Julian",
    "user_url": "https://unsplash.com/@reinhartjulian?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit",
    "photo_url": "https://unsplash.com/photos/p5v8DENKY60?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
  },
  "S35L8gdaHxA": {
    "user_name": "Joel Muniz",
    "user_url": "https://unsplash.com/@jmuniz?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit",
    "photo_url": "https://unsplash.com/photos/S35L8gdaHxA?utm_source=unsample&utm_medium=referral&utm_campaign=api-credit"
  },
  ...
  }
```
