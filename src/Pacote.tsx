import { useState } from "react"
import "./Pacote.css"

export default function Pacote() {
    const [largura, setLargura] = useState(5);
    const [altura, setAltura] = useState(5);
    const [profundidade, setProfundidade] = useState(5);
    const [peso, setPeso] = useState(200);

    function onChange(e){
        if(e.target.name = "largura"){
            setLargura(e.target.valueAsNumber)
        }
        else if(e.target.name = "altura"){
            setAltura(e.target.valueAsNumber)
        }
        else if(e.target.name = "profundidade"){
            setProfundidade(e.target.valueAsNumber)
        }
        else if(e.target.name = ""){
            setAltura(e.target.valueAsNumber)
        }
    }   


    return <dl className="pacote">
        <dt>Largura (cm)</dt>
        <dd><input type="number" value={largura} min="5" step="1" onChange={onChange} /></dd>
        <dt>Altura (cm)</dt>
        <dd><input type="number" value={altura} min="5" step="1" onChange={(evento) => {
            setAltura(evento.target.valueAsNumber);
        }} /></dd>
        <dt>Profundidade (cm)</dt>
        <dd><input type="number" value={profundidade} min="5" step="1" onChange={(evento) => {
            setProfundidade(evento.target.valueAsNumber);
        }} /></dd>
        <dt>Peso (g)</dt>
        <dd><input type="number" value={peso} min="200" step="1" onChange={(evento) => {
            setPeso(evento.target.valueAsNumber);
        }} /></dd>
        <dt>Custo</dt>
        <dd>{(largura * peso * altura * profundidade * 0.0005).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</dd>
    </dl>
}