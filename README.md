# Plan de Implementación — reporte-tecnico-app

Este repositorio contiene el scaffolding inicial para la Aplicación de Reportes Técnicos, Cotizaciones y Cuentas de Cobro — SPA / PWA enfocada en técnicos y gestores de servicio.

Decisiones del proyecto (confirmadas):
- Marca configurable: panel de Ajustes para logo, razón social, NIT, dirección, teléfono y términos; estos datos se incorporan en PDFs.
- Base de datos local offline-first: IndexedDB (con estructura y mock para sincronización futura con Firebase/Supabase).
- Frontend: React + TypeScript + Vite + TailwindCSS (mobile-first, tema oscuro por defecto).
- Funcionalidades iniciales: Dashboard, Crear Reporte (firma + fotos), Cotizaciones, Cuentas de Cobro, Ajustes de Marca, exportar PDF y compartir por WhatsApp.

Qué contiene este commit inicial:
- Resumen del plan y decisiones (este README).
- Se creará la rama `feature/init-scaffold` con el scaffolding del proyecto (Vite + React + TypeScript + Tailwind).

Cómo continuar (rápido):
1. Clona el repositorio y cambia a la rama `feature/init-scaffold` tras su creación.
2. Ejecuta:
   - `npm install`
   - `npm run dev`
3. Abrir http://localhost:5173 y verificar la página inicial.

Pruebas iniciales a realizar después del scaffolding:
- Crear Reporte: llenar formulario, dibujar firma y guardar localmente (IndexedDB).
- Generación de PDF: probar que el PDF se genera y aplica la marca del cliente.
- Compartir por WhatsApp: probar el enlace/funcionalidad de compartir.
- Offline: desconectar la red y verificar que los datos siguen guardándose localmente.

Siguiente acción: crear la rama `feature/init-scaffold` y subir el scaffolding inicial (estructura de archivos, configuración y ejemplos básicos). Si quieres que incluya más ejemplos o tests, dime qué prefieres y los agrego.

---

Fecha: 2026-06-21
Autor asistente: GitHub Copilot (on behalf of jonfrez1971)
