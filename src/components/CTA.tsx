import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Clock, Heart } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Pronto para usar o 
            <br />
            <b>PetSys</b> agora?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Assine o PetSys e explore todos os recursos agora mesmo!
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl"
              onClick={() => window.open('https://app.petsys.net/registrar', '_blank')}
            >
              Assine Já
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">100% Seguro</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Ativação Imediata</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Sem Compromisso</span>
            </div>
          </div>

          <div className="text-white/70 text-sm">
            Sem fidelidade • Cancele quando quiser
          </div>
        </div>
      </div>
    </section>
  );
}