/* ==========================================================================
   PAXFINESSE SUA - Main JS
   ========================================================================== */

const PROJECTS = [
    {
        id: 1,
        brand: 'Ford',
        model: 'Mustang GT Restomod',
        year: 2021,
        color: 'Rosu Metalizat',
        source: 'Copart Texas',
        price: 48900,
        img: 'assets/IMG_20260612_000946_788.webp',
        story: 'Proiect complet: identificare in SUA, transport, mecanica, vopsitorie si detailing final.',
        features: ['Import la comanda', 'Motor refacut', 'Vopsitorie premium', 'Interior reconditionat'],
        badges: ['hot']
    },
    {
        id: 2,
        brand: 'Dodge',
        model: 'Challenger SRT Build',
        year: 2020,
        color: 'Negru Onyx',
        source: 'IAAI Florida',
        price: 52500,
        img: 'assets/IMG_20260612_000949_321.webp',
        story: 'Achizitie directa din SUA si restaurare completa in atelier, inclusiv setup de performanta.',
        features: ['Import + restaurare', 'Suspensie sport', 'Frane upgrade', 'Detailing complet'],
        badges: ['new']
    },
    {
        id: 3,
        brand: 'Chevrolet',
        model: 'Camaro SS Project',
        year: 2022,
        color: 'Alb Perlat',
        source: 'Manheim Atlanta',
        price: 46800,
        img: 'assets/IMG_20260612_000951_574.webp',
        story: 'Selectie premium la licitatie, transport asigurat si reconstruire completa pe standard european.',
        features: ['Inspectie pre-buy', 'Transport maritim', 'Tinichigerie fina', 'Pachet estetic'],
        badges: ['hot']
    },
    {
        id: 4,
        brand: 'Jeep',
        model: 'Wrangler Atelier Edition',
        year: 2021,
        color: 'Gri Mat',
        source: 'Copart California',
        price: 55900,
        img: 'assets/IMG_20260612_000953_868.webp',
        story: 'Proiect orientat spre fiabilitate si look agresiv, executat integral in atelierul Paxfinesse.',
        features: ['Refacere mecanica', 'Protectie sasiu', 'Anvelope all-terrain', 'Interior custom'],
        badges: ['low']
    },
    {
        id: 5,
        brand: 'Tesla',
        model: 'Model 3 Refresh',
        year: 2023,
        color: 'Alb',
        source: 'Dealer SUA',
        price: 44200,
        img: 'assets/IMG_20260612_000956_229.webp',
        story: 'Import orientat pe eficienta, verificare baterie, corectii estetice si livrare rapida.',
        features: ['Test baterie', 'Reconditionare exterior', 'Polish ceramic', 'Livrare rapida'],
        badges: ['new']
    },
    {
        id: 6,
        brand: 'RAM',
        model: '1500 Premium Build',
        year: 2022,
        color: 'Blue Steel',
        source: 'IAAI Nevada',
        price: 57800,
        img: 'assets/IMG_20260612_000958_269.webp',
        story: 'Pickup adus la comanda si pregatit complet pentru drum lung si utilizare zilnica.',
        features: ['Import complet', 'Service integral', 'Interior premium', 'Pachet protectie'],
        badges: ['hot']
    }
];

function projectCardHTML(p) {
    const badgesHTML = p.badges.map((b) => {
        const map = { new: 'Nou', hot: 'Highlight', low: 'Finalizat' };
        return `<span class="badge badge-${b}">${map[b] || b}</span>`;
    }).join('');

    return `
    <article class="car-card" data-id="${p.id}">
        <div class="car-media">
            <img src="${p.img}" alt="${p.brand} ${p.model}" loading="lazy">
            <div class="car-badges">${badgesHTML}</div>
            <span class="car-source"><i class="fas fa-camera"></i> Realizare Paxfinesse</span>
            <span class="car-status-badge">Livrata client</span>
        </div>
        <div class="car-body">
            <h3 class="car-title">${p.brand} ${p.model}</h3>
            <div class="car-sub">${p.year} · ${p.color}</div>
            <div class="car-specs">
                <div class="spec"><i class="fas fa-location-dot"></i> ${p.source}</div>
                <div class="spec"><i class="fas fa-tools"></i> Restaurare atelier</div>
                <div class="spec"><i class="fas fa-shield-halved"></i> Verificata complet</div>
                <div class="spec"><i class="fas fa-star"></i> Proiect premium</div>
            </div>
            <div class="car-foot">
                <div class="car-price">
                    <span class="lbl">Investitie proiect</span>
                    <span class="val">€${p.price.toLocaleString('ro-RO')}</span>
                </div>
                <button class="btn btn-primary btn-sm" data-action="details">Detalii</button>
            </div>
        </div>
    </article>`;
}

