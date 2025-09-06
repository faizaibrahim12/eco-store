import { Header } from "@/components/header"
import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"
import { CartDrawer } from "@/components/cart-drawer"

// Mock product data - in a real app, this would come from an API
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      images: [
        "/wireless-bluetooth-headphones.jpg",
        "/headphones-side-view.png",
        "/headphones-case.png",
        "/headphones-controls.jpg",
      ],
      rating: 4.5,
      reviews: 128,
      badge: "Best Seller",
      description:
        "Experience premium sound quality with these wireless Bluetooth headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for all-day listening.",
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "Quick charge: 15 min = 3 hours",
        "Premium leather ear cushions",
        "Bluetooth 5.0 connectivity",
        "Built-in microphone for calls",
      ],
      specifications: {
        "Driver Size": "40mm",
        "Frequency Response": "20Hz - 20kHz",
        Impedance: "32 ohms",
        Weight: "250g",
        Connectivity: "Bluetooth 5.0, 3.5mm jack",
        Battery: "30 hours playback",
      },
      inStock: true,
      stockCount: 15,
    },
    "2": {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      images: [
        "/smart-fitness-watch.png",
        "/fitness-watch-side-view.jpg",
        "/fitness-watch-apps.jpg",
        "/fitness-watch-charging.jpg",
      ],
      rating: 4.8,
      reviews: 89,
      badge: "New",
      description:
        "Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life in a sleek, water-resistant design.",
      features: [
        "Heart rate monitoring",
        "Built-in GPS tracking",
        "Sleep quality analysis",
        "7-day battery life",
        "Water resistant (50m)",
        "100+ workout modes",
      ],
      specifications: {
        Display: '1.4" AMOLED',
        "Battery Life": "7 days typical use",
        "Water Resistance": "5ATM (50m)",
        Connectivity: "Bluetooth 5.0, Wi-Fi",
        Sensors: "Heart rate, GPS, Accelerometer",
        Compatibility: "iOS 12+, Android 6+",
      },
      inStock: true,
      stockCount: 8,
    },
  }

  return products[id as keyof typeof products] || products["1"]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductDetail product={product} />
        <RelatedProducts currentProductId={product.id} />
      </main>
      <CartDrawer />
    </div>
  )
}
