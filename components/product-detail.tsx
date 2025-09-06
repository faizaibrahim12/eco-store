"use client"

import { useState } from "react"
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { ProductReviews } from "@/components/product-reviews"

interface ProductDetailProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice?: number
    images: string[]
    rating: number
    reviews: number
    badge?: string
    description: string
    features: string[]
    specifications: Record<string, string>
    inStock: boolean
    stockCount: number
  }
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addItem, openCart } = useCart()

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      })
    }
    openCart()
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-lg border">
          <img
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-6">
        <div>
          {product.badge && <Badge className="mb-2 bg-primary text-primary-foreground">{product.badge}</Badge>}
          <h1 className="text-3xl font-bold text-balance">{product.name}</h1>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              <Badge variant="destructive">-{discount}%</Badge>
            </>
          )}
        </div>

        <p className="text-muted-foreground text-pretty">{product.description}</p>

        <div className="space-y-3">
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="font-medium">
              Quantity:
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-8 w-8 bg-transparent"
              >
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-8 w-8 bg-transparent"
              >
                +
              </Button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleAddToCart} className="flex-1" size="lg" disabled={!product.inStock}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {product.inStock && <p className="text-sm text-muted-foreground">{product.stockCount} items left in stock</p>}
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-sm">Free Shipping</p>
              <p className="text-xs text-muted-foreground">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-sm">30-Day Returns</p>
              <p className="text-xs text-muted-foreground">Easy returns</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-sm">2-Year Warranty</p>
              <p className="text-xs text-muted-foreground">Full coverage</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="space-y-4">
            <div className="grid gap-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <ProductReviews productId={product.id} rating={product.rating} reviewCount={product.reviews} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
