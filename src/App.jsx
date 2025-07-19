import './App.css'
import { useQuoteAppearOnScroll } from './useQuoteAppearOnScroll'

const episodes = [
  { title: 'E01: Weird', description: 'Lain recibe un misterioso email de una compañera que se suicidó.', img: '/public/lain-ep1.jpg' },
  { title: 'E02: Girls', description: 'Lain explora el Wired y presencia fenómenos extraños.', img: '/public/lain-ep2.jpg' },
  { title: 'E03: Psyche', description: 'Lain recibe un chip especial y su percepción de la realidad cambia.', img: '/public/lain-ep3.jpg' },
  { title: 'E04: Religion', description: 'Lain se encuentra con los Caballeros de Lambda Mu y su visión del Wired se expande.', img: '/public/lain-ep4.jpg' },
  { title: 'E05: Distortion', description: 'La realidad y el Wired se entrelazan, y Lain comienza a cuestionar su propia existencia.', img: '/public/lain-ep5.jpg' },
  { title: 'E06: Kids', description: 'Lain interactúa con un grupo de niños que juegan en el Wired, explorando la inocencia y la curiosidad.', img: '/public/lain-ep6.jpg' },
  { title: 'E07: Society', description: 'Lain se enfrenta a la complejidad de las relaciones sociales en el Wired y su impacto en la identidad.', img: '/public/lain-ep7.jpg' },
  { title: 'E08: Rumors', description: 'Los rumores en el Wired comienzan a afectar la percepción de la realidad de Lain.', img: '/public/lain-ep8.jpg' },
  { title: 'E09: Protocol', description: 'Lain descubre más sobre los protocolos que rigen el Wired y su relación con la realidad.', img: '/public/lain-ep9.jpg' },
  { title: 'E10: Love', description: 'Lain explora el concepto del amor en el     Wired y cómo afecta a las relaciones humanas.', img: '/public/lain-ep10.jpg' },
  { title: 'E11: Infornography', description: 'Lain se adentra en el mundo de la información y la manipulación digital.', img: '/public/lain-ep11.jpg' },
  { title: 'E12: Landscape', description: 'La percepción de Lain sobre el Wired y la realidad se transforma, llevando a una nueva comprensión de su existencia.', img: '/public/lain-ep12.jpg' },
  { title: 'E13: Ego', description: 'Lain enfrenta su propia identidad y el concepto de ego, culminando en una decisión que redefine su existencia.', img: '/public/lain-ep13.jpg' },
  // Puedes agregar más episodios aquí si lo deseas
];

