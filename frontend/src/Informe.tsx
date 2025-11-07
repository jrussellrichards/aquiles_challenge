import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Brain, CheckCircle, XCircle, List, AlertTriangle, ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import './Informe.css'
import asIsDiagram from './diagrams/as_is.png'
import toBeDiagram from './diagrams/to_be.png'
import mvpDiagram from './diagrams/mvp.png'

const Informe = () => {
  const [showIndex, setShowIndex] = useState(false)
  const [currentTechnicalSlide, setCurrentTechnicalSlide] = useState(0)
  const [currentProcessSlide, setCurrentProcessSlide] = useState(0)
  const [selectedDiagram, setSelectedDiagram] = useState<{ src: string; alt: string; title: string } | null>(null)

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

  // Auto-avance de sliders cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechnicalSlide(prev => (prev + 1) % technicalSolutions.length)
      setCurrentProcessSlide(prev => (prev + 1) % processTypes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [technicalSolutions.length, processTypes.length])

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
              <button onClick={() => scrollToSection('vision-to-be')}>2. La Visión TO BE (Solución Completa)</button>
              <button onClick={() => scrollToSection('flujo-completo')}>   2.1 AS IS vs TO BE</button>
              <button onClick={() => scrollToSection('transformacion-roles')}>   2.2 Transformación de Roles</button>
              <button onClick={() => scrollToSection('justificacion-ia')}>3. Por Qué Inteligencia Artificial</button>
              <button onClick={() => scrollToSection('mvp-enfoque')}>4. ★ EL MVP: Nuestro Enfoque</button>
              <button onClick={() => scrollToSection('alcance-mvp')}>   4.1 Los 9 Tipos de Gestión</button>
              <button onClick={() => scrollToSection('impacto-cuantificado')}>   4.2 Impacto del MVP</button>
              <button onClick={() => scrollToSection('roadmap')}>   4.3 Roadmap 11 Semanas</button>
              <button onClick={() => scrollToSection('claves-exito')}>   4.4 Claves del Éxito</button>
              <button onClick={() => scrollToSection('tecnologia-mvp')}>5. Tecnología del MVP</button>
              <button onClick={() => scrollToSection('solucion-tecnica')}>   5.1 Detalle Técnico por Caso</button>
              <button onClick={() => scrollToSection('implementacion')}>6. Consideraciones de Implementación</button>
              <button onClick={() => scrollToSection('vision-futuro')}>7. Visión de Futuro</button>
              <button onClick={() => scrollToSection('demo')}>8. Prueba el Demo Interactivo</button>
            </nav>
          </div>
        </div>
      )}

      {/* Contenido del informe */}
      <div className="informe-container">

        {/* 1. El Problema Actual */}
        <section id="problema-actual">
          <div className="section-header">
            <div className="section-icon-wrapper">
              <AlertTriangle size={48} />
            </div>
            <h2 className="section-title" data-number="1">El Problema Actual</h2>
            <p className="section-subtitle">Un cuello de botella operativo que impacta el negocio completo</p>
          </div>

          <div className="informe-section intro-section">
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
          </div>
        </section>

        {/* 2. La Visión TO BE (Solución Completa) */}
        <section id="vision-to-be">
          <div className="section-header">
            <h2 className="section-title" data-number="2">La Visión TO BE: Solución Completa</h2>
            <p className="section-subtitle">Ecosistema inteligente de extremo a extremo - La meta final</p>
          </div>

          <div className="informe-section">
            <div className="vision-intro">
              <p className="intro-text">
                Esta sección describe la <strong>solución completa TO BE</strong>: un ecosistema donde la IA maneja 
                el 100% de las operaciones repetitivas y los humanos se enfocan en estrategia y juicio experto.
              </p>
              <div className="vision-note">
                <AlertTriangle size={20} />
                <p><strong>Importante:</strong> El MVP (Sección 4) se enfoca SOLO en el cuello de botella del asistente. 
                Las métricas de esta sección reflejan el potencial completo, no el alcance inicial del proyecto.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.1 AS IS vs TO BE */}
        <section id="flujo-completo">
          <div className="section-header">
            <h3 className="subsection-title">2.1 AS IS vs TO BE: Comparativa de Flujos</h3>
            <p className="section-subtitle">Del proceso manual al ecosistema inteligente</p>
          </div>

          <div className="informe-section">
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

          {/* Diagramas Visuales */}
          <div className="diagrams-section">
            <h3 className="diagrams-title">Diagramas de Flujo</h3>
            <p className="diagrams-subtitle">Visualización completa de la transformación del proceso</p>
            
            <div className="diagrams-grid">
              <div className="diagram-card">
                <div className="diagram-header">
                  <h4>Flujo AS IS (Actual)</h4>
                  <span className="diagram-badge as-is">Manual</span>
                </div>
                <div className="diagram-image-container">
                  <img 
                    src={asIsDiagram} 
                    alt="Diagrama del flujo actual AS IS - Proceso manual" 
                    className="diagram-image"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const placeholder = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <button 
                    className="diagram-zoom-btn"
                    onClick={() => setSelectedDiagram({ 
                      src: asIsDiagram, 
                      alt: 'Diagrama del flujo actual AS IS - Proceso manual',
                      title: 'Flujo AS IS (Actual)'
                    })}
                    aria-label="Ver diagrama en tamaño completo"
                  >
                    <ZoomIn size={24} />
                  </button>
                  <div className="diagram-placeholder">
                    <div className="placeholder-icon">📊</div>
                    <p>Diagrama AS IS</p>
                    <small>Proceso Manual Actual</small>
                  </div>
                </div>
                <p className="diagram-description">
                  Proceso actual con cuello de botella en el asistente que maneja manualmente 100+ correos diarios
                </p>
              </div>

              <div className="diagram-card">
                <div className="diagram-header">
                  <h4>Flujo TO BE (Futuro)</h4>
                  <span className="diagram-badge to-be">Automatizado</span>
                </div>
                <div className="diagram-image-container">
                  <img 
                    src={toBeDiagram} 
                    alt="Diagrama del flujo futuro TO BE - Proceso automatizado con IA" 
                    className="diagram-image"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const placeholder = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <button 
                    className="diagram-zoom-btn"
                    onClick={() => setSelectedDiagram({ 
                      src: toBeDiagram, 
                      alt: 'Diagrama del flujo futuro TO BE - Proceso automatizado con IA',
                      title: 'Flujo TO BE (Futuro)'
                    })}
                    aria-label="Ver diagrama en tamaño completo"
                  >
                    <ZoomIn size={24} />
                  </button>
                  <div className="diagram-placeholder">
                    <div className="placeholder-icon">🤖</div>
                    <p>Diagrama TO BE</p>
                    <small>Proceso Automatizado con IA</small>
                  </div>
                </div>
                <p className="diagram-description">
                  Proceso transformado donde Aquiles maneja triage 24/7 y el abogado se enfoca en validación estratégica
                </p>
              </div>

              <div className="diagram-card">
                <div className="diagram-header">
                  <h4>MVP: Enfoque del Proyecto</h4>
                  <span className="diagram-badge architecture">Roadmap</span>
                </div>
                <div className="diagram-image-container">
                  <img 
                    src={mvpDiagram} 
                    alt="Diagrama del MVP enfocado en el cuello de botella del asistente" 
                    className="diagram-image"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const placeholder = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <button 
                    className="diagram-zoom-btn"
                    onClick={() => setSelectedDiagram({ 
                      src: mvpDiagram, 
                      alt: 'Diagrama del MVP enfocado en el cuello de botella del asistente',
                      title: 'MVP: Enfoque del Proyecto'
                    })}
                    aria-label="Ver diagrama en tamaño completo"
                  >
                    <ZoomIn size={24} />
                  </button>
                  <div className="diagram-placeholder">
                    <div className="placeholder-icon">🎯</div>
                    <p>MVP: Enfoque</p>
                    <small>Cuello de Botella</small>
                  </div>
                </div>
                <p className="diagram-description">
                  MVP enfocado en eliminar el cuello de botella: el agente asume las tareas del asistente (75% del tiempo del proceso)
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* 2.2 Transformación de Roles (TO BE) */}
        <section id="transformacion-roles">
          <div className="section-header">
            <h3 className="subsection-title">2.2 Transformación de Roles</h3>
            <p className="section-subtitle">Cómo cambian los roles en la solución TO BE completa</p>
          </div>

          <div className="informe-section">
          <div className="roles-transformation-section">
            <div className="vision-note">
              <AlertTriangle size={20} />
              <p><strong>Nota TO BE:</strong> Esta transformación muestra el impacto de la solución completa. 
              El MVP se enfoca solo en el rol del asistente.</p>
            </div>
            
            <div className="roles-grid">
              <div className="role-card">
                <h4>Asistente</h4>
                <div className="role-transformation">
                  <span className="role-before">DE: Operador Manual</span>
                  <span className="role-arrow">→</span>
                  <span className="role-after">A: Supervisor IA</span>
                </div>
                <p>Libera 75% de tiempo para casos complejos y mejora continua</p>
              </div>
              <div className="role-card">
                <h4>Abogado</h4>
                <div className="role-transformation">
                  <span className="role-before">DE: Redactor</span>
                  <span className="role-arrow">→</span>
                  <span className="role-after">A: Validador Experto</span>
                </div>
                <p>100% del tiempo en juicio legal sobre borradores de calidad</p>
              </div>
              <div className="role-card">
                <h4>Ejecutivo</h4>
                <div className="role-transformation">
                  <span className="role-before">DE: Intermediario</span>
                  <span className="role-arrow">→</span>
                  <span className="role-after">A: Gestor Relación</span>
                </div>
                <p>IA maneja loops y ausencias; foco en estrategia de cliente</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* 3. Justificación de la Solución IA */}
        <section id="justificacion-ia">
          <div className="section-header">
            <h2 className="section-title" data-number="3">¿Por Qué Inteligencia Artificial?</h2>
            <p className="section-subtitle">Ventajas estratégicas sobre otras alternativas de automatización</p>
          </div>

          <div className="informe-section">
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
          </div>
        </section>

        {/* 4. EL MVP: Nuestro Enfoque */}
        <section id="mvp-enfoque">
          <div className="section-header">
            <h2 className="section-title" data-number="4">★ EL MVP: Nuestro Enfoque</h2>
            <p className="section-subtitle">Proyecto enfocado en eliminar el cuello de botella del asistente</p>
          </div>

          <div className="informe-section">
            <div className="mvp-intro">
              <div className="mvp-highlight-box">
                <h3>🎯 Alcance del MVP</h3>
                <p className="intro-text">
                  El MVP <strong>NO implementa la solución TO BE completa</strong>. Se enfoca estratégicamente en el 
                  <strong> cuello de botella identificado: las tareas del asistente</strong> que consumen el 75% del tiempo total del proceso.
                </p>
                <div className="mvp-scope-grid">
                  <div className="scope-item in">
                    <CheckCircle size={24} className="icon-in" />
                    <div>
                      <h4>✅ DENTRO del MVP</h4>
                      <ul>
                        <li>Clasificación automática de los 9 tipos de solicitud</li>
                        <li>Validación de RUT y documentos</li>
                        <li>Asignación inteligente a abogados</li>
                        <li>Detección de errores y solicitud de correcciones</li>
                        <li>Manejo de ausencias y loops operativos</li>
                      </ul>
                    </div>
                  </div>
                  <div className="scope-item out">
                    <XCircle size={24} className="icon-out" />
                    <div>
                      <h4>❌ FUERA del MVP</h4>
                      <ul>
                        <li>Generación automática de borradores (RAG)</li>
                        <li>Redacción de respuestas completas</li>
                        <li>Cierre automático de casos</li>
                        <li>Comunicación directa con clientes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.1 Los 9 Tipos de Gestión */}
        <section id="alcance-mvp">
          <div className="section-header">
            <h3 className="subsection-title">4.1 Los 9 Tipos de Gestión Societaria</h3>
            <p className="section-subtitle">El MVP cubre el 100% de los casos que maneja Fiscalía</p>
          </div>

          <div className="informe-section process-detail-section">
          <div className="process-intro">
            <h3>Alcance Completo</h3>
            <p>
              El MVP automatiza <strong>todos los tipos de solicitudes</strong> recibidas a través del correo genérico 
              <strong> "Asistente Sociedades Fiscalía"</strong>, proveniente de oficinas de la Región Metropolitana 
              enviada por ejecutivos o asistentes.
            </p>
          </div>

          {/* Layout de 2 columnas: Navegación + Slider */}
          <div className="cases-layout">
            {/* Columna izquierda: Navegación compacta */}
            <div className="cases-navigation-sidebar">
              <h4>Tipos de Gestión</h4>
              <div className="cases-list">
                {processTypes.map((processType, index) => (
                  <button
                    key={index}
                    className={`case-item ${index === currentProcessSlide ? 'active' : ''}`}
                    onClick={() => setCurrentProcessSlide(index)}
                  >
                    <span className="case-num">{processType.number}</span>
                    <span className="case-label">{processType.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Columna derecha: Slider */}
            <div className="cases-slider">
              <div className="slider-container">
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
                    <h5>Automatización MVP:</h5>
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
            </div>
          </div>

          <div className="ai-capabilities">
            <h3>Tecnologías del MVP: Stack Técnico</h3>
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
                <div className="capability-icon">�</div>
                <h4>4. Asignación Inteligente</h4>
                <p>
                  <strong>Smart Routing:</strong> Asigna casos a abogados según especialidad, carga de trabajo
                  y disponibilidad, optimizando distribución.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">�</div>
                <h4>5. Gestión de Loops</h4>
                <p>
                  <strong>Error Handling:</strong> Detecta documentación faltante, solicita correcciones,
                  maneja ausencias y reenvíos automáticamente.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">�</div>
                <h4>6. Dashboard y Métricas</h4>
                <p>
                  <strong>Analytics:</strong> Trazabilidad completa, reportes de SLA, precisión por tipo,
                  y detección de patrones para mejora continua.
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* 4.2 Impacto del MVP */}
        <section id="impacto-cuantificado">
          <div className="section-header">
            <h3 className="subsection-title">4.2 Impacto Cuantificado del MVP</h3>
            <p className="section-subtitle">Métricas reales del proyecto enfocado en el asistente</p>
          </div>

          <div className="informe-section">
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
          </div>
        </section>

        {/* 4.3 Roadmap del MVP */}
        <section id="roadmap">
          <div className="section-header">
            <h3 className="subsection-title">4.3 Roadmap de Implementación</h3>
            <p className="section-subtitle">Entrega ágil en 11 semanas</p>
          </div>

          <div className="informe-section">
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
          </div>
        </section>

        {/* 4.4 Claves del Éxito */}
        <section id="claves-exito">
          <div className="section-header">
            <h3 className="subsection-title">4.4 Claves del Éxito del MVP</h3>
            <p className="section-subtitle">Alianza basada en conocimiento, feedback y datos</p>
          </div>

          <div className="informe-section">
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
          </div>
        </section>

        {/* 5. Tecnología del MVP */}
        <section id="tecnologia-mvp">
          <div className="section-header">
            <h2 className="section-title" data-number="5">Tecnología del MVP</h2>
            <p className="section-subtitle">Stack técnico y capacidades de IA implementadas</p>
          </div>

          <div className="informe-section">
            <div className="tech-intro">
              <p className="intro-text">
                El MVP utiliza un conjunto de tecnologías de IA especializadas para manejar los 9 tipos de gestión societaria
                con precisión y eficiencia. Cada componente del stack técnico está diseñado para abordar desafíos específicos del proceso.
              </p>
            </div>

            <div className="ai-capabilities">
              <h3>Stack Técnico del MVP</h3>
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
                  <div className="capability-icon">🎯</div>
                  <h4>4. Asignación Inteligente</h4>
                  <p>
                    <strong>Smart Routing:</strong> Asigna casos a abogados según especialidad, carga de trabajo
                    y disponibilidad, optimizando distribución.
                  </p>
                </div>
                <div className="capability-card">
                  <div className="capability-icon">🔄</div>
                  <h4>5. Gestión de Loops</h4>
                  <p>
                    <strong>Error Handling:</strong> Detecta documentación faltante, solicita correcciones,
                    maneja ausencias y reenvíos automáticamente.
                  </p>
                </div>
                <div className="capability-card">
                  <div className="capability-icon">📊</div>
                  <h4>6. Dashboard y Métricas</h4>
                  <p>
                    <strong>Analytics:</strong> Trazabilidad completa, reportes de SLA, precisión por tipo,
                    y detección de patrones para mejora continua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.1 Detalle Técnico por Caso */}
        <section id="solucion-tecnica">
          <div className="section-header">
            <h3 className="subsection-title">5.1 Detalle Técnico por Caso</h3>
            <p className="section-subtitle">Cómo el MVP aborda específicamente cada tipo con KPIs medibles</p>
          </div>

          <div className="informe-section">
            {/* Layout de 2 columnas: Navegación + Slider */}
            <div className="cases-layout">
              {/* Columna izquierda: Navegación compacta */}
              <div className="cases-navigation-sidebar">
                <h4>Soluciones Técnicas</h4>
                <div className="cases-list">
                  {technicalSolutions.map((solution, index) => (
                    <button
                      key={index}
                      className={`case-item ${index === currentTechnicalSlide ? 'active' : ''}`}
                      onClick={() => setCurrentTechnicalSlide(index)}
                    >
                      <span className="case-num">{index + 1}</span>
                      <span className="case-label">{solution.title.replace(/^\d+\.\s*/, '')}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Columna derecha: Slider */}
              <div className="cases-slider">
                <div className="slider-container">
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
                        <h3>{technicalSolutions[currentTechnicalSlide].title}</h3>
                        <span className="solution-kpi">{technicalSolutions[currentTechnicalSlide].kpi}</span>
                      </div>
                      <div className="solution-content">
                        <div className="solution-challenge">
                          <h4>Desafío:</h4>
                          <p>{technicalSolutions[currentTechnicalSlide].challenge}</p>
                        </div>
                        <div className="solution-approach">
                          <h4>Solución Técnica:</h4>
                          <p>{technicalSolutions[currentTechnicalSlide].solution}</p>
                        </div>
                        <div className="solution-steps">
                          <h4>Pasos del Agente IA:</h4>
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
              </div>
            </div>
          </div>
        </section>

        {/* 6. Consideraciones de Implementación */}
        <section id="implementacion">
          <div className="section-header">
            <h2 className="section-title" data-number="6">Consideraciones de Implementación</h2>
            <p className="section-subtitle">Alineación de tecnología, seguridad y reglas de negocio</p>
          </div>

          <div className="informe-section">
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
          </div>
        </section>

        {/* 7. Visión de Futuro */}
        <section id="vision-futuro">
          <div className="section-header">
            <h2 className="section-title" data-number="7">Visión de Futuro: Aquiles</h2>
            <p className="section-subtitle">Primera piedra de un ecosistema multi-agente legal</p>
          </div>

          <div className="informe-section">
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
          </div>
        </section>

        {/* 8. Demo Interactivo */}
        <section id="demo">
          <div className="section-header">
            <h2 className="section-title" data-number="8">Prueba el Demo Interactivo</h2>
            <p className="section-subtitle">Experimenta el proceso de triage automatizado</p>
          </div>
          
          <div className="informe-section">
            <div className="cta-box">
              <h3>¿Listo para transformar Fiscalía?</h3>
              <p>Prueba el demo funcional y descubre el potencial de Aquiles en acción</p>
              <Link to="/app" className="cta-button-large">
                <Brain size={24} />
                <span>Probar Demo Interactivo</span>
              </Link>
            </div>
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

      {/* Modal de Diagrama Ampliado */}
      {selectedDiagram && (
        <div className="diagram-modal" onClick={() => setSelectedDiagram(null)}>
          <div className="diagram-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="diagram-modal-header">
              <h3>{selectedDiagram.title}</h3>
              <button 
                className="diagram-modal-close"
                onClick={() => setSelectedDiagram(null)}
                aria-label="Cerrar"
              >
                <X size={28} />
              </button>
            </div>
            <div className="diagram-modal-image-container">
              <img 
                src={selectedDiagram.src} 
                alt={selectedDiagram.alt}
                className="diagram-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Informe