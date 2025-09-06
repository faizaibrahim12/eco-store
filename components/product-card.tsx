"use client"

import type React from "react"

import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart()

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    openCart()
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden cursor-pointer">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.badge}</Badge>
          )}

          {discount > 0 && (
            <Badge variant="destructive" className="absolute top-3 right-3">
              -{discount}%
            </Badge>
          )}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button size="icon" variant="secondary" className="h-10 w-10">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-10 w-10">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="icon" className="h-10 w-10" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-balance">{product.name}</h3>

          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
        </CardContent>
      </Link>

      <div className="px-4 pb-4">
        <Button className="w-full" size="sm" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}
