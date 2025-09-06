import { Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ProductReviewsProps {
  productId: number
  rating: number
  reviewCount: number
}

const mockReviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    title: "Excellent quality and comfort",
    content:
      "These headphones exceeded my expectations. The sound quality is amazing and they're incredibly comfortable for long listening sessions. The noise cancellation works perfectly.",
    helpful: 12,
  },
  {
    id: 2,
    author: "Mike Chen",
    rating: 4,
    date: "2024-01-10",
    title: "Great value for money",
    content:
      "Really impressed with the build quality and features for the price. Battery life is as advertised. Only minor complaint is the case could be a bit smaller.",
    helpful: 8,
  },
  {
    id: 3,
    author: "Emily Davis",
    rating: 5,
    date: "2024-01-05",
    title: "Perfect for work from home",
    content:
      "The noise cancellation is a game-changer for video calls. Crystal clear audio and the microphone quality is excellent. Highly recommend for remote work.",
    helpful: 15,
  },
]

export function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {rating} out of 5 ({reviewCount} reviews)
            </span>
          </div>
        </div>
        <Button variant="outline" className="bg-transparent">
          Write a Review
        </Button>
      </div>

      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarFallback>
                  {review.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{review.author}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm">{review.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 text-pretty">{review.content}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
