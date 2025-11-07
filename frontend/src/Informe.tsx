import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Brain, CheckCircle, XCircle, List, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import './Informe.css'

const Informe = () => {
  const [showIndex, setShowIndex] = useState(false)
  const [currentTechnicalSlide, setCurrentTechnicalSlide] = useState(0)
  const [currentProcessSlide, setCurrentProcessSlide] = useState(0)
  const [currentBenefitSlide, setCurrentBenefitSlide] = useState(0)

  // Datos de soluciones técnicas
  const technicalSolutions = [
    {
      title: "1. Nueva Sociedad",
      kpi: "95% precisión • 30s promedio",
      challenge: "Validar 4 documentos específicos + RUT",
      solution: "OCR + Clasificación ML + Validación reglas",
      steps: [
        "📄 Detección automática de tipos documento",
        "🔍 Extracción datos estructurados",
        "✅ Validación contra reglas negocio",
        "📊 Score de confianza por documento"
      ]
    },
    {
      title: "2. Nuevo Poder",
      kpi: "94% precisión • 25s promedio",
      challenge: "Interpretar escritura pública modificada",
      solution: "NLP + Template matching + Validación SIAF",
      steps: [
        "📝 Análisis semántico de modificaciones",
        "🔍 Identificación tipo y alcance poder",
        "✅ Validación RUT y existencia sociedad",
        "🎯 Match vs criterios estándar BCI"
      ]
    },
    {
      title: "3. Poder Banca Persona",
      kpi: "96% precisión • 20s promedio",
      challenge: "Distinguir escritura vs instrumento privado",
      solution: "Clasificación multimodal + OCR avanzado",
      steps: [
        "🏛️ Identificación tipo documento legal",
        "✍️ Verificación firma y legalización",
        "🔐 Validación datos bancarios",
        "📈 Score de autenticidad"
      ]
    },
    {
      title: "4. Reparo",
      kpi: "93% precisión • 35s promedio",
      challenge: "Comprender reparo y validar consistencia",
      solution: "NLU + Document comparison + Logic validation",
      steps: [
        "🧠 Comprensión intención reparo",
        "📑 Comparación documentos vs reparo",
        "⚖️ Validación consistencia lógica",
        "💬 Generación mensaje explicación"
      ]
    },
    {
      title: "5. Revisión",
      kpi: "92% precisión • 40s promedio",
      challenge: "Clasificar tipo de revisión y priorizar",
      solution: "Intent classification + Urgency scoring",
      steps: [
        "🎯 Clasificación automática tipo revisión",
        "⚡ Scoring de urgencia",
        "👥 Asignación inteligente abogado",
        "📋 Preparación contexto abogado"
      ]
    },
    {
      title: "6. Borrador",
      kpi: "91% precisión • 45s promedio",
      challenge: "Procesar documento Word y workflow especial",
      solution: "Document parsing + Template recognition",
      steps: [
        "📄 Extracción contenido Word",
        "🔍 Identificación tipo borrador",
        "📋 Workflow confirmación cliente",
        "✅ Validación formato y contenido"
      ]
    },
    {
      title: "7. Certificado Apoderado",
      kpi: "97% precisión • 15s promedio",
      challenge: "Emisión certificado simple pero frecuente",
      solution: "Template generation + DB lookup",
      steps: [
        "🔍 Consulta automática base datos",
        "📋 Generación certificado estándar",
        "✅ Validación vigencia poderes",
        "📧 Envío automático resultado"
      ]
    },
    {
      title: "8. Modificación Social",
      kpi: "93% precisión • 30s promedio",
      challenge: "Diversos tipos de cambios societarios",
      solution: "Multi-class classification + Change detection",
      steps: [
        "🎯 Clasificación tipo modificación",
        "📄 Extracción datos relevantes",
        "⚖️ Validación cumplimiento normativo",
        "📊 Generación resumen cambios"
      ]
    },
    {
      title: "9. Otros",
      kpi: "88% precisión • 50s promedio",
      challenge: "Casos no estándar y excepciones",
      solution: "Escalation + Human-in-the-loop",
      steps: [
        "🎯 Detección caso no estándar",
        "📋 Clasificación nivel complejidad",
        "👤 Asignación experto apropiado",
        "📝 Documentación caso para aprendizaje"
      ]
    }
  ]

  // Datos de procesos manuales
  const processTypes = [
    {
      number: "1",
      title: "Nueva Sociedad",
      manualProcess: [
        "Verificación de RUT en SIAF y Portal Everest",
        "Revisión documental de 4 documentos obligatorios",
        "Validación de completitud"
      ],
      aiSolution: [
        "Validación automática de RUT con dígito verificador",
        "Detección de documentos: Escritura Constitución, Inscripción Extracto, Extractos, Publicación Diario Oficial",
        "Matching inteligente entre adjuntos y requerimientos",
        "Decisión automática: Aprobar o solicitar faltantes"
      ]
    },
    {
      number: "2",
      title: "Nuevo Poder",
      manualProcess: [
        "Revisión de RUT en SIAF",
        "Verificación de escritura de modificación"
      ],
      aiSolution: [
        "Clasificación automática del tipo de poder",
        "Extracción IDP de datos de escritura",
        "Validación de completitud documental"
      ]
    },
    {
      number: "3",
      title: "Poder Banca Persona",
      manualProcess: [
        "Revisión de RUT en SIAF",
        "Verificación de escritura pública o instrumento privado notariado"
      ],
      aiSolution: [
        "Clasificación automática documento legal",
        "Validación de firmas y legalizaciones",
        "Extracción de poderes bancarios específicos"
      ]
    },
    {
      number: "4",
      title: "Reparo",
      manualProcess: [
        "Lectura del correo con observación",
        "Identificación del problema específico",
        "Validación de documentos corregidos"
      ],
      aiSolution: [
        "Comprensión inteligente del reparo (NLU)",
        "Comparación automática documento original vs corregido",
        "Validación de que el reparo fue subsanado",
        "Generación de respuesta al cliente"
      ]
    },
    {
      number: "5",
      title: "Revisión",
      manualProcess: [
        "Clasificación del tipo de revisión solicitada",
        "Priorización según urgencia",
        "Asignación manual a abogado disponible"
      ],
      aiSolution: [
        "Clasificación automática del tipo de revisión",
        "Scoring de urgencia basado en contenido",
        "Asignación inteligente según especialidad y carga",
        "Preparación de contexto para el abogado"
      ]
    },
    {
      number: "6",
      title: "Borrador",
      manualProcess: [
        "Descarga y lectura de documento Word",
        "Identificación de tipo de documento",
        "Workflow especial de confirmación con cliente"
      ],
      aiSolution: [
        "Extracción automática de contenido Word",
        "Identificación de tipo de borrador",
        "Automatización de workflow de confirmación",
        "Validación de formato y requisitos"
      ]
    },
    {
      number: "7",
      title: "Certificado Apoderado",
      manualProcess: [
        "Consulta manual en base de datos",
        "Generación manual de certificado",
        "Envío de respuesta"
      ],
      aiSolution: [
        "Consulta automática BBDD apoderados",
        "Generación instantánea de certificado estándar",
        "Validación de vigencia de poderes",
        "Envío automático de resultado"
      ]
    },
    {
      number: "8",
      title: "Modificación Social",
      manualProcess: [
        "Identificación del tipo de modificación",
        "Validación de documentación requerida",
        "Revisión de cumplimiento normativo"
      ],
      aiSolution: [
        "Clasificación automática del tipo de modificación",
        "Extracción de datos relevantes",
        "Validación automática de cumplimiento",
        "Generación de resumen de cambios"
      ]
    },
    {
      number: "9",
      title: "Otros (Casos Especiales)",
      manualProcess: [
        "Análisis caso por caso",
        "Escalamiento a supervisor",
        "Documentación manual del caso"
      ],
      aiSolution: [
        "Detección de caso no estándar",
        "Clasificación de nivel de complejidad",
        "Asignación automática a experto apropiado",
        "Documentación estructurada para aprendizaje"
      ]
    }
  ]

  // Datos de beneficios
  const benefits = [
    {
      icon: "🚀",
      title: "Eficiencia Operativa",
      metrics: [
        { value: "2d → 1d → h", desc: "Meta inicial: 1 día | Meta 6 meses: horas" },
        { value: "50% → 100%", desc: "Adopción: 50% inicial, 100% a 6 meses" },
        { value: "24/7", desc: "Disponibilidad continua sin horarios" }
      ]
    },
    {
      icon: "🎯",
      title: "Calidad y Precisión",
      metrics: [
        { value: "95%+", desc: "Precisión en clasificación automática" },
        { value: "0", desc: "Errores por fatiga o distracción" },
        { value: "100%", desc: "Trazabilidad de todas las decisiones" }
      ]
    },
    {
      icon: "👥",
      title: "Impacto Humano",
      metrics: [
        { value: "75%", desc: "Tiempo liberado del asistente" },
        { value: "100%", desc: "Enfoque del abogado en juicio legal" },
        { value: "+50%", desc: "Satisfacción laboral por valor agregado" }
      ]
    },
    {
      icon: "💰",
      title: "Beneficios Económicos",
      metrics: [
        { value: "97%", desc: "Reducción de costos operativos" },
        { value: "< 1 mes", desc: "Tiempo de retorno de inversión" },
        { value: "$27.9M", desc: "Ahorro anual proyectado" }
      ]
    },
    {
      icon: "🏢",
      title: "Ventajas Estratégicas",
      metrics: [
        { value: "+90%", desc: "Satisfacción del cliente ejecutivo" },
        { value: "Competitivo", desc: "Ventaja competitiva en el mercado" },
        { value: "Escalable", desc: "Base para expansión a otras áreas" }
      ]
    },
    {
      icon: "🔒",
      title: "Seguridad y Cumplimiento",
      metrics: [
        { value: "100%", desc: "Datos procesados en infraestructura BCI" },
        { value: "Audit", desc: "Registro completo de todas las acciones" },
        { value: "GDPR", desc: "Cumplimiento normativo de protección de datos" }
      ]
    }
  ]

  // Auto-avance de sliders cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechnicalSlide(prev => (prev + 1) % technicalSolutions.length)
      setCurrentProcessSlide(prev => (prev + 1) % processTypes.length)
      setCurrentBenefitSlide(prev => (prev + 1) % benefits.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [technicalSolutions.length, processTypes.length, benefits.length])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setShowIndex(false)
    }
  }

  return (
    <div className="informe">
      {/* Header */}
      <header className="informe-header">
        <div className="informe-header-content">
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Volver</span>
          </Link>
          <div className="header-brand">
            <Shield size={40} />
            <div>
              <h1>Aquiles - Informe Técnico</h1>
              <p>Transformación Digital Fiscalía BCI</p>
            </div>
          </div>
          <button className="index-button" onClick={() => setShowIndex(!showIndex)}>
            <List size={20} />
            <span>Índice</span>
          </button>
        </div>
      </header>

      {/* Índice flotante */}
      {showIndex && (
        <div className="floating-index">
          <div className="index-overlay" onClick={() => setShowIndex(false)}></div>
          <div className="index-content">
            <h3>Índice de Contenidos</h3>
            <nav className="index-nav">
              <button onClick={() => scrollToSection('problema-actual')}>1. El Problema Actual</button>
              <button onClick={() => scrollToSection('justificacion-ia')}>2. Por Qué IA es la Solución</button>
              <button onClick={() => scrollToSection('flujo-completo')}>3. Comparativa AS IS vs TO BE</button>
              <button onClick={() => scrollToSection('beneficios-completos')}>4. Beneficios de la Transformación</button>
              <button onClick={() => scrollToSection('roadmap')}>5. Roadmap de Implementación</button>
              <button onClick={() => scrollToSection('mvp-costos')}>6. MVP: Inversión y Retorno</button>
              <button onClick={() => scrollToSection('solucion-tecnica')}>7. Detalle Técnico por Caso</button>
              <button onClick={() => scrollToSection('transformacion-roles')}>8. Transformación de Roles</button>
            </nav>
          </div>
        </div>
      )}

      {/* Contenido del informe */}
      <div className="informe-container">

        {/* 1. El Problema Actual */}
        <section id="problema-actual" className="informe-section intro-section">
          <div className="section-icon-wrapper">
            <AlertTriangle size={48} />
          </div>
          <h2 className="section-title" data-number="1">El Problema Actual</h2>
          <p className="section-subtitle">Un cuello de botella operativo que impacta el negocio completo</p>

          <div className="problem-statement">
            <div className="problem-metrics">
              <div className="metric-card">
                <div className="metric-number">2 días</div>
                <div className="metric-label">SLA promedio actual</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">100+</div>
                <div className="metric-label">Correos diarios procesados</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">75%</div>
                <div className="metric-label">Del tiempo total en triage manual</div>
              </div>
            </div>

            <div className="problem-description">
              <h3>El Cuello de Botella Operativo</h3>
              <p>
                La Fiscalía BCI recibe diariamente más de 100 correos electrónicos a través del buzón genérico
                "Asistente Sociedades Fiscalía". Cada uno de estos correos requiere una revisión manual por parte
                del asistente para:
              </p>
              <ul>
                <li><strong>Clasificar</strong> la solicitud entre 9 tipos diferentes de gestión societaria</li>
                <li><strong>Validar</strong> información básica (RUT, documentos adjuntos)</li>
                <li><strong>Decidir</strong> si la solicitud está completa o requiere corrección</li>
                <li><strong>Asignar</strong> al abogado correspondiente según carga de trabajo</li>
              </ul>

              <div className="problem-impact">
                <h4>Impacto en el Negocio</h4>
                <ul>
                  <li>❌ <strong>SLA de 2 días</strong> genera insatisfacción en clientes y ejecutivos</li>
                  <li>❌ <strong>Dependencia horaria</strong> limita atención fuera de horario laboral</li>
                  <li>❌ <strong>Escalabilidad limitada</strong> no puede crecer sin contratar más asistentes</li>
                  <li>❌ <strong>Errores humanos</strong> en clasificación generan retrabajo</li>
                  <li>❌ <strong>Tiempo del abogado</strong> dedicado a tareas operativas en lugar de juicio legal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Justificación de la Solución IA */}
        <section id="justificacion-ia" className="informe-section">
          <h2 className="section-title" data-number="2">¿Por Qué Inteligencia Artificial?</h2>
          <p className="section-subtitle">Ventajas estratégicas sobre otras alternativas de automatización</p>

          <div className="justification-content">
            <div className="ai-advantages">
              <h3>Ventajas de la IA sobre Automatización Tradicional</h3>

              <div className="advantage-grid">
                <div className="advantage-card">
                  <div className="advantage-icon">🧠</div>
                  <h4>Comprensión Contextual</h4>
                  <p>
                    A diferencia de reglas fijas, la IA entiende el contexto legal, variaciones en el lenguaje
                    y casos edge que las reglas tradicionales no pueden manejar.
                  </p>
                </div>

                <div className="advantage-card">
                  <div className="advantage-icon">📈</div>
                  <h4>Aprendizaje Continuo</h4>
                  <p>
                    Cada caso procesado mejora el sistema. La IA aprende de correcciones de abogados
                    y se adapta a nuevos patrones sin reprogramación manual.
                  </p>
                </div>

                <div className="advantage-card">
                  <div className="advantage-icon">🎯</div>
                  <h4>Precisión Mejorada</h4>
                  <p>
                    95%+ de precisión en clasificación vs 85-90% de reglas tradicionales,
                    reduciendo significativamente errores y retrabajo.
                  </p>
                </div>

                <div className="advantage-card">
                  <div className="advantage-icon">⚡</div>
                  <h4>Procesamiento Masivo</h4>
                  <p>
                    Maneja volúmenes ilimitados simultáneamente, manteniendo consistencia
                    y velocidad independientemente de la carga.
                  </p>
                </div>
              </div>
            </div>

            <div className="comparison-alternatives">
              <h3>Comparación con Otras Soluciones</h3>

              <div className="alternatives-table">
                <div className="alternative-row header">
                  <div className="alternative-name">Solución</div>
                  <div className="alternative-sla">SLA</div>
                  <div className="alternative-cost">Costo/Escalabilidad</div>
                  <div className="alternative-accuracy">Precisión</div>
                  <div className="alternative-maintenance">Mantenimiento</div>
                </div>

                <div className="alternative-row">
                  <div className="alternative-name">Asistente Manual (Actual)</div>
                  <div className="alternative-sla">2 días</div>
                  <div className="alternative-cost">Alto / Limitada</div>
                  <div className="alternative-accuracy">85%</div>
                  <div className="alternative-maintenance">N/A</div>
                </div>

                <div className="alternative-row">
                  <div className="alternative-name">Automatización Tradicional</div>
                  <div className="alternative-sla">4-6 horas</div>
                  <div className="alternative-cost">Medio / Limitada</div>
                  <div className="alternative-accuracy">85-90%</div>
                  <div className="alternative-maintenance">Alto (reglas manuales)</div>
                </div>

                <div className="alternative-row highlight">
                  <div className="alternative-name">Inteligencia Artificial</div>
                  <div className="alternative-sla">Horas</div>
                  <div className="alternative-cost">Bajo / Ilimitada</div>
                  <div className="alternative-accuracy">95%+</div>
                  <div className="alternative-maintenance">Bajo (autoaprendizaje)</div>
                </div>

                <div className="alternative-row">
                  <div className="alternative-name">Outsourcing</div>
                  <div className="alternative-sla">1-2 días</div>
                  <div className="alternative-cost">Muy Alto / Limitada</div>
                  <div className="alternative-accuracy">80-85%</div>
                  <div className="alternative-maintenance">Alto (gestión externa)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. AS IS vs TODO (Solución Completa) */}
        <section id="flujo-completo" className="informe-section">
          <h2 className="section-title" data-number="3">AS IS vs TODO: La Solución Completa</h2>
          <p className="section-subtitle">Visión completa de transformación: de proceso manual a ecosistema inteligente</p>

          <div className="flow-comparison">
            {/* AS IS */}
            <div className="flow-card flow-as-is">
              <div className="flow-header">
                <h3>Flujo Actual (AS IS)</h3>
                <span className="flow-sla">SLA: 2 Días</span>
              </div>
              <ol className="flow-steps">
                <li>
                  <span className="step-num">1</span>
                  <span>Cliente / Ejecutivo envía email</span>
                </li>
                <li className="bottleneck-step">
                  <span className="step-num bottleneck">2</span>
                  <div className="step-details">
                    <strong>Asistente (Bottleneck)</strong>
                    <ul>
                      <li>Revisa casilla (100+ correos/día)</li>
                      <li>Clasifica solicitud (9 tipos)</li>
                      <li>Valida RUT (SIAF / Portal)</li>
                      <li>Valida documentos según tipo</li>
                      <li>Devuelve si hay errores</li>
                      <li>Asigna a abogado</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <span>Abogado revisa y redacta</span>
                </li>
                <li>
                  <span className="step-num">4</span>
                  <span>Abogado responde OK o pide antecedentes</span>
                </li>
                <li>
                  <span className="step-num">5</span>
                  <span>Ejecutivo comunica solución al cliente</span>
                </li>
              </ol>
              <div className="diagnostic-alert">
                <XCircle size={20} />
                <p><strong>Diagnóstico:</strong> 75% del tiempo total concentrado en triage manual (Paso 2)</p>
              </div>
            </div>

            {/* TODO - Solución Completa */}
            <div className="flow-card flow-to-be">
              <div className="flow-header">
                <h3>Solución Completa (TODO)</h3>
                <span className="flow-sla success">SLA: Horas (mismo día)</span>
              </div>
              <ol className="flow-steps">
                <li>
                  <span className="step-num">1</span>
                  <span>Cliente / Ejecutivo envía email</span>
                </li>
                <li className="ai-step">
                  <span className="step-num ai">IA</span>
                  <div className="step-details">
                    <strong>Agente de Triage 24/7</strong>
                    <ul>
                      <li>Lee y entiende el email (IDP)</li>
                      <li>Clasifica intención (9 tipos)</li>
                      <li>Valida RUT (dígito + BBDD)</li>
                      <li>Notifica errores al Ejecutivo</li>
                      <li>Responde si hay ausencia</li>
                    </ul>
                  </div>
                </li>
                <li className="ai-step">
                  <span className="step-num ai">IA</span>
                  <div className="step-details">
                    <strong>Asistente y Redactor</strong>
                    <ul>
                      <li>Valida documentos vs reglas</li>
                      <li>Asigna a abogado (criterios + carga)</li>
                      <li>Prepara borrador (RAG)</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="step-num">4</span>
                  <span>Abogado valida, ajusta y aprueba (HITL)</span>
                </li>
                <li className="ai-step">
                  <span className="step-num ai">IA</span>
                  <div className="step-details">
                    <strong>Cierre Automático</strong>
                    <ul>
                      <li>Recibe OK</li>
                      <li>Notifica al cliente</li>
                      <li>Asiste comunicación final</li>
                    </ul>
                  </div>
                </li>
              </ol>
              <div className="value-alert">
                <CheckCircle size={20} />
                <p><strong>Valor Completo:</strong> IA absorbe 100% de operaciones repetitivas, humanos enfocados en estrategia y juicio experto</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Beneficios de la Solución Completa */}
        <section id="beneficios-completos" className="informe-section">
          <h2 className="section-title" data-number="4">Beneficios de la Transformación</h2>
          <p className="section-subtitle">Impacto cuantitativo y cualitativo de la transformación total</p>

          <div className="slider-container">
            <div className="slider-navigation">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentBenefitSlide ? 'active' : ''}`}
                  onClick={() => setCurrentBenefitSlide(index)}
                  aria-label={`Ir a beneficio ${index + 1}`}
                />
              ))}
            </div>

            <div className="slider-content">
              <button
                className="slider-arrow left"
                onClick={() => setCurrentBenefitSlide(prev => 
                  prev === 0 ? benefits.length - 1 : prev - 1
                )}
                aria-label="Anterior"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="benefit-category active">
                <h3>{benefits[currentBenefitSlide].icon} {benefits[currentBenefitSlide].title}</h3>
                <div className="benefit-metrics">
                  {benefits[currentBenefitSlide].metrics.map((metric, idx) => (
                    <div key={idx} className="metric-item">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-desc">{metric.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="slider-arrow right"
                onClick={() => setCurrentBenefitSlide(prev => 
                  (prev + 1) % benefits.length
                )}
                aria-label="Siguiente"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="slider-counter">
              {currentBenefitSlide + 1} / {benefits.length}
            </div>
          </div>
        </section>

        {/* Detalle del Proceso Actual */}
        <section id="proceso-detalle" className="informe-section process-detail-section">
          <h3 className="subsection-title">El Trabajo del Asistente Hoy</h3>
          <p className="section-subtitle">Los 9 tipos de solicitudes que el asistente clasifica manualmente cada día</p>
          
          <div className="process-intro">
            <h3>Alcance y Contexto</h3>
            <p>
              El proceso actual detalla la revisión de documentación recibida a través del correo genérico 
              <strong> "Asistente Sociedades Fiscalía"</strong>, proveniente de oficinas de la Región Metropolitana 
              enviada por ejecutivos o asistentes.
            </p>
          </div>

          <div className="slider-container">
            <div className="slider-navigation">
              {processTypes.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentProcessSlide ? 'active' : ''}`}
                  onClick={() => setCurrentProcessSlide(index)}
                  aria-label={`Ir a proceso ${index + 1}`}
                />
              ))}
            </div>

            <div className="slider-content">
              <button
                className="slider-arrow left"
                onClick={() => setCurrentProcessSlide(prev => 
                  prev === 0 ? processTypes.length - 1 : prev - 1
                )}
                aria-label="Anterior"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="process-type-card active">
                <div className="process-type-header">
                  <span className="process-number">{processTypes[currentProcessSlide].number}</span>
                  <h4>{processTypes[currentProcessSlide].title}</h4>
                </div>
                <div className="process-type-content">
                  <div className="current-process">
                    <h5>Proceso Manual Actual:</h5>
                    <ul>
                      {processTypes[currentProcessSlide].manualProcess.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="ai-solution">
                    <h5>Solución con Aquiles:</h5>
                    <ul>
                      {processTypes[currentProcessSlide].aiSolution.map((item, idx) => (
                        <li key={idx}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1] || item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <button
                className="slider-arrow right"
                onClick={() => setCurrentProcessSlide(prev => 
                  (prev + 1) % processTypes.length
                )}
                aria-label="Siguiente"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="slider-counter">
              {currentProcessSlide + 1} / {processTypes.length}
            </div>
          </div>

          <div className="ai-capabilities">
            <h3>Cómo Funciona Aquiles: Arquitectura del Agente IA</h3>
            <div className="capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon">📧</div>
                <h4>1. Recepción Inteligente (IDP)</h4>
                <p>
                  <strong>Intelligent Document Processing:</strong> Lee y comprende emails y adjuntos.
                  Extrae información estructurada de documentos no estructurados (PDFs, Word, imágenes).
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">🎯</div>
                <h4>2. Clasificación Multi-Clase</h4>
                <p>
                  <strong>LLM Classifier:</strong> Analiza el contenido y clasifica automáticamente entre 
                  los 9 tipos de gestión con 95%+ de precisión.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">✅</div>
                <h4>3. Validación Automática</h4>
                <p>
                  <strong>Rules Engine:</strong> Valida RUT (dígito verificador), consulta SIAF/Portal, 
                  verifica completitud documental según reglas de cada tipo.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">📝</div>
                <h4>4. Generación de Borradores (RAG)</h4>
                <p>
                  <strong>Retrieval-Augmented Generation:</strong> Genera informes y respuestas basadas 
                  exclusivamente en documentos internos BCI, eliminando alucinaciones.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">👤</div>
                <h4>5. Validación Humana (HITL)</h4>
                <p>
                  <strong>Human-in-the-Loop:</strong> El abogado revisa y aprueba las decisiones críticas. 
                  La IA propone, el humano dispone.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">🔄</div>
                <h4>6. Aprendizaje Continuo</h4>
                <p>
                  <strong>Feedback Loop:</strong> Cada corrección del abogado entrena al sistema. 
                  Aquiles mejora con cada caso procesado.
                </p>
              </div>
            </div>
          </div>

          <div className="value-proposition">
            <h3>Propuesta de Valor: Reemplazo 100% del Triage Manual</h3>
            <div className="value-comparison">
              <div className="value-column current">
                <h4>HOY (Asistente Manual)</h4>
                <ul>
                  <li>❌ 100+ correos/día procesados secuencialmente</li>
                  <li>❌ 2 días SLA promedio</li>
                  <li>❌ Dependencia de horario laboral</li>
                  <li>❌ Errores humanos en clasificación</li>
                  <li>❌ Tiempo del abogado en redacción</li>
                  <li>❌ Sin trazabilidad digital</li>
                </ul>
              </div>
              <div className="value-column future">
                <h4>MAÑANA (Aquiles IA)</h4>
                <ul>
                  <li>✅ Procesamiento paralelo ilimitado</li>
                  <li>✅ Horas SLA (mismo día)</li>
                  <li>✅ Disponibilidad 24/7/365</li>
                  <li>✅ 95%+ precisión en clasificación</li>
                  <li>✅ Abogado enfocado en juicio legal</li>
                  <li>✅ Auditoría completa de cada decisión</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Solución Técnica por Punto */}
        <section id="solucion-tecnica" className="informe-section">
          <h2 className="section-title" data-number="7">Detalle Técnico por Caso</h2>
          <p className="section-subtitle">Cómo la IA aborda específicamente cada uno de los 9 tipos de gestión con KPIs medibles</p>

          <div className="slider-container">
            <div className="slider-navigation">
              {technicalSolutions.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentTechnicalSlide ? 'active' : ''}`}
                  onClick={() => setCurrentTechnicalSlide(index)}
                  aria-label={`Ir a solución ${index + 1}`}
                />
              ))}
            </div>

            <div className="slider-content">
              <button
                className="slider-arrow left"
                onClick={() => setCurrentTechnicalSlide(prev => 
                  prev === 0 ? technicalSolutions.length - 1 : prev - 1
                )}
                aria-label="Anterior"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="technical-solution-card active">
                <div className="solution-header">
                  <h4>{technicalSolutions[currentTechnicalSlide].title}</h4>
                  <div className="solution-kpi">{technicalSolutions[currentTechnicalSlide].kpi}</div>
                </div>
                <div className="solution-details">
                  <div className="current-challenge">
                    <strong>Desafío:</strong> {technicalSolutions[currentTechnicalSlide].challenge}
                  </div>
                  <div className="ai-approach">
                    <strong>Solución IA:</strong> {technicalSolutions[currentTechnicalSlide].solution}
                  </div>
                  <div className="implementation-steps">
                    <ul>
                      {technicalSolutions[currentTechnicalSlide].steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <button
                className="slider-arrow right"
                onClick={() => setCurrentTechnicalSlide(prev => 
                  (prev + 1) % technicalSolutions.length
                )}
                aria-label="Siguiente"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="slider-counter">
              {currentTechnicalSlide + 1} / {technicalSolutions.length}
            </div>
          </div>
        </section>
        
        {/* 8. Transformación de Roles */}
        <section id="transformacion-roles" className="informe-section">
          <h2 className="section-title" data-number="8">Transformación de Roles</h2>
          <p className="section-subtitle">De tareas operativas a supervisión estratégica</p>
          
          <div className="roles-grid">
            <div className="role-card">
              <h3>Asistente</h3>
              <div className="role-transformation">
                <span className="role-before">DE: Operador Manual</span>
                <span className="role-arrow">→</span>
                <span className="role-after">A: Supervisor IA</span>
              </div>
              <p>Libera 75% de tiempo para casos complejos y mejora continua</p>
            </div>
            <div className="role-card">
              <h3>Abogado</h3>
              <div className="role-transformation">
                <span className="role-before">DE: Redactor</span>
                <span className="role-arrow">→</span>
                <span className="role-after">A: Validador Experto</span>
              </div>
              <p>100% del tiempo en juicio legal sobre borradores de calidad</p>
            </div>
            <div className="role-card">
              <h3>Ejecutivo</h3>
              <div className="role-transformation">
                <span className="role-before">DE: Intermediario</span>
                <span className="role-arrow">→</span>
                <span className="role-after">A: Gestor Relación</span>
              </div>
              <p>IA maneja loops y ausencias; foco en estrategia de cliente</p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="informe-section">
          <h3 className="subsection-title">Impacto en el Asistente</h3>
          <p className="section-subtitle">Cómo Aquiles transforma el rol del asistente de bottleneck operativo a supervisor estratégico</p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">75%</div>
              <h4>Tiempo Liberado</h4>
              <p>Del triage manual a supervisión IA</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">0</div>
              <h4>Correos Manuales</h4>
              <p>Clasificación automática 24/7</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">95%</div>
              <h4>Precisión IA</h4>
              <p>Clasificación automática confiable</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">10x</div>
              <h4>Productividad</h4>
              <p>Mismo asistente, 10x más eficiente</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2d → h</div>
              <h4>SLA Mejorado</h4>
              <p>De días a horas de respuesta</p>
            </div>
          </div>
        </section>

        {/* 5. Roadmap */}
        <section id="roadmap" className="informe-section">
          <h2 className="section-title" data-number="5">Roadmap de Implementación</h2>
          <p className="section-subtitle">Entrega ágil en 11 semanas</p>
          
          <div className="roadmap-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h4>Fase 1 - Discovery</h4>
                <span className="timeline-weeks">Semanas 1-2</span>
                <p>Formalización de reglas y alcance del MVP</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h4>Fase 2 - Prototipo</h4>
                <span className="timeline-weeks">Semanas 3-5</span>
                <p>Motor IA y simulaciones de validación</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h4>Fase 3 - Piloto</h4>
                <span className="timeline-weeks">Semanas 6-9</span>
                <p>Piloto en sombra con feedback continuo</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h4>Fase 4 - Despliegue</h4>
                <span className="timeline-weeks">Semanas 10-11</span>
                <p>Integración final y capacitación</p>
              </div>
            </div>
          </div>
        </section>

        {/* MVP: Inversión y Retorno */}
        <section id="mvp-costos" className="informe-section">
          <h2 className="section-title" data-number="6">MVP: Inversión y Retorno</h2>
          <p className="section-subtitle">Caso de negocio con números reales</p>

          {/* Desglose de Costos */}
          <div className="cost-breakdown">
            <h3>💰 Inversión Anual</h3>
            <div className="cost-grid">
              <div className="cost-card">
                <div className="cost-icon">🤖</div>
                <h4>Agente IA</h4>
                <div className="cost-amount">$36/mes</div>
                <div className="cost-detail">$432/año</div>
                <p>Procesamiento inteligente de solicitudes con Gemini API</p>
              </div>
              
              <div className="cost-card">
                <div className="cost-icon">🏗️</div>
                <h4>Arquitectura Cloud</h4>
                <div className="cost-amount">$6.8/mes</div>
                <div className="cost-detail">$82/año</div>
                <p>Infraestructura serverless escalable</p>
              </div>
              
              <div className="cost-card highlight">
                <div className="cost-icon">💰</div>
                <h4>Inversión Total</h4>
                <div className="cost-amount">$485,352</div>
                <div className="cost-detail">$42.8/mes promedio</div>
                <p>Basado en 6,000 requests/mes con 1,000 tokens entrada y 500 tokens salida</p>
              </div>
            </div>
          </div>

          {/* Comparación de Ahorro */}
          <div className="savings-comparison">
            <div className="comparison-item current">
              <h4>💼 Situación Actual (HOY)</h4>
              <div className="comparison-amount">$28.8M/año</div>
              <div className="comparison-detail">$2.4M/mes</div>
              <p>2 asistentes dedicados a validaciones</p>
            </div>
            
            <div className="comparison-arrow">→</div>
            
            <div className="comparison-item future">
              <h4>🚀 Con Aquiles (TO BE)</h4>
              <div className="comparison-amount">$900K/año</div>
              <div className="comparison-detail">$75K/mes</div>
              <p>1 asistente para supervisión estratégica + sistema MVP</p>
            </div>
            
            <div className="comparison-arrow">=</div>
            
            <div className="comparison-item savings">
              <h4>✨ Ahorro Total</h4>
              <div className="comparison-amount">$27.9M/año</div>
              <div className="comparison-detail">$2.325M/mes</div>
              <p>Liberación de 315 HH mensuales para tareas de mayor valor</p>
            </div>
          </div>

          {/* Proyección de ROI */}
          <div className="roi-projection">
            <h3>📈 Proyección de Retorno</h3>
            <div className="roi-chart">
              <div className="roi-timeline">
                <div className="roi-point">
                  <div className="roi-month">Inversión</div>
                  <div className="roi-value">$485K</div>
                  <div className="roi-desc">Costo anual MVP</div>
                </div>
                <div className="roi-point">
                  <div className="roi-month">Mes 1</div>
                  <div className="roi-value">$2.3M</div>
                  <div className="roi-desc">Ahorro mensual</div>
                </div>
                <div className="roi-point highlight">
                  <div className="roi-month">Año 1</div>
                  <div className="roi-value">$27.9M</div>
                  <div className="roi-desc">Ahorro anual total</div>
                </div>
                <div className="roi-point">
                  <div className="roi-month">ROI</div>
                  <div className="roi-value">5,650%</div>
                  <div className="roi-desc">Retorno primer año</div>
                </div>
              </div>
            </div>
            
            <div className="roi-summary">
              <div className="roi-highlight">
                <span className="roi-label">Payback:</span>
                <span className="roi-number">{'<'} 1 semana</span>
              </div>
              <div className="roi-highlight">
                <span className="roi-label">Adopción KPI:</span>
                <span className="roi-number">50% → 100% en 6 meses</span>
              </div>
              <div className="roi-highlight">
                <span className="roi-label">SLA KPI:</span>
                <span className="roi-number">2 días → horas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Claves del Éxito */}
        <section id="claves-exito" className="informe-section">
          <h3 className="subsection-title">Claves del Éxito</h3>
          <p className="section-subtitle">Alianza basada en conocimiento, feedback y datos</p>
          
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🧠</div>
              <h4>Cerebro IA</h4>
              <p>Reglas, criterios y casos de ejemplo de Fiscalía</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">⚡</div>
              <h4>Feedback Rápido</h4>
              <p>1-2h semanales de expertos durante piloto</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">📊</div>
              <h4>Datos Entrenamiento</h4>
              <p>20-30 correos por categoría anonimizados</p>
            </div>
          </div>
        </section>

        {/* Visión de Futuro */}
        <section id="vision-futuro" className="informe-section">
          <h3 className="subsection-title">Visión de Futuro: Aquiles</h3>
          <p className="section-subtitle">Primera piedra de un ecosistema multi-agente legal</p>
          
          <div className="vision-grid">
            <div className="vision-card">
              <h4>Asistente Core</h4>
              <p>Evoluciona hacia núcleo operativo completo de Fiscalía</p>
            </div>
            <div className="vision-card">
              <h4>Cerebro Vivo</h4>
              <p>Carga continua de normativas y protocolos actualizados</p>
            </div>
            <div className="vision-card">
              <h4>Ecosistema Multi-Agente</h4>
              <p>Agentes especializados por dominio legal específico</p>
            </div>
          </div>
        </section>

        {/* Implementación */}
        <section id="implementacion" className="informe-section last-section">
          <h3 className="subsection-title">Consideraciones de Implementación</h3>
          <p className="section-subtitle">Alineación de tecnología, seguridad y reglas de negocio</p>
          
          <div className="implementation-grid">
            <div className="implementation-card">
              <h4>Tecnología</h4>
              <ul>
                <li><strong>IDP:</strong> Extracción inteligente de documentos</li>
                <li><strong>RAG:</strong> Borradores fiables sin alucinaciones</li>
                <li><strong>HITL:</strong> Validación humana obligatoria</li>
              </ul>
            </div>
            <div className="implementation-card">
              <h4>Seguridad</h4>
              <ul>
                <li><strong>Entorno privado:</strong> Datos en infraestructura BCI</li>
                <li><strong>Control alucinaciones:</strong> RAG sobre bases propias</li>
                <li><strong>Trazabilidad:</strong> Auditoría completa de decisiones</li>
              </ul>
            </div>
            <div className="implementation-card">
              <h4>Limitaciones</h4>
              <ul>
                <li><strong>Temas tabú:</strong> Definidos por Fiscalía</li>
                <li><strong>Validación humana:</strong> Obligatoria en todos los casos</li>
                <li><strong>Expectativa realista:</strong> Asistente 90% correcto</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="informe-cta">
          <div className="cta-box">
            <h2>¿Listo para transformar Fiscalía?</h2>
            <p>Prueba el demo funcional y descubre el potencial de Aquiles</p>
            <Link to="/app" className="cta-button-large">
              <Brain size={24} />
              <span>Probar Demo Interactivo</span>
            </Link>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="informe-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Shield size={28} />
            <span>Aquiles MVP - Transformación Fiscalía BCI</span>
          </div>
          <div className="footer-links">
            <Link to="/">Inicio</Link>
            <Link to="/app">Demo</Link>
            <Link to="/informe">Informe</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Informe