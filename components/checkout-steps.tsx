import { Check } from "lucide-react"

interface CheckoutStepsProps {
  currentStep: number
}

const steps = [
  { id: 1, name: "Shipping", description: "Delivery information" },
  { id: 2, name: "Payment", description: "Payment details" },
  { id: 3, name: "Review", description: "Order confirmation" },
]

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step.id < currentStep
                  ? "bg-primary border-primary text-primary-foreground"
                  : step.id === currentStep
                    ? "border-primary text-primary"
                    : "border-muted-foreground text-muted-foreground"
              }`}
            >
              {step.id < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-medium">{step.id}</span>
              )}
            </div>
            <div className="ml-3">
              <p
                className={`text-sm font-medium ${
                  step.id <= currentStep ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step.name}
              </p>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-4 ${step.id < currentStep ? "bg-primary" : "bg-muted"}`} />
          )}
        </div>
      ))}
    </div>
  )
}
