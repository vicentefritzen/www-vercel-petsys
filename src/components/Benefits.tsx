import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';

const benefits = [
  "Agenda de serviços (consultas, banhos, tosas, ofurôs, etc.)",
  "Cadastro completo de clientes e pets",
  "Controle de vacinação e peso",
  "Gestão de contratos de serviços (planos mensais)",
  "Prontuários digitais organizados",
  "Recursos integrados para diagnósticos",
  "Relatórios e documentos de saúde dos pets",
  "Armazenamento de exames médicos dos pets",
  "Interface intuitiva com assistente integrado"
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Por que escolher o
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {' '}PetSys?
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Profissionais de clínicas veterinárias e pet shops podem contar com o <b>PetSys</b> para otimizar suas operações diárias, melhorar o atendimento ao cliente e garantir os melhores cuidados aos pets.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6"
              onClick={() => window.open('https://app.petsys.net/registrar', '_blank')}
            >
              Assine Já
            </Button>
          </div>

          <div className="space-y-6">
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  DR
                </div>
                <div>
                  <div className="font-semibold">Dra. Juliana Farber Metzler</div>
                  <div className="text-sm text-gray-600">Pet Shop Oficina do Cão & Gato</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "O <b>PetSys</b> sempre nos atendeu muito bem na rotina do consultório veterinário. Agora, com a nova geração do sistema, tudo ficou ainda melhor: mais fácil de usar, mais intuitivo e acessível de qualquer lugar."
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}