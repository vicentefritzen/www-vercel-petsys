import ContactForm from '@/components/ContactForm';

export default function Index() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-12 animate-in fade-in slide-in-from-top-8 duration-1000">
            <img 
              src="/assets/logo-petsys.png" 
              alt="PetSys Logo" 
              className="h-72 w-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-[#2D1B69] mb-6 tracking-tight">
                Em Breve
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 font-light max-w-5xl mx-auto leading-relaxed">
                Uma solução completa para atendimento veterinário e gestão de pet shop, com inteligência artificial integrada para otimizar diagnósticos e operações do dia a dia.
              </p>
            </div>
            
            {/* Launch Date Card */}
            <div className="relative">
              <div className="bg-gradient-to-r from-[#2D1B69] to-[#4c3494] rounded-2xl p-8 shadow-2xl mx-auto max-w-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center text-white space-y-4">
                  <p className="text-lg md:text-xl font-medium opacity-90">
                    Lançamento Oficial
                  </p>
                  <div className="space-y-2">
                    <p className="text-4xl md:text-6xl font-bold text-[#B8A9FF]">
                      Dezembro
                    </p>
                    <p className="text-3xl md:text-5xl font-bold">
                      2025
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm md:text-base opacity-80">
                      Registre-se e seja notificado no lançamento!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#B8A9FF] rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#B8A9FF] rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#B8A9FF] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-[#2D1B69] text-xl font-bold">🏥</span>
                  </div>
                  <h3 className="font-semibold text-[#2D1B69]">Gestão Veterinária</h3>
                  <p className="text-sm text-gray-600">Sistema completo para clínicas, consultórios e médicos veterinários autônomos</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#B8A9FF] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-[#2D1B69] text-xl font-bold">🏪</span>
                  </div>
                  <h3 className="font-semibold text-[#2D1B69]">Gestão de Pet Shop</h3>
                  <p className="text-sm text-gray-600">Gerenciamento completo da agenda de serviços do pet shop, além do controle de entrega dos pets!</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#B8A9FF] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-[#2D1B69] text-xl font-bold">🔗</span>
                  </div>
                  <h3 className="font-semibold text-[#2D1B69]">Integração Personalizada</h3>
                  <p className="text-sm text-gray-600">Através do modelo de integração, o PetSys é flexível e permite se conectar e ser conectado com outros sistemas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <ContactForm />
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm space-y-2">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <span className="px-4 text-[#2D1B69] font-medium">PetSys</span>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>
          <p>© {currentYear} PetSys. Todos os direitos reservados.</p>
          <p className="text-xs opacity-75">Transformando o cuidado pet através da tecnologia</p>
        </div>
      </div>
    </div>
  );
}