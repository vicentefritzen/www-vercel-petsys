import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

// Initialize EmailJS with your public key
emailjs.init("ZchN5NxCTPE9pdmJ8");

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    from_phone: data.phone,
    empresa: data.company,
    message: data.message,
    to_name: 'PetSys',
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
    throw error;
  }
};