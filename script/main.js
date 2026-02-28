const apiURL = "/api/send";

const translations = {
    en: {
        academic: "Systems Analysis & Dev • 4th Semester",
        about: "I transform coffee into clean, scalable code. My passion lies at the intersection between <strong>Robust Software Engineering</strong> and <strong>Interactive Creativity</strong>.",
        btn_contact: "Contact",
        status: "Available for Projects",
        hours_82: "82h of study",
        desc_backend: "SQL Server, PostgreSQL, Python (Flask) & C# (.NET Core).",
        hours_1480: "1480h+ of Study",
        desc_js: "ES6+, DOM Manipulation, HTML5/CSS3.",
        hours_290: "290h of Study",
        desc_python: "Discord Bots, scripts & basic Data Science.",
        hours_40: "40h of Study",
        desc_csharp: "Corporate applications & OOP logic.",
        hours_212: "212h of Study",
        desc_luau: "Advanced OOP, Optimization & Anti-Cheat security.",
        desc_ui: "Immersive Scalable GUIs & User Experience.",
        desc_vfx: "Particle systems & shaders for combat abilities.",
        desc_build: "Detailed & optimized map construction.",
        companies_title: "Trusted by / Worked with",
        title_featured: "Featured Projects",
        title_projects: "All Projects",
        subtitle_projects: "An archive of my work across Web Development and Game Studios.",
        filter_all: "All",
        filter_studios: "Studios",
        filter_websites: "Websites",
        filter_mod: "Moderator",
        btn_code: "View Case",
        btn_view_all: "Explore All Projects",
        proj_dkz: "Professional site for a high-profile game developer.",
        proj_eclipse: "Professional site for a moderation studio.",
        proj_infi: "Professional portfolio for a Community Moderator.",
        proj_pag: "Professional portfolio for a Community Moderator.",
        proj_studio: "Professional template for Game Studios.",
        proj_curso: "Sales landing page for client acquisition.",
        proj_store: "E-commerce website with cart logic.",
        proj_dog: "Application consuming The Dog API.",
        proj_doguin: "A professional portfolio for a Community Moderator.",
        proj_finance: "Financial system for managing your finances.",
        contact_title: "Get in Touch",
        contact_sub: "Have an idea or a project? Let's build the future together.",
        btn_send: "Send Message",
        nav_projects: "Projects",
        footer: "All Rights Reserved."
    },
    pt: {
        academic: "Análise e Desenv. de Sistemas • 4º Semestre",
        about: "Transformo café em código limpo e escalável. A minha paixão une a <strong>Engenharia de Software Robusta</strong> e a <strong>Criatividade Interativa</strong>.",
        btn_contact: "Contacto",
        status: "Disponível para Projetos",
        hours_82: "82h de estudo",
        desc_backend: "Especialista em SQL Server e PostgreSQL. APIs robustas com Python (Flask) e C#.",
        hours_1480: "1480h+ de estudo",
        desc_js: "Domínio de ES6+, manipulação avançada de DOM e HTML5/CSS3.",
        hours_290: "290h de estudo",
        desc_python: "Criação de Bots Discord, scripts de automação e Data Science básico.",
        hours_40: "40h de estudo",
        desc_csharp: "Desenvolvimento de aplicações corporativas e lógica orientada a objetos.",
        hours_212: "212h de estudo",
        desc_luau: "Programação OOP avançada, otimização de scripts e Segurança (Anti-Cheat).",
        desc_ui: "Interfaces imersivas (Scalable GUI) focadas na experiência do utilizador.",
        desc_vfx: "Sistemas de partículas e shaders para habilidades de combate.",
        desc_build: "Construção de mapas detalhados e otimizados.",
        companies_title: "Empresas que confiam / Trabalhei com",
        title_featured: "Projetos em Destaque",
        title_projects: "Todos os Projetos",
        subtitle_projects: "Um arquivo do meu trabalho em Desenvolvimento Web e Estúdios de Jogos.",
        filter_all: "Todos",
        filter_studios: "Estúdios",
        filter_websites: "Websites",
        filter_mod: "Moderador",
        btn_code: "Ver Caso",
        btn_view_all: "Explorar Todos os Projetos",
        proj_dkz: "Site profissional para desenvolvedor de jogos high-profile.",
        proj_eclipse: "Site profissional para um estúdio de moderação.",
        proj_infi: "Portfólio profissional para Moderador de Comunidade.",
        proj_pag: "Portfólio profissional para Moderador de Comunidade.",
        proj_studio: "Modelo profissional para Estúdios de Jogos.",
        proj_curso: "Página de vendas para angariação de clientes.",
        proj_store: "Loja virtual com lógica de carrinho.",
        proj_dog: "Aplicação consumindo The Dog API.",
        proj_doguin: "Portfólio profissional para Moderador de Comunidade.",
        proj_finance: "Sistema financeiro para gerir suas finanças.",
        contact_title: "Entre em Contacto",
        contact_sub: "Tem uma ideia ou projeto? Vamos construir o futuro juntos.",
        btn_send: "Enviar Mensagem",
        nav_projects: "Projetos",
        footer: "Todos os Direitos Reservados."
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

const nameElement = document.getElementById('name-typewriter');
const namesArray = ["Richard Souza", "The Dog"];
let nameIndex = 0;
let nameCharIndex = 0;
let nameIsDeleting = false;
let nameTimeout;

function typeName() {
    if (!nameElement) return;
    const currentName = namesArray[nameIndex % namesArray.length];
    if (nameIsDeleting) {
        nameElement.innerHTML = currentName.substring(0, nameCharIndex - 1);
        nameCharIndex--;
    } else {
        nameElement.innerHTML = currentName.substring(0, nameCharIndex + 1);
        nameCharIndex++;
    }
    let typeSpeed = nameIsDeleting ? 50 : 120;
    if (!nameIsDeleting && nameCharIndex === currentName.length) {
        nameIsDeleting = true;
        typeSpeed = 4000; 
    } else if (nameIsDeleting && nameCharIndex === 0) {
        nameIsDeleting = false;
        nameIndex++;
        typeSpeed = 800;
    }
    nameTimeout = setTimeout(typeName, typeSpeed);
}

const bioElement = document.getElementById('typewriter');
const bioPhrases = {
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

let bioIndex = 0;
let bioCharIndex = 0;
let bioIsDeleting = false;
let bioTimeout;

function typeBio() {
    if (!bioElement) return;
    const currentPhrases = bioPhrases[currentLang];
    const currentPhrase = currentPhrases[bioIndex % currentPhrases.length];
    if (bioIsDeleting) {
        bioElement.innerHTML = currentPhrase.substring(0, bioCharIndex - 1);
        bioCharIndex--;
    } else {
        bioElement.innerHTML = currentPhrase.substring(0, bioCharIndex + 1);
        bioCharIndex++;
    }
    let typeSpeed = bioIsDeleting ? 30 : 60;
    if (!bioIsDeleting && bioCharIndex === currentPhrase.length) {
        bioIsDeleting = true;
        typeSpeed = 2500; 
    } else if (bioIsDeleting && bioCharIndex === 0) {
        bioIsDeleting = false;
        bioIndex++;
        typeSpeed = 500;
    }
    bioTimeout = setTimeout(typeBio, typeSpeed);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    const langText = document.querySelector('.lang-text');
    if (langText) langText.textContent = lang === 'en' ? 'EN' : 'PT';
    if (bioElement) {
        clearTimeout(bioTimeout);
        bioCharIndex = 0; 
        bioIsDeleting = false; 
        bioElement.innerHTML = '';
        typeBio();
    }
    updateGallery();
}

const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'pt' : 'en');
    });
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
            if (icon) icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            localStorage.setItem('theme', 'dark');
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}

