import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { sendContactEmail, ContactFormData } from '@/lib/emailjs';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Remove todos os caracteres não numéricos
    value = value.replace(/\D/g, '');
    
    // Aplica a máscara baseada no comprimento
    if (value.length <= 10) {
      // Formato: (99) 9999-9999
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      // Formato: (99) 99999-9999
      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    
    // Remove hífen no final se não há dígitos após ele
    value = value.replace(/-$/, '');
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Por favor, preencha pelo menos o nome e email.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await sendContactEmail(formData);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="fale-conosco" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quer conversar e
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}esclarecer algo?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fale conosco para entendermos suas necessidades e esclarecer todas as suas dúvidas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardTitle className="text-2xl font-bold">Fale Conosco</CardTitle>
                <p className="text-purple-100 text-sm">Preencha o formulário e nossa equipe entrará em contato com você.</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-purple-700 font-semibold">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 rounded-lg h-12 transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-purple-700 font-semibold">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 rounded-lg h-12 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-purple-700 font-semibold">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(99) 99999-9999"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        maxLength={15}
                        className="border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 rounded-lg h-12 transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-purple-700 font-semibold">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Sua empresa"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 rounded-lg h-12 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-purple-700 font-semibold">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Conte-nos sobre seu interesse no PetSys ou como podemos ajudar..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 rounded-lg resize-none transition-all duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 flex flex-col justify-end">
              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Por que escolher o PetSys?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <span className="text-lg">15+ anos de experiência veterinária</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <span className="text-lg">Sistema completo e integrado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <span className="text-lg">Suporte técnico especializado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                        📞
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">(48) 99989-1596</p>
                        <p className="text-sm text-gray-600">Segunda a Sexta, 8h às 18h</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                        📍
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Florianópolis, SC</p>
                        <p className="text-sm text-gray-600">Atendimento em todo Brasil</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}