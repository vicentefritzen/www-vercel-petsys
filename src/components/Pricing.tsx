import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star } from 'lucide-react';

const plans = [
  {
    name: 'Professional',
    price: 'R$ 99,90',
    period: '/mês',
    description: 'Indicado para profissionais autônomos que atuam individualmente, incluindo médicos-veterinários independentes que realizam atendimentos em clínicas.',
    features: [
      '1 conta profissional',
      'Gestão de clientes e pets',
      'Gestão de prontuários e exames',
      'Controle de peso dos pets',
      'Histórico de vacinação',
      'Repositório de exames',
      'Receituário eletrônico',
      'Recursos avançados exclusivos',
      'Sem fidelidade'
    ],
    popular: true,
    color: 'border-purple-500 shadow-lg shadow-purple-100',
    buttonColor: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
  },
  {
    name: 'Enterprise',
    price: 'R$ 149,90',
    period: '/mês',
    description: 'Indicado para empresas com consultórios veterinários que precisam gerenciar usuários e definir, de forma personalizada, os perfis de acesso de cada um.',
    features: [
      'Até 5 usuários inclusos',
      'Usuário adicional por R$ 39,90',
      'Gestão de clientes e pets',
      'Gestão de contratos de serviço',
      'Gestão de prontuários e exames',
      'Controle de peso dos pets',
      'Histórico de vacinação',
      'Repositório de exames',
      'Receituário eletrônico',
      'Recursos avançados exclusivos',
      'Sem fidelidade'
    ],
    color: 'border-yellow-400',
    buttonColor: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
  }
];

export default function Pricing() {
  return (
    <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Planos que
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}cabem no seu bolso
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para você.
          </p>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full px-6 py-3 inline-flex items-center gap-2">
            <Star className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-semibold">Sem fidelidade • Cancele quando quiser</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.color} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                      ⭐ Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  

                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Botão único */}
          <div className="flex justify-center">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold px-12"
              size="lg"
              onClick={() => window.open('https://app.petsys.net/registrar', '_blank')}
            >
              Assine Já
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Precisa de mais usuários ou funcionalidades personalizadas?
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-200 text-purple-600 hover:bg-purple-50"
            onClick={() => window.open('https://app.petsys.net/registrar', '_blank')}
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
}