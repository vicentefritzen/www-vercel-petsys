import { Heart, Mail, Phone, MapPin, Instagram, Linkedin, Info, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Footer() {
  const [showLegalModal, setShowLegalModal] = useState(false);

  return (
    <>
      <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/logo-paw-transparente.png" 
                alt="PetSys Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Sistema de gerenciamento para médicos veterinários autônomos e consultórios veterinários com recursos completos para gestão de clientes e pets, além de suporte avançado com Inteligência Artificial.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => window.open('https://instagram.com/petsys.oficial', '_blank')}
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => window.open('https://www.linkedin.com/company/104331641/', '_blank')}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produto</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#fale-conosco" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="https://app.petsys.net/health" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Status do Sistema</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>contato@petsys.net</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>(48) 99989-1596</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>Florianópolis, SC</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full"
                onClick={() => document.getElementById('fale-conosco')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 PetSys. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button 
                onClick={() => setShowLegalModal(true)}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Info className="h-4 w-4" />
                Informações Legais
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* Modal de Informações Legais */}
    {showLegalModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Info className="h-6 w-6" />
                <h2 className="text-xl font-bold">Informações Legais</h2>
              </div>
              <button
                onClick={() => setShowLegalModal(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="p-5 space-y-4">
            <div className="text-center">
              <p className="text-gray-700 text-sm leading-relaxed">
                O <strong>PetSys</strong> é produto de software exclusivo e de propriedade intelectual da 
                <strong> VF Tecnologia Ltda.</strong>
              </p>
            </div>

            <hr className="border-gray-200" />

            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <h4 className="font-semibold text-gray-900 text-center text-sm">Dados da Empresa</h4>
              <div className="text-xs text-gray-700 space-y-1">
                <p><strong>Razão Social:</strong> VF Tecnologia Ltda.</p>
                <p><strong>CNPJ:</strong> 59.158.177/0001-63</p>
                <p><strong>Endereço:</strong> Av. Prefeito Osmar Cunha, 416, Sala 1108</p>
                <p className="pl-12">Centro, Florianópolis/SC - CEP 88.015-100</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Marca e Desenvolvimento</h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Mantido e desenvolvido pela marca <strong>vicentefritzen.com</strong>, 
                  especializada em soluções tecnológicas para o setor veterinário.
                </p>
              </div>
              
              <div className="flex justify-start">
                <Button
                  onClick={() => window.open('https://vicentefritzen.com', '_blank')}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xs"
                >
                  Visitar vicentefritzen.com
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 text-sm">Direitos Autorais</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Todos os direitos sobre o PetSys são de propriedade exclusiva da VF Tecnologia Ltda. e estão 
                protegidos pelas leis de direitos autorais do Brasil.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-b-2xl text-center">
            <p className="text-sm font-medium">
              © 2025 VF Tecnologia Ltda. - Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
}