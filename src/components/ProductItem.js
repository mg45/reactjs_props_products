const ProductItem = (props) => {
    console.log(props)
    return (
        <figure>
            <img src={props.imgUrl} alt=""/>
            <figcaption>
                <h2>{props.productTitle}</h2>
                <h2>{props.productPrice}</h2>
                <div className="button light">{props.buyNow}</div>
            </figcaption>
        </figure> 
    );
}
 
export default ProductItem;