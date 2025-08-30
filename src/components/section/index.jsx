import CardProdutos from "./cardProduto"

export default function ListaProdutos(props) {

    return (
        <section>
            {props.produtos.map((item, index) => (
                <CardProdutos key={index} {...item} />
            ))}
        </section>
    )
}