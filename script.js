/**
 * BIRTHDAY EXPERIENCE CONFIGURATION
 * Edit these values to personalize the website.
 */
const CONFIG = {
    // 1. Personal Details
    recipientName: "My Love",
    nickname: "Sweetheart",
    age: 25,
    senderName: "Yours Truly",
    relationship: "Boyfriend",

    // 2. Dates
    birthday: "2026-02-27",
    anniversary: "2024-10-20",

    // 3. Messages
    entranceMessage: "A journey through our magical moments",
    heartLetter: "From the moment our story began on October 20th, 2024, my life has been filled with colors I never knew existed. Every laugh we share, every quiet moment, and every adventure perfectly pieces together the beautiful tapestry of us. You are my favorite person, my safest place, and my greatest joy. Happy Birthday, my love. Here's to everything bright and beautiful waiting in our future.",
    favoriteMemoryReason: "This is one of my favorite glimpses of you—radiant and full of life. It reminds me of exactly why I want to spend forever with you.",
    futurePromise: "To a thousand more adventures and a million more smiles.",
    ultimateDeclaration: "I LOVE YOU MORE THAN WORDS CAN SAY",
    marqueeText: "You are my today and all of my tomorrows ✨ My heart is, and always will be, yours ✨ Every love story is beautiful, but ours is my favorite ✨ ",

    // 4. Reasons
    reasonsWhy: [
        { icon: "💖", title: "Your Heart", text: "The way you care so deeply for everyone around you." },
        { icon: "😄", title: "Your Smile", text: "It literally lights up my darkest days." },
        { icon: "🌟", title: "Your Strength", text: "You inspire me to be a better person every single day." },
        { icon: "😂", title: "Your Laugh", text: "The sweetest melody I've ever heard." },
        { icon: "🥺", title: "Your Eyes", text: "I can look into them forever and still get lost." },
        { icon: "🍕", title: "Your Quirks", text: "Even the little weird things you do are adorable to me." }
    ],

    // 5. Photos
    photos: [
        { src: "images/WhatsApp Image 2026-01-31 at 11.18.43 PM.jpeg", caption: "Sweetest smile", date: "Oct 20, 2024", emotion: "Butterflies" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.18.44 PM (1).jpeg", caption: "Perfect moments", date: "Nov 2024", emotion: "Joy" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.18.44 PM (2).jpeg", caption: "Lost in your eyes", date: "Dec 2024", emotion: "Love" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.18.44 PM.jpeg", caption: "Making memories", date: "Jan 2025", emotion: "Laughter" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.18.45 PM.jpeg", caption: "Your beauty", date: "Feb 2025", emotion: "Awe" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.21.42 PM (1).jpeg", caption: "Adventure", date: "Spring 2025", emotion: "Adventure" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.21.42 PM.jpeg", caption: "My safe place", date: "Summer 2025", emotion: "Peace" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.21.43 PM (1).jpeg", caption: "Unforgettable", date: "Fall 2025", emotion: "Magic" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.21.43 PM.jpeg", caption: "Endless love", date: "Winter 2025", emotion: "Pride" },
        { src: "images/WhatsApp Image 2026-01-31 at 11.21.44 PM.jpeg", caption: "Looking at the stars", date: "Jan 2026", emotion: "Hope" }
    ],
    favoritePhoto: { src: "images/image.png", caption: "The Best Day Ever" },

    // 5. Settings
    theme: "romantic-pink", // options: romantic-pink, ocean-blue, sunset-orange, forest-green, lavender-dream
    enableMusic: false,
    musicFile: "audio/song.mp3"
};

/**
 * CORE LOGIC
 */
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    applyTheme();
    populateContent();
    initScrollAnimations();
    initParticles();
});

function initPreloader() {
    let progress = 0;
    const progressEl = document.getElementById('progress');
    const preloader = document.getElementById('preloader');

    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        progressEl.style.width = `${progress}%`;

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.visibility = 'hidden';
                    startEntranceAnimation();
                }, 800);
            }, 500);
        }
    }, 200);
}

