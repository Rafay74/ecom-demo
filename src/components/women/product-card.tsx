
interface ProductCardProps {
    product: any
}

const ProductCard:React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border-2 border-black p-6 flex flex-col gap-2 w-[220px]">
      <img src={product.image} alt={product.brand} className="object-contain h-48" />
      <div className="text-lg font-semibold">{product.brand}</div>
      <div className="text-sm text-gray-600">{product.title}</div>
      <div className="font-medium text-base">
        {product.oldPrice && (
          <span className="line-through text-gray-400 mr-2">{product.oldPrice}</span>
        )}
        <span className={product.oldPrice ? "text-red-600" : ""}>{product.price}</span>
      </div>
      <div className="text-sm text-gray-600">{product.size}</div>
      <div className="text-sm text-gray-600">{product.condition}</div>
      {product.country && <div className="text-sm text-gray-500">🌍 {product.country}</div>}
    </div>
  )
}

export default ProductCard