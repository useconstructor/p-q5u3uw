'use client';
import React, { useState } from 'react';

const SERVICES = [
  {
    icon: '🩺',
    name: 'Consulta general',
    tagline: 'Revisión completa de salud',
    detail: 'Exploración física, evaluación de peso, temperatura y signos vitales. Incluye revisión dental básica y recomendaciones de nutrición y vacunación.',
  },
  {
    icon: '💉',
    name: 'Vacunación',
    tagline: 'Protocolo completo y al día',
    detail: 'Esquema WSAVA. Vacunas core (moquillo, parvo, rabia) y no-core según el estilo de vida de tu mascota.',
  },
  {
    icon: '🔬',
    name: 'Cirugía',
    tagline: 'Procedimientos quirúrgicos seguros',
    detail: 'Quirófano equipado y monitoreo anestésico. Esterilizaciones, extracciones dentales, cirugías de tejidos blandos y ortopedia básica.',
  },
  {
    icon: '📡',
    name: 'Radiología',
    tagline: 'Diagnóstico por imagen digital',
    detail: 'Rayos X digitales con resultados inmediatos para detectar fracturas, cuerpos extraños, enfermedades cardíacas y pulmonares.',
  },
  {
    icon: '✂️',
    name: 'Estética canina',
    tagline: 'Baño, corte y cuidado',
    detail: 'Baño hipoalergénico, secado, corte según raza, limpieza de oídos, corte de uñas y perfume.',
  },
];

const TEAM = [
  { initials: 'RS', name: 'Dr. Rodrigo Salinas', role: 'Médico Veterinario', spec: 'Pequeñas Especies', years: '8 años exp' },
  { initials: 'CL', name: 'Dra. Carmen López', role: 'Veterinaria Cirujana', spec: 'Ortopedia', years: '6 años exp' },
  { initials: 'LM', name: 'Dr. Luis Martín', role: 'Veterinario General', spec: 'Exóticos', years: '4 años exp' },
];

