import { ProductGrid } from "@/components/product-grid"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CartDrawer } from "@/components/cart-drawer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <ProductGrid />
      </main>
      <CartDrawer />
    </div>
  )
}
