import { useEffect, useState } from "react"
import { Button } from "../components/ui/button";

export default function Products() {

    const [products, setProducts] = useState([])
    // connect to the server
    useEffect(() => {
        fetch('http://localhost:8080/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(products => setProducts(products))
    }, [])


    return (
        <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
            <h1 className="text-3xl font-bold underline col-span-full text-center">Products</h1>
            {products.map(product => (
                <div key={product._id} className="bg-gray-200 rounded-md p-4">
                    <img src={product.thumbnail} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <Button>Add to cart</Button>
                </div>
            ))}
        </div>
    );
}