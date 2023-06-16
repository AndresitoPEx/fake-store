import { ChevronRightIcon } from "@heroicons/react/24/outline"

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props


    return (
        <div className="flex justify-between items-center mb-6 border border-black rounded-lg p-4 w-80">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">{totalProducts} productos</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="fotn-medium text-2xl">{totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black" />
                </p>
            </div>
        </div>
    )
}

export default OrdersCard
