import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent, Delhi Public School",
    content: "Skoolary has completely changed how we manage our morning routine. Knowing exactly when the bus will arrive gives us peace of mind and saves so much time.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Rajesh Kumar",
    role: "Parent, Ryan International",
    content: "The app is so easy to use! I get notifications when my daughter boards the bus and when she's about to reach home. It's exactly what we needed.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Sneha Patel",
    role: "Parent, Vidyashilp Academy",
    content: "As a working parent, Skoolary has been a lifesaver. The real-time tracking and alerts help me plan my day better. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dark-gray mb-6">
            What <span className="text-gradient">Parents</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from thousands of satisfied parents who trust Skoolary with their children's daily school commute.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="flex text-primary-yellow text-xl">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-dark-gray">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="button-hover bg-primary-yellow text-dark-gray hover:bg-yellow-400 px-8 py-4 rounded-xl shadow-lg transform hover:scale-105"
          >
            Join 50,000+ Happy Parents
          </Button>
        </div>
      </div>
    </section>
  );
}
