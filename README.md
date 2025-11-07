# Aquiles MVP - Agente IA para Análisis de Correos Fiscales

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel)](https://aquiles-bci.duckdns.org)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.1-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Gemini-2.5--flash--preview--09--2025-4285F4?style=flat&logo=google)](https://ai.google.dev/)

## 🚀 Descripción

Aquiles es un agente de IA especializado en el análisis automático de correos electrónicos fiscales. Desarrollado como MVP (Minimum Viable Product), automatiza el proceso de revisión de solicitudes legales, validando documentos, RUTs chilenos y determinando si los casos están listos para asignación a abogados o requieren correcciones.

## ✨ Características

### 🤖 Análisis Inteligente
- **Detección de intención**: Identifica automáticamente el tipo de trámite (Nueva Sociedad, Modificación de Poder, Borrador, etc.)
- **Validación de RUT**: Verifica formato chileno XX.XXX.XXX-X y dígito verificador matemáticamente
- **Análisis de documentos**: Compara documentos requeridos vs. documentos adjuntos
- **Decisión automática**: Determina si aprobar o rechazar el caso

### 🎨 Interfaz Moderna
- **Landing page profesional**: Presentación elegante del producto
- **UI/UX intuitiva**: Diseño moderno con gradientes y animaciones
- **Responsive design**: Funciona perfectamente en desktop y móvil
- **Iconografía consistente**: Lucide React para una experiencia visual coherente

### 📋 Funcionalidades
- **Ejemplos predefinidos**: Casos de prueba para diferentes escenarios
- **Input flexible**: Pega correos o escribe desde cero
- **Validación visual**: Checkmarks y X para documentos presentes/faltantes
- **Respuestas automáticas**: Genera borradores de correos de respuesta
- **Historial de análisis**: Timestamp de cada procesamiento

## 🛠️ Tecnologías

- **Frontend**: React 19.1.1 + TypeScript + Vite
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **AI**: Google Gemini 2.5-flash-preview-09-2025
- **Styling**: CSS Modules con gradientes y efectos glassmorphism
- **Deployment**: Vercel con dominio personalizado
- **Control de versiones**: Git

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/jrussellrichards/aquiles_challenge.git
cd aquiles_challenge/frontend

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Build para producción
```bash
npm run build
npm run preview
```

## 🌐 Despliegue

El proyecto está desplegado en Vercel con dominio personalizado:
- **URL**: https://aquiles-bci.duckdns.org
- **Landing Page**: `/`
- **Aplicación Principal**: `/app`

## 📊 Casos de Uso

### ✅ Caso Aprobado
- Nueva Sociedad con todos los documentos requeridos
- RUT válido
- Documentos completos

### ❌ Caso Rechazado
- Documentos faltantes
- RUT inválido
- Información incompleta

### ⚠️ Caso con Observaciones
- Documentos extras no requeridos
- Información adicional necesaria

## 🤖 Cómo Funciona Aquiles

1. **Recepción**: Analiza el contenido del email del ejecutivo comercial
2. **Intención**: Identifica el tipo de trámite solicitado
3. **Validación**: Verifica RUT y documentos adjuntos
4. **Decisión**: Determina si asignar a abogado o devolver para corrección
5. **Respuesta**: Genera borrador de respuesta profesional si es necesario

## 📁 Estructura del Proyecto

```
aquiles_challenge/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.tsx          # Router principal
│   │   │   ├── AppMain.tsx      # Aplicación principal
│   │   │   ├── Landing.tsx      # Página de inicio
│   │   │   ├── App.css          # Estilos globales
│   │   │   ├── AppMain.css      # Estilos de la app
│   │   │   └── Landing.css      # Estilos del landing
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── .gitignore
└── README.md
```

## 🎯 MVP Features

- ✅ Análisis automático con IA
- ✅ Validación de RUT chileno
- ✅ Verificación de documentos
- ✅ Interfaz profesional
- ✅ Landing page
- ✅ Despliegue en web
- ✅ Responsive design
- ✅ Ejemplos predefinidos

## 🔮 Próximas Mejoras

- [ ] Integración con backend real
- [ ] Base de datos para casos
- [ ] Autenticación de usuarios
- [ ] Dashboard administrativo
- [ ] API REST para integraciones
- [ ] Notificaciones por email
- [ ] Análisis de archivos adjuntos reales

## 📄 Licencia

Este proyecto es privado y propiedad de BCI.

## 👥 Autor

**Javier Richards**
- GitHub: [@jrussellrichards](https://github.com/jrussellrichards)

---

*Desarrollado como parte del challenge técnico de BCI - Noviembre 2025*