export default function Page() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [form, setForm] = useState({ duenio: '', email: '', mascota: '', especie: '', motivo: '', fecha: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = (i: number) => setExpanded(p => ({ ...p, [i]: !p[i] }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) }
      );
      setSubmitted(true);
    } catch {}
    setLoading(false);
  };

  const teal = '#0d9488';
  const inp: React.CSSProperties = { width: '100%', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 1rem', fontSize: '1rem', boxSizing: 'border-box', background: '#fff', color: '#111' };
  const lbl: React.CSSProperties = { display: 'block', color: '#374151', marginBottom: '0.375rem', fontSize: '0.875rem', fontWeight: 600 };

  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', background: '#fff', color: '#111', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        <span style={{ fontWeight: 900, fontSize: '1.25rem' }}>🐾 <span style={{ color: teal }}>Clínica PetCare</span></span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[['Servicios','#servicios'],['Equipo','#equipo'],['Contacto','#contacto']].map(([label,href]) => (
            <a key={href} href={href} style={{ color: '#374151', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>{label}</a>
          ))}
          <a href="#contacto" style={{ background: teal, color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Agendar cita</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div>
          <p style={{ color: teal, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '1rem' }}>Cuidado con amor</p>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Tu mascota merece la mejor atención
          </h1>
          <p style={{ color: '#6b7280', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.1rem' }}>
            Medicina veterinaria integral en Guadalajara. Perros, gatos y animales exóticos.
          </p>
          <a href="#contacto" style={{ background: teal, color: '#fff', padding: '0.875rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
            Agendar primera consulta
          </a>
        </div>
        <div style={{ background: 'linear-gradient(135deg,#ccfbf1,#99f6e4)', borderRadius: '1.5rem', height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
          🐾
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: teal, padding: '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {[['2,000+','mascotas atendidas'],['10 años','experiencia'],['3','especialidades'],['98%','satisfacción']].map(([v,l]) => (
            <div key={l}><div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff' }}>{v}</div><div style={{ color: '#99f6e4', fontWeight: 500, fontSize: '0.875rem' }}>{l}</div></div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: teal, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Nuestros servicios</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Todo lo que tu mascota necesita</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.25rem' }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.75rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.375rem' }}>{s.name}</h3>
                <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem' }}>{s.tagline}</p>
                {expanded[i] && (
                  <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '1rem', background: '#f0fdfa', padding: '0.875rem', borderRadius: '0.5rem', fontSize: '0.9rem', borderLeft: `3px solid ${teal}` }}>
                    {s.detail}
                  </p>
                )}
                <button
                  onClick={() => toggle(i)}
                  style={{ background: 'transparent', border: `1px solid ${teal}`, color: teal, padding: '0.375rem 0.875rem', borderRadius: '0.375rem', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}
                >
                  {expanded[i] ? 'Ver menos' : 'Saber más'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="equipo" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: teal, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Nuestro equipo</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Nuestro equipo veterinario</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem' }}>
            {TEAM.map(m => (
              <div key={m.name} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: teal, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.25rem', margin: '0 auto 1rem' }}>{m.initials}</div>
                <h3 style={{ fontWeight: 800, margin: '0 0 0.25rem' }}>{m.name}</h3>
                <p style={{ color: teal, fontWeight: 600, fontSize: '0.875rem', margin: '0 0 0.25rem' }}>{m.role}</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 0.25rem' }}>Esp. {m.spec}</p>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', margin: 0 }}>{m.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contacto" style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ color: teal, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Agenda tu cita</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Agenda tu cita</h2>
          {submitted ? (
            <div style={{ background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h3 style={{ color: teal, margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 800 }}>Cita solicitada</h3>
              <p style={{ color: '#374151', margin: 0 }}>Recibirás confirmación en tu email en menos de 2 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div style={{ gridColumn: '1 / -1' }}><label style={lbl}>Nombre del dueño *</label><input type="text" required value={form.duenio} onChange={e => setForm(p => ({ ...p, duenio: e.target.value }))} style={inp} /></div>
              <div><label style={lbl}>Email *</label><input type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inp} /></div>
              <div><label style={lbl}>Nombre de la mascota *</label><input type="text" required value={form.mascota} onChange={e => setForm(p => ({ ...p, mascota: e.target.value }))} style={inp} /></div>
              <div>
                <label style={lbl}>Especie</label>
                <select value={form.especie} onChange={e => setForm(p => ({ ...p, especie: e.target.value }))} style={inp}>
                  <option value="">Selecciona</option>
                  {['Perro','Gato','Ave','Reptil','Otro'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={lbl}>Motivo de consulta</label>
                <select value={form.motivo} onChange={e => setForm(p => ({ ...p, motivo: e.target.value }))} style={inp}>
                  <option value="">Selecciona</option>
                  {['Consulta general','Vacunación','Cirugía','Radiología','Estética','Urgencia'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ gridColumn: '1 / -1' }}><label style={lbl}>Fecha preferida</label><input type="date" value={form.fecha} onChange={e => setForm(p => ({ ...p, fecha: e.target.value }))} style={inp} /></div>
              <div style={{ gridColumn: '1 / -1' }}><label style={lbl}>Mensaje adicional</label><textarea rows={3} value={form.mensaje} onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))} style={{ ...inp, resize: 'vertical' }} /></div>
              <div style={{ gridColumn: '1 / -1' }}>
                <button type="submit" disabled={loading} style={{ width: '100%', background: loading ? '#5eead4' : teal, color: '#fff', padding: '1rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}>
                  {loading ? 'Enviando...' : 'Solicitar cita'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0f172a', color: '#9ca3af', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ fontWeight: 900, color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>🐾 <span style={{ color: teal }}>Clínica PetCare</span></div>
        <div style={{ marginBottom: '1rem' }}>
          <a href="mailto:contacto@petcare.mx" style={{ color: '#9ca3af', textDecoration: 'none' }}>contacto@petcare.mx</a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          {['IG','FB','TW'].map(icon => (
            <a key={icon} href="#" style={{ background: '#1f2937', color: '#9ca3af', width: 36, height: 36, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700 }}>{icon}</a>
          ))}
        </div>
        <p style={{ fontSize: '0.875rem', margin: 0 }}>© 2026 Clínica PetCare. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
