/* ============================================
   Personal Website - Oliver Tao
   Interactive Features & i18n
   Version: 3.0
   ============================================ */

// ============================================
// i18n Translation Dictionary
// ============================================
const i18n = {
    zh: {
        nav: {
            about: '关于',
            experience: '经历',
            education: '教育',
            focus: '方向',
            photography: '摄影',
            contact: '联系'
        },
        hero: {
            badge: 'WEALTH PLANNING ADVISOR · PHOTOGRAPHER',
            tagline: '以专业守护财富，以温度传承价值',
            taglineEn: 'Guard wealth with expertise, pass on value with warmth.',
            explore: '了解我',
            contact: '联系我',
            scroll: '向下滚动',
            cred1: '诺贝尔家族办公室',
            cred2: '中国人寿（海外）',
            cred3: '香港中文大学 硕士'
        },
        about: {
            title: '关于我',
            p1: '我是陶承启，现居香港，任财富规划顾问，主要服务跨境家庭的财富安排。本科毕业于香港中文大学（深圳）环球商务管理专业，硕士毕业于香港中文大学市场营销专业。求学期间曾在加拿大麦克马斯特大学学习一年，并在比利时鲁汶大学交换。',
            p2: '卖方研究、买方投资、战略咨询、私人财富管理——四个方向我都待过。这段经历让我习惯从不同视角看同一件事，也让我清楚一份报告从数字走到结论，中间要经过多少推导。',
            p3: '我目前在诺贝尔家族办公室担任财富规划顾问，同时是中国人寿（海外）的理财顾问。我关注的是跨境家庭的财富结构——身处内地与香港之间，家庭往往要同时面对两套规则、两种货币、两代人的安排。这类问题很难靠单一产品解决，需要先把结构理清楚。我做的事，是从研究出发，把这些变量摊开来看。',
            p4: '同时，我也是一名摄影师。我曾担任香港中文大学（深圳）官方摄影师，为学校传讯与公共关系办公室拍摄国庆升旗、校领导采访等重大活动，作品见于学校官网及官方推文。四年镜头训练教会我的是：先观察，再判断。真正的信息往往藏在别人跳过的细节里——这一点，做研究和看家庭资产是相通的。',
            stat1: '段金融经历',
            stat2: '并购项目分析',
            stat3: '地求学经历',
            stat4: '年校园影像',
            photoBadge: '财富规划顾问 · 香港'
        },
        experience: {
            title: '工作经历',
            forthright: {
                company: '方德证券股份有限公司',
                role: '私人财富管理实习生',
                tag: '私人财富',
                date: '2026.01 – 2026.03 · 香港',
                d1: '协助高级客户经理为客户提供投资咨询与财富管理解决方案',
                d2: '开展市场研究并生成投资见解，根据客户风险偏好与目标制定资产配置策略',
                d3: '准备专业的客户演示材料、投资组合回顾及投资建议报告'
            },
            foshan: {
                company: '佛山市医药健康创业投资管理有限公司',
                role: '投资实习生',
                tag: '股权投资',
                date: '2024.09 – 2024.12 · 深圳',
                d1: '负责 20+ 医药并购项目的财务分析与估值',
                d2: '进行尽职调查并协助编写投资方案，提高决策效率约 15%',
                d3: '与勤智资本等合作伙伴开展风险回报分析，制定基金策略'
            },
            kotler: {
                company: '深圳科特勒营销管理有限公司',
                role: '咨询顾问实习生',
                tag: '战略咨询',
                date: '2024.05 · 深圳',
                d1: '参与房地产客户高端市场拓展战略项目，负责竞争对标与客户细分',
                d2: '分析市场差异化要素并提出三项关键战略建议，提升客户品牌定位',
                d3: '协助制定战略方案，支持高层决策执行'
            },
            kaiyuan: {
                company: '开源证券股份有限公司',
                role: '电子组研究实习生',
                tag: '卖方研究',
                date: '2024.02 – 2024.05 · 深圳',
                d1: '搭建 DCF 与可比公司估值模型，对 A 股半导体企业进行估值分析',
                d2: '撰写 5+ 行业研究报告，为投资决策提供数据支持与建议',
                d3: '管理并分析 200+ 行业数据，提高研究数据的准确性与完整性'
            }
        },
        education: {
            title: '教育背景',
            cuhk: {
                title: '香港中文大学',
                degree: '市场营销理学硕士 · 香港',
                date: '2025.09 – 2026.06',
                desc: 'QS 全球前 50 大学，商学院 · 主要课程：公司金融、财务管理、战略营销'
            },
            cuhksz: {
                title: '香港中文大学（深圳）',
                degree: '环球商务管理学士 · 深圳',
                date: '2021.09 – 2025.06',
                desc: '荣誉：受邀担任港中大六十周年学生代表（全校 60 人）',
                exchange: '交换：比利时鲁汶大学（全球前 50）· 海外学习：加拿大麦克马斯特大学（GPA 年级前 15%）'
            }
        },
        focus: {
            title: '专业方向',
            subtitle: '先理解一个家庭的结构，再谈具体的安排。',
            f1: {
                title: '跨境家庭财富结构',
                desc: '理解内地与香港两地规则差异，协助梳理家庭资产的整体结构与持有方式'
            },
            f2: {
                title: '传承与家族治理',
                desc: '关注代际交接中的安排逻辑与常见问题，把模糊的家事变成可讨论的议题'
            },
            f3: {
                title: '风险管理框架',
                desc: '从家庭整体风险敞口出发，识别薄弱环节，而非从单一产品视角切入'
            },
            f4: {
                title: '身份与教育规划',
                desc: '跨境生活安排与子女教育路径的信息梳理，帮助家庭看清可选范围'
            }
        },
        whyme: {
            title: '为什么选择我',
            w1: {
                title: '跨市场视角',
                desc: '在深圳、香港、加拿大三地学习生活过，理解不同市场的规则差异与家庭结构差异'
            },
            w2: {
                title: '四段金融经历',
                desc: '卖方研究、买方投资、战略咨询、私人财富管理，看问题的角度不单一'
            },
            w3: {
                title: '研究驱动',
                desc: '会建模、会读财报、会做尽调——结论有推导过程，而不是话术'
            },
            w4: {
                title: '长期主义',
                desc: '不追求一次性成交，愿意花时间先成为那个你愿意长期问问题的人'
            }
        },
        skills: {
            title: '技能与荣誉',
            professional: {
                title: '专业能力',
                s1: '估值分析（DCF · 可比公司法）',
                s2: '财务建模',
                s3: '并购尽调',
                s4: '市场研究',
                s5: '数据分析'
            },
            tools: {
                title: '工具'
            },
            languages: {
                title: '语言',
                l1: '中文（普通话）',
                l1l: '母语',
                l2: 'English',
                l3: '粤语',
                l3l: '初级',
                l4: '日本語',
                l4l: '初级'
            }
        },
        achievements: {
            a1: 'ESG 商业策略大赛 前 11 名 / 150+ 队',
            a1d: '香港中文大学（深圳）',
            a2: '学生会「杰出干事」奖',
            a2d: '香港中文大学（深圳）',
            a3: '港中大六十周年学生代表',
            a3d: '全校 60 人'
        },
        photography: {
            title: '摄影作品',
            subtitle: '用镜头捕捉世界的温度与质感',
            filterAll: '全部',
            filterCity: '城市',
            filterLandscape: '风光',
            filterExhibition: '展览',
            filterDetail: '细节'
        },
        contact: {
            title: '联系我',
            phoneLabel: '手机',
            locationLabel: '常驻',
            location: '香港 / 深圳',
            qrLabel: 'WeChat 微信',
            qrValue: '扫码添加，或搜索手机号',
            cta: '无论是想聊聊跨境家庭的财富安排、摄影合作，还是只是认识一下，都欢迎联系我。',
            sendEmail: '发送邮件'
        },
        footer: {
            tagline: '立足香港 · 深耕跨境 · 长期陪伴'
        }
    },
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            education: 'Education',
            focus: 'Focus',
            photography: 'Photography',
            contact: 'Contact'
        },
        hero: {
            badge: 'WEALTH PLANNING ADVISOR · PHOTOGRAPHER',
            tagline: '以专业守护财富，以温度传承价值',
            taglineEn: 'Guard wealth with expertise, pass on value with warmth.',
            explore: 'About Me',
            contact: 'Get in Touch',
            scroll: 'Scroll Down',
            cred1: 'Nobel Family Office',
            cred2: 'China Life (Overseas)',
            cred3: 'CUHK Master'
        },
        about: {
            title: 'About Me',
            p1: 'I am Oliver Tao, based in Hong Kong and working as a wealth planning advisor, focused on the wealth arrangements of cross-border families. I hold a BBA in Global Business Studies from The Chinese University of Hong Kong, Shenzhen, and an MSc in Marketing from The Chinese University of Hong Kong. I also spent a year at McMaster University in Canada and an exchange term at KU Leuven in Belgium.',
            p2: 'Sell-side research, buy-side investing, strategy consulting, private wealth management — I have worked in all four. That range taught me to look at the same question from more than one angle, and showed me how much derivation sits between a number and a conclusion.',
            p3: 'I currently serve as a wealth planning advisor at Nobel Family Office, and as a financial advisor with China Life (Overseas). My focus is the wealth structure of cross-border families. Living between the Mainland and Hong Kong, a family often has to deal with two sets of rules, two currencies, and two generations of arrangements at once. Problems like these rarely have a single-product answer — the structure has to be understood first. That is what I do: start from research, and lay the variables out in the open.',
            p4: 'I am also a photographer. I served as an official photographer for CUHK (Shenzhen), covering major events such as National Day flag-raising ceremonies and leadership interviews for the Communications and Public Relations Office, with my work featured on the university website and official posts. Four years behind a lens taught me to observe first and judge second — real information tends to hide in the details other people skip. The same holds true for research, and for reading a family\'s balance sheet.',
            stat1: 'Finance Roles',
            stat2: 'M&A Projects',
            stat3: 'Study Locations',
            stat4: 'Years in Media',
            photoBadge: 'Wealth Planning Advisor · Hong Kong'
        },
        experience: {
            title: 'Experience',
            forthright: {
                company: 'Forthright Securities Co., Ltd.',
                role: 'Private Wealth Management Intern',
                tag: 'Private Wealth',
                date: 'Jan – Mar 2026 · Hong Kong',
                d1: 'Supported senior relationship managers in delivering investment advisory and wealth management solutions.',
                d2: 'Conducted market research and produced investment views; built asset allocation strategies aligned with client risk profiles and objectives.',
                d3: 'Prepared client presentations, portfolio reviews, and detailed investment recommendation reports.'
            },
            foshan: {
                company: 'Foshan Medical & Healthcare Venture Capital',
                role: 'Investment Intern',
                tag: 'Private Equity',
                date: 'Sep – Dec 2024 · Shenzhen',
                d1: 'Led financial analysis and valuation for 20+ healthcare M&A projects.',
                d2: 'Conducted due diligence and co-authored investment proposals, improving decision efficiency by ~15%.',
                d3: 'Worked with partners including Qianzhi Capital on risk-return analysis and fund strategy.'
            },
            kotler: {
                company: 'Kotler Marketing Group (Shenzhen)',
                role: 'Consulting Intern',
                tag: 'Strategy Consulting',
                date: 'May 2024 · Shenzhen',
                d1: 'Contributed to a premium market expansion strategy project for a real estate client, owning competitive benchmarking and client segmentation.',
                d2: 'Identified three key market differentiators and recommended positioning improvements.',
                d3: 'Helped shape the strategic plan in support of senior management decisions.'
            },
            kaiyuan: {
                company: 'Kaiyuan Securities Co., Ltd.',
                role: 'Research Intern (Electronics)',
                tag: 'Sell-side Research',
                date: 'Feb – May 2024 · Shenzhen',
                d1: 'Built DCF and comparable company valuation models for A-share semiconductor companies.',
                d2: 'Authored 5+ industry research reports supporting investment decisions.',
                d3: 'Managed and analysed 200+ industry data points, improving research accuracy and completeness.'
            }
        },
        education: {
            title: 'Education',
            cuhk: {
                title: 'The Chinese University of Hong Kong',
                degree: 'MSc in Marketing · Hong Kong',
                date: 'Sep 2025 – Jun 2026',
                desc: 'QS Top 50 university, Business School · Key courses: Corporate Finance, Financial Management, Strategic Marketing'
            },
            cuhksz: {
                title: 'CUHK (Shenzhen)',
                degree: 'BBA in Global Business Studies · Shenzhen',
                date: 'Sep 2021 – Jun 2025',
                desc: 'Honour: Invited as a CUHK 60th Anniversary Student Representative (60 students university-wide)',
                exchange: 'Exchange: KU Leuven, Belgium (Global Top 50) · Overseas study: McMaster University, Canada (GPA top 15% of year)'
            }
        },
        focus: {
            title: 'Focus Areas',
            subtitle: 'Understand a family\'s structure first, then talk about specific arrangements.',
            f1: {
                title: 'Cross-Border Wealth Structure',
                desc: 'Understanding the rule differences between the Mainland and Hong Kong, and helping map the overall structure and holding arrangements of family assets'
            },
            f2: {
                title: 'Succession & Family Governance',
                desc: 'Focusing on the logic and common pitfalls of generational handover, turning vague family matters into discussable questions'
            },
            f3: {
                title: 'Risk Management Framework',
                desc: 'Starting from the family\'s overall risk exposure to identify weak points, rather than from a single-product angle'
            },
            f4: {
                title: 'Identity & Education Planning',
                desc: 'Clarifying cross-border living arrangements and children\'s education pathways, so families can see their real options'
            }
        },
        whyme: {
            title: 'Why Work With Me',
            w1: {
                title: 'Cross-Market Perspective',
                desc: 'Studied and lived in Shenzhen, Hong Kong, and Canada — I understand how rules and family structures differ across markets'
            },
            w2: {
                title: 'Four Finance Roles',
                desc: 'Sell-side research, buy-side investing, strategy consulting, and private wealth management — more than one lens on the same problem'
            },
            w3: {
                title: 'Research-Driven',
                desc: 'I build models, read financial statements, and run due diligence — conclusions come with a derivation, not a pitch'
            },
            w4: {
                title: 'Long-Term Mindset',
                desc: 'Not chasing a one-off transaction — I would rather become the person you keep asking questions of, for years'
            }
        },
        skills: {
            title: 'Skills & Honours',
            professional: {
                title: 'Professional Skills',
                s1: 'Valuation (DCF · Comps)',
                s2: 'Financial Modeling',
                s3: 'M&A Due Diligence',
                s4: 'Market Research',
                s5: 'Data Analysis'
            },
            tools: {
                title: 'Tools'
            },
            languages: {
                title: 'Languages',
                l1: 'Mandarin Chinese',
                l1l: 'Native',
                l2: 'English',
                l3: 'Cantonese',
                l3l: 'Beginner',
                l4: 'Japanese',
                l4l: 'Beginner'
            }
        },
        achievements: {
            a1: 'ESG Business Strategy Competition — Top 11 / 150+ teams',
            a1d: 'CUHK (Shenzhen)',
            a2: 'Student Union "Outstanding Officer" Award',
            a2d: 'CUHK (Shenzhen)',
            a3: 'CUHK 60th Anniversary Student Representative',
            a3d: '60 students university-wide'
        },
        photography: {
            title: 'Photography',
            subtitle: 'Capturing the warmth and texture of the world through the lens',
            filterAll: 'All',
            filterCity: 'City',
            filterLandscape: 'Landscape',
            filterExhibition: 'Exhibitions',
            filterDetail: 'Details'
        },
        contact: {
            title: 'Contact',
            phoneLabel: 'Phone',
            locationLabel: 'Based in',
            location: 'Hong Kong / Shenzhen',
            qrLabel: 'WeChat',
            qrValue: 'Scan to add, or search by phone number',
            cta: 'Whether you want to talk about cross-border family wealth, a photography collaboration, or simply to say hello — you are welcome to reach out.',
            sendEmail: 'Send an Email'
        },
        footer: {
            tagline: 'Based in Hong Kong · Cross-border · Long-term'
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

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.querySelector('.lang-current').textContent = lang === 'zh' ? 'EN' : '中';
    }

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('preferred-lang', lang);
}

