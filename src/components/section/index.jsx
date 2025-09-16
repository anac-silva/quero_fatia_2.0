import CardProdutos from "./cardProduto"

export default function ListaProdutos(props) {

    return (
        <section className="flex flex-col items-center">
            {props.produtos.map((item, index) => (
                <CardProdutos key={index} {...item} />
            ))}
        </section>
    )
}