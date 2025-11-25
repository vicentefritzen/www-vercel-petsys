import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Calendar, 
  FileText, 
  Brain, 
  Shield, 
  BarChart3,
  Clock,
  Heart,
  Stethoscope
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Gestão de Clientes & Pets',
    description: 'Cadastre e gerencie informações completas de clientes e seus pets de forma organizada.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Stethoscope,
    title: 'Consultas e Exames',
    description: 'Registre consultas, exames e procedimentos com histórico completo para cada pet.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: FileText,
    title: 'Prontuário Digital',
    description: 'Mantenha prontuários digitais completos com histórico médico detalhado de cada animal.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BarChart3,
    title: 'Receituários & Prescrições',
    description: 'Receituário médico registrado na ficha do pet, facilitando o acompanhamento e futuras consultas.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Shield,
    title: 'Controle de Vacinação',
    description: 'Sistema de controle de vacinação, emissão de relatórios e alertas para próximas doses.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Cuidado Especializado',
    description: 'Todos os dados são seus! Tudo é registrado em data center com alta segurança e backup automático.',
    color: 'from-red-500 to-pink-500'
  }
];

export default function Features() {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Principais
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}Recursos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gestão avançada para clínicas veterinárias e pet shops: um sistema em constante evolução, com recursos criados sob medida para auxiliar no dia a dia do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}