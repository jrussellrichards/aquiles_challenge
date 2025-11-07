import { useState, useEffect } from 'react'
import { ArrowRight, Shield, Brain, Zap, CheckCircle, Users, Clock, FileCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Brain size={32} />,
      title: "IA Avanzada",
      description: "Powered by Gemini AI para análisis inteligente de documentos fiscales"
    },
    {
      icon: <Zap size={32} />,
      title: "Análisis Instantáneo",
      description: "Procesa correos y documentos en segundos, no en horas"
    },
    {
      icon: <Shield size={32} />,
      title: "Validación Completa",
      description: "Verifica RUTs, documentos requeridos y completitud automáticamente"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Decisiones Inteligentes",
      description: "Aprueba o rechaza casos con justificación profesional"
    }
  ]

  const stats = [
    { number: "99%", label: "Precisión en validación de RUTs" },
    { number: "85%", label: "Reducción en tiempo de procesamiento" },
    { number: "100%", label: "Casos analizados automáticamente" },
    { number: "24/7", label: "Disponibilidad continua" }
  ]

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <div className="hero-badge">
              <Shield size={16} />
              <span>Powered by Gemini AI</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-title-main">Aquiles</span>
              <span className="hero-title-sub">Agente de IA Fiscal</span>
            </h1>
            
            <p className="hero-description">
              Revoluciona el procesamiento de documentos fiscales con inteligencia artificial. 
              Aquiles analiza correos, valida documentos y toma decisiones automáticamente, 
              liberando a tu equipo para tareas de mayor valor.
            </p>
            
            <div className="hero-actions">
              <Link to="/app" className="cta-button primary">
                <span>Probar Aquiles</span>
                <ArrowRight size={20} />
              </Link>
              
              <button className="cta-button secondary">
                <Users size={20} />
                <span>Ver Demo</span>
              </button>
            </div>
            
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`hero-visual ${isVisible ? 'slide-in' : ''}`}>
            <div className="demo-card">
              <div className="demo-header">
                <div className="demo-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="demo-title">Análisis en Tiempo Real</div>
              </div>
              
              <div className="demo-content">
                <div className="demo-email">
                  <FileCheck size={16} />
                  <span>Procesando: Nueva Sociedad SPA...</span>
                </div>
                
                <div className="demo-progress">
                  <div className="progress-bar">
                    <div className="progress-fill animated"></div>
                  </div>
                  <span>Analizando documentos...</span>
                </div>
                
                <div className="demo-result success">
                  <CheckCircle size={16} />
                  <div>
                    <div className="result-title">✅ Caso Aprobado</div>
                    <div className="result-subtitle">Listo para asignar al abogado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>¿Por qué elegir Aquiles?</h2>
            <p>Automatización inteligente que transforma tu flujo de trabajo fiscal</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <h2>Cómo Funciona Aquiles</h2>
            <p>Tres simples pasos para automatizar tu procesamiento fiscal</p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Recibe el Email</h3>
                <p>El ejecutivo comercial envía el correo con documentos adjuntos</p>
              </div>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Análisis Automático</h3>
                <p>Aquiles valida RUT, revisa documentos y verifica completitud</p>
              </div>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Decisión Inteligente</h3>
                <p>Aprueba para el abogado o devuelve al ejecutivo con feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para revolucionar tu flujo fiscal?</h2>
            <p>Únete a las empresas que ya confían en Aquiles para automatizar sus procesos</p>
            
            <div className="cta-actions">
              <Link to="/app" className="cta-button primary large">
                <Brain size={24} />
                <span>Comenzar Ahora</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Shield size={32} />
              <span>Aquiles MVP</span>
            </div>
            
            <div className="footer-text">
              Desarrollado con ❤️ para optimizar procesos fiscales
            </div>
            
            <div className="footer-time">
              <Clock size={16} />
              <span>{new Date().getFullYear()} - Demostración Técnica</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing