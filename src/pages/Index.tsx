import { BookingForm } from "@/components/BookingForm";
import heroImage from "@/assets/airport-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium airport terminal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            BTM Airport Protocol Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            Welcome to BTM's Airport Protocol Services!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            BTM offers a seamless and stress-free airport experience. Our team is dedicated to 
            providing you with premium support, including car hire services, airport transfer, 
            escort services, lounge services, meet & greet services and bundled services.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Please fill out the form below with your travel details so we can tailor our service 
            to meet your needs. We look forward to making your journey smooth and enjoyable.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-10 lg:p-12">
          <BookingForm />
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Required fields
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
