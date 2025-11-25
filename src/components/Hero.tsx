import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Atendimento veterinário
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {' '}em outro nível!
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Com mais de 15 anos de <b>experiência em atendimento clínico veterinário de cães e gatos</b>, 
                em parceria com <b>consultoria em TI especializada há mais de 25 anos</b> em desenvolvimento de sistemas, 
                o <b>PetSys</b> evoluiu desde 2010 para oferecer as <b>funcionalidades essenciais</b> que garantem 
                <b> excelência operacional</b> no seu dia a dia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6"
                onClick={() => window.open('https://app.petsys.net/registrar', '_blank')}
              >
                Assine Já
                <Play className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-purple-300 text-purple-600 hover:bg-purple-50"
                onClick={() => window.open('https://wa.me/5548999891596', '_blank')}
              >
                Falar com Especialista
              </Button>
            </div>


          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/assets/cao-e-gato-petsys.png" 
                alt="Cão e Gato PetSys" 
                className="w-full max-h-96 object-contain"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              🐕
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              ❤️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}