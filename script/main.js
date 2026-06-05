/* ============================================
   RICHARD SOUZA — main.js v2
   Improved performance + Cyber Security features
   ============================================ */

"use strict";

// ========== TRANSLATIONS ==========
const translations = {
    en: {
        academic: "Systems Analysis & Dev • 4th Semester",
        eyebrow: "ENGINEER / HACKER / CREATOR",
        about: 'I transform coffee into clean, scalable code. My passion lies at the intersection between <strong>Robust Software Engineering</strong>, <strong>Interactive Creativity</strong> and <strong>Cybersecurity</strong>.',
        btn_contact: "Contact",
        status: "Available for Projects",
        metric_years: "Years",
        metric_projects: "Projects",
        metric_hours: "Hours",
        skills_label: "SKILL STACK",
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
        cyber_label: "CYBERSECURITY",
        cyber_pentest: "Penetration Testing",
        cyber_pentest_desc: "Web app testing, OWASP Top 10, vulnerability assessment and report writing.",
        cyber_ctf: "CTF Challenges",
        cyber_ctf_desc: "Active participation in Capture The Flag competitions covering Web, Crypto, Forensics and Reverse Engineering.",
        cyber_recon: "OSINT & Recon",
        cyber_recon_desc: "Open-source intelligence gathering, network reconnaissance and digital footprint analysis.",
        cyber_defense: "Secure Development",
        cyber_defense_desc: "Writing secure code, implementing anti-cheat systems in games, and hardening web applications.",
        companies_title: "Trusted by / Worked with",
        title_featured: "Featured Projects",
        btn_view_all: "See All",
        proj_dkz: "Professional site for a high-profile game developer.",
        proj_eclipse: "Professional site for a moderation studio.",
        proj_4f: "Professional site for a game development studio.",
        proj_neox: "Professional site for a developers studio.",
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
        nav_cyber: "Cybersec",
        footer: "All Rights Reserved.",
        title_projects: "All Projects",
        subtitle_projects: "An archive of my work across Web Development, Game Studios and Security.",
        filter_all: "All",
        filter_studios: "Studios",
        filter_websites: "Websites",
        filter_mod: "Mod & Dev",
        filter_cyber: "Security",
        btn_code: "View Case",
    },
    pt: {
        academic: "Análise e Desenv. de Sistemas • 4º Semestre",
        eyebrow: "ENGENHEIRO / HACKER / CRIADOR",
        about: 'Transformo café em código limpo e escalável. A minha paixão une a <strong>Engenharia de Software Robusta</strong>, a <strong>Criatividade Interativa</strong> e a <strong>Cibersegurança</strong>.',
        btn_contact: "Contacto",
        status: "Disponível para Projetos",
        metric_years: "Anos",
        metric_projects: "Projetos",
        metric_hours: "Horas",
        skills_label: "STACK DE SKILLS",
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
        cyber_label: "CIBERSEGURANÇA",
        cyber_pentest: "Pentest",
        cyber_pentest_desc: "Testes em aplicações web, OWASP Top 10, avaliação de vulnerabilidades e relatórios.",
        cyber_ctf: "Desafios CTF",
        cyber_ctf_desc: "Participação ativa em competições Capture The Flag: Web, Crypto, Forense e Engenharia Reversa.",
        cyber_recon: "OSINT & Reconhecimento",
        cyber_recon_desc: "Coleta de inteligência de fontes abertas, reconhecimento de redes e análise de pegada digital.",
        cyber_defense: "Desenvolvimento Seguro",
        cyber_defense_desc: "Código seguro, sistemas anti-cheat em jogos e hardening de aplicações web.",
        companies_title: "Empresas que confiam / Trabalhei com",
        title_featured: "Projetos em Destaque",
        btn_view_all: "Ver Todos",
        proj_dkz: "Site profissional para desenvolvedor de jogos high-profile.",
        proj_eclipse: "Site profissional para um estúdio de moderação.",
        proj_4f: "Site profissional para um estúdio de desenvolvimento de jogos.",
        proj_neox: "Site profissional para um estúdio de desenvolvedores.",
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
        nav_cyber: "Ciberseg",
        footer: "Todos os Direitos Reservados.",
        title_projects: "Todos os Projetos",
        subtitle_projects: "Um arquivo do meu trabalho em Web, Estúdios de Jogos e Segurança.",
        filter_all: "Todos",
        filter_studios: "Estúdios",
        filter_websites: "Websites",
        filter_mod: "Moderador",
        filter_cyber: "Segurança",
        btn_code: "Ver Caso",
    }
};

