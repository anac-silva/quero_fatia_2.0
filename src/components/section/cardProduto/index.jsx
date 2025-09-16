import AdicionarCarrinho from "../botaoAdicionar"

export default function CardProdutos(props) {
    const nomeImagem = props.nome.toLowerCase().trim().replace(/\s+/g, "_")

    return(
        <div className="flex items-center h-60 bg-white m-2 w-8/10 rounded-xl">
            <div>
                <img src={`/imagens/produtos/${nomeImagem}.jpg`} alt={props.nome} className="w-50 m-5 rounded-xl"/>
            </div>
            <div className="flex flex-col w-5/10 mx-5">
                <h3 className="text-2xl">{props.nome}</h3>
                <p>{props.descricao}</p>
                <p>{props.valor}</p>
            </div>
            <AdicionarCarrinho />
        </div>
    )
}