function App() {
  useQuoteAppearOnScroll();
  return (
    <div className="app-bg">
      <header className="header-glitch">
        <nav className="nav-bar">
          <span className="logo-glitch">serial experiments lain</span>
          <ul>
            <li><a href="#episodios">Episodios</a></li>
            <li><a href="#personajes">Personajes</a></li>
            <li><a href="#temas">Temas Filosóficos</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-img-glitch">
          <img src="/public/lain-hero.jpeg" alt="Lain Iwakura con fondo glitch cyberpunk" />
          <div className="glitch-overlay"></div>
        </div>
        <div className="hero-text">
          <h1>Bienvenido al Wired</h1>
          <p>Explora el universo de Serial Experiments Lain, donde la realidad y la identidad se desdibujan.</p>
        </div>
      </section>
      <section id="episodios" className="episodes-section">
        <h2>Episodios</h2>
        <div className="episodes-grid">
          {episodes.map((ep, i) => (
            <div className="episode-card" key={i}>
              <div className="card-img-glitch">
                <img src={ep.img} alt={`Imagen del episodio ${ep.title}`} />
                <div className="glitch-overlay"></div>
              </div>
              <h3>{ep.title}</h3>
              <p>{ep.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="personajes" className="characters-section">
        <h2>Personajes</h2>
        <div className="characters-grid">
          {[
            {
              name: 'Lain Iwakura',
              img: '/public/lain-personaje.jpg',
              desc: 'Protagonista. Adolescente introvertida que explora el Wired y cuestiona la realidad.',
            },
            {
              name: 'Alice Mizuki',
              img: '/public/alice.jpg',
              desc: 'Mejor amiga de Lain. Representa el lazo con la realidad y la vida cotidiana.',
            },
            {
              name: 'Arisu (Personalidad Online)',
              img: '/public/arisu.jpg',
              desc: 'La faceta digital de Lain, poderosa y enigmática dentro del Wired.',
            },
            {
              name: 'Caballeros de Lambda Mu',
              img: '/public/knights.jpg',
              desc: 'Grupo hacker clandestino que manipula el Wired y desafía los límites de la tecnología.',
            },
          ].map((char, i) => (
            <div className="character-card" key={i}>
              <div className="char-img-glitch">
                <img src={char.img} alt={`Retrato de ${char.name}`} />
                <div className="glitch-overlay"></div>
              </div>
              <h3>{char.name}</h3>
              <p>{char.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="temas" className="themes-section">
        <h2>Temas Filosóficos</h2>
        <div className="themes-grid">
          {[
            {
              icon: '🧬',
              color: '#00e6e6',
              title: 'Identidad Digital vs Física',
              desc: 'La serie explora cómo la identidad de Lain se fragmenta entre su yo físico y su presencia en el Wired, cuestionando qué es real y qué es construido.',
              example: 'En el episodio 3, Lain comienza a mostrar comportamientos distintos en el Wired y en la vida real.',
            },
            {
              icon: '🌐',
              color: '#b266ff',
              title: 'La Wired como realidad paralela',
              desc: 'El Wired se presenta como un espacio alternativo donde las reglas de la realidad física no aplican, permitiendo nuevas formas de existencia.',
              example: 'En el episodio 5, los personajes interactúan con el Wired como si fuera un mundo tangible.',
            },
            {
              icon: '🔗',
              color: '#ffb300',
              title: 'Omnipresencia y conectividad',
              desc: 'La conectividad constante lleva a la omnipresencia de la información y la conciencia, diluyendo los límites entre individuos.',
              example: 'En el episodio 9, Lain se vuelve consciente de todas las conversaciones en el Wired simultáneamente.',
            },
            {
              icon: '💀',
              color: '#ff3c6f',
              title: 'La muerte del yo individual',
              desc: 'La serie plantea la disolución del yo individual en favor de una conciencia colectiva, donde la identidad personal se desvanece.',
              example: 'En el episodio 13, Lain toma una decisión que afecta la existencia de todos en el Wired.',
            },
          ].map((theme, i) => (
            <div className="theme-card" key={i} style={{ borderColor: theme.color, boxShadow: `0 0 16px ${theme.color}55` }}>
              <div className="theme-icon-glitch" style={{ color: theme.color }}>
                <span>{theme.icon}</span>
                <div className="glitch-overlay"></div>
              </div>
              <h3>{theme.title}</h3>
              <p>{theme.desc}</p>
              <span className="theme-example">Ejemplo: {theme.example}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="citas" className="quotes-section">
        <h2>Citas Memorables</h2>
        <div className="quotes-grid">
          {[
            '“No matter where you go, everyone’s connected.”',
            '“I am not me, you are not you.”',
            '“Present day. Present time. Ha-ha-ha-ha.”',
            '“People only have substance within the memories of others.”',
            '“If you aren’t remembered, then you never existed.”',
            '“Who are you?”',
          ].map((quote, i) => (
            <blockquote className="lain-quote" key={i}>{quote}</blockquote>
          ))}
        </div>
      </section>
      <footer className="lain-footer">
        <div>
          <span>Serial Experiments Lain &copy; 1998</span> | <span>Director: Ryutaro Nakamura</span>
        </div>
        <div className="footer-links">
          <a href="https://lain.wiki/" target="_blank" rel="noopener noreferrer">Lain Wiki</a>
          <a href="https://myanimelist.net/anime/339/Serial_Experiments_Lain" target="_blank" rel="noopener noreferrer">MyAnimeList</a>
          <a href="https://www.imdb.com/title/tt0500092/" target="_blank" rel="noopener noreferrer">IMDb</a>
        </div>
      </footer>
    </div>
  );
}

export default App
