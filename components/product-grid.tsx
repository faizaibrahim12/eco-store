import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "/wireless-bluetooth-headphones.jpg",
    rating: 4.5,
    reviews: 128,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "/smart-fitness-watch.png",
    rating: 4.8,
    reviews: 89,
    badge: "New",
  },
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
  {
    id: 7,
    name: "Bamboo Cutting Board Set",
    price: 39.99,
    image: "/bamboo-cutting-board-set.png",
    rating: 4.7,
    reviews: 145,
    badge: "Sustainable",
  },
  {
    id: 8,
    name: "LED Desk Lamp",
    price: 59.99,
    originalPrice: 79.99,
    image: "/led-desk-lamp.png",
    rating: 4.5,
    reviews: 167,
  },
]

export function ProductGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
