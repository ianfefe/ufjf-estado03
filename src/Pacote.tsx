import { useState } from "react"
import "./Pacote.css"

export default function Pacote() {

    const [pacote, setPacote] = useState({
        altura: 7,
        largura: 7,
        profundidade: 7,
        peso: 7
    });

    // const [largura, setLargura] = useState(5);
    // const [altura, setAltura] = useState(5);
    // const [profundidade, setProfundidade] = useState(5);
    // const [peso, setPeso] = useState(200);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "largura") {
            setPacote({
                ...pacote,
                largura: e.target.valueAsNumber
            });
        }
        else if (e.target.name === "altura") {
            const novoPacote = structuredClone(pacote);
            novoPacote.altura = e.target.valueAsNumber;
            setPacote(novoPacote);
        }
        else if (e.target.name === "profundidade") {
            const novoPacote = structuredClone(pacote);
            novoPacote.profundidade = e.target.valueAsNumber;
            setPacote(novoPacote);
        }
        else if (e.target.name === "peso") {
            const novoPacote = structuredClone(pacote);
            novoPacote.peso = e.target.valueAsNumber;
            setPacote(novoPacote);
        }
    }


    return <dl className="pacote">
        <dt>Largura (cm)</dt>
        <dd><input type="number" value={pacote.largura} min="5" step="1" onChange={onChange} name="largura" /></dd>
        <dt>Altura (cm)</dt>
        <dd><input type="number" value={pacote.altura} min="5" step="1" onChange={onChange} name="altura" /></dd>
        <dt>Profundidade (cm)</dt>
        <dd><input type="number" value={pacote.profundidade} min="5" step="1" onChange={onChange} name="profundidade" /></dd>
        <dt>Peso (g)</dt>
        <dd><input type="number" value={pacote.peso} min="200" step="1" onChange={onChange} name="peso" /></dd>
        <dt>Custo</dt>
        <dd>{(pacote.largura * pacote.peso * pacote.altura * pacote.profundidade * 0.0005).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</dd>
    </dl>
}