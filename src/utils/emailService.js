// emailService.js
import emailjs from '@emailjs/browser';
import { toast, Zoom } from 'react-toastify';

// Función para enviar el email
export const sendEmail = (formRef) => {
    return emailjs
        .sendForm('service_wdmarv8', 'template_rfptx3a', formRef.current, {
            publicKey: '2y1bJxttVJ5rAWxup',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
};

// Función para manejar el submit del formulario con validaciones
export const handleFormSubmit = (form) => (e) => {
    e.preventDefault();

    // Validar campos
    const name = form.current['user_name'].value.trim();
    const email = form.current['user_email'].value.trim();
    const message = form.current['message'].value.trim();

    // Verifica si los campos están vacíos
    if (!name || !email) {
        toast.error("Por favor, complete todos los campos obligatorios.", {
            position: "top-center",
            className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-cyan-400 text-left",
            theme: "dark",
            transition: Zoom,
        });
        return;
    }

    // Validar límite de caracteres para el nombre
    if (name.length > 30) {
        toast.error("El nombre no puede tener más de 30 caracteres.", {
            position: "top-center",
            className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-gray-200 text-left",
            theme: "dark",
            transition: Zoom,
        });
        return;
    }

    // Validar límite de caracteres para el mensaje
    if (message.length > 399) {
        toast.error("El mensaje no puede tener más de 399 caracteres.", {
            position: "top-center",
            className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-gray-200 text-left",
            theme: "dark",
            transition: Zoom,
        });
        return;
    }

    // Enviar el email si todas las validaciones pasan
    sendEmail(form)
        .then(() => {
            toast("Email enviado 🚀, gracias por contactar conmigo!", {
                position: "top-center",
                className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-gray-200 text-left",
                theme: "dark",
                transition: Zoom,
            });
            form.current.reset(); // Resetea el formulario después de enviar
        })
        .catch((error) => {
            toast.error("Error al enviar el email. Inténtalo de nuevo más tarde.", {
                position: "top-center",
                className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-gray-200 text-left",
                theme: "dark",
                transition: Zoom,
            });
            console.error('Error sending email:', error);
        });
};
