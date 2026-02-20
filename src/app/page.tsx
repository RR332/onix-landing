import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Onix Plásticos | Innovar hoy para un mañana mejor</title>
        <meta name="description" content="Empresa 100% mexicana dedicada a la inyección de plástico desde 1983." />
      </Head>

      <main>
        {/* Navigation */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '1.5rem 0', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-blue-dark)', letterSpacing: '-0.5px' }}>
              ONIX<span style={{ color: 'var(--color-orange)' }}>.</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', fontWeight: 600, color: 'var(--color-gray)' }}>
              <a href="#historia">Historia</a>
              <a href="#filosofia">Filosofía</a>
              <a href="#servicios">Servicios</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="hero-subtitle">Plásticos</span>
              <h1>Innovar hoy para un <span className="text-gradient">mañana mejor</span></h1>
              <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
                Empresa 100% mexicana, dedicada a la inyección de plástico desde 1983. Brindando satisfacción a grandes empresas y clientes particulares a través de la constante innovación.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="mailto:salocappon@gmail.com" className="btn btn-primary">Contáctanos</a>
                <a href="#historia" className="btn btn-secondary">Conocer más</a>
              </div>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section id="historia" className="bg-light">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <span className="hero-subtitle">Nuestra Historia</span>
                <h2>Más de 40 años de excelencia</h2>
                <p>
                  A lo largo de los años, hemos brindado satisfacción tanto a grandes empresas como a clientes particulares, gracias a la diversidad de productos plásticos que fabricamos. Esta diversidad es posible gracias a la constante innovación en el uso de resinas, polímeros y componentes.
                </p>
                <p>
                  Desde 1983, Onix ha sido una fuente de inspiración y consolidándose como una de las industrias más importantes en sectores como automotriz, belleza, juguetería, joyería, mercería y decoración. En 1984, un año trascendente, comenzamos a trabajar con FORD MOTOR CO.
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-blue)' }}>99%</div>
                    <div style={{ color: 'var(--color-gray)', fontWeight: 600 }}>Clientes Satisfechos</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-orange)' }}>1983</div>
                    <div style={{ color: 'var(--color-gray)', fontWeight: 600 }}>Año de Fundación</div>
                  </div>
                </div>
              </div>
              <div style={{ background: 'var(--color-blue)', borderRadius: 'var(--radius-lg)', padding: '3rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Misión</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Garantizar la satisfacción del cliente mediante la prestación de servicios y la entrega de productos de alta calidad. Adoptamos el principio de "uno para todos, todos para uno" como base para el éxito colectivo.
                </p>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: '2rem 0' }} />
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Visión</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Ser la empresa líder en la fabricación de soluciones de inyección de plástico de alta calidad, reconocida por nuestra innovación constante, compromiso con la sostenibilidad y capacidad para adaptarnos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofía */}
        <section id="filosofia">
          <div className="container">
            <h2 className="text-center">Nuestra Filosofía</h2>
            <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
              Creemos que la innovación, la calidad y la responsabilidad son los pilares fundamentales que nos impulsan.
            </p>
            <div className="card-grid">
              <div className="card">
                <div className="card-icon">💡</div>
                <h3>Innovación Constante</h3>
                <p>Búsqueda continua de nuevas soluciones y tecnologías que nos permitan mejorar nuestros procesos y productos, manteniéndonos a la vanguardia.</p>
              </div>
              <div className="card">
                <div className="card-icon">⭐</div>
                <h3>Compromiso con la Calidad</h3>
                <p>A través de un control exhaustivo en cada etapa de la producción, nos aseguramos de que nuestros productos cumplan con los más altos estándares.</p>
              </div>
              <div className="card">
                <div className="card-icon">🌱</div>
                <h3>Sostenibilidad</h3>
                <p>Trabajamos con prácticas sostenibles, buscando reducir el impacto ambiental de nuestros procesos y promoviendo el uso responsable de los recursos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios / Políticas de Calidad */}
        <section id="servicios" className="bg-light">
          <div className="container">
            <h2 className="text-center">Soluciones y Servicios</h2>
            <div className="card-grid">
              <div className="card" style={{ background: 'var(--color-blue-dark)', color: 'white' }}>
                <h3 style={{ color: 'var(--color-orange)' }}>Inyección de Plástico</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Producción especializada de productos moldeados por inyección de plástico con resinas y polímeros de alta calidad.</p>
              </div>
              <div className="card" style={{ background: 'var(--color-blue)', color: 'white' }}>
                <h3 style={{ color: 'var(--color-orange-light)' }}>Reparación de Moldes</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Mantenimiento preventivo y correctivo para garantizar la máxima precisión y vida útil de las herramientas de producción.</p>
              </div>
              <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-orange), var(--color-orange-light))', color: 'white' }}>
                <h3 style={{ color: 'white' }}>Acabado Bicapa</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>Acabados premium mediante la aplicación de pintura bicapa con componentes duales para mayor durabilidad y estética.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contacto" className="footer">
          <div className="container">
            <div className="footer-content">
              <div>
                <div style={{ fontWeight: 800, fontSize: '2rem', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                  ONIX<span style={{ color: 'var(--color-orange)' }}>.</span>
                </div>
                <p style={{ maxWidth: '400px' }}>
                  Innovar hoy para un mañana mejor. Soluciones de inyección de plástico de alta calidad desde 1983.
                </p>
              </div>
              <div>
                <h3 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Contáctanos</h3>
                <p style={{ marginBottom: '0.75rem', color: '#A0A0A0', fontSize: '1rem' }}>
                  <strong>Dirección: </strong>
                  <a href="https://maps.app.goo.gl/M3UUz8noLVnAFEpB8" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--color-orange)' }}>
                    Emilio Carranza #62, Santa Anita, Iztacalco, CDMX 08300
                  </a>
                </p>
                <p style={{ marginBottom: '0.75rem', color: '#A0A0A0', fontSize: '1rem' }}>
                  <strong>Teléfonos: </strong>
                  <a href="tel:+525590137368">+52 55 9013 7368</a> |{' '}
                  <a href="tel:+525545039988">+52 55 4503 9988</a> |{' '}
                  <a href="https://wa.me/525576172220" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>+52 55 7617 2220 (WhatsApp)</a>
                </p>
                <p style={{ marginBottom: '1.5rem', color: '#A0A0A0', fontSize: '1rem' }}>
                  <strong>Correos: </strong>
                  <a href="mailto:onixmfc@gmail.com">onixmfc@gmail.com</a> |{' '}
                  <a href="mailto:joseCappon@gmail.com">joseCappon@gmail.com</a> |{' '}
                  <a href="mailto:salocappon@gmail.com">salocappon@gmail.com</a>
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <a href="mailto:salocappon@gmail.com" className="btn btn-primary" style={{ textDecoration: 'none' }}>Contáctanos</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Onix Plásticos 2026. Todos los derechos reservados.
                Emilio Carranza #62, Santa Anita, Iztacalco. CP 08300, Ciudad de México. CDMX</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
