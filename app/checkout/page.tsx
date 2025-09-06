"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { CheckoutSteps } from "@/components/checkout-steps"
import { ShippingForm } from "@/components/shipping-form"
import { PaymentForm } from "@/components/payment-form"
import { OrderReview } from "@/components/order-review"
import { OrderSummary } from "@/components/order-summary"
import { useCart } from "@/contexts/cart-context"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [shippingData, setShippingData] = useState({})
  const [paymentData, setPaymentData] = useState({})
  const { state } = useCart()

  useEffect(() => {
    if (state.items.length === 0) {
      redirect("/")
    }
  }, [state.items])

  const handleStepComplete = (step: number, data: any) => {
    if (step === 1) {
      setShippingData(data)
    } else if (step === 2) {
      setPaymentData(data)
    }
    setCurrentStep(step + 1)
  }

  const handleStepBack = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <CheckoutSteps currentStep={currentStep} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <ShippingForm onComplete={(data) => handleStepComplete(1, data)} initialData={shippingData} />
              )}
              {currentStep === 2 && (
                <PaymentForm
                  onComplete={(data) => handleStepComplete(2, data)}
                  onBack={handleStepBack}
                  initialData={paymentData}
                />
              )}
              {currentStep === 3 && (
                <OrderReview shippingData={shippingData} paymentData={paymentData} onBack={handleStepBack} />
              )}
            </div>

            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
