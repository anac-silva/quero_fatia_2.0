import AdicionarCarrinho from "../botaoAdicionar"

export default function CardProdutos() {
    return(
        <div>
            <h3>Nome do Produto</h3>
            <p>Descrição do produto</p>
            <p>Valor</p>
            <span>0</span> qtd.
            <AdicionarCarrinho />
        </div>
    )
}