window.openTab = function(tabName) {
    document.querySelectorAll('.skills-tab-content:not(.arsenal-content)').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab-btn:not(.arsenal-tab-btn)').forEach(btn => btn.classList.remove('active'));
    const targetSection = document.getElementById(tabName);
    if(targetSection) targetSection.classList.add('active');
    const targetBtn = document.querySelector(`.tab-btn[data-target="${tabName}"]`);
    if(targetBtn) targetBtn.classList.add('active');
}

const arsenalTabs = document.querySelectorAll('.arsenal-tab-btn');
if (arsenalTabs.length > 0) {
    arsenalTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            arsenalTabs.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.arsenal-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if(targetContent) targetContent.classList.add('active');
        });
    });
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

document.querySelectorAll(".reveal, .fade-in").forEach((el) => observer.observe(el));

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');
const searchInput = document.getElementById('project-search');

function updateGallery() {
    if (projectCards.length === 0) return;
    const activeBtn = document.querySelector('.filter-btn.active');
    const filterValue = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const searchText = searchInput ? searchInput.value.toLowerCase() : '';
    let visibleCount = 0;
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const textContent = card.textContent.toLowerCase();
        const matchesCategory = (filterValue === 'all' || category === filterValue);
        const matchesSearch = textContent.includes(searchText);
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        if (matchesCategory && matchesSearch) {
            card.style.display = 'flex';
            visibleCount++;
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                if (card.style.opacity === '0') {
                    card.style.display = 'none';
                }
            }, 400);
        }
    });
    const countElement = document.getElementById('results-count');
    if (countElement) {
        countElement.textContent = currentLang === 'en' ? `Showing ${visibleCount} results` : `Mostrando ${visibleCount} resultados`;
    }
}

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateGallery();
        });
    });
}

