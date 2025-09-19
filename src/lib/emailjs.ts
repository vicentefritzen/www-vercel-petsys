import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    company: formData.company,
    message: formData.message,
    to_name: 'PetSys Team',
  };

  try {
    await emailjs.send(
      "service_s8aqkt5",
      "template_bxui8l3",
      templateParams,
      "ZchN5NxCTPE9pdmJ8"
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw new Error('Falha ao enviar mensagem. Tente novamente.');
  }
};