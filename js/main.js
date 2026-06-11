/* Jérémie & Jeannette — données extraites des fiches tarifaires */

const ILLU = 'assets/img/illustrations/';

const UNIVERS = {
  photo: {
    script: 'photos',
    label: 'Photos',
    icon: ILLU + 'Bouquet.png',
    cols: 'two',
    packs: [
      { name: 'Quartz', hours: '11h à 15h', illu: ILLU + 'Bouquet.png', price: '300€',
        items: ['Photographe présent 4h aux cérémonies — religieuse & mairie',
                'Environ 100 photos des moments clés, livrées en galerie privée en ligne'] },
      { name: 'Saphir', hours: '11h à 18h', illu: ILLU + 'Tenue.png', price: '600€',
        items: ['Photographe présent ~7h, aux cérémonies jusqu’au vin d’honneur',
                'Séance shooting photo avec les proches',
                'Environ 250 photos des moments clés — galerie privée en ligne'] },
      { name: 'Rubis', hours: '9h à 18h', illu: ILLU + 'Chaussure.png', price: '800€',
        items: ['2 photographes présents ~14h, dès préparatifs jusqu’au vin d’honneur',
                'Photoshoot & moments clés',
                'Plus de 500 photos — galerie privée premium'] },
      { name: 'Diamant', hours: '09h à 23h', illu: ILLU + 'Noeud.png', price: '1100€',
        items: ['Photographe présent toute la journée',
                'Photoshoot & moments clés',
                'Près de 1000 photos — galerie privée en ligne'] },
    ],
    options: [
      { name: 'Photo livrée sous 72h', val: '+200€' },
      { name: 'Heures supp', val: '+80€/h' },
    ],
  },
  video: {
    script: 'vidéos',
    label: 'Vidéos',
    icon: ILLU + 'video/Cupidon.png',
    cols: 'two',
    packs: [
      { name: 'Denim', hours: '11h à 15h', illu: ILLU + 'video/Cupidon.png', price: '300 – 350 – 400€',
        items: ['Vidéaste présent 4h aux cérémonies & début du vin d’honneur',
                'Ambiance & moments clés',
                'Musique de votre choix',
                'Film poétique de 3 min / 5 min / 10 min'] },
      { name: 'Satin', hours: 'Cérémonies + matinée', illu: ILLU + 'video/Clef.png', price: '500€',
        items: ['Vidéaste présent ~7h : cérémonies, vin d’honneur et matinée préparatifs ou découverte de salle',
                '2 musiques de votre choix',
                'Film de 10 à 15 min'] },
      { name: 'Velour', hours: 'Journée 14h', illu: ILLU + 'video/Enveloppe.png', price: '750€',
        items: ['2 vidéastes présents 14h : cérémonies jusqu’à l’entrée en salle + matinée préparatif ou découpe du gâteau',
                '3 musiques de votre choix',
                'Film de 20 min'] },
      { name: 'Coton', hours: '09h à 23h', illu: ILLU + 'video/Colombe.png', price: '1250€',
        items: ['Pack complet',
                '2 vidéastes présents toute la journée',
                '3 musiques de votre choix',
                'Film jusqu’à 30 min'] },
    ],
    options: [
      { name: 'Image drone', val: '+100€' },
      { name: 'Teaser vidéo', val: '+150€' },
    ],
  },
  mix: {
    script: 'photos & vidéos',
    label: 'Photos & Vidéos',
    icon: ILLU + 'Bague.png',
    cols: 'three',
    packs: [
      { name: 'Marbre', hours: '11h à 15h', illu: ILLU + 'Bague.png', price: '500€',
        items: ['Présence d’un photographe et d’un vidéaste 4h aux cérémonies — religieuse & mairie',
                'Environ 200 photos des moments clés',
                'Film de 3 à 5 minutes avec la musique de votre choix'] },
      { name: 'Porcelaine', hours: '11h à 18h', illu: ILLU + 'Champagne.png', price: '1000€',
        items: ['Présence d’un photographe & d’un vidéaste ~7h, aux cérémonies jusqu’au vin d’honneur',
                'Séance shooting photo avec les proches',
                'Près de 500 photos',
                'Film de 10 minutes'] },
      { name: 'Cristal', hours: '9h à 23h', illu: ILLU + 'Gateau.png', price: '1500€',
        items: ['Présence d’un photographe et d’un vidéaste 12h, des préparatifs jusqu’au gâteau',
                'Équipe photo & vidéo coordonnée 12h',
                'Séance photo et moments clés — plus de 700 photos',
                'Film de mariage complet 20 min',
                'Livrée en galerie privée premium'] },
    ],
    options: [
      { name: 'Image drone', val: '+100€' },
      { name: 'Teaser vidéo', val: '+150€' },
      { name: 'Photo livrée sous 72h', val: '+200€' },
      { name: 'Heures supp', val: '+80€/h' },
    ],
  },
};

