import { useState } from "react"

const productList = [
    {
        id: '11111122',
        productName: 'Keybord',
        stock: 10,
        price:2000
    },
    {
        id: '11111123',
        productName: 'Mouse',
        stock: 10,
        price:1500
    },
    {
        id: '11111124',
        productName: 'Head-Phone',
        stock: 8,
        price:2500
    },
]

const TableRow = ({id,productName,stock,price,quantity,total,increment,decrement}) => {
    return (
        <tr>
        <td>{id}</td>
            <td>{ productName}</td>
        <td>{stock}</td>
        <td>{price}</td>
        <td>{quantity}</td>
            <td>{total}</td>
            <td>
                <button disabled={quantity === stock} onClick={() =>increment(id)}>+</button>
                <button  disabled={quantity == 0}  onClick={() =>decrement(id)}>-</button>
            </td>
    </tr>
    )
}

const Product = () => {
    const [products, setProducts] = useState(productList.map(item => {
        return {
            ...item,
            quantity: 0,
            total:0 
     }
 }))

    const incrementQuantity = (id) => {
        setProducts( products.map((product) => {
            if (id === product.id && product.stock > product.quantity) {
                product.quantity++

               product.total = product.quantity*product.price 
            }
            return product
        }))
        
    }
    const decrementQuantity = (id) => {
        setProducts( products.map((product) => {
            if (id === product.id && product.quantity > 0) {
                product.quantity--

                product.total = product.quantity*product.price 
            }
            return product
        }))
        
    }

   const total = products.reduce((acc,cur) => acc + cur.total,0)


    
    return (
        <div>
            <h1>Product List</h1>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {products.map(item => <TableRow key={item.id} {...item} increment={incrementQuantity } decrement = {decrementQuantity} />)}
                </tbody>
            </table>
            {total > 0 && <p>Total:{total} </p>}
        </div>
    )
}

export default Product