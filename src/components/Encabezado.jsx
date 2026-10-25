// 🎫 TICKET 2 — Este componente tiene dos problemas:
//
// 1. Devuelve dos elementos sueltos (el h1 y el p), y JSX solo acepta un
//    elemento padre. Envuélvelos en un <header className="encabezado">.
//
// 2. Ningún otro archivo puede usarlo porque le falta el export default
//    al final. Míralo en TarjetaCancion.jsx si no recuerdas cómo va.

function Encabezado({ total }) {
    return (
        <header className="encabezado">
            <h1 className="logo">Mixtape</h1>
            <p className="lema">Música para los turnos largos de la estación</p>
            <p className="contador">{total} canciones en la estación</p>
        </header>
    );
}

export default Encabezado;
