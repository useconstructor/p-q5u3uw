export default function Home() {
  return (
    <div>
      <header style={{background:'#ffffff',color:'white',padding:'20px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontSize:'1.5rem',fontWeight:'bold'}}>Clínica PetCare</span>
        <nav style={{display:'flex',gap:'20px'}}>
          <a href="#nav_sticky" style={{color:'white',textDecoration:'none'}}>nav_sticky</a>
          <a href="#hero_full" style={{color:'white',textDecoration:'none'}}>hero_full</a>
          <a href="#stats_banner" style={{color:'white',textDecoration:'none'}}>stats_banner</a>
          <a href="#services_cards" style={{color:'white',textDecoration:'none'}}>services_cards</a>
          <a href="#team_cards" style={{color:'white',textDecoration:'none'}}>team_cards</a>
        </nav>
      </header>
      <section style={{background:'#ffffff',color:'white',padding:'100px 40px',textAlign:'center'}}>
        <h1 style={{fontSize:'3rem',fontWeight:'800',marginBottom:'20px'}}>Clínica PetCare</h1>
        <p style={{fontSize:'1.2rem',opacity:0.85,maxWidth:'600px',margin:'0 auto 40px'}}>A warm, trustworthy veterinary clinic landing page for Clínica PetCare in Guadalajara, focused on specialized animal healthcare, professional credentials, and frictionless appointment booking. The experience combines approachable editorial design with interactive service details and a validated appointment form connected to the Constructor API.</p>
        <a href="#contact" style={{background:'#0d9488',color:'white',padding:'16px 32px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get In Touch</a>
      </section>
      <section id="nav_sticky" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#ffffff'}}>nav_sticky</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our nav_sticky offerings.</p>
      </section>
      <section id="hero_full" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#ffffff'}}>hero_full</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our hero_full offerings.</p>
      </section>
      <section id="stats_banner" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#ffffff'}}>stats_banner</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our stats_banner offerings.</p>
      </section>
      <section id="services_cards" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#ffffff'}}>services_cards</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our services_cards offerings.</p>
      </section>
      <section id="team_cards" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#ffffff'}}>team_cards</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our team_cards offerings.</p>
      </section>
      <footer style={{background:'#ffffff',color:'white',padding:'30px',textAlign:'center'}}>
        <p>Copyright 2026 Clínica PetCare. All rights reserved.</p>
      </footer>
    </div>
  );
}