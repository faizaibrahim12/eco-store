"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"

export function OrderSummary() {
  const { state } = useCart()

  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99 // Default shipping cost
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm line-clamp-2">{item.name}</p>
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span className="text-primary">${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
