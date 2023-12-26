"use client"
import Header from '@/components/Header'
import Image from 'next/image'
import { useEffect,useState } from 'react';

export default function Home() {

  const [productform,setProductForm] = useState({ })
  const [products,setProduct] = useState([])

  const fetchproducts = async ()=>{
      const response = await fetch('/api/Product');
      const rjson = await response.json()
      setProduct(rjson.products)
  }

  useEffect(()=>{
  fetchproducts()
}, [products])



  const  addProduct = async (e) => {
    e.preventDefault();
      try {
        const response = await fetch('/api/Product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productform),
        });

        if (response.ok) {
          alert("product add successfully")
          setProductForm({})
        } else {
          console.error("Product  not add")
          // Handle error if needed
        }
      } catch (error) {
        console.log("Error:",error)
        // Handle error if fetch fails
      }
    
  };
  const handleChange = (e) => {
    setProductForm({ ...productform, [e.target.name]: e.target.value });
  };

  return (
    <>
   <Header />
   <div className="container mx-auto">
          <h1 className="text-3xl mb-6">Search a Product</h1>
          
    <div className="mb-4">
          <input
            type="text"
            value=""
            placeholder="Search products..."
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />

        </div>
        </div>
   <div className="container mx-auto">
        <div className=" py-8 flex flex-col ">
          <h1 className="text-3xl mb-6">Add a Product</h1>
          
          {/* Form to add new products */}
          <form className="mb-8 w-full ">
            <div className="flex flex-col mb-4">
              <label className="mb-2" htmlFor="productName">Product Name:</label>
              <input
              onChange={handleChange}
              value={productform?.productName ||  ""}
                type="text"
                name="productName"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                style={{ minWidth: '100%' }} // Added inline style for wider input
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2" htmlFor="quantity">Quantity:</label>
              <input
              value={productform?.quantity   || ""}
              onChange={handleChange}
                type="number"
                name="quantity"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                style={{ minWidth: '100%' }} // Added inline style for wider input
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2" htmlFor="quantity">Price:</label>
              <input
              onChange={handleChange}
              value={productform?.price || ""}
                type="number"
                name="price"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                style={{ minWidth: '100%' }} // Added inline style for wider input
              />
            </div>
            <button 
            onClick={addProduct}
            type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Add Product
            </button>
          </form>
      </div>
    </div>

    {/* ///////////display productName */}

    <div className="container mx-auto py-8">
        <h1 className="text-3xl mb-6">Available Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        products.map(product=>{          
          return    <div key={product.productName} className="border p-4">
          <h3 className="text-lg font-semibold">{product.productName}</h3>
          <p className="text-gray-600">Price: ${product.price}</p>
          <p className="text-gray-600">Price: {product.quantity}</p>
          {/* Other product details */}
        </div>
        })}
        </div>
      </div>
    </>
  
  //// Display curent Stock
  )
}
