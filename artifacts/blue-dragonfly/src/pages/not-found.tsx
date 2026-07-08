import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] w-full flex items-center justify-center bg-brand-sky/10 relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        
        <Card className="w-full max-w-md mx-4 bg-white/60 backdrop-blur-md border-white/40 shadow-2xl shadow-brand-royal/5 rounded-3xl relative z-10 animate-in zoom-in-95 duration-500">
          <CardContent className="pt-10 pb-10 text-center">
            <div className="w-20 h-20 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <AlertCircle className="h-10 w-10" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-royal mb-4">Page Not Found</h1>
            
            <p className="text-lg text-gray-700 font-light mb-8">
              We couldn't find the page you're looking for. It may have been moved or doesn't exist.
            </p>
            
            <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white h-12 px-8 rounded-full shadow-md w-full sm:w-auto">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
