import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@erisfy/shadcnui";

// Define the Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maxwell Overdrive",
    role: "VP of Button Clicking",
    company: "Clicky Solutions Inc.",
    testimonial: "No one does work like this. No one even tries.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sandy Beaches",
    role: "Chief Vacation Officer",
    company: "Relaxify Global",
    testimonial: "It's like they read our minds, but in a slightly unsettling way.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Chuck Liddlesteps",
    role: "Junior Senior Advisor",
    company: "Almost Works LLC",
    testimonial: "After using this, I can confidently say, 'Sure, why not?'",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Wanda Ringoff",
    role: "Director of Ambiguity",
    company: "Vague Enterprises",
    testimonial: "I can't say enough about it, because I'm not entirely sure what it does.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Stu Pendous",
    role: "Head of Over-Exaggeration",
    company: "Hyperbole Corp.",
    testimonial: "This product single-handedly saved my company, my career, and possibly the planet.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Luke E. Pants",
    role: "Lead Optimist",
    company: "Hope & Co.",
    testimonial: "It's like the lucky pants of boilerplates. Does it work? Probably not. But you feel better using it.",
    avatar: "/placeholder.svg?height=100&width=100",
  }
];

// TestimonialsSection component
export const TestimonialsSection: FC = () => {
  return (
    <section className="w-full py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-left mb-10 text-gray-800 dark:text-gray-100">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.testimonial}"
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

