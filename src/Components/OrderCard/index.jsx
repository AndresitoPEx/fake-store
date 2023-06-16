import { XMarkIcon } from "@heroicons/react/24/outline"

const OrderCard = props => {
    const { id, title, image, price, handleDelete } = props

    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon className="h-6 w-6 text-black" onClick={() => handleDelete(id)}></XMarkIcon>
    }

    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
                </figure>
                <p className="font-light text-sm">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-medium text-lg">{price}</p>
                <button className="">
                    {renderXMarkIcon}
                </button>
            </div>
        </div>
    )
}

export default OrderCard
