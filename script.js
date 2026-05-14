/* ============================================
    Personal Website - Oliver Tao
   Interactive Features & i18n
   Version: 2.0 - Premium Design
   ============================================ */

// ============================================
// i18n Translation Dictionary
// ============================================
const i18n = {
    zh: {
        nav: {
            about: '关于',
            experience: '经历',
            photography: '摄影',
            contact: '联系'
        },
        hero: {
            badge: '市场营销 · 摄影',
            tagline: '理性分析世界，镜头记录温度',
            taglineEn: 'Analyze with reason, capture with warmth.',
            explore: '探索更多',
            contact: '联系我',
            scroll: '向下滚动'
        },
        about: {
            title: '关于我',
            p1: '我是陶承启，香港中文大学市场营销理学硕士在读，本科毕业于香港中文大学（深圳）环球商务管理专业。我热衷于将数据分析与商业洞察相结合，在金融、咨询领域积累了丰富的实战经验。',
            p2: '同时，我也是一名摄影师。镜头是我观察世界的另一双眼睛——从城市街角到自然风光，从人像情绪到建筑几何，我始终相信，好的影像能传递超越语言的力量。',
            stat1: '实习经历',
            stat2: '摄影城市',
            stat3: '语言能力',
            photoBadge: '摄影师 · 2026'
        },
        education: {
            title: '教育背景',
            cuhk: {
                title: '香港中文大学',
                degree: '市场营销理学硕士',
                desc: '香港 · 主修：战略管理、财务决策、数据分析'
            },
            cuhksz: {
                title: '香港中文大学（深圳）',
                degree: '环球商务管理学士',
                desc: '深圳 · GPA前15% · 校庆学生代表（Top 1%）',
                exchange: '交换：鲁汶大学（比利时，全球Top 50）'
            }
        },
        experience: {
            title: '工作经历',
            forthright: {
                company: '方德证券',
                role: '私人财富管理实习生',
                tag: '私人财富',
                d1: '协助高级客户经理为客户提供投资咨询与财富解决方案',
                d2: '进行市场研究，制定与客户风险偏好一致的资产配置策略',
                d3: '准备专业客户演示、投资组合审查及投资建议材料'
            },
            foshan: {
                company: '佛山医药健康创投',
                role: '投资分析实习生',
                tag: '风险投资',
                d1: '对生物科技初创企业进行行业格局分析，评估20+并购标的',
                d2: '协助投资经理进行财务建模、尽职调查与风险收益分析',
                d3: '撰写投资报告，提升决策效率15%'
            },
            kotler: {
                company: '科特勒咨询集团',
                role: '咨询实习生',
                tag: '战略咨询',
                d1: '为房地产客户提供高端高尔夫客群市场进入战略支持',
                d2: '进行竞争对标与客户细分，识别三大关键市场差异化因素',
                d3: '提供可执行建议以优化客户定位与收入潜力'
            },
            kaiyuan: {
                company: '开源证券',
                role: '研究实习生（电子组）',
                tag: '行业研究',
                d1: '分析半导体及元器件行业趋势与价值链',
                d2: '建立DCF与可比公司模型，撰写5+研究报告',
                d3: '与分析师协作提供可执行洞察，提升客户覆盖深度'
            }
        },
        photography: {
            title: '摄影作品',
            subtitle: '用镜头捕捉世界的温度与质感',
            filterAll: '全部',
            filterLandscape: '风光',
            filterCity: '城市',
            filterNature: '自然'
        },
        skills: {
            title: '技能与证书',
            consulting: {
                title: '咨询与分析',
                s1: '市场研究',
                s2: '战略诊断',
                s3: '财务建模',
                s4: '尽职调查'
            },
            tools: {
                title: '工具与软件'
            },
            languages: {
                title: '语言能力',
                l1: '中文（普通话）',
                l1l: '母语',
                l3: '粤语',
                l3l: '初级',
                l4l: '初级'
            }
        },
        achievements: {
            title: '荣誉与成就',
            a1: 'ESG商业策略大赛 Top 11 / 150+',
            a1d: '香港中文大学（深圳）',
            a2: '学生会"杰出干事"奖',
            a2d: '香港中文大学（深圳）',
            a3: '60周年校庆学生代表',
            a3d: 'Top 1% 选拔'
        },
        contact: {
            title: '联系我',
            locationLabel: '位置',
            location: '深圳 / 香港',
            cta: '无论是商业合作、摄影约拍，还是只是想聊聊天，都欢迎联系我。',
            sendEmail: '发送邮件'
        }
    },
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            photography: 'Photography',
            contact: 'Contact'
        },
        hero: {
            badge: 'MARKETING · PHOTOGRAPHY',
            tagline: '理性分析世界，镜头记录温度',
            taglineEn: 'Analyze with reason, capture with warmth.',
            explore: 'Explore More',
            contact: 'Get in Touch',
            scroll: 'Scroll Down'
        },
        about: {
            title: 'About Me',
            p1: 'I am Oliver Tao, an MSc in Marketing candidate at The Chinese University of Hong Kong, and a BBA graduate in Global Business Studies from CUHK (Shenzhen). I am passionate about combining data analytics with business insights, with hands-on experience in finance and consulting.',
            p2: 'I am also a photographer. The lens is my second pair of eyes to observe the world — from urban street corners to natural landscapes, from portrait emotions to architectural geometry. I firmly believe that great images convey power beyond words.',
            stat1: 'Internships',
            stat2: 'Cities Shot',
            stat3: 'Languages',
            photoBadge: 'Photographer · 2026'
        },
        education: {
            title: 'Education',
            cuhk: {
                title: 'The Chinese University of Hong Kong',
                degree: 'MSc in Marketing',
                desc: 'Hong Kong · Strategic Management, Financial Decision-Making, Data Analytics'
            },
            cuhksz: {
                title: 'CUHK (Shenzhen)',
                degree: 'BBA in Global Business Studies',
                desc: 'Shenzhen · GPA Top 15% · 60th Anniversary Student Rep (Top 1%)',
                exchange: 'Exchange: KU Leuven (Global Top 50, Belgium)'
            }
        },
        experience: {
            title: 'Experience',
            forthright: {
                company: 'Forthright Securities',
                role: 'Private Wealth Management Intern',
                tag: 'Private Wealth',
                d1: 'Supported senior relationship managers in delivering investment advisory and wealth solutions.',
                d2: 'Conducted market research and formulated asset allocation strategies aligned with client risk profiles.',
                d3: 'Prepared professional client presentations, portfolio reviews, and investment recommendation materials.'
            },
            foshan: {
                company: 'Foshan Medical & Healthcare VC',
                role: 'Investment Analyst Intern',
                tag: 'Venture Capital',
                d1: 'Conducted industry landscape analysis on biotech startups and evaluated 20+ M&A candidates.',
                d2: 'Supported investment managers with financial modeling, due diligence, and risk-return analysis.',
                d3: 'Delivered investment reports that enhanced decision efficiency by 15%.'
            },
            kotler: {
                company: 'Kotler Marketing Group',
                role: 'Consulting Intern',
                tag: 'Strategy Consulting',
                d1: 'Supported strategic market entry project for a real estate client targeting high-end golf customers.',
                d2: 'Conducted competitive benchmarking and client segmentation, identifying three key differentiators.',
                d3: 'Delivered actionable recommendations to optimize client positioning and revenue potential.'
            },
            kaiyuan: {
                company: 'Kaiyuan Securities',
                role: 'Research Intern (Electronics)',
                tag: 'Industry Research',
                d1: 'Analyzed industry trends and value chains in semiconductor and component sectors.',
                d2: 'Developed DCF and comparable company models; drafted 5+ research reports.',
                d3: 'Collaborated with analysts to present actionable insights improving client coverage depth.'
            }
        },
        photography: {
            title: 'Photography',
            subtitle: 'Capturing the warmth and texture of the world through the lens',
            filterAll: 'All',
            filterLandscape: 'Landscape',
            filterCity: 'City',
            filterNature: 'Nature'
        },
        skills: {
            title: 'Skills & Certifications',
            consulting: {
                title: 'Consulting & Analysis',
                s1: 'Market Research',
                s2: 'Strategic Diagnosis',
                s3: 'Financial Modeling',
                s4: 'Due Diligence'
            },
            tools: {
                title: 'Tools & Software'
            },
            languages: {
                title: 'Languages',
                l1: 'Mandarin Chinese',
                l1l: 'Native',
                l3: 'Cantonese',
                l3l: 'Beginner',
                l4l: 'Beginner'
            }
        },
        achievements: {
            title: 'Achievements',
            a1: 'ESG Business Strategy Competition Top 11 / 150+',
            a1d: 'CUHK (Shenzhen)',
            a2: 'Student Union "Outstanding Officer" Award',
            a2d: 'CUHK (Shenzhen)',
            a3: '60th Anniversary Student Representative',
            a3d: 'Top 1% Selection'
        },
        contact: {
            title: 'Contact',
            locationLabel: 'Location',
            location: 'Shenzhen / Hong Kong',
            cta: 'Whether for business collaboration, photography shoots, or just a chat — feel free to reach out.',
            sendEmail: 'Send Email'
        }
    }
};

