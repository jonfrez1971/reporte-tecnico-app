# Plan de Implementación — reporte-tecnico-app

Este repositorio contiene el scaffolding inicial para la Aplicación de Reportes Técnicos, Cotizaciones y Cuentas de Cobro — SPA / PWA enfocada en técnicos y gestores de servicio.

Decisiones del proyecto (confirmadas):
- Marca configurable: panel de Ajustes para logo, razón social, NIT, dirección, teléfono y términos; estos datos se incorporan en PDFs.
- Base de datos local offline-first: IndexedDB (con estructura y mock para sincronización futura con Firebase/Supabase).
- Frontend: React + TypeScript + Vite + TailwindCSS (mobile-first, tema oscuro por defecto).
- Funcionalidades iniciales: Dashboard, Crear Reporte (firma + fotos), Cotizaciones, Cuentas de Cobro, Ajustes de Marca, exportar PDF y compartir por WhatsApp.

Qué contiene este commit inicial:
- Scaffolding del frontend en la rama feature/init-scaffold
- Configuraciones básicas (Vite, TypeScript, Tailwind, PWA)
- Ejemplo de creación de reporte con firma y generación de PDF local

Cómo continuar (rápido):
1. Clona el repositorio y cambia a la rama `feature/init-scaffold`.
2. Ejecuta:
   - `npm install`
   - `npm run dev`
3. Abrir http://localhost:5173 y verificar la página inicial.

Pruebas iniciales a realizar después del scaffolding:
- Crear Reporte: llenar formulario, dibujar firma y guardar localmente (IndexedDB).
- Generación de PDF: probar que el PDF se genera y aplica la marca del cliente.
- Compartir por WhatsApp: probar el enlace/funcionalidad de compartir.
- Offline: desconectar la red y verificar que los datos siguen guardándose localmente.