const apiURL = "/api/send";
let currentLang = localStorage.getItem('lang') || 'en';

// ========== LANGUAGE ==========
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
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
    updateGallery();
}

document.getElementById('lang-toggle')?.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'pt' : 'en');
});

// ========== THEME ==========
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        icon?.classList.replace('fa-sun', 'fa-moon');
    }
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        icon?.classList.replace(isLight ? 'fa-sun' : 'fa-moon', isLight ? 'fa-moon' : 'fa-sun');
    });
}

// ========== CURSOR ==========
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

if (cursor && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animFrameId;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));

    function animRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        animFrameId = requestAnimationFrame(animRing);
    }
    animRing();

    const hoverEls = document.querySelectorAll('a, button, .bento-item, .skill-card, .project-card, input, textarea, .cyber-card');
    hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorRing.classList.add('hover'); });
        el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorRing.classList.remove('hover'); });
    });
}

// ========== TYPEWRITERS ==========
const nameEl = document.getElementById('name-typewriter');
const names = ["Richard Souza", "The Dog"];
let nameIdx = 0, nameChar = 0, nameDel = false;

function typeName() {
    if (!nameEl) return;
    const current = names[nameIdx];
    if (!nameDel) {
        nameEl.textContent = current.slice(0, ++nameChar);
        if (nameChar === current.length) {
            nameDel = true;
            setTimeout(typeName, 2500);
            return;
        }
    } else {
        nameEl.textContent = current.slice(0, --nameChar);
        if (nameChar === 0) {
            nameDel = false;
            nameIdx = (nameIdx + 1) % names.length;
        }
    }
    setTimeout(typeName, nameDel ? 60 : 100);
}

const bioEl = document.getElementById('typewriter');
const bios = {
    en: ["Full-Stack Developer", "Roblox Engineer", "Cybersecurity Researcher", "CTF Player", "Game Dev"],
    pt: ["Dev Full-Stack", "Engenheiro Roblox", "Pesquisador em Ciberseg", "Jogador de CTF", "Dev de Jogos"]
};
let bioIdx = 0, bioChar = 0, bioDel = false, bioTimer = null;

function typeBio() {
    if (!bioEl) return;
    clearTimeout(bioTimer);
    const arr = bios[currentLang];
    const current = arr[bioIdx % arr.length];
    if (!bioDel) {
        bioEl.textContent = current.slice(0, ++bioChar);
        if (bioChar === current.length) {
            bioDel = true;
            bioTimer = setTimeout(typeBio, 2200);
            return;
        }
    } else {
        bioEl.textContent = current.slice(0, --bioChar);
        if (bioChar === 0) {
            bioDel = false;
            bioIdx++;
        }
    }
    bioTimer = setTimeout(typeBio, bioDel ? 55 : 90);
}

