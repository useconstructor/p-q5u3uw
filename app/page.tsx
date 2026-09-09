import { ArrowRight, Bone, BriefcaseMedical, CalendarDays, Clock3, HeartPulse, Hospital, Instagram, Linkedin, Mail, MapPin, Menu, PawPrint, Phone, ShieldCheck, Stethoscope, Syringe, Users, Utensils } from "lucide-react";

const services = [
  [Stethoscope,"Consultas","Avaliação completa e atendimento personalizado para cada fase da vida."],
  [Syringe,"Vacinas","Protocolos de vacinação atualizados para proteger seu pet o ano todo."],
  [Bone,"Odontologia","Saúde bucal que previne doenças e promove mais qualidade de vida."],
  [HeartPulse,"Exames","Diagnósticos precisos com equipamentos modernos e resultados rápidos."],
  [BriefcaseMedical,"Cirurgias","Procedimentos seguros com equipe especializada e anestesia monitorada."],
  [PawPrint,"Dermatologia","Tratamento para alergias, infecções e cuidados com pele e pelos."],
  [Utensils,"Nutrição","Planos alimentares personalizados para mais saúde e longevidade."],
  [Hospital,"Internação","Ambiente seguro, confortável e monitorado 24h para seu pet se recuperar."],
] as const;
const team=[
  ["AP","Dra. Ana Paula","Clínica Geral","Especialista em clínica médica de pequenos animais com foco em prevenção e bem-estar.","mint"],
  ["RL","Dr. Rafael Lima","Cirurgia","Especialista em cirurgias de tecidos moles e ortopedia em pequenos animais.","sand"],
  ["MC","Dra. Mariana Costa","Dermatologia","Focada no diagnóstico e tratamento de doenças de pele e alergias.","rose"],
  ["JA","Dra. Juliana Alves","Odontologia","Especialista em saúde bucal e procedimentos odontológicos para cães e gatos.","sky"],
];

export default function Home(){return <main>
  <section className="hero" id="inicio"><header className="nav shell"><Logo/><nav className="links"><a href="#inicio">Início</a><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#equipe">Nossa equipe</a><a href="#contato">Contato</a></nav><a className="button navCta" href="#agendar"><CalendarDays/>Agende uma consulta</a><Menu className="mobileMenu"/></header>
    <div className="heroArt" aria-hidden="true"><div className="dog"><i/><b/><span/></div><div className="cat"><i/><b/><span/></div></div>
    <div className="heroContent shell"><span className="eyebrow">Cuidado completo, amor incondicional</span><h1>Saúde e bem-estar<br/>para quem <em>você ama</em></h1><p>Atendimento veterinário de excelência com carinho,<br/> tecnologia e dedicação em cada consulta.</p><a className="button" href="#agendar"><CalendarDays/>Agende uma consulta</a><small><PawPrint fill="currentColor"/>Seu pet merece o melhor. Sempre.</small></div>
  </section>
  <div className="statsWrap shell" id="sobre"><div className="stats"><Stat icon={HeartPulse} value="+5.000" label="Pets atendidos" detail="com amor e dedicação"/><Stat icon={Stethoscope} value="12+" label="Anos de experiência" detail="cuidando de vidas"/><Stat icon={PawPrint} value="20+" label="Serviços completos" detail="para todas as fases"/><Stat icon={Users} value="98%" label="Satisfação dos tutores" detail="que confiam em nós"/></div></div>
  <section className="services section" id="servicos"><div className="shell"><Intro eyebrow="Nossos serviços" title={<>Tudo o que seu pet precisa,<br/>em <em>um só lugar.</em></>} text="Oferecemos uma estrutura completa e moderna para cuidar da saúde e do bem-estar do seu melhor amigo."/><div className="serviceGrid">{services.map(([Icon,title,desc],i)=><article className="serviceCard" key={title}><div className={`serviceIcon ${i%2?"coral":"teal"}`}><Icon/></div><div><h3>{title}</h3><p>{desc}</p><a href="#agendar">Saiba mais <ArrowRight/></a></div></article>)}</div><a className="outlineButton" href="#agendar">Ver todos os serviços</a></div></section>
  <section className="team section" id="equipe"><div className="shell"><Intro eyebrow="Nossa equipe" title={<>Profissionais que <em>amam</em><br/>o que fazem.</>} text="Nossa equipe é formada por médicos veterinários apaixonados e altamente capacitados para cuidar do seu pet com excelência."/><div className="teamGrid">{team.map(([initials,name,role,desc,tone])=><article className="teamCard" key={name}><div className={`portrait ${tone}`}><span>{initials}</span><PawPrint/></div><h3>{name}</h3><b>{role}</b><p>{desc}</p><div className="social"><Instagram/><Linkedin/></div></article>)}</div><a className="button teamButton" href="#contato">Conheça toda a equipe</a></div></section>
  <section className="appointment shell" id="agendar"><div className="petBadge"><PawPrint/><span>♥</span></div><h2>Agende uma consulta e<br/>proporcione mais saúde<br/>e felicidade para <em>seu pet.</em></h2><div className="benefits"><span><CalendarDays/>Atendimento<br/>com hora marcada</span><span><ShieldCheck/>Ambiente seguro<br/>e acolhedor</span><span><Users/>Equipe apaixonada<br/>e qualificada</span></div><a className="button" href="tel:+551134567890"><CalendarDays/>Agendar agora</a></section>
  <footer id="contato"><div className="footerGrid shell"><div><Logo/><p>Cuidando da saúde e do bem-estar<br/>do seu pet com amor, responsabilidade<br/>e excelência.</p><div className="footerSocial"><Instagram/><span>f</span><Phone/></div></div><div><h3>Links rápidos</h3><a href="#inicio">Início</a><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#equipe">Nossa equipe</a><a href="#contato">Contato</a></div><div><h3>Serviços</h3><a>Consultas</a><a>Vacinas</a><a>Exames</a><a>Cirurgias</a><a>Internação</a></div><div className="contact"><h3>Contato</h3><p><MapPin/>Rua das Patinhas, 123<br/>Vila PetCare — São Paulo/SP</p><p><Phone/>(11) 3456-7890</p><p><Mail/>contato@clinicapetcare.com.br</p><p><Clock3/>Seg a Sex: 8h às 19h<br/>Sáb: 8h às 14h</p></div><div className="seal"><PawPrint fill="currentColor"/><span>CUIDADO • CARINHO • CONFIANÇA</span><small>DESDE 2012</small></div></div><div className="copyright shell">© 2026 Clínica PetCare. Todos os direitos reservados.</div></footer>
  </main>}

function Logo(){return <a className="logo" href="#inicio"><PawPrint fill="currentColor"/><span>Clínica <b>PetCare</b></span></a>}
function Stat({icon:Icon,value,label,detail}:{icon:typeof PawPrint,value:string,label:string,detail:string}){return <div className="stat"><Icon/><div><strong>{value}</strong><b>{label}</b><span>{detail}</span></div></div>}
function Intro({eyebrow,title,text}:{eyebrow:string,title:React.ReactNode,text:string}){return <div className="sectionIntro"><div><span className="eyebrow">{eyebrow}<PawPrint/></span><h2>{title}</h2></div><p>{text}</p></div>}
