import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ShoppingCartContext from '../../Context'
import OrderCard from '../OrderCard'
import totalPrice from '../../utils'


import './styles.css'

const CheckOutMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filterProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filterProducts)
    }

    const handleCheckOut = () => {
        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)

        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.closeCheckOutMenu()
    }


    return (
        <aside className={`${context.checkOutMenu ? 'flex' : 'hidden'} checkout-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='fotn-medium text-xl'>My Order</h2>
                <button className=''>
                    <XMarkIcon
                        className='h-6 w-6 text-black'
                        onClick={() => context.closeCheckOutMenu()}
                    >

                    </XMarkIcon>
                </button>
            </div>

            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>

            <div className='px-5 mb-5'>
                <p className='flex justify-between items-center mb-2'>
                    <span>Total: </span>
                    <span>S/.{totalPrice(context.cartProducts)} </span>
                </p>
                <Link to="/my-orders/last">
                    <button className=' bg-black py-3 text-white w-full rounded' onClick={() => handleCheckOut()}>
                        CheckOut
                    </button>
                </Link>
            </div>

        </aside>
    )
}

export default CheckOutMenu