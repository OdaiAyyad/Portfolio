const projectData = [
            {
                title: "Real-Time Driver Monitoring System",
                category: "Computer Vision",
                visual: "DM",
                accent: "#06b6d4",
                image: "assets/projects/driver-monitoring.svg",
                description: "Built a real-time traffic safety system using YOLOv11 for driver behavior monitoring and traffic sign detection, trained on 14,000+ images with webcam testing and Text-to-Speech alerts.",
                tags: ["YOLOv11", "OpenCV", "Python", "TTS"],
                link: "https://github.com/OdaiAyyad/YOLOv11-Powered-Real-Time-Driver-Monitoring-and-Traffic-Sign-Detection-System"
            },
            {
                title: "YouTube AI Agent",
                category: "Agentic AI",
                visual: "YA",
                accent: "#8b5cf6",
                image: "assets/projects/youtube-agent.svg",
                description: "Created a Streamlit dashboard that uses LangChain, LangGraph, GPT models, and the YouTube Data API to analyze channels, generate video ideas, create titles/descriptions, and show visual insights.",
                tags: ["LangChain", "LangGraph", "Streamlit", "GPT"],
                link: "https://github.com/OdaiAyyad/YouTube-AI-Agent"
            },
            {
                title: "N8N JIRA Daily Summary",
                category: "Workflow Automation",
                visual: "JS",
                accent: "#22d3ee",
                image: "assets/projects/jira-summary.svg",
                description: "Designed an n8n workflow that combines Jira tickets assigned, reported, and commented on, then sends a daily Gmail summary for QA reporting and timesheet updates.",
                tags: ["n8n", "Jira API", "Gmail", "Docker"],
                link: "https://github.com/OdaiAyyad/n8n-JIRA-Daily-Summary"
            },
            {
                title: "Exam Generator Based on RAG",
                category: "Generative AI",
                visual: "RG",
                accent: "#38bdf8",
                image: "assets/projects/rag-exam.svg",
                description: "Notebook project exploring Retrieval-Augmented Generation for creating exam-style questions from source material, focused on practical LLM-assisted education workflows.",
                tags: ["RAG", "LLM", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/Exam-Generator-based-on-RAG"
            },
            {
                title: "NLP to SQL",
                category: "Natural Language Processing",
                visual: "SQL",
                accent: "#7c3aed",
                image: "assets/projects/nlp-sql.svg",
                description: "Built a notebook-based NLP experiment for translating natural language questions into SQL-style queries, connecting language understanding with structured data access.",
                tags: ["NLP", "SQL", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/NLP-to-SQL"
            },
            {
                title: "Books Recommendation System",
                category: "Machine Learning",
                visual: "BR",
                accent: "#0ea5e9",
                image: "assets/projects/book-recommender.svg",
                description: "Created a recommendation-system notebook for suggesting books based on user or item patterns, practicing data preprocessing, similarity logic, and recommendation workflows.",
                tags: ["Recommenders", "ML", "Python", "Data"],
                link: "https://github.com/OdaiAyyad/Books-Recommendation-System"
            },
            {
                title: "YouTube Video Summary",
                category: "AI Productivity",
                visual: "YS",
                accent: "#0891b2",
                image: "assets/projects/youtube-summary.svg",
                description: "Notebook project for summarizing YouTube video content, turning long-form video material into concise notes and useful extracted information.",
                tags: ["Summarization", "NLP", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/YouTube-Video-Summary"
            },
            {
                title: "Simple Chatbot over ChatGPT",
                category: "Conversational AI",
                visual: "CB",
                accent: "#a78bfa",
                image: "assets/projects/chatbot.svg",
                description: "Built a simple ChatGPT-powered chatbot notebook as a hands-on experiment with prompt flow, chat interactions, and practical LLM application structure.",
                tags: ["ChatGPT", "LLM", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/Simple-Chatbot-over-ChatGPT"
            },
            {
                title: "YOLOv8 Traffic Sign Detection",
                category: "Computer Vision",
                visual: "Y8",
                accent: "#06b6d4",
                image: "assets/projects/traffic-yolov8.svg",
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

            for (let i = 0; i < 90; i += 1) {
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

            for (let i = 0; i < 11; i += 1) {
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

            for (let i = 0; i < 10; i += 1) {
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

            document.addEventListener('mousemove', (event) => {
                const xPercent = (event.clientX / window.innerWidth) * 100;
                const yPercent = (event.clientY / window.innerHeight) * 100;
                const xOffset = event.clientX - window.innerWidth / 2;
                const yOffset = event.clientY - window.innerHeight / 2;

                bgAnimation.style.setProperty('--cursor-x', `${xPercent}%`);
                bgAnimation.style.setProperty('--cursor-y', `${yPercent}%`);
                bgAnimation.style.setProperty('--parallax-a-x', `${xOffset * -0.018}px`);
                bgAnimation.style.setProperty('--parallax-a-y', `${yOffset * -0.018}px`);
                bgAnimation.style.setProperty('--parallax-b-x', `${xOffset * 0.014}px`);
                bgAnimation.style.setProperty('--parallax-b-y', `${yOffset * 0.014}px`);
            });
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

        function initCustomCursor() {
            if (window.matchMedia('(max-width: 900px)').matches) return;

            const ring = document.createElement('div');
            ring.className = 'cursor-ring';
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            document.body.appendChild(ring);
            document.body.appendChild(dot);

            let currentX = window.innerWidth / 2;
            let currentY = window.innerHeight / 2;
            let targetX = currentX;
            let targetY = currentY;

            function tick() {
                currentX += (targetX - currentX) * 0.18;
                currentY += (targetY - currentY) * 0.18;
                ring.style.transform = `translate(${currentX - 15}px, ${currentY - 15}px)`;
                dot.style.transform = `translate(${targetX - 3.5}px, ${targetY - 3.5}px)`;
                requestAnimationFrame(tick);
            }

            document.addEventListener('mousemove', (event) => {
                targetX = event.clientX;
                targetY = event.clientY;
                ring.style.opacity = '1';
                dot.style.opacity = '1';
            });

            document.addEventListener('mouseleave', () => {
                ring.style.opacity = '0';
                dot.style.opacity = '0';
            });

            const interactiveSelector = 'a, button, .project-card, .skill-tag, .contact-row';
            document.querySelectorAll(interactiveSelector).forEach((element) => {
                element.addEventListener('mouseenter', () => ring.classList.add('active'));
                element.addEventListener('mouseleave', () => ring.classList.remove('active'));
            });

            tick();
        }

        // Hide loader after page loads
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('hidden');
                initBackgroundAnimation();
                typeHeroSlogan();
                initCustomCursor();
            }, 900);
        });

        // Dynamic projects grid
        const projectsGrid = document.getElementById('projectsGrid');
        const projectViewToggle = document.getElementById('projectViewToggle');
        let projectsExpanded = false;

        function renderProjects() {
            if (!projectsGrid) return;

            const visibleProjects = projectsExpanded ? projectData : projectData.slice(0, 3);
            projectsGrid.innerHTML = visibleProjects.map((project) => {
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

            if (projectViewToggle) {
                projectViewToggle.setAttribute('aria-expanded', String(projectsExpanded));
                projectViewToggle.innerHTML = projectsExpanded
                    ? 'Show Less <span aria-hidden="true">-&gt;</span>'
                    : 'View All <span aria-hidden="true">-&gt;</span>';
            }
        }

        renderProjects();

        if (projectViewToggle) {
            projectViewToggle.addEventListener('click', () => {
                projectsExpanded = !projectsExpanded;
                renderProjects();
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

        function updateScrollControls() {
            const isScrolled = window.pageYOffset > 90;
            if (header) header.classList.toggle('is-scrolled', isScrolled);

            if (!scrollTopBtn) return;
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', updateScrollControls);
        updateScrollControls();

        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Reveal sections on scroll
        const sections = document.querySelectorAll('section');
        const revealSection = () => {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealSection);
        revealSection(); // Initial check

