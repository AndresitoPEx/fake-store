import { useContext } from "react"

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

import { ShoppingCartContext } from "../../Context"



const Home = () => {


    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.searchByTitle?.length > 0) {
            if(context.filteredItems?.length>0){
                return (
                    context.filteredItems?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                )
            }
            else{
                return (
                    <div className="flex items-center justify-center relative w-80 mb-4">
                        <h1 className="font-medium text-xl">No Product Found</h1>
                    </div>
                )
            }
        } else {
            return (
                context.items?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            )
        }
    }

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">HOME</h1>
            </div>
            <input
                type="text"
                placeholder="Search Product"
                className="rounded-lg border border-black p-2 w-80 mb-4 focus:outline-none"
                onChange={(e) => context.setSearchByTitle(e.target.value)}
            />
            <div className="grid gap-6 grid-cols-4 w-full max-w-screen-xl">
                {
                    renderView()
                }

            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home