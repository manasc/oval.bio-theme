import React, { useEffect, useState } from "react";
import axios from "axios";

// section
import ProductSection from "../sections/ProductSection";

function ProductPage({ productId }) {
    const [productData, setProductData] = useState("");

    useEffect(() => {
        console.log(productId);

        axios
            .get("/wp-json/wc/store/products/" + productId)
            .then((res) => setProductData(res.data))
            .finally(() => console.log(productData));
    }, []);

    return <React.Fragment>{productData && <ProductSection productData={productData} />}</React.Fragment>;
}

export default ProductPage;
