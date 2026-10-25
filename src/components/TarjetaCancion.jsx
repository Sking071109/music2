function TarjetaCancion({
    titulo,
    artista,
    album,
    duracion,
    portada,
    anio,
    reproducciones,
    favorita,
    energia,
}) {
    return (
        <article className="tarjeta">
            <img
                src={portada}
                alt={`Portada del álbum ${album}`}
                className="tarjeta-portada"
            />
            {favorita && <span className="etiqueta-favorita">❤️ Favorita</span>}
            <h2 className="tarjeta-titulo">{titulo}</h2>
            <p className="tarjeta-artista">{artista}</p>
            <p className="tarjeta-detalle">Álbum: {album}</p>
            <p className="tarjeta-detalle">Duración: {duracion}</p>
            <p className="tarjeta-detalle">Año: {anio}</p>
            <p className="tarjeta-detalle">
                Reproducciones: {reproducciones.toLocaleString("es-ES")}
            </p>
            <p className="tarjeta-detalle">Lanzada hace {2026 - anio} años</p>
            <div className="barra-energia">
                <div
                    className="barra-energia-relleno"
                    style={{ width: `${energia}%` }}
                />
            </div>
        </article>
    );
}

export default TarjetaCancion;
