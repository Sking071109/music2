import { useState } from "react";

import { canciones } from "../data/canciones.js";
import { IconoPlay, IconoPausa, IconoAnterior, IconoSiguiente } from "./Iconos.jsx";

// ── Pieza de Nova: ya viene lista, no la cambies ─────────────────────────
// El <audio> es un elemento especial: cambiar un estado no lo hace sonar.
// Hay que darle la orden "play" o "pause" directamente, y esta función
// busca el audio en la página y se la da. Tú solo la llamas:
//     darOrden("play")    o    darOrden("pause")
function darOrden(orden) {
    const audio = document.getElementById("audio-mixtape");
    if (!audio) return;

    if (orden === "play") {
        audio.play().catch(() => {});
    } else {
        audio.pause();
    }
}
// ─────────────────────────────────────────────────────────────────────────

function Reproductor() {
    const [reproduciendo, setReproduciendo] = useState(false);

    const [indice, setIndice] = useState(0);
    const [progreso, setProgreso] = useState(0);

    // La canción que está sonando sale del array, según el índice
    const cancion = canciones[indice];

    // Ticket 1
    function alternar() {
        darOrden(reproduciendo ? "pause" : "play");
        setReproduciendo(!reproduciendo);
    }

    // Ticket 2
    function siguiente() {
        setIndice(indice === canciones.length - 1 ? 0 : indice + 1);
        setProgreso(0);
    }

    // Ticket 2
    function anterior() {
        setIndice(indice === 0 ? canciones.length - 1 : indice - 1);
        setProgreso(0);
    }

    return (
        <div className="reproductor">
            {/* El audio no se ve: suena. key hace que se cree uno nuevo cada vez que cambia la canción,
                y autoPlay hace que la nueva arranque sola si la anterior estaba sonando. */}
            <audio
                id="audio-mixtape"
                key={indice}
                src={cancion.audio}
                autoPlay={reproduciendo}
                onEnded={siguiente}
                onTimeUpdate={(e) => {
                    const audio = e.currentTarget;
                    if (Number.isFinite(audio.duration) && audio.duration > 0) {
                        setProgreso((audio.currentTime / audio.duration) * 100);
                    }
                }}
            ></audio>

            <div className="reproductor-info">
                <img src={cancion.portada} alt="Portada" className="reproductor-portada" />

                <div className="reproductor-textos">
                    <p className="reproductor-estado">
                        {reproduciendo ? "Sonando ahora" : "En pausa"}
                    </p>
                    <p className="reproductor-titulo">{cancion.titulo}</p>
                    <p className="reproductor-artista">{cancion.artista}</p>
                    {!cancion.audio && <p className="reproductor-aviso">Esta canción no tiene audio</p>}
                </div>

                {reproduciendo && (
                    <div className="ecualizador">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </div>

            <div className="barra-progreso">
                <div
                    className="barra-progreso-relleno"
                    style={{ width: `${progreso}%` }}
                ></div>
            </div>

            <div className="controles">
                <button className="boton-control" aria-label="Anterior" onClick={anterior}>
                    <IconoAnterior />
                </button>
                <button className="boton-control boton-play" aria-label="Play o pausa" onClick={alternar}>
                    {reproduciendo ? <IconoPausa /> : <IconoPlay />}
                </button>
                <button className="boton-control" aria-label="Siguiente" onClick={siguiente}>
                    <IconoSiguiente />
                </button>
            </div>
        </div>
    );
}

export default Reproductor;
