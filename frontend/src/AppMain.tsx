import { useState } from 'react'
import { 
  Shield, 
  Mail, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Upload,
  Clock,
  Download,
  Brain,
  Zap,
  Target,
  Database,
  FileCheck,
  UserCheck,
  Building,
  Scale,
  Briefcase,
  Award
} from 'lucide-react'
import './AppMain.css'

interface AnalysisResult {
  intencion: string
  rut_detectado: string
  documentos_requeridos: string[]
  documentos_recibidos: string[]
  validacion_documentos: string
  siguiente_accion_sugerida: string
  borrador_respuesta_ejecutivo: string
}

function AppMain() {
  const [emailBody, setEmailBody] = useState('')
  const [attachments, setAttachments] = useState('')
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Casos de ejemplo predefinidos
  const ejemplos = {
    "Nueva Sociedad (Completa)": {
      body: "Estimados, para la empresa 'Los Volcanes SPA', RUT 76.123.456-7, adjunto los documentos para su constitución. Todos los documentos están incluidos según el procedimiento. Saludos cordiales, María González - Ejecutiva Comercial.",
      adjuntos: "escritura_constitucion.pdf, inscripcion_extracto.pdf, extractos.pdf, publicacion_diario_oficial.pdf"
    },
    "Modificación de Poder (RUT Inválido)": {
      body: "Estimado equipo legal, necesito procesar una modificación de poder para el señor Roberto Silva Montoya, RUT 15.678.432-3. El cliente requiere ampliar las facultades del mandatario para incluir operaciones bancarias. Adjunto la documentación correspondiente. Saludos, Patricia López - Ejecutiva de Cuentas.",
      adjuntos: "poder_original.pdf, minuta_modificacion.pdf, cedula_identidad_mandante.pdf, autorizacion_firmada.pdf"
    },
    "Nueva Sociedad (Incompleta)": {
      body: "Hola equipo, adjunto escritura de constitución de 'Transportes Rápidos Ltda', RUT 96.555.444-K. El cliente tiene urgencia, favor procesar. Saludos, Carlos Mendoza.",
      adjuntos: "escritura_constitucion.pdf"
    },
    "Borrador de Poder": {
      body: "Estimado equipo de Fiscalía, el cliente con RUT 12.345.678-9 necesita revisar y confirmar este borrador de poder antes de proceder con la legalización.",
      adjuntos: "borrador_poder_cliente.docx"
    }
  }

  const handleExampleSelect = (example: string) => {
    const selectedExample = ejemplos[example as keyof typeof ejemplos]
    setEmailBody(selectedExample.body)
    setAttachments(selectedExample.adjuntos)
    setResult(null)
    setError('')
  }

  const processCase = async () => {
    if (!emailBody.trim()) {
      setError('Por favor ingresa el contenido del email')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      // Llamada directa a Gemini API desde el frontend (MVP)
      const API_KEY = "AIzaSyCuh58FtXVg0h6S-wLlAoKdlS-4qoJb18k"
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`

      const adjuntosList = attachments.split(',').map(a => a.trim()).filter(a => a)

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Eres Aquiles, un agente de IA especializado en análisis de correos fiscales. Analiza este correo de un ejecutivo comercial y responde SOLO con un JSON válido.

CORREO: ${emailBody}
ADJUNTOS: ${adjuntosList.join(', ')}

INSTRUCCIONES DE ANÁLISIS:
1. INTENCIÓN: Identifica el tipo de trámite (Nueva Sociedad, Nuevo Poder, Modificación de Poder, Borrador, Reparo, etc.)
2. VALIDACIÓN RUT: Verifica formato chileno XX.XXX.XXX-X y dígito verificador matemáticamente
3. DOCUMENTOS REQUERIDOS POR TIPO:
   - Nueva Sociedad: escritura_constitucion.pdf, inscripcion_extracto.pdf, extractos.pdf, publicacion_diario_oficial.pdf
   - Modificación de Poder: poder_original.pdf, minuta_modificacion.pdf, cedula_identidad_mandante.pdf, autorizacion_firmada.pdf
   - Nuevo Poder: minuta_poder.pdf, cedula_identidad_mandante.pdf, cedula_identidad_mandatario.pdf
4. DECISIÓN: "Asignar a Abogado" si todo está correcto, "Devolver a Ejecutivo" si hay errores
5. RESPUESTA: Si hay que devolver, genera un mensaje profesional explicando los problemas

Responde con este formato JSON exacto:
{
  "intencion": "Tipo de trámite identificado",
  "rut_detectado": "RUT encontrado con formato XX.XXX.XXX-X o 'No Detectado'",
  "documentos_requeridos": ["lista", "de", "documentos", "necesarios", "según", "tipo", "trámite"],
  "documentos_recibidos": ["lista", "de", "adjuntos", "recibidos"],
  "validacion_documentos": "Completos si todos están, Incompletos si faltan algunos, o N/A",
  "siguiente_accion_sugerida": "Asignar a Abogado o Devolver a Ejecutivo",
  "borrador_respuesta_ejecutivo": "Mensaje profesional si hay que devolver, o cadena vacía si se aprueba"
}`
            }]
          }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      })

      const data = await response.json()
      
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const jsonResult = JSON.parse(data.candidates[0].content.parts[0].text)
        setResult(jsonResult)
      } else {
        throw new Error('Respuesta inesperada de la API')
      }
      
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Error desconocido'}`)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = () => {
    if (!result) return ''
    if (result.siguiente_accion_sugerida === 'Asignar a Abogado') return 'success'
    if (result.siguiente_accion_sugerida === 'Devolver a Ejecutivo') return 'error'
    return 'warning'
  }

  return (
    <div className="app-main">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon-stack">
              <Shield className="logo-icon-back" size={52} />
              <Brain className="logo-icon-front" size={28} />
            </div>
            <div>
              <h1>Aquiles MVP</h1>
              <p>Agente de IA para Análisis de Correos Fiscales</p>
            </div>
          </div>
          <div className="status-badge">
            <Zap size={16} />
            <span>Powered by Gemini AI</span>
          </div>
        </div>
      </header>

      <div className="instructions-section">
        <div className="instructions-content">
          <div className="instructions-grid">
            <div className="instruction-card">
              <div className="instruction-header">
                <Target size={24} className="instruction-icon" />
                <h3>¿Qué Revisa Aquiles?</h3>
              </div>
              <ul className="instruction-list">
                <li><Building size={16} /> <strong>Intención del correo:</strong> Nueva Sociedad, Poder, Borrador, etc.</li>
                <li><UserCheck size={16} /> <strong>RUT válido:</strong> Verifica formato y dígito verificador</li>
                <li><FileCheck size={16} /> <strong>Documentos requeridos:</strong> Según tipo de trámite</li>
                <li><Database size={16} /> <strong>Completitud:</strong> Documentos faltantes o extras</li>
                <li><Award size={16} /> <strong>Decisión automática:</strong> Aprobar o rechazar caso</li>
              </ul>
            </div>
            
            <div className="instruction-card">
              <div className="instruction-header">
                <Briefcase size={24} className="instruction-icon" />
                <h3>Cómo Usar la App</h3>
              </div>
              <div className="instruction-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <strong>Selecciona un ejemplo</strong> del menú desplegable para ver casos predefinidos
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <strong>O escribe desde cero</strong> el contenido del email del ejecutivo comercial
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <strong>Lista los adjuntos</strong> separados por comas (ej: documento1.pdf, archivo2.docx)
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">4</span>
                  <div className="step-content">
                    <strong>Presiona "Procesar"</strong> y observa cómo Aquiles analiza y decide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="input-section">
          <div className="section-header">
            <div className="section-title">
              <Briefcase className="section-icon" size={20} />
              <h2>Input del Ejecutivo</h2>
            </div>
            <div className="section-badge">Paso 1</div>
          </div>
          
          <div className="examples">
            <label>
              <Scale size={16} />
              Casos de ejemplo:
            </label>
            <select onChange={(e) => handleExampleSelect(e.target.value)} defaultValue="">
              <option value="">Seleccionar ejemplo...</option>
              {Object.keys(ejemplos).map(key => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>
              <Mail size={16} />
              Contenido del Email:
            </label>
            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              placeholder="Estimados, adjunto los documentos para la empresa 'Ejemplo SPA', RUT 76.123.456-7..."
              rows={6}
              className="modern-input"
            />
            <div className="input-helper">
              Pega aquí el contenido completo del email del ejecutivo comercial
            </div>
          </div>

          <div className="form-group">
            <label>
              <Upload size={16} />
              Adjuntos (separados por comas):
            </label>
            <input
              type="text"
              value={attachments}
              onChange={(e) => setAttachments(e.target.value)}
              placeholder="escritura_constitucion.pdf, extractos.pdf, poder.docx..."
              className="modern-input"
            />
            <div className="input-helper">
              Lista los nombres de archivos adjuntos al correo
            </div>
          </div>

          <button 
            onClick={processCase} 
            disabled={loading}
            className="process-btn"
          >
            {loading ? (
              <>
                <Brain className="btn-icon spinning" size={20} />
                Aquiles analizando...
              </>
            ) : (
              <>
                <Zap className="btn-icon" size={20} />
                Procesar con Aquiles
              </>
            )}
          </button>

          {error && (
            <div className="error">
              ❌ {error}
            </div>
          )}
        </div>

        <div className="result-section">
          <div className="section-header">
            <div className="section-title">
              <Brain className="section-icon" size={20} />
              <h2>Análisis de Aquiles</h2>
            </div>
            <div className="section-badge">Paso 2</div>
          </div>
          
          {!result && !loading && (
            <div className="placeholder">
              <Brain size={32} className="placeholder-icon" />
              <h3>Esperando análisis</h3>
              <p>Selecciona un ejemplo y presiona "Procesar" para ver cómo Aquiles analiza el caso</p>
            </div>
          )}

          {loading && (
            <div className="loading">
              <div className="loading-animation">
                <Brain size={48} className="loading-bot" />
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h3>Aquiles analizando...</h3>
              <p>Procesando correo electrónico y documentos adjuntos</p>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          )}

          {result && (
            <div className={`result ${getStatusColor()}`}>
              <div className="status-header">
                <div className="status-icon">
                  {result.siguiente_accion_sugerida === 'Asignar a Abogado' && <CheckCircle size={32} />}
                  {result.siguiente_accion_sugerida === 'Devolver a Ejecutivo' && <XCircle size={32} />}
                  {!['Asignar a Abogado', 'Devolver a Ejecutivo'].includes(result.siguiente_accion_sugerida) && <AlertTriangle size={32} />}
                </div>
                <div className="status-content">
                  <h3>
                    {result.siguiente_accion_sugerida === 'Asignar a Abogado' && 'CASO APROBADO'}
                    {result.siguiente_accion_sugerida === 'Devolver a Ejecutivo' && 'CASO RECHAZADO'}
                    {!['Asignar a Abogado', 'Devolver a Ejecutivo'].includes(result.siguiente_accion_sugerida) && 'REQUIERE REVISIÓN'}
                  </h3>
                  <p>
                    {result.siguiente_accion_sugerida === 'Asignar a Abogado' && 'Listo para asignar al abogado'}
                    {result.siguiente_accion_sugerida === 'Devolver a Ejecutivo' && 'Requiere correcciones'}
                    {!['Asignar a Abogado', 'Devolver a Ejecutivo'].includes(result.siguiente_accion_sugerida) && 'Necesita validación manual'}
                  </p>
                </div>
                <div className="timestamp">
                  <Clock size={14} />
                  <span>{new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              <div className="analysis-details">
                <div className="detail-grid">
                  <div className="detail-card">
                    <div className="detail-header">
                      <Building size={16} />
                      <span>Intención</span>
                    </div>
                    <div className="detail-value">{result.intencion}</div>
                  </div>
                  <div className="detail-card">
                    <div className="detail-header">
                      <UserCheck size={16} />
                      <span>RUT Detectado</span>
                    </div>
                    <div className="detail-value">{result.rut_detectado}</div>
                  </div>
                  <div className="detail-card">
                    <div className="detail-header">
                      {result.validacion_documentos === 'Completos' ? <CheckCircle size={16} /> : 
                       result.validacion_documentos === 'Incompletos' ? <XCircle size={16} /> : <AlertTriangle size={16} />}
                      <span>Validación</span>
                    </div>
                    <div className="detail-value">{result.validacion_documentos}</div>
                  </div>
                </div>
                
                <div className="documents-section">
                  <div className="documents-column">
                    <div className="documents-header">
                      <FileCheck size={18} />
                      <strong>Documentos Requeridos</strong>
                    </div>
                    <div className="documents-list">
                      {result.documentos_requeridos.map((doc, i) => {
                        const isPresent = result.documentos_recibidos.some(recibido => 
                          recibido.toLowerCase().includes(doc.toLowerCase().split('.')[0]) ||
                          doc.toLowerCase().includes(recibido.toLowerCase().split('.')[0])
                        );
                        return (
                          <div key={i} className={`document-item ${isPresent ? 'document-present' : 'document-missing'}`}>
                            {isPresent ? <CheckCircle size={14} /> : <XCircle size={14} />}
                            <span>{doc}</span>
                            <div className="document-status">
                              {isPresent ? 'Adjuntado' : 'Faltante'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="documents-column">
                    <div className="documents-header">
                      <Upload size={18} />
                      <strong>Documentos Recibidos</strong>
                    </div>
                    <div className="documents-list">
                      {result.documentos_recibidos.map((doc, i) => {
                        const isRequired = result.documentos_requeridos.some(req => 
                          req.toLowerCase().includes(doc.toLowerCase().split('.')[0]) ||
                          doc.toLowerCase().includes(req.toLowerCase().split('.')[0])
                        );
                        return (
                          <div key={i} className={`document-item ${isRequired ? 'received-valid' : 'received-extra'}`}>
                            {isRequired ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
                            <span>{doc}</span>
                            <div className="document-status">
                              {isRequired ? 'Requerido' : 'Extra'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {result.borrador_respuesta_ejecutivo && (
                  <div className="response-draft">
                    <div className="draft-header">
                      <Mail size={18} />
                      <strong>Borrador de Respuesta</strong>
                      <button className="copy-btn" onClick={() => navigator.clipboard.writeText(result.borrador_respuesta_ejecutivo)}>
                        <Download size={14} />
                        Copiar
                      </button>
                    </div>
                    <div className="draft-content">
                      {result.borrador_respuesta_ejecutivo}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppMain
