const projectData = [
            {
                title: "Real-Time Driver Monitoring System",
                category: "Computer Vision",
                visual: "DM",
                accent: "#06b6d4",
                image: "assets/projects/photos/driver-monitoring.jpg",
                description: "Built a real-time traffic safety system using YOLOv11 for driver behavior monitoring and traffic sign detection, trained on 14,000+ images with webcam testing and Text-to-Speech alerts.",
                tags: ["YOLOv11", "OpenCV", "Python", "TTS"],
                link: "https://github.com/OdaiAyyad/YOLOv11-Powered-Real-Time-Driver-Monitoring-and-Traffic-Sign-Detection-System"
            },
            {
                title: "YouTube AI Agent",
                category: "Agentic AI",
                visual: "YA",
                accent: "#8b5cf6",
                image: "assets/projects/photos/youtube-ai-agent.jpg",
                description: "Created a Streamlit dashboard that uses LangChain, LangGraph, GPT models, and the YouTube Data API to analyze channels, generate video ideas, create titles/descriptions, and show visual insights.",
                tags: ["LangChain", "LangGraph", "Streamlit", "GPT"],
                link: "https://github.com/OdaiAyyad/YouTube-AI-Agent"
            },
            {
                title: "N8N JIRA Daily Summary",
                category: "Workflow Automation",
                visual: "JS",
                accent: "#22d3ee",
                image: "assets/projects/photos/jira-daily-summary.jpg",
                description: "Designed an n8n workflow that combines Jira tickets assigned, reported, and commented on, then sends a daily Gmail summary for QA reporting and timesheet updates.",
                tags: ["n8n", "Jira API", "Gmail", "Docker"],
                link: "https://github.com/OdaiAyyad/n8n-JIRA-Daily-Summary"
            },
            {
                title: "Exam Generator Based on RAG",
                category: "Generative AI",
                visual: "RG",
                accent: "#38bdf8",
                image: "assets/projects/photos/rag-exam-generator.jpg",
                description: "Notebook project exploring Retrieval-Augmented Generation for creating exam-style questions from source material, focused on practical LLM-assisted education workflows.",
                tags: ["RAG", "LLM", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/Exam-Generator-based-on-RAG"
            },
            {
                title: "NLP to SQL",
                category: "Natural Language Processing",
                visual: "SQL",
                accent: "#7c3aed",
                image: "assets/projects/photos/nlp-to-sql.jpg",
                description: "Built a notebook-based NLP experiment for translating natural language questions into SQL-style queries, connecting language understanding with structured data access.",
                tags: ["NLP", "SQL", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/NLP-to-SQL"
            },
            {
                title: "Books Recommendation System",
                category: "Machine Learning",
                visual: "BR",
                accent: "#0ea5e9",
                image: "assets/projects/photos/books-recommendation.jpg",
                description: "Created a recommendation-system notebook for suggesting books based on user or item patterns, practicing data preprocessing, similarity logic, and recommendation workflows.",
                tags: ["Recommenders", "ML", "Python", "Data"],
                link: "https://github.com/OdaiAyyad/Books-Recommendation-System"
            },
            {
                title: "YouTube Video Summary",
                category: "AI Productivity",
                visual: "YS",
                accent: "#0891b2",
                image: "assets/projects/photos/youtube-video-summary.jpg",
                description: "Notebook project for summarizing YouTube video content, turning long-form video material into concise notes and useful extracted information.",
                tags: ["Summarization", "NLP", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/YouTube-Video-Summary"
            },
            {
                title: "Simple Chatbot over ChatGPT",
                category: "Conversational AI",
                visual: "CB",
                accent: "#a78bfa",
                image: "assets/projects/photos/chatgpt-chatbot.jpg",
                description: "Built a simple ChatGPT-powered chatbot notebook as a hands-on experiment with prompt flow, chat interactions, and practical LLM application structure.",
                tags: ["ChatGPT", "LLM", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/Simple-Chatbot-over-ChatGPT"
            },
            {
                title: "YOLOv8 Traffic Sign Detection",
                category: "Computer Vision",
                visual: "Y8",
                accent: "#06b6d4",
                image: "assets/projects/photos/traffic-sign-detection.jpg",
                description: "Trained a YOLOv8 real-time detection model for traffic signs, using a custom annotated dataset, webcam testing, augmentation, and performance tuning for fast inference.",
                tags: ["YOLOv8", "Computer Vision", "Python", "Realtime"],
                link: "https://github.com/OdaiAyyad/YOLOv8-Real-Time-Traffic-Signs-Detection-Project"
            }
        ];

        async function copyText(value) {
            const toast = document.getElementById('copyToast');

            const showToast = (message) => {
                if (!toast) return;
                toast.textContent = message;
                toast.classList.add('visible');
                window.clearTimeout(window.copyToastTimer);
                window.copyToastTimer = window.setTimeout(() => {
                    toast.classList.remove('visible');
                }, 1300);
            };

            try {
                await navigator.clipboard.writeText(value);
                showToast('Copied');
            } catch (error) {
                showToast('Copy failed');
            }
        }

        function initBackgroundAnimation() {
            const bgAnimation = document.getElementById('bgAnimation');
            if (!bgAnimation) return;

            const fragment = document.createDocumentFragment();

            for (let i = 0; i < 64; i += 1) {
                const star = document.createElement('span');
                const size = Math.random() * 2.4 + 1;
                const isCyan = Math.random() > 0.38;

                star.className = 'bg-star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.setProperty('--size', `${size}px`);
                star.style.setProperty('--duration', `${Math.random() * 7 + 6}s`);
                star.style.setProperty('--delay', `${Math.random() * -8}s`);
                star.style.setProperty('--star-color', isCyan ? 'rgba(125, 249, 255, 0.82)' : 'rgba(167, 139, 250, 0.68)');
                star.style.setProperty('--star-glow', isCyan ? 'rgba(6, 182, 212, 0.42)' : 'rgba(139, 92, 246, 0.34)');
                fragment.appendChild(star);
            }

            for (let i = 0; i < 8; i += 1) {
                const node = document.createElement('span');
                const size = Math.random() * 24 + 18;

                node.className = 'bg-node';
                node.style.left = `${Math.random() * 100}%`;
                node.style.top = `${Math.random() * 100}%`;
                node.style.setProperty('--size', `${size}px`);
                node.style.setProperty('--duration', `${Math.random() * 10 + 12}s`);
                node.style.setProperty('--delay', `${Math.random() * -12}s`);
                fragment.appendChild(node);
            }

            for (let i = 0; i < 7; i += 1) {
                const trace = document.createElement('span');

                trace.className = 'bg-trace';
                trace.style.left = `${Math.random() * 100}%`;
                trace.style.top = `${Math.random() * 100}%`;
                trace.style.setProperty('--width', `${Math.random() * 160 + 90}px`);
                trace.style.setProperty('--angle', `${Math.random() * 28 - 14}deg`);
                trace.style.setProperty('--duration', `${Math.random() * 10 + 14}s`);
                trace.style.setProperty('--delay', `${Math.random() * -18}s`);
                fragment.appendChild(trace);
            }

            bgAnimation.appendChild(fragment);
        }

        function typeHeroSlogan() {
            const slogan = document.querySelector('.hero p');
            if (!slogan) return;
            const text = slogan.textContent.trim();
            slogan.textContent = '';
            slogan.style.minHeight = '2.2rem';
            let index = 0;

            const timer = setInterval(() => {
                slogan.textContent = text.slice(0, index + 1);
                index += 1;
                if (index >= text.length) clearInterval(timer);
            }, 35);
        }

        function initClickBursts() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            document.addEventListener('pointerdown', (event) => {
                if (event.button && event.button !== 0) return;

                const burst = document.createElement('span');
                burst.className = 'click-burst';
                burst.style.left = `${event.clientX}px`;
                burst.style.top = `${event.clientY}px`;
                document.body.appendChild(burst);
                burst.addEventListener('animationend', () => burst.remove(), { once: true });
            });
        }

        // Hide loader after page loads
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('hidden');
                initBackgroundAnimation();
                typeHeroSlogan();
                initClickBursts();
                const initialSection = window.location.hash ? document.querySelector(window.location.hash) : null;
                if (initialSection) {
                    initialSection.scrollIntoView({ block: 'start' });
                }
            }, 900);
        });

        // Dynamic projects grid
        const projectsGrid = document.getElementById('projectsGrid');
        const projectScrollPrev = document.getElementById('projectScrollPrev');
        const projectScrollNext = document.getElementById('projectScrollNext');

        function renderProjects() {
            if (!projectsGrid) return;

            projectsGrid.innerHTML = projectData.map((project) => {
                const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
                return `
                    <article class="project-card" style="--project-accent: ${project.accent};">
                        <div class="project-visual" aria-hidden="true">
                            <img src="${project.image}" alt="" loading="lazy">
                            <span class="project-category-badge">${project.category}</span>
                        </div>
                        <div class="project-body">
                            <div class="project-kicker">${project.category}</div>
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <div class="tech-tags">${tags}</div>
                            <div class="project-actions">
                                <a class="project-link" href="${project.link}" target="_blank" rel="noopener">
                                    View Project <span aria-hidden="true">-&gt;</span>
                                </a>
                                <a class="project-github" href="${project.link}" target="_blank" rel="noopener" aria-label="Open ${project.title} on GitHub">
                                    <i class="devicon-github-original"></i>
                                </a>
                            </div>
                        </div>
                    </article>
                `;
            }).join("");
        }

        renderProjects();

        const scrollProjects = (direction) => {
            if (!projectsGrid) return;
            const firstCard = projectsGrid.querySelector('.project-card');
            const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : projectsGrid.clientWidth * 0.85;
            projectsGrid.scrollBy({
                left: direction * (cardWidth + 22),
                behavior: 'smooth'
            });
        };

        if (projectScrollPrev && projectScrollNext) {
            projectScrollPrev.addEventListener('click', () => scrollProjects(-1));
            projectScrollNext.addEventListener('click', () => scrollProjects(1));
        }

        const volunteerToggle = document.getElementById('volunteerToggle');
        const volunteerExtra = document.getElementById('volunteerExtra');

        if (volunteerToggle && volunteerExtra) {
            volunteerToggle.addEventListener('click', () => {
                const isExpanded = volunteerToggle.getAttribute('aria-expanded') === 'true';
                volunteerToggle.setAttribute('aria-expanded', String(!isExpanded));
                volunteerExtra.hidden = isExpanded;
                volunteerToggle.innerHTML = isExpanded
                    ? 'Show more volunteering <span aria-hidden="true">-&gt;</span>'
                    : 'Show less volunteering <span aria-hidden="true">-&gt;</span>';
            });
        }

        document.querySelectorAll('[data-copy]').forEach((copyElement) => {
            copyElement.addEventListener('click', (event) => {
                event.preventDefault();
                const target = event.currentTarget;
                if (!(target instanceof HTMLElement)) return;
                const copyValue = target.dataset.copy;
                if (copyValue) copyText(copyValue);
            });
        });

        // Scroll-based controls
        const header = document.querySelector('.header');
        const scrollTopBtn = document.getElementById('scrollTop');
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.getElementById('primaryNavigation');
        const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
        const navTargets = navLinks
            .map((link) => {
                const targetId = link.getAttribute('href');
                if (!targetId || targetId === '#') return null;
                const section = document.querySelector(targetId);
                return section ? { link, section } : null;
            })
            .filter(Boolean);

        function setMobileNav(open) {
            if (!navToggle || !navMenu) return;
            navToggle.classList.toggle('is-open', open);
            navMenu.classList.toggle('is-open', open);
            navToggle.setAttribute('aria-expanded', String(open));
            navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
        }

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                setMobileNav(!navMenu.classList.contains('is-open'));
            });

            navLinks.forEach((link) => {
                link.addEventListener('click', () => setMobileNav(false));
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') setMobileNav(false);
            });

            document.addEventListener('click', (event) => {
                const eventTarget = event.target instanceof Element ? event.target : null;
                if (!eventTarget) return;
                if (navToggle.contains(eventTarget) || navMenu.contains(eventTarget)) return;
                setMobileNav(false);
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) setMobileNav(false);
            });
        }

        function updateActiveNav() {
            if (!navTargets.length) return;

            let activeId = '';
            const activationLine = window.scrollY + Math.min(window.innerHeight * 0.38, 340);

            navTargets.forEach(({ section }) => {
                if (section.offsetTop <= activationLine) {
                    activeId = section.id;
                }
            });

            navTargets.forEach(({ link, section }) => {
                const isActive = section.id === activeId;
                link.classList.toggle('is-active', isActive);
                if (isActive) {
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        function updateScrollControls() {
            const isScrolled = window.pageYOffset > 90;
            if (header) header.classList.toggle('is-scrolled', isScrolled);
            updateActiveNav();

            if (!scrollTopBtn) return;
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }

        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Reveal sections without extra scroll-time layout work
        const sections = document.querySelectorAll('section');

        if ('IntersectionObserver' in window) {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                });
            }, {
                rootMargin: '0px 0px -18% 0px',
                threshold: 0.08
            });

            sections.forEach((section) => revealObserver.observe(section));
        } else {
            sections.forEach((section) => section.classList.add('visible'));
        }

        let scrollFrame = null;
        function scheduleScrollWork() {
            if (scrollFrame) return;
            scrollFrame = requestAnimationFrame(() => {
                updateScrollControls();
                scrollFrame = null;
            });
        }

        window.addEventListener('scroll', scheduleScrollWork, { passive: true });
        updateScrollControls();