// ============================================
// Hero Slideshow
// 首屏只加载第 1 张；其余背景图在页面加载完成后注入，
// 避免首屏拉取多张全屏图。
// ============================================
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    if (!slides.length) return;

    let currentSlide = 0;
    let slideInterval;

    function hydrateSlides() {
        slides.forEach(slide => {
            const bg = slide.getAttribute('data-bg');
            if (bg) {
                slide.style.backgroundImage = `url('${bg}')`;
                slide.removeAttribute('data-bg');
            }
        });
    }

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        indicators.forEach(i => i.classList.remove('active'));
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            stopSlideshow();
            startSlideshow();
        });
    });

    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', stopSlideshow);
        hero.addEventListener('mouseleave', startSlideshow);
    }

    // 第一张已经 preload；等待首屏稳定后再注入其余三张
    if (document.readyState === 'complete') {
        hydrateSlides();
    } else {
        window.addEventListener('load', () => {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(hydrateSlides, { timeout: 1200 });
            } else {
                setTimeout(hydrateSlides, 300);
            }
        });
    }

    startSlideshow();
}

// ============================================
// Custom Cursor
// ============================================
function initCustomCursor() {
    const cursor = document.getElementById('cursorFollower');
    if (!cursor) return;
    if (window.matchMedia('(hover: none)').matches) return;   // 触屏设备跳过

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

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

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
    if (!navbar || !menuToggle || !navLinks) return;

    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            requestAnimationFrame(() => {
                navbar.classList.toggle('scrolled', lastScrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Scroll Reveal Animation
// ============================================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (Math.random() * 0.2) + 's';
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// Counter Animation
// ============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, parseInt(entry.target.getAttribute('data-count'), 10));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    if (!element) return;
    let current = 0;
    const increment = Math.ceil(target / 40);
    const stepTime = Math.floor(1500 / 40);

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
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
}

// ============================================
// Parallax Effect on Hero
// ============================================
function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
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
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const match = filter === 'all' || item.getAttribute('data-category') === filter;
                if (match) {
                    item.style.display = '';
                    item.style.opacity = '0';
                    setTimeout(() => { item.style.opacity = '1'; }, 50);
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

    galleryItems.forEach((item) => {
        const img = item.querySelector('.gallery-img');
        const title = item.querySelector('.gallery-title');
        const cat = item.querySelector('.gallery-cat');
        const year = item.querySelector('.gallery-year');
        if (!img) return;

        // 网格里用的是小图，灯箱用 data-full 的原尺寸版本
        const fullSrc = img.getAttribute('data-full') || img.getAttribute('src');

        galleryImages.push({
            src: fullSrc,
            index: galleryImages.length,
            title: title ? title.textContent : '',
            cat: cat ? cat.textContent : '',
            year: year ? year.textContent : ''
        });

        const idx = galleryImages.length - 1;
        item.addEventListener('click', () => {
            currentIndex = idx;
            openLightbox(currentIndex);
        });
    });

    function openLightbox(index) {
        const image = galleryImages[index];
        if (!image) return;
        lightboxImage.setAttribute('src', image.src);
        lightboxImage.setAttribute('alt', image.title);
        lightboxCaption.textContent = [image.title, image.cat, image.year].filter(Boolean).join(' · ');
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

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => { bar.style.width = width; }, 200);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });

    langBars.forEach(bar => observer.observe(bar));
}

// ============================================
// Active Nav Link Highlighting
// ============================================
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.style.color = link.getAttribute('href') === '#' + id ? 'var(--white)' : '';
            });
        });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // 无条件走一遍 setLanguage：保证 HTML 静态文案与字典不会漂移
    const savedLang = localStorage.getItem('preferred-lang');
    setLanguage(savedLang === 'en' ? 'en' : 'zh');

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'zh' ? 'en' : 'zh');
        });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

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
