import { useContext } from 'react'
import ShoppingCartContext from '../../Context'

import { XMarkIcon } from '@heroicons/react/24/outline'

import './styles.css'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)
    

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='fotn-medium text-xl'>Detalle</h2>
                <button className=''>
                    <XMarkIcon 
                    className='h-6 w-6 text-black'
                    onClick={() => context.closeProductDetail()}
                    >

                    </XMarkIcon>
                </button>
            </div>

            <figure className='px-6'>
                <img className='w-full h-full object-cover' src={context.productToShow.image} alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>
                    {context.productToShow.title}
                </span>
                <span className='font-medium text-md mb-2'>
                    S/. {context.productToShow.price}
                </span>
                <span className='font-light text-sm'>
                    {context.productToShow.description}
                </span>
            </p>
        </aside>
    )
}

export default ProductDetail