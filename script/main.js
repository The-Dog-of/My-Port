const apiURL = "/api/send"; 

const translations = {
    en: {
        academic: "Systems Analysis & Development • 4th Semester",
        about: "I transform coffee into clean, scalable code. My passion lies at the intersection between <strong>Robust Software Engineering</strong> (Backend/Database) and <strong>Interactive Creativity</strong> (Game Dev on Roblox).",
        btn_contact: "Contact Me",
        hours_82: "82h of study",
        desc_backend: "SQL Server and PostgreSQL specialist. Development of robust APIs using Python (Flask) and C# (.NET Core).",
        hours_1480: "1480h+ of Study",
        desc_js: "Mastery of ES6+, advanced DOM manipulation and HTML5/CSS3 (1002h accumulated).",
        hours_290: "290h of Study",
        desc_python: "Creation of Discord Bots, automation scripts and basic Data Science.",
        hours_40: "40h of Study",
        desc_csharp: "Development of corporate applications and object-oriented logic.",
        hours_212: "212h of Study",
        desc_luau: "Advanced OOP programming, script optimization and Security (Anti-Cheat).",
        desc_ui: "Immersive interfaces (Scalable GUI) focused on user experience.",
        desc_vfx: "Particle systems and shaders for combat abilities.",
        desc_build: "Construction of detailed and optimized maps.",

        companies_title: "Trusted by / Worked with",
        title_projects: "Selected Projects",
        btn_demo: "View Live Demo",
        btn_code: "View Code",
        
        proj_dkz: "Professional site for a high-profile game developer.",
        proj_eclipse: "Site developed for a discord moderation studio.",
        proj_infi: "Professional portfolio for a Community Moderator.",
        proj_pag: "Payment gateway integration showcase.",
        proj_studio: "Professional template for Game Studios.",
        proj_curso: "Sales landing page for client acquisition.",
        proj_store: "Website for a virtual store with payment integration.",
        proj_dog: "Application consuming The Dog API.",

        contact_title: "Get in Touch",
        contact_sub: "Have an idea? Send me a direct message.",
        btn_send: "Send Message",
        footer: "Made with code and coffee."
    },
    pt: {
        academic: "Análise e Desenv. de Sistemas • 4º Semestre",
        about: "Transformo café em código limpo e escalável. Minha paixão une a <strong>Engenharia de Software Robusta</strong> (Backend/BD) e a <strong>Criatividade Interativa</strong> (Game Dev no Roblox).",
        btn_contact: "Fale Comigo",
        hours_82: "82h de estudo",
        desc_backend: "Especialista em SQL Server e PostgreSQL. APIs robustas com Python (Flask) e C# (.NET Core).",
        hours_1480: "1480h+ de estudo",
        desc_js: "Domínio de ES6+, manipulação de DOM e HTML5/CSS3 (1002h acumuladas).",
        hours_290: "290h de estudo",
        desc_python: "Criação de Bots Discord, scripts de automação e Data Science básico.",
        hours_40: "40h de estudo",
        desc_csharp: "Desenvolvimento de aplicações corporativas e lógica orientada a objetos.",
        hours_212: "212h de estudo",
        desc_luau: "Programação OOP avançada, otimização de scripts e Segurança (Anti-Cheat).",
        desc_ui: "Interfaces imersivas (Scalable GUI) focadas na experiência do usuário.",
        desc_vfx: "Sistemas de partículas e shaders para habilidades de combate.",
        desc_build: "Construção de mapas detalhados e otimizados.",

        companies_title: "Empresas que confiam / Trabalhei com",
        title_projects: "Projetos Selecionados",
        btn_demo: "Ver Demo",
        btn_code: "Ver Código",

        proj_dkz: "Site profissional para desenvolvedor de jogos high-profile.",
        proj_eclipse: "Site desenvolvido para um estúdio de moderação.",
        proj_infi: "Portfólio profissional para Moderador.",
        proj_pag: "Integração de gateway de pagamento.",
        proj_studio: "Modelo profissional para estúdios de jogos.",
        proj_curso: "Página de vendas para captação de clientes.",
        proj_store: "Loja virtual com integração de pagamentos.",
        proj_dog: "Aplicação consumindo The Dog API.",

        contact_title: "Entre em Contato",
        contact_sub: "Tem uma ideia? Me mande uma mensagem direta.",
        btn_send: "Enviar Mensagem",
        footer: "Feito com código e café."
    }
};

let currentLang = 'en';

const textElement = document.getElementById('typewriter');
const phrases = {
    en: [
        "I build Scalable Web Systems.",
        "I create Immersive Roblox Games.",
        "I am a Fullstack Developer.",
        "I design Interactive UIs."
    ],
    pt: [
        "Eu crio Sistemas Escaláveis.",
        "Eu desenvolvo Jogos no Roblox.",
        "Eu sou Desenvolvedor Fullstack.",
        "Eu desenho Interfaces Interativas."
    ]
};

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;

function type() {
    const currentPhrases = phrases[currentLang];
    const currentPhrase = currentPhrases[phraseIndex % currentPhrases.length];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2500; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex++;
        typeSpeed = 500;
    }
    typewriterTimeout = setTimeout(type, typeSpeed);
}


function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelector('.lang-text').textContent = lang === 'en' ? 'EN' : 'PT';

    clearTimeout(typewriterTimeout);
    charIndex = 0; isDeleting = false; textElement.textContent = '';
    type();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'pt' : 'en');
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    icon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

window.openTab = function(tabName) {
    document.querySelectorAll('.skills-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const targetSection = document.getElementById(tabName);
    if(targetSection) targetSection.classList.add('active');
    const targetBtn = document.querySelector(`.tab-btn[data-target="${tabName}"]`);
    if(targetBtn) targetBtn.classList.add('active');
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.getElementById('discord-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const msg = document.getElementById('contact-msg').value;
    const feedback = document.getElementById('feedback-msg');
    const btn = document.querySelector('.submit-btn');
    const originalBtnText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    const payload = {
        username: "Portfolio Contact",
        embeds: [{
            title: "📬 New Contact / Novo Contato",
            color: 3447003,
            fields: [
                { name: "Name", value: name, inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Message", value: msg }
            ],
            footer: { text: "Sent via Vercel Secure API" },
            timestamp: new Date().toISOString()
        }]
    };

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            feedback.style.color = "#4caf50";
            feedback.innerHTML = currentLang === 'en' ? "Message sent successfully!" : "Mensagem enviada com sucesso!";
            document.getElementById('discord-form').reset();
        } else { throw new Error('Error'); }
    } catch (error) {
        feedback.style.color = "#f44336";
        feedback.innerHTML = currentLang === 'en' ? "Error sending message." : "Erro ao enviar mensagem.";
    } finally {
        btn.innerHTML = originalBtnText;
        btn.disabled = false;
        setTimeout(() => feedback.innerHTML = '', 5000);
    }
});

window.onload = () => {
    type();
};