// ============================================
// i18n Engine
// ============================================
let currentLang = 'zh';

function setLanguage(lang) {
    currentLang = lang;
    const translations = i18n[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations;
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                value = null;
                break;
            }
        }
        if (value !== null) {
            el.textContent = value;
        }
    });

    // Update lang toggle button text
    const langToggle = document.getElementById('langToggle');
    const langCurrent = langToggle.querySelector('.lang-current');
    langCurrent.textContent = lang === 'zh' ? 'EN' : '中';

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Store preference
    localStorage.setItem('preferred-lang', lang);
}

// ============================================
// Hero Slideshow
// ============================================
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    if (!slides.length) return;

    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        indicators.forEach(i => i.classList.remove('active'));
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Click indicators to navigate
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            stopSlideshow();
            startSlideshow();
        });
    });

    // Pause on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', stopSlideshow);
    hero.addEventListener('mouseleave', startSlideshow);

    startSlideshow();
}

// ============================================
// Custom Cursor
// ============================================
function initCustomCursor() {
    const cursor = document.getElementById('cursorFollower');
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Smooth cursor following
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Enlarge on interactive elements
    const interactiveElements = document.querySelectorAll(
        'a, button, .gallery-item, .exp-card, .skill-category, .achievement-card, .social-link, .contact-item'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect with throttle
    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            requestAnimationFrame(() => {
                if (lastScrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Scroll Reveal Animation (Intersection Observer)
// ============================================
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small random delay for organic feel
                const delay = Math.random() * 0.2;
                entry.target.style.transitionDelay = delay + 's';
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Counter Animation
// ============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                animateCounter(target, countTo);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 40);
    const duration = 1500;
    const stepTime = Math.floor(duration / 40);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current;
    }, stepTime);
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Parallax Effect on Hero
// ============================================
function initParallax() {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero-content');
                const slideshow = document.querySelector('.hero-slideshow');
                if (hero && scrolled < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.25}px)`;
                    hero.style.opacity = 1 - (scrolled / (window.innerHeight * 0.7));
                }
                if (slideshow && scrolled < window.innerHeight) {
                    slideshow.style.transform = `translateY(${scrolled * 0.15}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ============================================
// Photo Gallery Filter
// ============================================
function initPhotoFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// Lightbox
// ============================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!lightbox || !galleryItems.length) return;

    let currentIndex = 0;
    const galleryImages = [];

    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-img');
        const title = item.querySelector('.gallery-title');
        const cat = item.querySelector('.gallery-cat');
        const year = item.querySelector('.gallery-year');
        if (img) {
            galleryImages.push({
                src: img.getAttribute('src'),
                title: title ? title.textContent : '',
                cat: cat ? cat.textContent : '',
                year: year ? year.textContent : ''
            });

            // Click to open lightbox
            item.addEventListener('click', () => {
                currentIndex = index;
                openLightbox(currentIndex);
            });
        }
    });

    function openLightbox(index) {
        const image = galleryImages[index];
        if (!image) return;
        lightboxImage.setAttribute('src', image.src);
        lightboxImage.setAttribute('alt', image.title);
        lightboxCaption.textContent = `${image.title} · ${image.cat} · ${image.year}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        openLightbox(currentIndex);
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
}

// ============================================
// Language Bar Animation
// ============================================
function initLangBarAnimation() {
    const langBars = document.querySelectorAll('.lang-bar-fill');
    if (!langBars.length) return;

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    langBars.forEach(bar => observer.observe(bar));
}

// ============================================
// Active Nav Link Highlighting
// ============================================
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        rootMargin: '-50% 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.style.color = link.getAttribute('href') === '#' + id
                        ? 'var(--white)'
                        : '';
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        setLanguage(savedLang);
    }

    // Language toggle
    document.getElementById('langToggle').addEventListener('click', () => {
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        setLanguage(newLang);
    });

    // Initialize all features
    initHeroSlideshow();
    initCustomCursor();
    initNavigation();
    initScrollReveal();
    initCounterAnimation();
    initSmoothScroll();
    initParallax();
    initPhotoFilter();
    initLightbox();
    initLangBarAnimation();
    initActiveNavHighlight();
});
