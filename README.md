# 🎧 Mixtape — Tu primera app en React

Los turnos en la Estación Umbral son largos y en el hangar solo se oye metal y soldadura. Nova quiere música mientras trabaja, así que la tripulación va a construir su propia app de música: **Mixtape**.

Este proyecto te acompaña **todo el Módulo 1**. Cada clase le agregamos piezas nuevas, así que guárdalo bien (idealmente en tu GitHub): la próxima clase arrancamos desde donde lo dejes hoy.

Hoy montamos la primera pieza: una tarjeta que muestra la canción que está sonando.

---

## 🛠️ Cómo arrancar el proyecto

1. Descomprime el proyecto y ábrelo en VS Code.
2. Abre la terminal: menú **Terminal → New Terminal**.
3. Instala las dependencias (crea la carpeta `node_modules`):

```bash
pnpm install
```

4. Arranca el servidor:

```bash
pnpm dev
```

5. Abre la dirección que muestra la terminal, normalmente `http://localhost:5173` (Ctrl + clic).
6. Para apagarlo: **Ctrl + C** en la terminal.

> ⚠️ La primera vez vas a ver una pantalla de error. Es a propósito: arreglarla es el Ticket 1.

**Si algo falla:**

- **La página sale en blanco:** abre la consola del navegador (F12 → Console) y lee el error.
- **El puerto 5173 está ocupado:** Vite toma otro solo. Usa la dirección que muestra la terminal.
- **`node -v` muestra una versión menor a 20.19:** descarga la versión LTS desde [nodejs.org](https://nodejs.org).

---

## 🗂️ Estructura del proyecto

```
mixtape/
├── public/
│   └── portadas/               ← imágenes de las portadas
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx      ← 🎫 Ticket 2
│   │   └── TarjetaCancion.jsx  ← 🎫 Ticket 1 y 3
│   ├── data/
│   │   └── cancion.js          ← los datos de la canción
│   ├── App.jsx                 ← 🎫 Ticket 2
│   ├── index.css               ← estilos (ya listos, no los toques)
│   └── main.jsx                ← monta la app (no se toca)
└── index.html
```

---

## 🎫 Tickets

### Ticket 1 — Reparar la tarjeta

**Archivo:** `src/components/TarjetaCancion.jsx`

La tarjeta tiene **3 errores de JSX**. Arréglalos uno por uno.

**Pistas:**

- Lee la pantalla de error de Vite: te dice el archivo y qué etiqueta está fallando.
- Cuando la pantalla de error desaparezca, abre la consola (F12). Si hay un aviso en rojo, ahí hay otro error.
- Repasa las reglas de JSX de la clase: cómo se cierran las etiquetas, cómo se escribe `class` y cómo se muestra el valor de una variable.

**Listo cuando:** la tarjeta muestra la portada, el título **"Luces del Hangar"** (no la palabra "titulo") y la consola no tiene avisos.

---

### Ticket 2 — Conectar el encabezado

**Archivos:** `src/components/Encabezado.jsx` y `src/App.jsx`

El componente `Encabezado` ya está escrito, pero tiene dos problemas y nadie lo está usando.

1. En `Encabezado.jsx`, envuelve el `h1` y el `p` en un `<header className="encabezado">`.
2. Agrega `export default Encabezado;` al final del archivo.
3. En `App.jsx`, impórtalo:

```jsx
import Encabezado from "./components/Encabezado.jsx";
```

4. Muéstralo dentro del `<main>`, justo arriba de `<TarjetaCancion />`.

**Listo cuando:** arriba de la tarjeta aparece el logo **Mixtape** con su frase.

---

### Ticket 3 — Los datos, desde afuera

**Archivos:** `src/components/TarjetaCancion.jsx` y `src/data/cancion.js`

La tarjeta tiene los datos escritos adentro, pero ya existen en `src/data/cancion.js` como exports nombrados.

1. En `TarjetaCancion.jsx`, borra las tres constantes (`titulo`, `artista` y `portada`).
2. Impórtalas al principio del archivo:

```jsx
import { titulo, artista, portada } from "../data/cancion.js";
```

Los `../` son porque `TarjetaCancion.jsx` está dentro de `components/`: primero sales a `src/` y desde ahí entras a `data/`.

3. En `cancion.js` hay dos datos más que la tarjeta no muestra: `album` y `duracion`. Agrégalos al `import` y muéstralos debajo del artista, cada uno en su párrafo:

```jsx
<p className="tarjeta-detalle">Álbum: {album}</p>
<p className="tarjeta-detalle">Duración: {duracion}</p>
```

**Listo cuando:** la tarjeta se ve igual que antes, más el álbum y la duración, y `TarjetaCancion.jsx` ya no tiene datos escritos a mano.

---

### ⭐ Bonus — Los controles del reproductor

Crea un componente nuevo: `src/components/Controles.jsx`.

- Una función `Controles` que devuelva este JSX:

```jsx
<div className="controles">
    <button className="boton-control">⏮</button>
    <button className="boton-control">▶</button>
    <button className="boton-control">⏭</button>
</div>
```

- Expórtalo por defecto, impórtalo en `TarjetaCancion.jsx` y muéstralo al final de la tarjeta, después de la duración.

Los estilos ya están en `index.css`. Los botones todavía no hacen nada: en la lección 3 les damos vida.

---

## ✅ Antes de terminar

- [ ] La app corre con `pnpm dev` sin pantalla de error.
- [ ] La consola (F12) no muestra avisos en rojo.
- [ ] Se ven el encabezado y la tarjeta con título, artista, álbum y duración.
- [ ] Guardaste el proyecto (o lo subiste a tu GitHub): lo necesitas la próxima clase.
