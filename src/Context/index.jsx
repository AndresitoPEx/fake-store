import { createContext,useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //aqui se guardan los productos que se agregan al carrito de compras
    const [count, setCount] = useState(0)

    // aqui se abre y cierra el modal de detalle de producto
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // aqui se abre y cierra el modal del carrito de compras
    const [checkOutMenu, setCheckOutMenu] = useState(false)
    const openCheckOutMenu = () => setCheckOutMenu(true)
    const closeCheckOutMenu = () => setCheckOutMenu(false)

    // aqui se ven los detalles del producto que se selecciona
    const [productToShow, setProductToShow] = useState({})

    // aqui se agregan productos al carrito de compras
    const [cartProducts, setCartProducts] = useState([])

    //aqui se guardan los productos que se agregan al carrito de compras
    const [order, setOrder] = useState([])

    // aqui es el estado de los productos que se muestran en la pagina principal
    const [items, setItems] = useState(null)
    
    const [filteredItems, setFilteredItems] = useState(null)

    // aqui se guarda el valor del input de busqueda y se filtran los productos
    const [searchByTitle, setSearchByTitle] = useState('')


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const filterItemsByTitle = (items) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(() => {
        if(searchByTitle)setFilteredItems(filterItemsByTitle(items, searchByTitle))
    },[items, searchByTitle])



    return (
        <ShoppingCartContext.Provider value={{
            

            filteredItems,
            setFilteredItems,

            searchByTitle,
            setSearchByTitle,

            items,
            setItems,

            count, 
            setCount, 

            openProductDetail, 
            closeProductDetail, 
            isProductDetailOpen, 
            
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,

            checkOutMenu,
            openCheckOutMenu,
            closeCheckOutMenu,

            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext;