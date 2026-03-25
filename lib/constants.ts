import { describe } from "node:test";

export const navItems = [
  { name: "Home", href: "#" },
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

const BASE_URL = "http://127.0.0.1:5000";
export const navButtons = [
    {
        name: "Login",
        href: `${BASE_URL}/login`,
        className: "text-md bg-background text-foreground hover:bg-primary hover:text-amber-50"
    },
    {
        name: "Join Now",
        href: `${BASE_URL}/signup`,
        className: "text-md"
    }
];

export const programs = [
    {
        title: "Strength Training",
        description :
        "Build muscle and increase your power with our comphensive training programs.",
        image: "/muscle2.png"
    },
    {
        title: "Yoga & Flexibility",
        description : "Improve your flexibility, balance, and mindfulness through guided yoga sessions.",
        image: "/yoga2.png"
    },
        {
        title: "Cardio Fitness",
        description: "Boost your endurance and heart health with high-energy cardio workouts.",
        image: "/cardio2.png"
    },
            {
        title: "Cardio Fitness",
        description: "Boost your endurance and heart health with high-energy cardio workouts.",
        image: "/cardio2.png"
    }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    story: "“GpsFit completely changed how I approach my workouts!”",
    detail: "I love tracking my progress daily and staying motivated with clear goals. The program is easy to follow and highly effective.",
    image: "/testimonials/sarah.png",
    rating: 5
  },
  {
    name: "Michael Lee",
    story: "“Personalized programs that actually work!”",
    detail: "Building strength and confidence has never been faster. The step-by-step guidance keeps me on track and pushes me to improve every week.",
    image: "/testimonials/michael.png",
    rating: 4
  },
  {
    name: "Emily Davis",
    story: "“A supportive community that keeps me accountable.”",
    detail: "Connecting with other fitness enthusiasts through GpsFit keeps me inspired. Sharing goals and progress makes workouts fun and motivating.",
    image: "/testimonials/emily.png",
    rating: 4
  },
  {
    name: "David Martinez",
    story: "“Fitness tracking made simple and enjoyable.”",
    detail: "Monitoring my workouts, calories, and heart rate has never been easier. GpsFit combines technology with easy-to-follow programs.",
    image: "/testimonials/david.png",
    rating: 3
  },
  {
    name: "Olivia Brown",
    story: "“Everything I need for real results!”",
    detail: "From cardio to strength training, GpsFit has comprehensive programs that work. I've noticed significant improvements in just a few months.",
    image: "/testimonials/olivia.png",
    rating: 5
  }
];

export const plans = [
  {
    name: "Basic",
    price: "Free",
    sign: "",
    period: "free trial",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Access to basic workouts",
      "Limited progress tracking",
      "Community access",
      "Basic support"
    ],
    cta: "Join Now",
    popular: false
  },
  {
    name: "Pro",
    price: "9.99",
    sign: "Br",
    period: "per month",
    description: "Best for individuals serious about fitness.",
    features: [
      "Personalized workout plans",
      "Advanced progress tracking",
      "Nutrition guidance",
      "Priority support",
      "Access to all workouts"
    ],
    cta: "Join Now",
    popular: true
  },
  {
    name: "Elite",
    price: "19.99",
    sign: "Br",
    period: "per month",
    description: "For those who want maximum results and coaching.",
    features: [
      "1-on-1 coaching",
      "Custom meal plans",
      "Daily progress insights",
      "Premium support",
      "Exclusive content & programs"
    ],
    cta: "Join Now",
    popular: false
  }
];