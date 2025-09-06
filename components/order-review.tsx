"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"

interface OrderReviewProps {
  shippingData: any
  paymentData: any
  onBack: () => void
}

export function OrderReview({ shippingData, paymentData, onBack }: OrderReviewProps) {
  const { state, clearCart } = useCart()

  const handlePlaceOrder = () => {
    // Here you would typically send the order to your backend
    alert("Order placed successfully!")
    clearCart()
    // Redirect to success page
  }

  const getShippingCost = () => {
    switch (shippingData.shippingMethod) {
      case "express":
        return 12.99
      case "overnight":
        return 24.99
      default:
        return 5.99
    }
  }

  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = getShippingCost()
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Order Review</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Shipping Information */}
          <div>
            <h3 className="font-medium mb-3">Shipping Information</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                {shippingData.firstName} {shippingData.lastName}
              </p>
              <p>{shippingData.address}</p>
              <p>
                {shippingData.city}, {shippingData.state} {shippingData.zipCode}
              </p>
              <p>{shippingData.email}</p>
            </div>
          </div>

          <Separator />

          {/* Payment Information */}
          <div>
            <h3 className="font-medium mb-3">Payment Information</h3>
            <div className="text-sm text-muted-foreground">
              {paymentData.paymentMethod === "card" ? (
                <p>Card ending in {paymentData.cardNumber?.slice(-4)}</p>
              ) : (
                <p>PayPal</p>
              )}
            </div>
          </div>

          <Separator />

          {/* Order Items */}
          <div>
            <h3 className="font-medium mb-3">Order Items</h3>
            <div className="space-y-3">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Order Summary */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1 bg-transparent">
              Back to Payment
            </Button>
            <Button onClick={handlePlaceOrder} className="flex-1" size="lg">
              Place Order
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