if (searchInput) {
    searchInput.addEventListener('input', updateGallery);
}

const discordForm = document.getElementById('discord-form');
if (discordForm) {
    discordForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const msg = document.getElementById('contact-msg').value;
        const feedback = document.getElementById('feedback-msg');
        const btn = document.querySelector('.submit-btn');
        const originalBtnText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;
        const payload = {
            username: "Portfolio Contact",
            embeds: [{
                title: "📬 New Contact / Novo Contacto",
                color: 3447003,
                fields: [
                    { name: "Name", value: name, inline: true },
                    { name: "Email", value: email, inline: true },
                    { name: "Message", value: msg }
                ],
                footer: { text: "Sent via Secure API" },
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
                discordForm.reset();
            } else { throw new Error('Error'); }
        } catch (error) {
            feedback.style.color = "#e63946";
            feedback.innerHTML = currentLang === 'en' ? "Error sending message." : "Erro ao enviar mensagem.";
        } finally {
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
            setTimeout(() => feedback.innerHTML = '', 5000);
        }
    });
}

const cursor = document.querySelector('.custom-cursor');
const cursorGlow = document.querySelector('.cursor-glow');

if (cursor && cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorGlow.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });
    const addHoverEffect = () => {
        const hoverElements = document.querySelectorAll('a, button, .bento-item, .skill-card, .project-card, input, textarea, .cursor-selector, .magnetic-btn, .holographic-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorGlow.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorGlow.classList.remove('hover');
            });
        });
    };
    addHoverEffect();
}

const savedCursor = localStorage.getItem('selectedCursor');
if (savedCursor) {
    document.body.className = document.body.className.replace(/cursor-\w+/g, '');
    document.body.classList.add(`cursor-${savedCursor}`);
}

const cursorSelectors = document.querySelectorAll('.cursor-selector');
if (cursorSelectors.length > 0) {
    cursorSelectors.forEach(selector => {
        selector.addEventListener('click', () => {
            const cursorType = selector.getAttribute('data-cursor');
            document.body.className = document.body.className.replace(/cursor-\w+/g, '');
            if (cursorType !== 'core') {
                document.body.classList.add(`cursor-${cursorType}`);
            }
            localStorage.setItem('selectedCursor', cursorType);
        });
    });
}

const tiltElements = document.querySelectorAll('.tilt-effect');
tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        if (el.classList.contains('magnetic-btn')) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    el.addEventListener('mouseleave', () => {
        if (el.classList.contains('magnetic-btn')) return;
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
});

const magneticBtns = document.querySelectorAll('.magnetic-btn');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});

const holoCards = document.querySelectorAll('.holographic-card');
holoCards.forEach(card => {
    const overlay = card.querySelector('.holographic-overlay');
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        if (overlay) {
            overlay.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.8) 0%, rgba(0,112,243,0.3) 20%, transparent 60%)`;
        }
    });
});

const dynLights = document.querySelectorAll('.Dynamic-Lighting');
dynLights.forEach(box => {
    const light = box.querySelector('.light-source');
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (light) {
            light.style.left = `${x}px`;
            light.style.top = `${y}px`;
        }
    });
});

const termBody = document.querySelector('.terminal-body');
if (termBody) {
    const lines = [
        "> Establishing secure connection...",
        "> Connection accepted.",
        "> Loading module: VFX_Core.dll",
        "> Loading module: Physics_Engine.js",
        "> Compiling shaders...",
        "> Success.",
        "> Awaiting input_"
    ];
    let lineIndex = 0;
    function printLine() {
        if (lineIndex < lines.length) {
            const p = document.createElement('p');
            p.style.margin = '5px 0';
            p.textContent = lines[lineIndex];
            termBody.appendChild(p);
            lineIndex++;
            setTimeout(printLine, Math.random() * 500 + 200);
        }
    }
    setTimeout(printLine, 1000);
}

const canvas = document.getElementById('fluid-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = `rgba(0, 112, 243, ${Math.random()})`;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.05;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        for (let i = 0; i < 3; i++) {
            particles.push(new Particle(x, y));
        }
    });
    function animateFluid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].size <= 0.2) {
                particles.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(animateFluid);
    }
    animateFluid();
}

window.onload = () => {
    setLanguage(currentLang);
    if (nameElement) typeName();
    if (bioElement) typeBio();
    updateGallery();
};