function applyTheme() {
    // We can add logic to switch CSS variables based on CONFIG.theme
}

function populateContent() {
    // Populate simple text elements
    document.title = `Happy Birthday ${CONFIG.nickname}!`;
    document.getElementById('recipient-name').textContent = CONFIG.recipientName;
    document.getElementById('entrance-message').textContent = CONFIG.entranceMessage;
    document.getElementById('heart-letter').textContent = CONFIG.heartLetter;
    document.getElementById('sender-signature').textContent = `- ${CONFIG.senderName}`;
    document.getElementById('future-promise').textContent = CONFIG.futurePromise;
    document.getElementById('ultimate-declaration').textContent = CONFIG.ultimateDeclaration;

    // Populate Memories
    const gallery = document.getElementById('memory-gallery');
    if (gallery) {
        gallery.innerHTML = ''; // Clear existing
        const styles = ['polaroid', 'scrapbook', 'film', 'gallery-frame', 'floating'];

        CONFIG.photos.forEach((photo, index) => {
            const style = styles[index % styles.length];
            const delay = index * 100;

            const memoryEl = document.createElement('div');
            memoryEl.className = `memory-item ${style} reveal`;
            memoryEl.style.transitionDelay = `${delay}ms`;

            let innerHTML = '';

            if (style === 'polaroid') {
                innerHTML = `
                    <div class="polaroid-frame">
                        <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                        <div class="polaroid-caption handwriting">${photo.caption}</div>
                    </div>
                `;
            } else if (style === 'scrapbook') {
                innerHTML = `
                    <div class="scrapbook-page">
                        <div class="tape"></div>
                        <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                        <div class="scrapbook-note handwriting">${photo.caption}<br><small>${photo.date}</small></div>
                    </div>
                `;
            } else if (style === 'gallery-frame') {
                innerHTML = `
                    <div class="ornate-frame">
                        <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                    </div>
                    <div class="gallery-placard">
                        <span class="placard-title">${photo.caption}</span>
                        <span class="placard-date">${photo.date}</span>
                    </div>
               `;
            }
            else {
                // Default floating style
                innerHTML = `
                    <div class="floating-photo">
                        <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                        <div class="floating-caption">${photo.caption}</div>
                    </div>
                 `;
            }

            memoryEl.innerHTML = innerHTML;
            gallery.appendChild(memoryEl);
        });
    }

    // Populate Favorite Photo
    const favMemoryContainer = document.getElementById('favorite-memory');
    if (favMemoryContainer && CONFIG.favoritePhoto) {
        favMemoryContainer.innerHTML = `
            <div class="glowing-frame">
                <img src="${CONFIG.favoritePhoto.src}" alt="${CONFIG.favoritePhoto.caption}">
            </div>
            <p class="favorite-caption handwriting">${CONFIG.favoritePhoto.caption}</p>
            <p class="favorite-reason modern-text">${CONFIG.favoriteMemoryReason}</p>
        `;
    }

    // Populate Marquee
    const marqueeContainer = document.getElementById('marquee-text');
    if (marqueeContainer && CONFIG.marqueeText) {
        marqueeContainer.textContent = CONFIG.marqueeText.repeat(5); // Repeat to ensure smooth looping
    }

    // Populate Reasons Why I Love You
    const reasonsContainer = document.getElementById('reasons-container');
    if (reasonsContainer && CONFIG.reasonsWhy) {
        CONFIG.reasonsWhy.forEach((reason, index) => {
            const delay = index * 100;
            const card = document.createElement('div');
            card.className = "reason-card reveal";
            card.style.transitionDelay = `${delay}ms`;
            card.innerHTML = `
                <div class="reason-icon">${reason.icon}</div>
                <h3 class="handwriting" style="font-size: 1.5rem; margin-bottom: 5px;">${reason.title}</h3>
                <p class="reason-text">${reason.text}</p>
            `;
            reasonsContainer.appendChild(card);
        });
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function startEntranceAnimation() {
    const entranceContent = document.querySelector('.entrance-content');
    if (entranceContent) {
        setTimeout(() => {
            entranceContent.classList.add('visible');
        }, 300);
    }
}

function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * 1 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.type = Math.random() > 0.8 ? 'heart' : 'star';
            this.color = Math.random() > 0.5 ? 'rgba(255, 143, 163, 0.8)' : 'rgba(255, 255, 255, 0.8)';
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            if (this.y < -10) {
                this.y = canvas.height + 10;
                this.x = Math.random() * canvas.width;
            }
        }

        draw(ctx) {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;

            if (this.type === 'heart') {
                ctx.beginPath();
                const d = this.size * 2;
                ctx.moveTo(this.x, this.y + d / 4);
                ctx.quadraticCurveTo(this.x, this.y, this.x + d / 4, this.y);
                ctx.quadraticCurveTo(this.x + d / 2, this.y, this.x + d / 2, this.y + d / 4);
                ctx.quadraticCurveTo(this.x + d / 2, this.y, this.x, this.y + d);
                ctx.quadraticCurveTo(this.x - d / 2, this.y, this.x - d / 2, this.y + d / 4);
                ctx.quadraticCurveTo(this.x - d / 2, this.y, this.x, this.y + d / 4);
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
        }
    }

    const particles = Array.from({ length: 60 }, () => new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw(ctx);
        });

        requestAnimationFrame(animate);
    }

    animate();
}

