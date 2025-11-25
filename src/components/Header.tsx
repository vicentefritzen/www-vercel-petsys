import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/logo-paw-transparente.png" 
              alt="PetSys Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#recursos" className="text-gray-600 hover:text-purple-600 transition-colors">
              Recursos
            </a>
            <a href="#beneficios" className="text-gray-600 hover:text-purple-600 transition-colors">
              Benefícios
            </a>
            <a href="#precos" className="text-gray-600 hover:text-purple-600 transition-colors">
              Preços
            </a>
            <a href="#fale-conosco" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-purple-600 hover:text-purple-700"
              onClick={() => window.open('https://app.petsys.net/', '_blank')}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => window.open('https://app.petsys.net/registrar', '_blank')}
            >
              Assine Já
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#recursos" className="text-gray-600 hover:text-purple-600 transition-colors">
                Recursos
              </a>
              <a href="#beneficios" className="text-gray-600 hover:text-purple-600 transition-colors">
                Benefícios
              </a>
              <a href="#precos" className="text-gray-600 hover:text-purple-600 transition-colors">
                Preços
              </a>
              <a href="#fale-conosco" className="text-gray-600 hover:text-purple-600 transition-colors">
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700"
                  onClick={() => window.open('https://app.petsys.net/', '_blank')}
                >
                  Login
                </Button>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => window.open('https://app.petsys.net/registrar', '_blank')}
                >
                  Assine Já
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}