import { useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import TarjetaCancion from "./components/TarjetaCancion.jsx";
import PedidoCancion from "./components/PedidoCancion.jsx";
import PiePagina from "./components/PiePagina.jsx";
import Reproductor from "./components/Reproductor.jsx";
import Seccion from "./components/Seccion.jsx";
import { canciones } from "./data/canciones.js";

function App() {
    const [busqueda, setBusqueda] = useState("");
    const visibles = canciones.filter((cancion) =>
        cancion.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <main className="app">
            <Encabezado total={canciones.length} />
            {canciones.length > 0 ? (
                <Seccion titulo="Turno de noche">
                    <input
                        className="buscador"
                        type="text"
                        placeholder="Buscar canción..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <section className="playlist">
                        {visibles.map((cancion) => (
                            <TarjetaCancion
                                key={cancion.id}
                                titulo={cancion.titulo}
                                artista={cancion.artista}
                                album={cancion.album}
                                duracion={cancion.duracion}
                                portada={cancion.portada}
                                anio={cancion.anio}
                                reproducciones={cancion.reproducciones}
                                favorita={cancion.favorita}
                                energia={cancion.energia}
                            />
                        ))}
                    </section>
                </Seccion>
            ) : (
                <p className="playlist-vacia">Aún no hay canciones en la estación</p>
            )}
            <PedidoCancion />
            <Reproductor />
            <PiePagina />
        </main>
    );
}

export default App;