function initEnvelopeInteraction() {
    const letterContainer = document.querySelector('.letter-container');
    if (letterContainer) {
        letterContainer.addEventListener('click', function () {
            this.classList.toggle('open');
            const instruction = this.querySelector('.instruction');
            if (instruction) {
                instruction.style.display = 'none';
            }
        });
    }
}

function initCakeInteraction() {
    const cakeContainer = document.getElementById('birthday-cake');
    if (!cakeContainer) return;

    const cake = cakeContainer.querySelector('.cake');

    // Add candles based on age
    const maxCandles = Math.min(CONFIG.age, 10); // Don't crowd too much

    for (let i = 0; i < maxCandles; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle';

        // Position candles evenly
        const leftPos = 20 + (i * (60 / Math.max(1, maxCandles - 1)));
        candle.style.left = `${leftPos}%`;

        candle.innerHTML = `<div class="flame"></div>`;
        cake.appendChild(candle);
    }

    cakeContainer.addEventListener('click', function () {
        const candles = this.querySelectorAll('.candle');
        let extinguishedCount = 0;

        candles.forEach((candle, index) => {
            setTimeout(() => {
                candle.classList.add('extinguished');
                extinguishedCount++;

                if (extinguishedCount === candles.length) {
                    celebrate();
                }
            }, index * 150);
        });

        const instruction = this.querySelector('.instruction');
        if (instruction) {
            instruction.textContent = "Make a wish!";
            instruction.style.animation = "none";
        }
    });
}

function celebrate() {
    const title = document.querySelector('#act5-celebration .section-title');
    if (title) {
        title.textContent = "Wish Granted!";
        title.classList.add('magical-title');
    }

    // Launch confetti (simple burst for now)
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const colors = ['#ffbdc4', '#ff8fa3', '#ff4d6d', '#ffd700', '#4cd137', '#00a8ff'];
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.zIndex = '1000';
    document.body.appendChild(confetti);

    const animationText = `
        @keyframes fall-${Math.random()} {
            to {
                transform: translateY(100vh) rotate(${Math.random() * 720}deg);
            }
        }
    `;

    const style = document.createElement('style');
    style.innerHTML = animationText;
    document.head.appendChild(style);

    confetti.style.animation = `fall-${Math.random()} ${Math.random() * 2 + 3}s linear forwards`;

    setTimeout(() => {
        confetti.remove();
        style.remove();
    }, 5000);
}

