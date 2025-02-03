import {PacoteChaveType, PacoteType} from "./Pacote";

type PacoteAction = CriaPacoteAction | EditaPacoteAction | ExcluiPacoteAction;

type CriaPacoteAction = {
    type: "criar",
    id: string    
}
type ExcluiPacoteAction = {
    type: "excluir",
    id: string;
};
type EditaPacoteAction = {
    type: "editar",
    id: string,
    chave: string,
    valor: number;
};

export function PacoteReducer(pacotes: Array<PacoteType>, action): Array<PacoteType>{
    switch (action.type){
        case "excluir":
            return excluiPacoteAction(pacotes, action);
        case "editar":
            return editaPacoteAction(pacotes, action)
        case "criar":
            return editaPacoteAction(pacotes, action)
        default :
            return pacotes;
    }
};

export function criaPacoteAction(
    pacotes: Array<PacoteType>,
    action: CriaPacoteAction
):Array<PacoteType>{
    return [...pacotes, {action.id, id:"1234", largura: 5, altura: 5, profundidade: 5, pseo: 100},
        ...pacotes,
    ];
}

export function editaPacoteAction(
    pacotes: Array<PacoteType>,
    action: EditaPacoteAction
){
    return pacotes.map((p) =>{
        if (p.id === action.id){
            const novoPacote = {...p};
            novoPacote[action.chave as PacoteChaveType] = action.valor;
            return novoPacote;
        } else {
            return p;
        }
    })
}

export function excluiPacoteAction(
    pacotes: Array<PacoteType>,
    action: ExcluiPacoteAction
): Array<PacoteType> {
    return pacotes.filter((p) => p.id !== action.id);
}

