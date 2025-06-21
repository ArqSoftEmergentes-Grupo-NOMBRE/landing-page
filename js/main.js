// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Translations config
    const translations = {
        en: {
            header: {
                logoAlt: 'Tarket Logo',
                nav: {
                    aboutProduct: 'About the Product',
                    professionals: 'Professionals',
                    developers: 'Developers',
                    aboutTeam: 'About the Team'
                }
            },
            hero: {
                title: 'Smart contracts for risk-free web development.',
                subtitle: 'Connect with freelancers and validate project deliveries with transparency and security, powered by blockchain automation.',
                cta: 'Know more'
            },
            about: {
                logoAlt: 'Tarket Contracts',
                intro: 'Tarket Contracts is a decentralized platform that enables digital service agreements between web developers and clients to be automated using smart contracts.',
                heading: 'This solution addresses the common lack of trust in freelance web development by ensuring:',
                features: [
                    { alt: 'Review icon', desc: 'The client receives the agreed-upon deliverable, validated through a transparent review process before any payment is released.' },
                    { alt: 'Payment icon', desc: 'Once the service is confirmed, the developer receives payment through a secure and tamper-proof smart contract.' },
                    { alt: 'Receipt icon', desc: 'Upon validation, a digital receipt is instantly generated and stored as immutable proof of delivery.' }
                ],
                videoTitle: 'Video About the Product'
            },
            professionals: {
                title: 'Launch your personal site with expert help',
                subtitle: 'Connect with trusted web developers and build your digital presence—hassle-free and on your terms.',
                androidAlt: 'Android Icon',
                android: 'Download now',
                iosAlt: 'Apple Icon',
                ios: 'Download now'
            },
            benefits: {
                title: '3 Key Benefits',
                items: [
                    { alt: 'Deliver icon', title: 'Deliver with confidence', desc: 'Use smart contracts to ensure your work is reviewed and approved before payment is triggered, protecting your effort and time.' },
                    { alt: 'Boost icon', title: 'Boost your reputation', desc: 'Every approved delivery adds to your verified history, building professional credibility and attracting new clients.' },
                    { alt: 'Get paid icon', title: 'Get paid automatically', desc: 'No more chasing payments—once a project is validated, funds are released securely and instantly.' }
                ]
            },
            developers: {
                title: 'Freelance with confidence, earn without risk',
                subtitle: 'Tarket lets you deliver websites with automated validation, secure payments, and a growing client base.',
                globeAlt: 'Globe Icon',
                cta: 'Start now'
            },
            team: {
                title: 'Our Team',
                members: [
                    { alt: 'César A. Castilla Pachas' },
                    { alt: 'Joaquín M. Cortés Casas' },
                    { alt: 'Fernando J. Díaz Silva' },
                    { alt: 'Ramón A. Jorge Arévalo' }
                ],
                videoTitle: 'Video About the Team'
            },
            footer: {
                social: {
                    facebookAlt: 'Facebook',
                    instagramAlt: 'Instagram',
                    linkedinAlt: 'LinkedIn'
                },
                contactLabel: 'Contact:',
                copy: '© 2025 Tarket Contracts. All rights reserved.'
            }
        },
        es: {
            header: {
                logoAlt: 'Logo de Tarket',
                nav: {
                    aboutProduct: 'Sobre el Producto',
                    professionals: 'Profesionales',
                    developers: 'Desarrolladores',
                    aboutTeam: 'Sobre el Equipo'
                }
            },
            hero: {
                title: 'Contratos inteligentes para desarrollo web sin riesgos.',
                subtitle: 'Conéctate con freelancers y valida entregas de proyectos con transparencia y seguridad, potenciado por automatización blockchain.',
                cta: 'Conoce más'
            },
            about: {
                logoAlt: 'Tarket Contracts',
                intro: 'Tarket Contracts es una plataforma descentralizada que automatiza acuerdos de servicio digital entre desarrolladores web y clientes mediante contratos inteligentes.',
                heading: 'Esta solución ataca la falta de confianza en el desarrollo web freelance asegurando:',
                features: [
                    { alt: 'Ícono de revisión', desc: 'El cliente recibe el entregable acordado, validado mediante un proceso transparente de revisión antes de liberar cualquier pago.' },
                    { alt: 'Ícono de pago', desc: 'Una vez confirmado el servicio, el desarrollador recibe el pago a través de un contrato inteligente seguro e inmutable.' },
                    { alt: 'Ícono de comprobante', desc: 'Tras la validación, se genera instantáneamente un recibo digital almacenado como prueba inmutable de entrega.' }
                ],
                videoTitle: 'Video sobre el Producto'
            },
            professionals: {
                title: 'Lanza tu sitio personal con ayuda experta',
                subtitle: 'Conéctate con desarrolladores web de confianza y construye tu presencia digital—sin complicaciones y a tu medida.',
                androidAlt: 'Ícono de Android',
                android: 'Descargar ahora',
                iosAlt: 'Ícono de Apple',
                ios: 'Descargar ahora'
            },
            benefits: {
                title: '3 Beneficios Clave',
                items: [
                    { alt: 'Ícono de entrega', title: 'Entrega con confianza', desc: 'Usa contratos inteligentes para garantizar que tu trabajo sea revisado y aprobado antes de liberar el pago, protegiendo tu tiempo y esfuerzo.' },
                    { alt: 'Ícono de reputación', title: 'Impulsa tu reputación', desc: 'Cada entrega aprobada añade a tu historial verificado, aumentando tu credibilidad profesional y atrayendo nuevos clientes.' },
                    { alt: 'Ícono de pago automático', title: 'Cobro automático', desc: 'Olvídate de perseguir pagos: una vez validado el proyecto, los fondos se liberan de forma segura e inmediata.' }
                ]
            },
            developers: {
                title: 'Freelance con confianza, gana sin riesgos',
                subtitle: 'Tarket te permite entregar sitios web con validación automatizada, pagos seguros y una base de clientes en crecimiento.',
                globeAlt: 'Ícono de globo',
                cta: 'Comenzar ahora'
            },
            team: {
                title: 'Nuestro Equipo',
                members: [
                    { alt: 'César A. Castilla Pachas' },
                    { alt: 'Joaquín M. Cortés Casas' },
                    { alt: 'Fernando J. Díaz Silva' },
                    { alt: 'Ramón A. Jorge Arévalo' }
                ],
                videoTitle: 'Video sobre el Equipo'
            },
            footer: {
                social: {
                    facebookAlt: 'Facebook',
                    instagramAlt: 'Instagram',
                    linkedinAlt: 'LinkedIn'
                },
                contactLabel: 'Contacto:',
                copy: '© 2025 Tarket Contracts. Todos los derechos reservados.'
            }
        }
    };

    function applyTranslations(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            const txt = keys.reduce((o, k) => o && o[k], translations[lang]);
            if (txt) el.textContent = txt;
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const keys = el.getAttribute('data-i18n-alt').split('.');
            const alt = keys.reduce((o, k) => o && o[k], translations[lang]);
            if (alt) el.alt = alt;
        });
        document.querySelectorAll('.lang-switch').forEach(btn => {
            btn.classList.toggle('active', btn.id === `btn-${lang}`);
        });
    }

    // Init language
    const currentLang = localStorage.getItem('lang') || 'en';
    applyTranslations(currentLang);

    document.getElementById('btn-es').addEventListener('click', () => {
        localStorage.setItem('lang', 'es');
        applyTranslations('es');
    });
    document.getElementById('btn-en').addEventListener('click', () => {
        localStorage.setItem('lang', 'en');
        applyTranslations('en');
    });

    // Navigation highlight
    const navLinks = document.querySelectorAll('.header__nav a[href^="#"]');
    const sections = Array.from(navLinks).map(link => {
        return document.getElementById(link.getAttribute('href').slice(1));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        const trigger = window.scrollY + window.innerHeight / 3;
        sections.forEach((sec, i) => {
            if (!sec) return;
            const top = sec.offsetTop;
            const bottom = top + sec.offsetHeight;
            if (trigger >= top && trigger < bottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                navLinks[i].classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    const toggleButton = document.querySelector('.header__toggle');
    const nav = document.querySelector('.header__nav');
    toggleButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggleButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                toggleButton.setAttribute('aria-label', 'Open menu');
            }
        });
    });


});
