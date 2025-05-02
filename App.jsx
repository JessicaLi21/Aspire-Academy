import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { BookOpen } from "lucide-react";

export default function AspireAcademy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4 md:p-10">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Aspire Academy</h1>
        <p className="text-lg md:text-xl mb-6">
          Expert Online Tutoring for HSC & IB Students
        </p>
        <Button className="text-lg px-6 py-3">Book a Session</Button>
      </section>

      {/* About Jessica */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Meet Jessica Li</h2>
        <p className="text-lg">
          Jessica Li is an experienced tutor specializing in HSC and IB curricula.
          She provides personalized 1:1 sessions via Zoom to help students achieve their academic goals.
        </p>
      </section>

      {/* Services & Pricing */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Subjects & Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <BookOpen className="mb-2" />
              <h3 className="text-xl font-semibold">HSC Tutoring</h3>
              <p className="text-sm text-gray-600">$80/hour</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <BookOpen className="mb-2" />
              <h3 className="text-xl font-semibold">IB Tutoring</h3>
              <p className="text-sm text-gray-600">$100/hour</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking System */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Book a Session</h2>
        <div className="flex justify-center">
          <iframe
            src="https://calendly.com/your-calendly-link"
            width="100%"
            height="600"
            frameBorder="0"
            title="Booking Calendar"
            className="rounded-xl shadow-lg max-w-4xl w-full"
          ></iframe>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">What Students Say</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <p>"Jessica really helped me understand difficult IB concepts. I saw a huge improvement in my grades!"</p>
              <p className="mt-2 text-sm text-gray-500">– Placeholder Student 1</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p>"Her HSC sessions were clear and effective. I felt confident going into my exams."</p>
              <p className="mt-2 text-sm text-gray-500">– Placeholder Student 2</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Jessica</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded" />
          <input type="email" placeholder="Your Email" className="border p-3 rounded" />
          <textarea placeholder="Your Message" className="border p-3 rounded" rows={4} />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </section>
    </main>
  );
}