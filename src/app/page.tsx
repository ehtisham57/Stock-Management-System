import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {

  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 14.99 },
    // Add more products as needed
  ];
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
                type="text"
                name="productName"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                style={{ minWidth: '100%' }} // Added inline style for wider input
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2" htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                name="quantity"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                style={{ minWidth: '100%' }} // Added inline style for wider input
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Add Product
            </button>
          </form>
      </div>
    </div>

    {/* ///////////display productName */}

    <div className="container mx-auto py-8">
        <h1 className="text-3xl mb-6">Available Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  
  //// Display curent Stock
  )
}
