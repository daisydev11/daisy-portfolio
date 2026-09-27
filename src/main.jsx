import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight} from 'lucide-react';
import './styles.css';
import daisy from './assets/daisy.jpg';
import applydMockup from './assets/Applyd-mockup.png';
import soravaImage from './assets/soravacue.jpeg';
import prelpImage from './assets/Prelp.jpeg';
import whosabiImage from './assets/whosabiam.jpeg';

const projects=[
 {n:'01',title:'Applyd',tag:'Independent product',meta:'UX Research · Product Strategy · Interaction Design · UI Design',desc:'A focused job-application workspace designed from research into how job seekers lose track of opportunities, documents and next steps.',caseStudy:'https://medium.com/@daisyimhanzenobe/d1c48e19f35d',live:'https://applyd-cyan.vercel.app/',theme:'applyd',image:applydMockup},
 {n:'02',title:'SoravaCue',tag:'Stalwart Crest',meta:'UX Research · UX Design · UI Design',desc:'A voice-synced teleprompter for creators that follows natural speaking pace — from script to camera-ready recording.',live:'https://soravacue.stalwartcrest.com/',theme:'sorava',image:soravaImage},
 {n:'03',title:'PRELP',tag:'Stalwart Crest',meta:'UX Research · UX Design · UI Design',desc:'A scheduled, batched delivery experience built around “trains” — helping people order, pay, track and collect with less uncertainty.',live:'https://prelp.stalwartcrest.com/',theme:'prelp',image:prelpImage},
 {n:'04',title:'WhoSabiAm',tag:'Stalwart Crest',meta:'UX Research · UX Design · UI Design',desc:'A trust-first directory for discovering professionals, with human verification, work samples and client endorsements at its core.',live:'https://whosabiam.stalwartcrest.com/',theme:'whosabi',image:whosabiImage}
];
const External=({href,children,className=''})=><a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15}/></a>;
function ProjectArt({p}){
 return <div className={`project-art ${p.theme}-art`}><img src={p.image} alt={`${p.title} product preview`}/></div>;
}
function App(){return <>
<header><a className="wordmark" href="#top">Daisy Imhanzenobe</a><nav><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav></header>
<main id="top">
<section className="hero"><div className="hero-copy"><p className="eyebrow">PRODUCT DESIGNER · LAGOS, NIGERIA</p><h1>Hi, I’m Daisy.<br/><span>I design digital products people can actually use.</span></h1><p className="intro">I’m a Product Designer focused on UX research, interaction design and thoughtful interfaces — turning real user problems into clear, useful experiences.</p><div className="hero-actions"><a className="primary" href="#work">See my work ↓</a><External href="https://www.linkedin.com/in/daisy-imhanzenobe/">LinkedIn</External></div></div><div className="hero-photo"><img src={daisy} alt="Daisy Imhanzenobe"/><div className="photo-note">Research first.<br/>Design with intention.</div></div></section>
<section id="work" className="work"><div className="section-title"><p className="eyebrow">SELECTED WORK</p><h2>A few things I’ve brought to life.</h2></div>
{projects.map(p=><article key={p.title} className={`project ${p.theme}`}><ProjectArt p={p}/><div className="project-info"><div className="project-index">{p.n} / 04</div><p className="project-tag">{p.tag}</p><h3>{p.title}</h3><p className="project-meta">{p.meta}</p><p className="project-desc">{p.desc}</p><div className="project-links">{p.caseStudy&&<External href={p.caseStudy}>Read case study</External>}<External href={p.live}>{p.title==='Applyd'?'View live product':'View project'}</External></div></div></article>)}
</section>
<section id="about" className="about"><div><p className="eyebrow">A LITTLE CONTEXT</p><h2>I like the part before the pixels.</h2></div><div className="about-copy"><p>Good interfaces matter, but I’m most interested in understanding <b>why</b> something needs to exist first. I work across research, product thinking, interaction design and UI to make complicated experiences feel simpler.</p><p>My Computer Science background helps me understand the systems behind the screen without losing sight of the person in front of it.</p></div></section>
<section id="experience" className="experience"><p className="eyebrow">EXPERIENCE & EDUCATION</p><div className="rows"><div><b>Stalwart Crest</b><span>Product Designer</span><small>UX research · UX & UI design</small></div><div><b>Babcock University</b><span>B.Sc. Computer Science</span><small>First Class Honours</small></div><div><b>42 Berlin</b><span>Discovery Week</span><small>Collaborative product & technical learning</small></div><div><b>GICIP 2026</b><span>Global Innovation & Cultural Immersion</span><small>Six-week international programme</small></div></div></section>
<section id="contact" className="contact"><p className="eyebrow">LET’S MAKE SOMETHING USEFUL</p><h2>Have a product problem worth solving?</h2><div><a href="mailto:daisyimhanzenobe@gmail.com">daisyimhanzenobe@gmail.com <ArrowUpRight size={17}/></a><External href="https://www.linkedin.com/in/daisy-imhanzenobe/">LinkedIn</External></div></section>
</main><footer><span>© 2026 Daisy Imhanzenobe</span><span>Product Designer · Lagos</span></footer>
</>};
createRoot(document.getElementById('root')).render(<App/>);
