import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  Heart, 
  Calendar, 
  Stethoscope, 
  FileText, 
  Shield,
  TrendingUp,
  PieChart,
  Clock
} from 'lucide-react';

const systemFeatures = [
  {
    icon: BarChart3,
    title: "Dashboard Geral",
    description: "Visão completa das estatísticas com gráficos em tempo real, métricas de crescimento e indicadores de performance.",
    image: "/assets/dashboard-overview.png",
    highlights: ["Clientes Cadastrados", "Pets Ativos", "Cobertura Vacinal", "Raças Populares"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Gestão Completa de Clientes",
    description: "Sistema avançado para cadastro e gerenciamento de clientes com busca rápida, filtros personalizados e histórico completo.",
    image: "/assets/clients-management.png",
    highlights: ["Busca Avançada", "Dados Completos", "Histórico Detalhado", "Ações Rápidas"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Controle de Pets por Cliente",
    description: "Visualize e gerencie todos os pets vinculados a cada cliente de forma organizada, com status ativo/inativo e informações detalhadas.",
    image: "/assets/pets-modal.png",
    highlights: ["Múltiplos Pets", "Status Individual", "Raça e Idade", "Controle Ativo"],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: FileText,
    title: "Cadastro Detalhado de Pets",
    description: "Registro completo de informações dos pets incluindo dados de cadastro, controle de peso, vacinação, prontuário e receitas médicas.",
    image: "/assets/pets-list.png",
    highlights: ["Dados Completos", "Histórico Médico", "Características", "Fácil Edição"],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Shield,
    title: "Controle de Vacinação",
    description: "Sistema automatizado de controle de vacinas com lembretes, histórico completo, alertas e autorizações para próximas aplicações.",
    image: "/assets/vaccines-control.png",
    highlights: ["Lembretes Automáticos", "Histórico Completo", "Alertas Inteligentes", "Autorização de Aplicação"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Stethoscope,
    title: "Controle de Peso",
    description: "Dedicado para visualização facilitada da evolução do peso dos pets ao longo do tempo, auxiliando no monitoramento da saúde e bem-estar.",
    image: "/assets/veterinary-section.png",
    highlights: ["Ferramentas Específicas", "Diagnósticos", "Tratamentos", "Acompanhamento"],
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Calendar,
    title: "Histórico de Vacinação",
    description: "Lista cronológica e organizada das vacinações, com status atualizado para garantir um controle preciso, eficiente e totalmente confiável do histórico vacinal.",
    image: "/assets/appointments-calendar.png",
    highlights: ["Calendário Visual", "Lembretes Automáticos", "Controle de Horários", "Fácil Reagendamento"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: FileText,
    title: "Carteira de Vacinação e Prontuários",
    description: "Prontuários eletrônicos completos com histórico médico detalhado, exames, tratamentos e evolução do paciente.",
    image: "/assets/medical-records.png",
    highlights: ["Histórico Completo", "Exames Digitais", "Evolução Médica", "Acesso Rápido"],
    color: "from-yellow-500 to-orange-500"
  }
];

export default function SystemShowcase() {
  return (
    <section id="sistema" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4">
            Conheça o
            <img 
              src="/assets/logo-v1-transparente-v2.png" 
              alt="PetSys Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </h2>
          
          <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Pensado especialmente para a rotina do atendimento <b>médico-veterinário</b>, o <b>PetSys</b> reúne as funcionalidades essenciais para agilizar processos, organizar informações e <b>elevar o nível do cuidado prestado aos pets</b>.
            Novas funcionalidades são planejados e desenvolvidos <b>continuamente</b> para ampliar a gama de <b>recursos disponibilizados na ferramenta</b>.
          </p>
        </div>

        <div className="space-y-20">
          {systemFeatures.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                      <span className="text-sm font-medium text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>


              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Revolucionar sua Clínica?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Assine o PetSys e explore todos os recursos que irão auxiliar no seu dia a dia
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
              onClick={() => window.open('https://app.petsys.net/registrar', '_blank')}
            >
              Assine Já
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}