import { useState } from "react"
import "./Pacote.css"

export default function Pacote(){
    const [largura, setLargura] = useState(5);
    const [altura, setAltura] = useState(10);
    const [profundidade, setProfundidade] = useState(10);
    const [peso, setPeso] = useState(10);
    const [custo, setCusto] = useState(10);

    return <dl className="pacote">
        <dt>Largura (cm)</dt>
        <dd onClick={(e) => {
            setLargura(largura+1);
        }}>{largura}</dd>
        <dt>Altura (cm)</dt>
        <dd>{altura}</dd>
        <dt>Profundidade (cm)</dt>
        <dd>{profundidade}</dd>
        <dt>Peso (g)</dt>
        <dd>{peso}</dd>
        <dt>Custo</dt>
        <dd>{(largura*0.50).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</dd>
    </dl>
}