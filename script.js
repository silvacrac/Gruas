document.addEventListener('DOMContentLoaded', () => {

    const lang = {
        en: {
            siteTitle: "GruaGuard - Smart Crane Monitoring by Tsolution",
            navDemo: "Live Demo", navFeatures: "Features", navPlans: "Plans", navClients: "Clients",
            heroTitle: "Safety and Efficiency Elevated to a New Level",
            heroSubtitle: "GruaGuard uses cutting-edge Computer Vision to monitor crane operations 24/7, eliminating risks and optimizing your construction site's productivity.",
            heroButton: "See Technology in Action", demoTitle: "Live System Demonstration", labelLoad: "LOAD", labelWorker: "PERSON",
            dashboardTitle: "Control Panel - GruaGuard AI", statusHeader: "System Status", statusNormal: "Normal Operation", statusAlert: "ALERT: Collision Risk!",
            dataHeader: "Real-Time Analysis Data", dataWeight: "Estimated Weight", dataPosition: "Position (X,Z)", dataHeight: "Height (Y)", dataPeople: "People in Zone", dataWind: "Wind Speed",
            featuresTitle: "Cutting-Edge Features for Maximum Safety", feature1Title: "Real-Time Alerts", feature1Desc: "Audible and visual notifications to the operator upon detecting collision risk with people or structures.",
            feature2Title: "3D Zone Mapping", feature2Desc: "Definition of forbidden and safe zones, with continuous monitoring of the load's position in a 3D environment.",
            feature3Title: "Load & Stability Analysis", feature3Desc: "Estimates load weight and stability, preventing overloads and dangerous movements.",
            feature4Title: "Reports & Analytics", feature4Desc: "Generation of operational reports for auditing, compliance, and continuous process improvement.",
            clientsTitle: "Trusted by Industry Leaders", plansTitle: "Flexible Plans for Every Project", price1: "On Demand", price2: "On Demand", price3: "On Demand",
            planButton: "Request Quote", footerText: "© 2024 GruaGuard. A product developed by Tsolution.",
            themeLight: "Light", themeDark: "Dark", themeSystem: "System"
        },
        pt: {
            siteTitle: "GruaGuard - Monitoramento Inteligente por Tsolution",
            navDemo: "Tecnologia em Ação", navFeatures: "Recursos", navPlans: "Planos", navClients: "Clientes",
            heroTitle: "Segurança e Eficiência Elevadas a um Novo Patamar",
            heroSubtitle: "GruaGuard utiliza Visão Computacional de ponta para monitorar operações de gruas 24/7, eliminando riscos e otimizando a produtividade do seu canteiro de obras.",
            heroButton: "Veja a Tecnologia em Ação", demoTitle: "Demonstração ao Vivo do Sistema", labelLoad: "CARGA", labelWorker: "PESSOA",
            dashboardTitle: "Painel de Controle - GruaGuard AI", statusHeader: "Status do Sistema", statusNormal: "Operação Normal", statusAlert: "ALERTA: Risco de Colisão!",
            dataHeader: "Dados da Análise em Tempo Real", dataWeight: "Peso Estimado", dataPosition: "Posição (X,Z)", dataHeight: "Altura (Y)", dataPeople: "Pessoas na Zona", dataWind: "Vel. Vento",
            featuresTitle: "Recursos de Ponta para Máxima Segurança", feature1Title: "Alertas em Tempo Real", feature1Desc: "Notificações sonoras e visuais para o operador ao detectar risco de colisão com pessoas ou estruturas.",
            feature2Title: "Mapeamento 3D da Zona", feature2Desc: "Definição de zonas proibidas e seguras, com monitoramento contínuo da posição da carga em um ambiente 3D.",
            feature3Title: "Análise de Carga e Estabilidade", feature3Desc: "Estima o peso e a estabilidade da carga, prevenindo sobrecargas e movimentos perigosos.",
            feature4Title: "Relatórios e Análises", feature4Desc: "Geração de relatórios de operação para auditoria, conformidade e melhoria contínua de processos.",
            clientsTitle: "Confiança de Líderes da Indústria", plansTitle: "Planos Flexíveis para Cada Projeto", price1: "Sob Consulta", price2: "Sob Consulta", price3: "Sob Consulta",
            planButton: "Consultar", footerText: "© 2024 GruaGuard. Um produto desenvolvido pela Tsolution.",
            themeLight: "Claro", themeDark: "Escuro", themeSystem: "Sistema"
        }
    };

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const navLinkItems = document.querySelectorAll('.nav-links li:not(.close-menu-btn)');

    hamburgerMenu.addEventListener('click', () => navLinks.classList.add('active'));
    closeMenuBtn.addEventListener('click', () => navLinks.classList.remove('active'));
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    document.querySelectorAll('.dropdown-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const menu = button.nextElementSibling;
            document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                if (openMenu !== menu) openMenu.classList.remove('show');
            });
            menu.classList.toggle('show');
        });
    });
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => menu.classList.remove('show'));
        }
    });

    const setLanguage = (language) => {
        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (lang[language] && lang[language][key]) {
                elem.innerText = lang[language][key];
            }
        });
        document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
        document.getElementById('current-lang').textContent = language.toUpperCase();
        localStorage.setItem('gruaguard_language', language);
    };
    document.getElementById('lang-pt').addEventListener('click', (e) => { e.preventDefault(); setLanguage('pt'); });
    document.getElementById('lang-en').addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });
    
    const themeIcon = document.getElementById('theme-icon');
    const applyTheme = (theme) => {
        if (theme === 'system') {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.className = systemPrefersDark ? 'dark-mode' : 'light-mode';
            themeIcon.className = `fas fa-${systemPrefersDark ? 'moon' : 'sun'}`;
        } else {
            document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
            themeIcon.className = `fas fa-${theme === 'dark' ? 'moon' : 'sun'}`;
        }
        localStorage.setItem('gruaguard_theme', theme);
    };
    document.getElementById('theme-light').addEventListener('click', (e) => { e.preventDefault(); applyTheme('light'); });
    document.getElementById('theme-dark').addEventListener('click', (e) => { e.preventDefault(); applyTheme('dark'); });
    document.getElementById('theme-system').addEventListener('click', (e) => { e.preventDefault(); applyTheme('system'); });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const savedTheme = localStorage.getItem('gruaguard_theme') || 'system';
        if (savedTheme === 'system') applyTheme('system');
    });

    const savedLang = localStorage.getItem('gruaguard_language') || 'pt';
    const savedTheme = localStorage.getItem('gruaguard_theme') || 'system';
    setLanguage(savedLang);
    applyTheme(savedTheme);

    const detectedLoad = document.getElementById('detected-load');
    const detectedWorker = document.getElementById('detected-worker');
    const statusPanel = document.getElementById('status-panel');
    const path = [ { top: '20%', left: '10%', w: 80, h: 80 }, { top: '60%', left: '30%', w: 100, h: 100 }, { top: '50%', left: '70%', w: 120, h: 120 }, { top: '30%', left: '50%', w: 90, h: 90 }, { top: '75%', left: '60%', w: 110, h: 110 } ];
    let pathIndex = 0;
    detectedWorker.style.top = '65%'; detectedWorker.style.left = '75%'; detectedWorker.style.width = '60px'; detectedWorker.style.height = '100px';

    function checkCollision() {
        const rect1 = detectedLoad.getBoundingClientRect();
        const rect2 = detectedWorker.getBoundingClientRect();
        const buffer = 30;
        return !(rect1.right < rect2.left - buffer || rect1.left > rect2.right + buffer || rect1.bottom < rect2.top - buffer || rect1.top > rect2.bottom + buffer);
    }

    function updateLiveFeed() {
        const nextPos = path[pathIndex];
        detectedLoad.style.top = nextPos.top; detectedLoad.style.left = nextPos.left; detectedLoad.style.width = `${nextPos.w}px`; detectedLoad.style.height = `${nextPos.h}px`;
        pathIndex = (pathIndex + 1) % path.length;
        document.getElementById('data-weight').textContent = `${(Math.random() * 5 + 2).toFixed(1)} Ton`;
        document.getElementById('data-position').textContent = `${(Math.random() * 50).toFixed(1)}m, ${(Math.random() * 20).toFixed(1)}m`;
        document.getElementById('data-height').textContent = `${(Math.random() * 30 + 10).toFixed(1)} m`;
        document.getElementById('data-wind').textContent = `${(Math.random() * 15 + 5).toFixed(0)} km/h`;
        if (checkCollision()) {
            statusPanel.className = 'status-alert';
            statusText.setAttribute('data-lang-key', 'statusAlert');
        } else {
            statusPanel.className = 'status-ok';
            statusText.setAttribute('data-lang-key', 'statusNormal');
        }
        const currentLang = localStorage.getItem('gruaguard_language') || 'pt';
        setLanguage(currentLang);
    }

    setInterval(updateLiveFeed, 2500);
    updateLiveFeed();
});