// emailService.js
import emailjs from '@emailjs/browser';

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