// Ensure init functions are called
document.addEventListener('DOMContentLoaded', () => {
    initScrollInteraction();
    initCakeInteraction();
    initAudio();
    initReplay();
    initLoveTimer();
});

function initAudio() {
    if (!CONFIG.enableMusic) return;

    const audioControls = document.getElementById('audio-controls');
    if (audioControls) {
        audioControls.classList.remove('hidden');

        // Setup audio element (simulated for now, would use real Audio API)
        const btn = document.getElementById('play-pause-btn');
        let isPlaying = false;

        btn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            btn.innerHTML = isPlaying ? '<span class="icon">⏸</span>' : '<span class="icon">♪</span>';
            // Here you would do: isPlaying ? audio.play() : audio.pause();
        });
    }
}

function initReplay() {
    const replayBtn = document.getElementById('replay-btn');
    if (replayBtn) {
        replayBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Reset state
            setTimeout(() => {
                document.querySelectorAll('.visible').forEach(el => {
                    if (el !== document.querySelector('.entrance-content')) {
                        el.classList.remove('visible');
                    }
                });

                const letterContainer = document.querySelector('.letter-container');
                if (letterContainer) letterContainer.classList.remove('open');

                const candles = document.querySelectorAll('.candle');
                candles.forEach(c => c.classList.remove('extinguished'));

                const title = document.querySelector('#act5-celebration .section-title');
                if (title) {
                    title.textContent = "Make a Wish!";
                    title.classList.remove('magical-title');
                }
            }, 1000);
        });
    }
}

function initLoveTimer() {
    const timerElement = document.getElementById('love-timer');
    if (!timerElement || !CONFIG.anniversary) return;

    const startDate = new Date(CONFIG.anniversary);

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        if (diff < 0) {
            timerElement.innerHTML = `<div class="timer-unit"><span>The future awaits</span></div>`;
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // Calculate months and years roughly for display
        const years = Math.floor(days / 365);
        const remainingDays = days % 365;
        const months = Math.floor(remainingDays / 30);
        const displayDays = remainingDays % 30;

        let html = '';
        if (years > 0) html += `<div class="timer-unit">${years} <span>Years</span></div>`;
        if (months > 0 || years > 0) html += `<div class="timer-unit">${months} <span>Months</span></div>`;
        html += `
            <div class="timer-unit">${displayDays} <span>Days</span></div>
            <div class="timer-unit">${hours} <span>Hrs</span></div>
            <div class="timer-unit">${minutes} <span>Min</span></div>
            <div class="timer-unit">${seconds} <span>Sec</span></div>
        `;

        timerElement.innerHTML = html;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

function initScrollInteraction() {
    const scrollContainer = document.getElementById('magical-scroll');
    if (!scrollContainer) return;

    scrollContainer.addEventListener('click', function () {
        if (this.classList.contains('open')) return;
        this.classList.add('open');

        setTimeout(() => {
            const letterEl = document.getElementById('heart-letter');
            const signatureEl = document.getElementById('sender-signature');

            if (letterEl && CONFIG.heartLetter) {
                const text = CONFIG.heartLetter;
                letterEl.innerHTML = '';

                for (let i = 0; i < text.length; i++) {
                    const span = document.createElement('span');
                    span.textContent = text[i];
                    letterEl.appendChild(span);

                    setTimeout(() => {
                        span.style.opacity = '1';
                    }, i * 40); // 40ms typing speed
                }

                setTimeout(() => {
                    if (signatureEl && CONFIG.senderName) {
                        signatureEl.innerHTML = `With all my love,<br>${CONFIG.senderName}`;
                        signatureEl.classList.add('show');
                    }
                }, text.length * 40 + 500);
            }
        }, 1200); // Match scroll opening animation delay
    });
}
