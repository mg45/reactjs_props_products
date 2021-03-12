import ProductItem from './ProductItem';

const ProductList = () => {
    return (
        <section>
            <h1>Products</h1>
            <div className="flex-container">
                    <ProductItem
                        imgUrl={'https://source.unsplash.com/weekly?adidas'}
                        productTitle={'Product01'}
                        productPrice={299 + '$'}
                        buyNow={'BUY'}
                    />
                    <ProductItem
                        imgUrl={'https://source.unsplash.com/weekly?shoes'}
                        productTitle={'Product02'}
                        productPrice={129 + '$'}
                        buyNow={'BUY'}
                    />
                    <ProductItem
                        imgUrl={'https://source.unsplash.com/weekly?levis'}
                        productTitle={'Product03'}
                        productPrice={89 + '$'}
                        buyNow={'BUY'}
                    />
            </div>
        </section>

    );
}

export default ProductList;