// ========== CYBER TERMINAL ==========
const terminalOutput = document.getElementById('terminal-output');
const terminalLines = [
    { text: '$ whoami', cls: 't-cmd', delay: 300 },
    { text: 'richard@sec-lab', cls: 't-output', delay: 600 },
    { text: '$ nmap -sV --script vuln 192.168.1.1', cls: 't-cmd', delay: 900 },
    { text: 'Starting Nmap 7.94 ( https://nmap.org )', cls: 't-output', delay: 1400 },
    { text: 'Scanning target for open ports and services...', cls: 't-output', delay: 1700 },
    { text: '[+] Port 80/tcp open  — Apache httpd 2.4.51', cls: 't-success', delay: 2100 },
    { text: '[+] Port 443/tcp open — SSL/TLS detected', cls: 't-success', delay: 2400 },
    { text: '[!] CVE-2021-41773 — Path Traversal detected', cls: 't-warn', delay: 2900 },
    { text: '$ python3 exploit.py --target 192.168.1.1 --cve CVE-2021-41773', cls: 't-cmd', delay: 3400 },
    { text: '[*] Exploiting... Sending payload...', cls: 't-output', delay: 3800 },
    { text: '[+] Shell obtained! uid=0(root) gid=0(root)', cls: 't-success', delay: 4300 },
    { text: '# cat /etc/shadow | head -3', cls: 't-cmd', delay: 4700 },
    { text: 'root:$6$xyz...hashed...', cls: 't-output', delay: 5100 },
    { text: '# echo "Pentest complete. Report generated." # For educational purposes only', cls: 't-comment', delay: 5600 },
];

function buildTerminal() {
    if (!terminalOutput) return;
    terminalLines.forEach(({ text, cls, delay }) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.className = `t-line ${cls}`;
            span.textContent = text;
            terminalOutput.appendChild(span);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }, delay);
    });
}

// ========== CYBER TYPING (HEADER) ==========
const cyberTypingEl = document.getElementById('cyber-typing');
const cyberTexts = {
    en: ["initiating security scan...", "analyzing attack surface...", "exploiting vulnerabilities...", "securing the perimeter..."],
    pt: ["iniciando varredura de segurança...", "analisando superfície de ataque...", "explorando vulnerabilidades...", "protegendo o perímetro..."]
};
let ctIdx = 0, ctChar = 0, ctDel = false, ctTimer = null;

function typeCyber() {
    if (!cyberTypingEl) return;
    clearTimeout(ctTimer);
    const arr = cyberTexts[currentLang];
    const current = arr[ctIdx % arr.length];
    if (!ctDel) {
        cyberTypingEl.textContent = current.slice(0, ++ctChar);
        if (ctChar === current.length) { ctDel = true; ctTimer = setTimeout(typeCyber, 2000); return; }
    } else {
        cyberTypingEl.textContent = current.slice(0, --ctChar);
        if (ctChar === 0) { ctDel = false; ctIdx++; }
    }
    ctTimer = setTimeout(typeCyber, ctDel ? 40 : 70);
}

// ========== MATRIX CANVAS (subtle) ==========
function initMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const chars = '01アイウエオカキクケコサシスセソタチツテト∆∑∏∂ψλ';
    let cols;
    const fontSize = 12;
    let drops = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cols = Math.floor(canvas.width / fontSize);
        drops = Array(cols).fill(1);
    }

    resize();
    window.addEventListener('resize', resize);

    // Only show matrix when near/in #security section
    const secSection = document.getElementById('security');
    if (secSection) {
        const matrixObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                canvas.style.opacity = e.isIntersecting ? '0.025' : '0';
            });
        }, { threshold: 0.1 });
        matrixObserver.observe(secSection);
    }

    function draw() {
        ctx.fillStyle = 'rgba(4, 5, 7, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff88';
        ctx.font = `${fontSize}px JetBrains Mono`;
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }

    setInterval(draw, 55);
}

// ========== TILT EFFECT ==========
function initTilt() {
    document.querySelectorAll('.tilt-effect').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rx = ((y - cy) / cy) * -5;
            const ry = ((x - cx) / cx) * 5;
            el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.015, 1.015, 1.015)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// ========== TABS ==========
window.openTab = function(name) {
    document.querySelectorAll('.skills-tab-content:not(.arsenal-content)').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn:not(.arsenal-tab-btn)').forEach(b => b.classList.remove('active'));
    document.getElementById(name)?.classList.add('active');
    document.querySelector(`.tab-btn[data-target="${name}"]`)?.classList.add('active');
};

