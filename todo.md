# PetSys Coming Soon Page - MVP Todo

## Objetivo
Criar uma página simples e clean informando que o PetSys está em construção e será lançado em Dezembro de 2025, com formulário de contato usando EmailJS.

## Arquivos a criar/modificar:

1. **index.html** - Atualizar título, favicon e meta tags para PetSys
2. **src/pages/Index.tsx** - Página principal com:
   - Logo do PetSys
   - Mensagem de "Em construção"
   - Data de lançamento (Dezembro 2025)
   - Formulário de contato com campos: Nome, Email, Telefone, Empresa, Mensagem
   - Integração com EmailJS
3. **src/components/ContactForm.tsx** - Componente do formulário de contato
4. **src/lib/emailjs.ts** - Configuração e função para envio via EmailJS

## Design:
- Clean e minimalista
- Cores baseadas no logo: roxo escuro (#2D1B69) e lilás (#B8A9FF)
- Fundo claro similar ao logo
- Formulário similar à referência fornecida

## Funcionalidades:
- Formulário responsivo
- Validação de campos
- Envio via EmailJS com os parâmetros fornecidos
- Feedback visual após envio