const ORDER = ['photo', 'video', 'mix'];
const $ = (s, c) => (c || document).querySelector(s);

/* ---------- Rendu de la gamme focalisée ---------- */
function renderGamme(key) {
  const u = UNIVERS[key];
  const gamme = $('#gamme');
  gamme.hidden = false;

  $('#gammeScript').textContent = u.script;
  document.querySelectorAll('#gammeSwitch button').forEach(btn => {
    const active = btn.dataset.univers === key;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const host = $('#packsHost');
  host.className = 'packs ' + (u.cols === 'three' ? 'three' : '');
  host.innerHTML = u.packs.map(p => `
    <article class="pack" tabindex="0" aria-label="${p.name}, tarif ${p.price}">
      <img class="illu-side illu" src="${p.illu}" alt="">
      <h4 class="gold-text">${p.name}</h4>
      <p class="hours">${p.hours}</p>
      <ul>${p.items.map(i => `<li><span class="flare">✺</span>${i}</li>`).join('')}</ul>
      <div class="price">
        <span class="label">Tarif</span>
        <span class="amount gold-text">${p.price}</span>
        <span class="hint">Survolez pour révéler</span>
      </div>
    </article>`).join('');

  $('#optionsHost').innerHTML = u.options.map(o => `
    <span class="opt"><span class="flare">✦</span>
      <span class="name">${o.name}</span><span class="val">${o.val}</span>
    </span>`).join('');

  // Sur écran tactile : un premier tap révèle le tarif, un second laisse le focus
  host.querySelectorAll('.pack').forEach(p => {
    p.addEventListener('click', () => p.classList.toggle('revealed'));
  });
}

function openUnivers(key, scroll = true) {
  renderGamme(key);
  if (scroll) {
    const target = $('#gamme');
    if (typeof target.scrollIntoView === 'function') {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      location.hash = 'gamme';
    }
  }
}

document.querySelectorAll('.choice-card').forEach(card => {
  card.addEventListener('click', () => openUnivers(card.dataset.univers));
});

document.querySelectorAll('#gammeSwitch button').forEach(btn => {
  btn.addEventListener('click', e => openUnivers(e.currentTarget.dataset.univers, false));
});

$('#heroInvite').addEventListener('click', () => {
  const target = $('#prestations');
  if (typeof target.scrollIntoView === 'function') {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    location.hash = 'prestations';
  }
});

/* Lien "Tarifs" : ouvre la gamme photo par défaut si rien n'est encore affiché */
document.querySelector('a[href="#gamme"]').addEventListener('click', () => {
  if ($('#gamme').hidden) renderGamme('photo');
});

/* ---------- Apparitions au scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .choice-card').forEach(el => io.observe(el));

/* ---------- Formulaire contact ---------- */
const contactForm = $('#contactForm');
if (contactForm) {
  const status = $('#formStatus');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const prenom = $('#prenom').value.trim();
    const email = $('#email').value.trim();
    const dateMariage = $('#dateMariage').value;
    const univers = $('#univers').value;
    const message = $('#message').value.trim();

    if (!prenom || !email || !dateMariage || !univers) {
      status.textContent = 'Merci de remplir tous les champs obligatoires.';
      return;
    }

    const subject = `Demande mariage - ${prenom}`;
    const bodyLines = [
      `Prenoms: ${prenom}`,
      `Email: ${email}`,
      `Date du mariage: ${dateMariage}`,
      `Prestation souhaitee: ${univers}`,
      '',
      'Message:',
      message || 'Aucun message complementaire.'
    ];

    const mailto = `mailto:fvjeremie@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
    status.textContent = 'Votre messagerie va s ouvrir avec votre demande pre-remplie.';
  });
}

/* ---------- Menu mobile ---------- */
const navToggle = $('.nav-toggle');
const primaryNav = $('#primaryNav');
if (navToggle && primaryNav) {
  const closeNav = () => {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Ouvrir le menu');
  };
  navToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  primaryNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}
