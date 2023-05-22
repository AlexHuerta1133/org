import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    // Metodos map -> arreglo.map( (equipos, index) => {
    //      return <option></option>
    // }) El metodo map toma el arreglo y lo retorna en otro arreglo 

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}
export default ListaOpciones