// Arsenal tabs
document.querySelectorAll('.arsenal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.arsenal-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.arsenal-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-target'))?.classList.add('active');
    });
});

// ========== SCROLL REVEAL ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .fade-in').forEach(el => observer.observe(el));

// ========== ACTIVE NAV ON SCROLL ==========
const navItems = document.querySelectorAll('.nav-item[href^="#"]');
const sections = document.querySelectorAll('section[id], header[id]');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navItems.forEach(item => {
                item.classList.toggle('active', item.getAttribute('href') === `#${e.target.id}`);
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// ========== PROJECT FILTER ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');
const searchInput = document.getElementById('project-search');

function updateGallery() {
    if (!projectCards.length) return;
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    const search = searchInput?.value.toLowerCase() || '';
    let count = 0;

    projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const matches = (activeFilter === 'all' || cat === activeFilter) && card.textContent.toLowerCase().includes(search);
        card.style.transition = 'opacity 0.35s, transform 0.35s';
        if (matches) {
            card.style.display = 'flex';
            count++;
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { if (card.style.opacity === '0') card.style.display = 'none'; }, 360);
        }
    });

    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = currentLang === 'en' ? `Showing ${count} results` : `Mostrando ${count} resultados`;
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateGallery();
    });
});

searchInput?.addEventListener('input', updateGallery);

// ========== CONTACT FORM ==========
document.getElementById('discord-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const msg = document.getElementById('contact-msg').value;
    const feedback = document.getElementById('feedback-msg');
    const btn = document.querySelector('.submit-btn');
    const orig = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    const payload = {
        username: "Portfolio Contact",
        embeds: [{
            title: "📬 New Contact",
            color: 0x00e5ff,
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
        const res = await fetch(apiURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (res.ok) {
            feedback.style.color = '#00ff88';
            feedback.textContent = currentLang === 'en' ? '✓ Message sent successfully!' : '✓ Mensagem enviada com sucesso!';
            e.target.reset();
        } else throw new Error();
    } catch {
        feedback.style.color = '#ff3b5c';
        feedback.textContent = currentLang === 'en' ? '✗ Error sending message.' : '✗ Erro ao enviar mensagem.';
    } finally {
        btn.innerHTML = orig;
        btn.disabled = false;
        setTimeout(() => feedback.textContent = '', 5000);
    }
});

// ========== ARSENAL CURSOR SELECTORS ==========
const cursorSelectors = document.querySelectorAll('.cursor-selector');
if (cursorSelectors.length) {
    const savedCursor = localStorage.getItem('selectedCursor');
    if (savedCursor) {
        document.body.className = document.body.className.replace(/cursor-\w+/g, '');
        if (savedCursor !== 'core') document.body.classList.add(`cursor-${savedCursor}`);
    }
    cursorSelectors.forEach(s => {
        s.addEventListener('click', () => {
            const type = s.getAttribute('data-cursor');
            document.body.className = document.body.className.replace(/cursor-\w+/g, '');
            if (type !== 'core') document.body.classList.add(`cursor-${type}`);
            localStorage.setItem('selectedCursor', type);
        });
    });
}

// Arsenal special components
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
        btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
});

document.querySelectorAll('.holographic-card').forEach(card => {
    const overlay = card.querySelector('.holographic-overlay');
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        if (overlay) overlay.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.7) 0%, rgba(0,229,255,0.25) 20%, transparent 60%)`;
    });
});

document.querySelectorAll('.Dynamic-Lighting').forEach(box => {
    const light = box.querySelector('.light-source');
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        if (light) { light.style.left = `${e.clientX - rect.left}px`; light.style.top = `${e.clientY - rect.top}px`; }
    });
});

// ========== INIT ==========
window.addEventListener('load', () => {
    setLanguage(currentLang);
    typeName();
    typeBio();
    typeCyber();
    buildTerminal();
    initMatrix();
    initTilt();
    updateGallery();
});
