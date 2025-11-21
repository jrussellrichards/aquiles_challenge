# Despliegue en Vercel

Instrucciones para desplegar la aplicación `frontend` en Vercel (producción o preview).

Pre-requisitos
- Tener cuenta en Vercel (https://vercel.com)
- Tener el repo conectado (GitHub/GitLab/Bitbucket) o la CLI de Vercel instalada

Archivos clave
- `vercel.json`: configuración para build estático y rewrite SPA (ya incluido en este directorio)
- `package.json`: `build` usa `tsc -b && vite build` y el output por defecto de Vite es `dist`

Opciones de despliegue

1) Despliegue vía Git (recomendado)

- Conecta el repositorio a Vercel desde la UI web. Selecciona la carpeta `frontend` como root del proyecto si el repo es monorepo.
- En la configuración del proyecto en Vercel, asegúrate de que:
  - Build Command: `npm run build`
  - Output Directory: `dist`

2) Despliegue vía CLI (rápido desde la máquina local)

Instalar la CLI (si no está instalada):
```bash
npm i -g vercel
# o
pnpm add -g vercel
```

Autenticarse y desplegar (desde el directorio `frontend`):
```bash
cd /Users/jrichav/projects/aquiles/frontend
vercel login
vercel --prod
```

Esto detectará el `package.json` y ejecutará `npm run build`. Confirma `dist` como directorio de salida si te lo pregunta.

Variables de entorno
- Si el frontend depende de claves (APIs, tokens), configúralas en la sección **Environment Variables** del proyecto en Vercel.
- Ejemplos comunes: `VITE_API_URL`, `VITE_GEMINI_KEY`, `OPENAI_API_KEY` (nombrar con prefijo `VITE_` si las quieres exponer al bundle cliente).

Notas sobre seguridad
- Nunca expongas claves sensibles en el código. Usa las variables de entorno de Vercel.

Verificación local
- Para probar el build localmente antes de subir:
```bash
cd /Users/jrichav/projects/aquiles/frontend
npm install
npm run build
npm run preview
```

Soporte
- Si el push falla por permisos, revisa SSH keys o token de acceso para tu proveedor Git (GitHub)
- Si necesitas ayuda con variables de entorno o con la integración Git → Vercel, puedo generar pasos más detallados.
