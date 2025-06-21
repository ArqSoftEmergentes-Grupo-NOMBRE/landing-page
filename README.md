# Tarket Contracts – Landing Page

> Smart contracts for risk-free web development.
> Connect with freelancers and validate project deliveries with transparency and security, powered by blockchain automation.

---

## Tabla de contenidos

* [Descripción del proyecto](#descripción-del-proyecto)
* [Estructura del repositorio](#estructura-del-repositorio)
* [Tecnologías y herramientas](#tecnologías-y-herramientas)
* [Instalación y desarrollo local](#instalación-y-desarrollo-local)
* [Uso](#uso)
* [Autores](#autores)

---

## Descripción del proyecto

Este repositorio contiene la **Landing Page** de Tarket Contracts, la pieza de presentación del modelo de negocio y punto de entrada para los usuarios profesionales y desarrolladores. Está diseñada para:

* Explicar el propósito y funcionalidades de la plataforma.
* Convencer al visitante con un pitch claro y un Call-To-Action.
* Redirigir al usuario al frontend web o a las tiendas de apps.
* Mostrar el equipo, beneficios y enlaces a redes sociales.

La página es **estática** (HTML5, CSS3, JavaScript vanilla) y cumple con los principios de **Responsive Web Design**.

---

## Estructura del repositorio

* **software-emergentes/**
    * **css/**
        * `_variables.css`
        * `main.css`
    * **images/**
    * **js/**
        * `main.js`
    * **public/**
        * `index.html`
    * `README.md` ← este archivo

---

## Tecnologías y herramientas

* HTML5, CSS3, JavaScript (vanilla)
* Google Fonts: Poppins
* Metodologías: GitFlow, Conventional Commits
* Linters/Formatters: stylelint, ESLint
* Editor recomendado: WebStorm o VS Code
* Hosting sugerido: Netlify, Vercel o Azure Static Web Apps

---

## Instalación y desarrollo local

1. Clona el repositorio:

   ```bash
   git clone git@github.com:<org>/tarket-landing-page.git
   cd tarket-landing-page
   ```
2. Abre el proyecto en tu editor (WebStorm o VS Code).
3. Sirve la carpeta `public/` con un servidor estático:

   ```bash
   npx serve public
   ```

   o abre directamente `public/index.html` en tu navegador.
4. Modifica CSS (`css/`) o JS (`js/`) y recarga el navegador.

---

## Uso

* **Navegación**: el menú superior ancla a secciones (#hero, #about, #professionals, #developers, #team).
* **Responsive**: adaptativo a los breakpoints 480 px, 768 px y 1024 px.
* **Interacción**:

    * Botón de menú en móvil (`.header__toggle`).
    * Enlaces a redes sociales en el footer.

---

## Autores

* César A. Castilla Pachas (u202218735)
* Joaquín M. Cortés Casas (u202114545)
* Fernando J. Díaz Silva (u202112722)
* Ramón A. Jorge Arévalo (u20221D126)

**Junio, 2025**
