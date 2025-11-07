import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Brain, CheckCircle, XCircle } from 'lucide-react'
import './Informe.css'

const Informe = () => {
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
        </div>
      </header>

      {/* Contenido del informe */}
      <div className="informe-container">
        
        {/* Introducción */}
        <section className="informe-section intro-section">
          <div className="section-icon-wrapper">
            <Brain size={48} />
          </div>
          <h2>Propuesta de Transformación</h2>
          <p className="lead-text">
            De un proceso manual de 2 días centrado en tareas repetitivas a una validación experta 
            y gestión de excepciones en horas.
          </p>
        </section>

        {/* AS IS vs TO BE */}
        <section className="informe-section">
          <h2 className="section-title">Flujo Actual vs Flujo Propuesto</h2>
          <p className="section-subtitle">Eliminando el cuello de botella del triage manual</p>
          
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

            {/* TO BE */}
            <div className="flow-card flow-to-be">
              <div className="flow-header">
                <h3>Flujo Propuesto (TO BE)</h3>
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
                  <span className="step-num">2</span>
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
                <p><strong>Valor:</strong> IA absorbe 100% de triage; humanos se enfocan en juicio legal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detalle del Proceso Actual */}
        <section className="informe-section process-detail-section">
          <h2 className="section-title">Procedimiento Actual: 9 Tipos de Gestión</h2>
          <p className="section-subtitle">Detalle completo de lo que hace el Asistente hoy y cómo será automatizado por Aquiles</p>
          
          <div className="process-intro">
            <h3>Alcance y Contexto</h3>
            <p>
              El proceso actual detalla la revisión de documentación recibida a través del correo genérico 
              <strong> "Asistente Sociedades Fiscalía"</strong>, proveniente de oficinas de la Región Metropolitana 
              enviada por ejecutivos o asistentes.
            </p>
          </div>

          <div className="process-types-grid">
            {/* Tipo 1 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">1</span>
                <h4>Nueva Sociedad</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Verificación de RUT en SIAF y Portal Everest</li>
                    <li>Revisión documental de 4 documentos obligatorios</li>
                    <li>Validación de completitud</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Validación automática</strong> de RUT con dígito verificador</li>
                    <li><strong>Detección de documentos:</strong> Escritura Constitución, Inscripción Extracto, Extractos, Publicación Diario Oficial</li>
                    <li><strong>Matching inteligente</strong> entre adjuntos y requerimientos</li>
                    <li><strong>Decisión automática:</strong> Aprobar o solicitar faltantes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tipo 2 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">2</span>
                <h4>Nuevo Poder</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Revisión de RUT en SIAF</li>
                    <li>Verificación de escritura de modificación</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Clasificación automática</strong> del tipo de poder</li>
                    <li><strong>Extracción IDP</strong> de datos de escritura</li>
                    <li><strong>Validación de completitud</strong> documental</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tipo 3 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">3</span>
                <h4>Poder Banca Persona</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Revisión de RUT en SIAF</li>
                    <li>Verificación de escritura pública o instrumento privado notariado</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Detección automática</strong> de tipo de documento legal</li>
                    <li><strong>Validación de formato</strong> y legalización</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tipo 4 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">4</span>
                <h4>Reparo</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Revisión de RUT en SIAF</li>
                    <li>Verificación del reparo emitido por abogado</li>
                    <li>Validación de coincidencia documentación vs reparo</li>
                    <li>Comunicación a ejecutivo si hay inconsistencias</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Comprensión semántica</strong> del reparo</li>
                    <li><strong>Matching automático</strong> documentos vs solicitud</li>
                    <li><strong>Generación de mensaje</strong> si hay inconsistencias</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tipo 5 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">5</span>
                <h4>Revisión</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Revisión de RUT en SIAF</li>
                    <li>Carga manual al abogado de consultas (ej: falta apoderado, error nombre)</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Clasificación automática</strong> del tipo de revisión</li>
                    <li><strong>Priorización inteligente</strong> según urgencia</li>
                    <li><strong>Asignación directa</strong> al abogado disponible</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tipo 6 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">6</span>
                <h4>Borrador</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Revisión de RUT en SIAF</li>
                    <li>Revisión de documento Word</li>
                    <li>Cliente requiere confirmar antes de legalización</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Detección de tipo</strong> de documento borrador</li>
                    <li><strong>Extracción de contenido</strong> para análisis</li>
                    <li><strong>Workflow especial</strong> de confirmación cliente</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tipo 7 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">7</span>
                <h4>Certificado Apoderado</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Revisión de RUT en SIAF</li>
                    <li>Asignación manual a abogado</li>
                    <li>Generación de listado de apoderados vigentes</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Clasificación automática</strong> de solicitud</li>
                    <li><strong>Consulta a BBDD</strong> de apoderados</li>
                    <li><strong>Pre-generación</strong> de certificado estándar</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tipo 8 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">8</span>
                <h4>Informe BCI MIAMI</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Revisión de RUT en SIAF</li>
                    <li>Revisión de solicitud específica</li>
                    <li>Generación de informe dirigido a BCI Miami</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Detección automática</strong> de solicitud internacional</li>
                    <li><strong>Template específico</strong> para BCI Miami</li>
                    <li><strong>Generación de borrador</strong> con RAG</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tipo 9 */}
            <div className="process-type-card">
              <div className="process-type-header">
                <span className="process-number">9</span>
                <h4>Poder de Tercero</h4>
              </div>
              <div className="process-type-content">
                <div className="current-process">
                  <h5>Proceso Manual Actual:</h5>
                  <ul>
                    <li>Revisión de RUT en SIAF</li>
                    <li>Revisión del poder para depósito de especie valorada</li>
                    <li>Validación de cuenta corriente tercero</li>
                  </ul>
                </div>
                <div className="ai-solution">
                  <h5>Solución con Aquiles:</h5>
                  <ul>
                    <li><strong>Extracción automática</strong> de datos de tercero</li>
                    <li><strong>Validación de facultades</strong> específicas</li>
                    <li><strong>Verificación de consistencia</strong> de información</li>
                  </ul>
                </div>
              </div>
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

        {/* Transformación de Roles */}
        <section className="informe-section">
          <h2 className="section-title">Transformación de Roles</h2>
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
        <section className="informe-section">
          <h2 className="section-title">Beneficios Clave</h2>
          <p className="section-subtitle">Impacto directo en eficiencia, calidad y escalabilidad</p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">2d → h</div>
              <h4>Reducción SLA</h4>
              <p>De 2 días a horas</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">75%</div>
              <h4>Bottleneck</h4>
              <p>Eliminado el cuello de botella operativo</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">10x</div>
              <h4>Escalabilidad</h4>
              <p>100 a 1.000 correos mismo costo</p>
            </div>
                          <div className="benefit-card">
                <div className="benefit-number">100%</div>
                <h4>Alto Valor</h4>
                <p>Juicio legal &gt; redacción operativa</p>
              </div>
            <div className="benefit-card">
              <div className="benefit-number">24/7</div>
              <h4>Continuidad</h4>
              <p>Agente activo sin horarios</p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="informe-section">
          <h2 className="section-title">Roadmap al MVP</h2>
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

        {/* Claves del Éxito */}
        <section className="informe-section">
          <h2 className="section-title">Claves del Éxito</h2>
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
        <section className="informe-section">
          <h2 className="section-title">Visión de Futuro: Aquiles</h2>
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
        <section className="informe-section last-section">
          <h2 className="section-title">Consideraciones de Implementación</h2>
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