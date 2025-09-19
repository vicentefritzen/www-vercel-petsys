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
    <Card className="w-full max-w-lg mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-2xl overflow-hidden">
      <CardHeader className="text-center pb-6 bg-gradient-to-r from-[#2D1B69] to-[#4c3494] text-white">
        <CardTitle className="text-2xl font-bold">Fique por Dentro</CardTitle>
        <p className="text-purple-100 text-sm">Seja notificado do lançamento oficial e receba atualizações exclusivas</p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#2D1B69] font-semibold text-sm">Nome Completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border-2 border-gray-200 focus:border-[#B8A9FF] focus:ring-2 focus:ring-[#B8A9FF]/20 rounded-lg h-12 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#2D1B69] font-semibold text-sm">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border-2 border-gray-200 focus:border-[#B8A9FF] focus:ring-2 focus:ring-[#B8A9FF]/20 rounded-lg h-12 transition-all duration-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#2D1B69] font-semibold text-sm">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(99) 99999-9999"
                value={formData.phone}
                onChange={handlePhoneChange}
                maxLength={15}
                className="border-2 border-gray-200 focus:border-[#B8A9FF] focus:ring-2 focus:ring-[#B8A9FF]/20 rounded-lg h-12 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#2D1B69] font-semibold text-sm">Empresa</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Sua empresa"
                value={formData.company}
                onChange={handleInputChange}
                className="border-2 border-gray-200 focus:border-[#B8A9FF] focus:ring-2 focus:ring-[#B8A9FF]/20 rounded-lg h-12 transition-all duration-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#2D1B69] font-semibold text-sm">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Conte-nos sobre seu interesse no PetSys ou como podemos ajudar..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="border-2 border-gray-200 focus:border-[#B8A9FF] focus:ring-2 focus:ring-[#B8A9FF]/20 rounded-lg resize-none transition-all duration-200"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#2D1B69] to-[#4c3494] hover:from-[#1f1347] hover:to-[#3a2570] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl h-12"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Enviando...</span>
              </div>
            ) : (
              'Quero ser Notificado'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}