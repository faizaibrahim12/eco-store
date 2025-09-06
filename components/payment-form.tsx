"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Smartphone } from "lucide-react"

interface PaymentFormProps {
  onComplete: (data: any) => void
  onBack: () => void
  initialData: any
}

export function PaymentForm({ onComplete, onBack, initialData }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    paymentMethod: initialData.paymentMethod || "card",
    cardNumber: initialData.cardNumber || "",
    expiryDate: initialData.expiryDate || "",
    cvv: initialData.cvv || "",
    cardName: initialData.cardName || "",
    billingAddress: initialData.billingAddress || "",
    billingCity: initialData.billingCity || "",
    billingState: initialData.billingState || "",
    billingZip: initialData.billingZip || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onComplete(formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="text-base font-medium">Payment Method</Label>
            <RadioGroup
              value={formData.paymentMethod}
              onValueChange={(value) => handleChange("paymentMethod", value)}
              className="mt-3"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                  <CreditCard className="h-5 w-5" />
                  Credit or Debit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex items-center gap-2 cursor-pointer">
                  <Smartphone className="h-5 w-5" />
                  PayPal
                </Label>
              </div>
            </RadioGroup>
          </div>

          {formData.paymentMethod === "card" && (
            <>
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => handleChange("cardNumber", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => handleChange("expiryDate", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) => handleChange("cvv", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="cardName">Name on Card</Label>
                <Input
                  id="cardName"
                  value={formData.cardName}
                  onChange={(e) => handleChange("cardName", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Billing Address</h3>
                <div>
                  <Label htmlFor="billingAddress">Address</Label>
                  <Input
                    id="billingAddress"
                    value={formData.billingAddress}
                    onChange={(e) => handleChange("billingAddress", e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="billingCity">City</Label>
                    <Input
                      id="billingCity"
                      value={formData.billingCity}
                      onChange={(e) => handleChange("billingCity", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="billingState">State</Label>
                    <Input
                      id="billingState"
                      value={formData.billingState}
                      onChange={(e) => handleChange("billingState", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="billingZip">ZIP Code</Label>
                    <Input
                      id="billingZip"
                      value={formData.billingZip}
                      onChange={(e) => handleChange("billingZip", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1 bg-transparent">
              Back to Shipping
            </Button>
            <Button type="submit" className="flex-1">
              Review Order
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
