// Entry point for MPA Home Page
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Mobile Auto Glass Repair & Replacement</h1>
        <p className="text-lg text-gray-600">
          Serving Essex, Passaic, Morris, Sussex & Warren County, NJ
        </p>
        <nav className="flex justify-center gap-4 mt-4 text-blue-700 underline">
          <a href="/about.html">About</a>
          <a href="/services.html">Services</a>
          <a href="/areas.html">Service Areas</a>
          <a href="/contact.html">Contact</a>
        </nav>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Our Services</h2>
            <ul className="space-y-1">
              <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Windshield Repair & Replacement</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Side & Rear Glass Replacement</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Headlight Restoration</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Mobile Service at Your Location</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Why Choose Us?</h2>
            <ul className="space-y-1">
              <li className="flex items-center"><CheckCircle className="mr-2 text-blue-600" /> Fast, Reliable & Affordable</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-blue-600" /> Locally Owned & Operated</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-blue-600" /> Same-Day Appointments Available</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-blue-600" /> 100% Satisfaction Guaranteed</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="bg-blue-100 rounded-xl p-4 space-y-2 text-center">
        <h2 className="text-xl font-bold">Call Now for a Free Quote</h2>
        <p className="text-lg font-medium flex justify-center items-center"><Phone className="mr-2" /> (555) 123-4567</p>
        <Button className="mt-2">Request Service</Button>
      </section>

      <footer className="text-center text-sm text-gray-500 border-t pt-4">
        <p>&copy; {new Date().getFullYear()} Mobile Auto Glass NJ</p>
        <p className="flex justify-center items-center"><MapPin className="mr-1" /> Proudly serving Northern NJ</p>
      </footer>
    </main>
  );
}
