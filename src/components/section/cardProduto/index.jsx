import AdicionarCarrinho from "../botaoAdicionar"

export default function CardProdutos(props) {
    const nomeImagem = props.nome.toLowerCase().trim().replace(/\s+/g, "_")

    return(
        <div>
            <div>
                <img src={`/imagens/produtos/${nomeImagem}.jpg`} alt={props.nome} width="150" />
            </div>
            <div>
                <h3>{props.nome}</h3>
                <p>{props.descricao}</p>
                <p>{props.valor}</p>
            </div>
            <AdicionarCarrinho />
        </div>
    )
}