import { useState, useEffect } from 'react'
import { ArrowRight, Shield, Brain, CheckCircle, Clock, FileCheck, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => { setIsVisible(true) }, [])

  const stats = [
    { number: "75%", label: "Tiempo actual en triage manual" },
    { number: "2 días", label: "SLA actual" },
    { number: "Horas", label: "SLA objetivo (mismo día)" },
    { number: "24/7", label: "Cobertura propuesta IA" }
  ]

  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero-background"><div className="hero-gradient"></div></div>
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <div className="hero-badge">
              <Shield size={16} />
              <span>Powered by Gemini AI</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">Aquiles</span>
              <span className="hero-title-sub">Transformación Fiscalía</span>
            </h1>
            <p className="hero-description">
              De un proceso manual de 2 días centrado en tareas repetitivas a una validación experta y gestión de excepciones en horas.
            </p>
            <div className="hero-actions">
              <Link to="/app" className="cta-button primary">
                <Brain size={20} />
                <span>Probar Demo</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/informe" className="cta-button secondary">
                <FileText size={20} />
                <span>Ver Informe</span>
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((s,i)=>(
                <div key={i} className="stat-item">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`hero-visual ${isVisible ? 'slide-in' : ''}`}>
            <div className="demo-card">
              <div className="demo-header">
                <div className="demo-dots"><span></span><span></span><span></span></div>
                <div className="demo-title">Antes vs Después</div>
              </div>
              <div className="demo-content">
                <div className="demo-email">
                  <FileCheck size={16} />
                  <span>Triaging Inteligente</span>
                </div>
                <div className="demo-progress">
                  <div className="progress-bar">
                    <div className="progress-fill animated"></div>
                  </div>
                  <span>IA eliminando bottleneck...</span>
                </div>
                <div className="demo-result success">
                  <CheckCircle size={16} />
                  <div>
                    <div className="result-title">✅ SLA Reducido</div>
                    <div className="result-subtitle">De días a horas</div>
                  </div>
                </div>
              </div>
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
            <div className="footer-text">Transformación inteligente de Fiscalía</div>
            <div className="footer-time">
              <Clock size={16} />
              <span>{new Date().getFullYear()} - Propuesta Técnica</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing