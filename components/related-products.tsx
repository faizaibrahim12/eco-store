import { ProductCard } from "@/components/product-card"

interface RelatedProductsProps {
  currentProductId: number
}

const relatedProducts = [
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "/organic-cotton-t-shirt.jpg",
    rating: 4.3,
    reviews: 256,
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    image: "/stainless-steel-bottle.png",
    rating: 4.6,
    reviews: 174,
    badge: "Eco-Friendly",
  },
  {
    id: 5,
    name: "Laptop Stand Adjustable",
    price: 49.99,
    originalPrice: 69.99,
    image: "/laptop-stand-adjustable.jpg",
    rating: 4.4,
    reviews: 92,
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 34.99,
    image: "/wireless-charging-pad.png",
    rating: 4.2,
    reviews: 203,
    badge: "Fast Charging",
  },
]

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const filteredProducts = relatedProducts.filter((product) => product.id !== currentProductId)

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
