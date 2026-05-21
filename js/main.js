const projectData = [
            {
                title: "Real-Time Driver Monitoring System",
                category: "Computer Vision",
                visual: "DM",
                accent: "#06b6d4",
                description: "Built a real-time traffic safety system using YOLOv11 for driver behavior monitoring and traffic sign detection, trained on 14,000+ images with webcam testing and Text-to-Speech alerts.",
                tags: ["YOLOv11", "OpenCV", "Python", "TTS"],
                link: "https://github.com/OdaiAyyad/YOLOv11-Powered-Real-Time-Driver-Monitoring-and-Traffic-Sign-Detection-System"
            },
            {
                title: "YouTube AI Agent",
                category: "Agentic AI",
                visual: "YA",
                accent: "#8b5cf6",
                description: "Created a Streamlit dashboard that uses LangChain, LangGraph, GPT models, and the YouTube Data API to analyze channels, generate video ideas, create titles/descriptions, and show visual insights.",
                tags: ["LangChain", "LangGraph", "Streamlit", "GPT"],
                link: "https://github.com/OdaiAyyad/YouTube-AI-Agent"
            },
            {
                title: "N8N JIRA Daily Summary",
                category: "Workflow Automation",
                visual: "JS",
                accent: "#22d3ee",
                description: "Designed an n8n workflow that combines Jira tickets assigned, reported, and commented on, then sends a daily Gmail summary for QA reporting and timesheet updates.",
                tags: ["n8n", "Jira API", "Gmail", "Docker"],
                link: "https://github.com/OdaiAyyad/n8n-JIRA-Daily-Summary"
            },
            {
                title: "Exam Generator Based on RAG",
                category: "Generative AI",
                visual: "RG",
                accent: "#38bdf8",
                description: "Notebook project exploring Retrieval-Augmented Generation for creating exam-style questions from source material, focused on practical LLM-assisted education workflows.",
                tags: ["RAG", "LLM", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/Exam-Generator-based-on-RAG"
            },
            {
                title: "NLP to SQL",
                category: "Natural Language Processing",
                visual: "SQL",
                accent: "#7c3aed",
                description: "Built a notebook-based NLP experiment for translating natural language questions into SQL-style queries, connecting language understanding with structured data access.",
                tags: ["NLP", "SQL", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/NLP-to-SQL"
            },
            {
                title: "Books Recommendation System",
                category: "Machine Learning",
                visual: "BR",
                accent: "#0ea5e9",
                description: "Created a recommendation-system notebook for suggesting books based on user or item patterns, practicing data preprocessing, similarity logic, and recommendation workflows.",
                tags: ["Recommenders", "ML", "Python", "Data"],
                link: "https://github.com/OdaiAyyad/Books-Recommendation-System"
            },
            {
                title: "YouTube Video Summary",
                category: "AI Productivity",
                visual: "YS",
                accent: "#0891b2",
                description: "Notebook project for summarizing YouTube video content, turning long-form video material into concise notes and useful extracted information.",
                tags: ["Summarization", "NLP", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/YouTube-Video-Summary"
            },
            {
                title: "Simple Chatbot over ChatGPT",
                category: "Conversational AI",
                visual: "CB",
                accent: "#a78bfa",
                description: "Built a simple ChatGPT-powered chatbot notebook as a hands-on experiment with prompt flow, chat interactions, and practical LLM application structure.",
                tags: ["ChatGPT", "LLM", "Python", "Notebook"],
                link: "https://github.com/OdaiAyyad/Simple-Chatbot-over-ChatGPT"
            },
            {
                title: "YOLOv8 Traffic Sign Detection",
                category: "Computer Vision",
                visual: "Y8",
                accent: "#06b6d4",
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

            for (let i = 0; i < 36; i += 1) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                const size = Math.random() * 2.6 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.borderRadius = '999px';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.background = Math.random() > 0.45 ? 'rgba(6, 182, 212, 0.35)' : 'rgba(139, 92, 246, 0.3)';
                particle.style.animation = `float ${Math.random() * 14 + 10}s ease-in-out ${Math.random() * 4}s infinite`;
                bgAnimation.appendChild(particle);
            }

            for (let i = 0; i < 5; i += 1) {
                const line = document.createElement('div');
                line.style.position = 'absolute';
                line.style.width = `${Math.random() * 180 + 120}px`;
                line.style.height = '1px';
                line.style.left = `${Math.random() * 100}%`;
                line.style.top = `${Math.random() * 100}%`;
                line.style.background = 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.35), transparent)';
                line.style.transform = `rotate(${Math.random() * 360}deg)`;
                line.style.animation = `drift ${Math.random() * 12 + 12}s linear infinite`;
                bgAnimation.appendChild(line);
            }
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

        // Dynamic projects carousel
        const projectsTrack = document.getElementById('projectsTrack');
        const projectDots = document.getElementById('projectDots');
        const projectPrev = document.getElementById('projectPrev');
        const projectNext = document.getElementById('projectNext');
        let projectIndex = 0;
        let projectTimer;

        function renderProjects() {
            if (!projectsTrack || !projectDots) return;

            projectsTrack.innerHTML = projectData.map((project) => {
                const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
                return `
                    <article class="project-slide">
                        <div class="project-card" style="--project-accent: ${project.accent};" tabindex="0" aria-label="${project.title}. Tap or hover to see details.">
                            <div class="project-face project-front">
                                <div class="project-art" aria-hidden="true">
                                    <span>${project.visual}</span>
                                </div>
                                <div class="project-front-content">
                                    <div class="project-kicker">${project.category}</div>
                                    <h3>${project.title}</h3>
                                    <div class="tech-tags">${tags}</div>
                                </div>
                            </div>
                            <div class="project-face project-back">
                                <div>
                                    <div class="project-kicker">${project.category}</div>
                                    <h3>${project.title}</h3>
                                    <p>${project.description}</p>
                                    <div class="tech-tags">${tags}</div>
                                </div>
                                <a class="project-link" href="${project.link}" target="_blank" rel="noopener">View Project</a>
                            </div>
                        </div>
                    </article>
                `;
            }).join("");

            projectDots.innerHTML = projectData.map((_, index) =>
                `<button class="project-dot${index === 0 ? " active" : ""}" data-index="${index}" aria-label="Go to project ${index + 1}"></button>`
            ).join("");
        }

        function updateProjectCarousel(nextIndex) {
            if (!projectsTrack) return;
            projectIndex = (nextIndex + projectData.length) % projectData.length;
            projectsTrack.style.transform = `translateX(-${projectIndex * 100}%)`;

            document.querySelectorAll('.project-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === projectIndex);
            });

            document.querySelectorAll('.project-card.is-flipped').forEach((card) => {
                card.classList.remove('is-flipped');
            });
        }

        function resetProjectTimer() {
            clearInterval(projectTimer);
            projectTimer = setInterval(() => updateProjectCarousel(projectIndex + 1), 5500);
        }

        renderProjects();
        updateProjectCarousel(0);
        resetProjectTimer();

        if (projectPrev) {
            projectPrev.addEventListener('click', () => {
                updateProjectCarousel(projectIndex - 1);
                resetProjectTimer();
            });
        }

        if (projectNext) {
            projectNext.addEventListener('click', () => {
                updateProjectCarousel(projectIndex + 1);
                resetProjectTimer();
            });
        }

        if (projectDots) {
            projectDots.addEventListener('click', (event) => {
                const target = event.target;
                if (!(target instanceof HTMLElement)) return;
                const dot = target.closest('.project-dot');
                if (!dot) return;
                const targetIndex = Number(dot.dataset.index);
                if (!Number.isNaN(targetIndex)) {
                    updateProjectCarousel(targetIndex);
                    resetProjectTimer();
                }
            });
        }

        if (projectsTrack) {
            projectsTrack.addEventListener('click', (event) => {
                const target = event.target;
                if (!(target instanceof HTMLElement)) return;
                if (target.closest('a')) return;
                const card = target.closest('.project-card');
                if (!card) return;
                card.classList.toggle('is-flipped');
                resetProjectTimer();
            });

            projectsTrack.addEventListener('keydown', (event) => {
                if (event.key !== 'Enter' && event.key !== ' ') return;
                const target = event.target;
                if (!(target instanceof HTMLElement)) return;
                const card = target.closest('.project-card');
                if (!card) return;
                event.preventDefault();
                card.classList.toggle('is-flipped');
                resetProjectTimer();
            });
        }

        const carouselRoot = document.querySelector('.projects-carousel');
        if (carouselRoot) {
            carouselRoot.addEventListener('mouseenter', () => clearInterval(projectTimer));
            carouselRoot.addEventListener('mouseleave', resetProjectTimer);
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

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

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