function openProjectModal(projectId) {
    const p = PROJECTS.find((x) => x.id === projectId);
    if (!p) return;

    const modal = document.getElementById('carModal');
    const body = document.getElementById('carModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <img src="${p.img}" alt="${p.brand} ${p.model}" class="modal-img">
        <div class="modal-body">
            <div class="modal-head">
                <div>
                    <h2>${p.brand} ${p.model}</h2>
                    <div class="sub">${p.year} · ${p.color} · ${p.source}</div>
                </div>
                <div class="modal-price">
                    <div class="lbl">Investitie Totala Proiect</div>
                    <div class="val">€${p.price.toLocaleString('ro-RO')}</div>
                </div>
            </div>
            <div class="modal-grid">
                <div class="modal-spec"><div class="k">Origine</div><div class="v">${p.source}</div></div>
                <div class="modal-spec"><div class="k">Tip Proiect</div><div class="v">Import + Restaurare</div></div>
                <div class="modal-spec"><div class="k">Status</div><div class="v">Livrata client</div></div>
                <div class="modal-spec"><div class="k">An model</div><div class="v">${p.year}</div></div>
                <div class="modal-spec"><div class="k">Executie</div><div class="v">Atelier Paxfinesse</div></div>
                <div class="modal-spec"><div class="k">Calitate</div><div class="v">Premium</div></div>
            </div>
            <p class="modal-desc">${p.story}</p>
            <div class="modal-feats">
                ${p.features.map((f) => `<span class="feat-tag">${f}</span>`).join('')}
            </div>
            <div class="modal-actions">
                <a href="comanda.html?project=${p.id}" class="btn btn-primary">
                    <i class="fas fa-paper-plane"></i> Vreau Proiect Similar
                </a>
                <a href="tel:+40722633676" class="btn btn-outline">
                    <i class="fas fa-phone"></i> Suna Acum
                </a>
            </div>
        </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('carModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    grid.innerHTML = PROJECTS.map(projectCardHTML).join('');

    const count = document.getElementById('portfolioCount');
    if (count) count.textContent = String(PROJECTS.length);

    requestAnimationFrame(() => {
        grid.querySelectorAll('.car-card').forEach((c) => c.classList.add('visible'));
    });
}

function initOrderForm() {
    const form = document.getElementById('orderForm');
    if (!form) return;

    let step = 1;
    const totalSteps = 3;

    const stepEls = form.querySelectorAll('.form-step');
    const stepItems = document.querySelectorAll('.step-item');
    const stepLines = document.querySelectorAll('.step-line');

    function showStep(n) {
        step = n;
        stepEls.forEach((el) => el.classList.toggle('active', Number(el.dataset.step) === n));
        stepItems.forEach((el) => {
            const s = Number(el.dataset.step);
            el.classList.toggle('active', s === n);
            el.classList.toggle('completed', s < n);
        });
        stepLines.forEach((el, idx) => {
            el.classList.toggle('completed', idx + 1 < n);
        });
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function validateStep(n) {
        const current = form.querySelector(`.form-step[data-step="${n}"]`);
        if (!current) return true;
        const required = current.querySelectorAll('[required]');
        const checkedGroups = new Set();
        let valid = true;

        required.forEach((field) => {
            field.classList.remove('error');
            if (field.type === 'radio') {
                if (checkedGroups.has(field.name)) return;
                const checked = current.querySelector(`input[name="${field.name}"]:checked`);
                if (!checked) {
                    valid = false;
                    current.querySelectorAll(`input[name="${field.name}"]`).forEach((r) => {
                        const card = r.closest('.choice-card');
                        if (card) card.classList.add('error');
                    });
                }
                checkedGroups.add(field.name);
                return;
            }
            if (!field.value.trim()) {
                field.classList.add('error');
                valid = false;
            }
            if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                field.classList.add('error');
                valid = false;
            }
        });

        return valid;
    }

    function buildReview() {
        const data = new FormData(form);
        const review = document.getElementById('reviewBlock');
        if (!review) return;
        const v = (k) => data.get(k) || '-';
        const serviceMap = {
            import: 'Doar Import',
            full: 'Import + Restaurare',
            consult: 'Consultanta'
        };
        const conditionMap = {
            daily: 'Daily driver',
            showroom: 'Showroom (ca noua)',
            'resto-mod': 'Resto-Mod',
            track: 'Track-ready',
            concours: 'Concours (muzeu)',
            original: 'Original pastrat'
        };

        const service = data.get('serviceType');
        const condition = data.get('desiredCondition');

        review.innerHTML = `
            <h4><i class="fas fa-user"></i> Date Personale</h4>
            <div class="review-row"><span class="k">Nume</span><span class="v">${v('firstName')} ${v('lastName')}</span></div>
            <div class="review-row"><span class="k">Email</span><span class="v">${v('email')}</span></div>
            <div class="review-row"><span class="k">Telefon</span><span class="v">${v('phone')}</span></div>
            <div class="review-row"><span class="k">Oras</span><span class="v">${v('city')}</span></div>

            <h4 style="margin-top:24px"><i class="fas fa-cog"></i> Detalii Proiect</h4>
            <div class="review-row"><span class="k">Tip serviciu</span><span class="v">${serviceMap[service] || '-'}</span></div>
            <div class="review-row"><span class="k">Marca si model</span><span class="v">${v('carBrand')} ${v('carModel')}</span></div>
            <div class="review-row"><span class="k">An</span><span class="v">${v('carYear')}</span></div>
            <div class="review-row"><span class="k">Buget total</span><span class="v">${v('budget')} EUR</span></div>
            ${condition ? `<div class="review-row"><span class="k">Stare dorita</span><span class="v">${conditionMap[condition] || condition}</span></div>` : ''}
            ${data.get('carColor') ? `<div class="review-row"><span class="k">Culoare</span><span class="v">${v('carColor')}</span></div>` : ''}
            ${data.get('vinNumber') ? `<div class="review-row"><span class="k">VIN</span><span class="v">${v('vinNumber')}</span></div>` : ''}
            ${data.get('extras') ? `<div class="review-row"><span class="k">Note</span><span class="v">${v('extras')}</span></div>` : ''}
        `;
    }

    form.querySelectorAll('[data-next]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (!validateStep(step)) return;
            if (step === totalSteps - 1) buildReview();
            if (step < totalSteps) showStep(step + 1);
        });
    });

    form.querySelectorAll('[data-prev]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (step > 1) showStep(step - 1);
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const tc = form.querySelector('#agreeTerms');
        if (!tc.checked) {
            alert('Te rugam sa accepti termenii si conditiile.');
            return;
        }

        // Populam reply-to si subject dinamic cu datele clientului
        const emailField = form.querySelector('#email');
        const firstNameField = form.querySelector('#firstName');
        const lastNameField = form.querySelector('#lastName');
        const carBrandField = form.querySelector('#carBrand');
        const carModelField = form.querySelector('#carModel');
        const serviceType = form.querySelector('input[name="serviceType"]:checked');

        const hiddenReplyTo = form.querySelector('#hidden_replyto');
        const hiddenSubject = form.querySelector('input[name="_subject"]');

        if (hiddenReplyTo && emailField) {
            hiddenReplyTo.value = emailField.value;
        }
        if (hiddenSubject && firstNameField) {
            const name = (firstNameField.value + ' ' + (lastNameField?.value || '')).trim();
            const car = [carBrandField?.value, carModelField?.value].filter(Boolean).join(' ');
            const svc = serviceType ? { import: 'Import', full: 'Import+Restaurare', consult: 'Consultanta' }[serviceType.value] || '' : '';
            hiddenSubject.value = `Cerere noua: ${name}${car ? ' — ' + car : ''}${svc ? ' [' + svc + ']' : ''}`;
        }

        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Se trimite...';
        submitBtn.disabled = true;

        try {
            const data = new FormData(form);
            const res = await fetch('https://formspree.io/f/xdavwrnz', {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                const stepsBar = document.querySelector('.steps-bar');
                if (stepsBar) stepsBar.style.display = 'none';
                form.style.display = 'none';
                const success = document.getElementById('successState');
                if (success) success.style.display = 'block';
                globalThis.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
            } else {
                const json = await res.json().catch(() => ({}));
                const msg = json?.errors?.map(err => err.message).join(', ') || 'Eroare necunoscuta.';
                alert('Eroare la trimitere: ' + msg + '\nTe rugam sa ne contactezi direct la autofinesse.ro@gmail.com');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        } catch (err) {
            alert('Eroare de retea. Te rugam sa ne contactezi direct la autofinesse.ro@gmail.com sau +40 722 633 676');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project') || params.get('car');
    if (projectId) {
        const p = PROJECTS.find((x) => x.id === Number(projectId));
        if (p) {
            const setVal = (id, val) => {
                const el = document.getElementById(id);
                if (el) el.value = val;
            };
            setVal('carBrand', p.brand);
            setVal('carModel', p.model);
            setVal('carYear', p.year);
            setVal('carColor', p.color);
        }
    }
}

function initAnimations() {
    const targets = document.querySelectorAll('.service-card, .car-card, .process-step, .test-card, .pillar-card');
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    targets.forEach((el) => io.observe(el));
}

function initNav() {
    const nav = document.getElementById('navbar');
    if (nav) {
        const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    const burger = document.getElementById('burger');
    const menu = document.getElementById('navMenu');
    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('open');
        });
        menu.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('open');
            });
        });
    }
}

function initDelegation() {
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.car-card');
        if (card) {
            const id = Number(card.dataset.id);
            if (id) openProjectModal(id);
            return;
        }
        if (e.target.closest('[data-close-modal]') || e.target.classList.contains('modal-backdrop')) {
            closeProjectModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProjectModal();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    renderPortfolio();
    initOrderForm();
    initAnimations();
    initDelegation();

    setTimeout(() => {
        document.querySelectorAll('.car-card:not(.visible)').forEach((c) => {
            c.classList.add('visible');
        });
    }, 100);
});