"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ShippingFormProps {
  onComplete: (data: any) => void
  initialData: any
}

export function ShippingForm({ onComplete, initialData }: ShippingFormProps) {
  const [formData, setFormData] = useState({
    email: initialData.email || "",
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    address: initialData.address || "",
    city: initialData.city || "",
    state: initialData.state || "",
    zipCode: initialData.zipCode || "",
    country: initialData.country || "US",
    shippingMethod: initialData.shippingMethod || "standard",
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
        <CardTitle>Shipping Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" value={formData.city} onChange={(e) => handleChange("city", e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleChange("zipCode", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label className="text-base font-medium">Shipping Method</Label>
            <RadioGroup
              value={formData.shippingMethod}
              onValueChange={(value) => handleChange("shippingMethod", value)}
              className="mt-3"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard" className="flex-1 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Standard Shipping</p>
                      <p className="text-sm text-muted-foreground">5-7 business days</p>
                    </div>
                    <p className="font-medium">$5.99</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="express" id="express" />
                <Label htmlFor="express" className="flex-1 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Express Shipping</p>
                      <p className="text-sm text-muted-foreground">2-3 business days</p>
                    </div>
                    <p className="font-medium">$12.99</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="overnight" id="overnight" />
                <Label htmlFor="overnight" className="flex-1 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Overnight Shipping</p>
                      <p className="text-sm text-muted-foreground">Next business day</p>
                    </div>
                    <p className="font-medium">$24.99</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Continue to Payment
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
