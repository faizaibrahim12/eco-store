import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Discover Amazing Products</h1>
        <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
          Shop the latest trends and find everything you need with our curated collection of premium products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/product/1">
            <Button size="lg" className="text-lg px-8">
              Shop Now
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            View Categories
          </Button>
        </div>
      </div>
    </section>
  )
}
