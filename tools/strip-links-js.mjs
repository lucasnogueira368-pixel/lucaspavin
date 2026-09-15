/**
 * Pos-build do /links: remove o JavaScript do React/Next do HTML exportado.
 *
 * O /links e 100% estatico — foto, veu, botoes e hovers sao HTML + CSS — mas
 * o App Router hidrata toda pagina, e no celular essa hidratacao (~200 KB de
 * JS) segurava o Lighthouse em ~81. Sem ela a pagina mede 99-100, com o
 * mesmo visual. Fica em pos-build, e nao num HTML escrito a mao, para a
 * pagina continuar vindo do page.tsx: cores, textos e links do WhatsApp
 * seguem sincronizados com o resto do site.
 *
 * O que sai: todo <script> e todo preload de script do out/links.html
 * (runtime do Next, payload RSC, JSON-LD do layout e os componentes do
 * Vercel Analytics/Speed Insights).
 * O que entra: os snippets oficiais de HTML puro do Analytics e do Speed
 * Insights, mais o ouvinte que transforma [data-track] em evento de clique.
 *
 * Roda no `npm run build` (package.json), que o vercel.json fixa como
 * buildCommand. Fica fora de scripts/ porque essa pasta e ignorada no git
 * e nao chegaria a Vercel.
 */
import { readFileSync, writeFileSync } from 'node:fs'

const FILE = new URL('../out/links.html', import.meta.url)

const SCRIPT_TAG = /<script\b[^>]*>[\s\S]*?<\/script>/g
const SCRIPT_PRELOAD = /<link\b[^>]*\bas="script"[^>]*>/g
const NEXT_CHUNK = /<script\b[^>]*\bsrc="[^"]*\/_next\/static\/chunks\/[^"]*\.js"/

// va/si enfileiram chamadas ate os scripts da Vercel carregarem (mesmo
// contrato do track() de @vercel/analytics). O ouvinte fica no document
// para cobrir os tres botoes com um unico handler.
const ANALYTICS = [
  '<script>',
  'window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};',
  'window.si=window.si||function(){(window.siq=window.siq||[]).push(arguments)};',
  "document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-track]');if(a)window.va('event',{name:a.getAttribute('data-track')})});",
  '</script>',
  '<script defer src="/_vercel/insights/script.js"></script>',
  '<script defer src="/_vercel/speed-insights/script.js"></script>',
].join('')

function stripLinksJs() {
  const html = readFileSync(FILE, 'utf8')

  // So processa HTML que ainda traz o runtime do Next. Contar <script> nao
  // basta: depois de processado o arquivo ainda tem os 3 do Analytics, e uma
  // segunda execucao passaria calada. Sem chunk do Next, ou o arquivo ja foi
  // processado ou o formato do export mudou — falhar alto e melhor que
  // publicar sem conferir.
  if (!NEXT_CHUNK.test(html)) {
    throw new Error(
      'nenhum script do Next em out/links.html — arquivo ja processado ou o formato do export mudou?',
    )
  }
  const scripts = html.match(SCRIPT_TAG)?.length ?? 0
  if (!html.includes('links-page') || !html.includes('</body>')) {
    throw new Error('out/links.html nao parece ser a pagina /links')
  }

  const stripped = html
    .replace(SCRIPT_TAG, '')
    .replace(SCRIPT_PRELOAD, '')
    .replace('</body>', `${ANALYTICS}</body>`)

  writeFileSync(FILE, stripped)

  const kb = (s) => (Buffer.byteLength(s) / 1024).toFixed(1)
  console.log(
    `✓ /links sem JS do React: ${scripts} scripts removidos, ${kb(html)} KB -> ${kb(stripped)} KB`,
  )
}

try {
  stripLinksJs()
} catch (error) {
  console.error('Error in strip-links-js:', error)
  throw new Error(`Failed to strip JS from /links: ${error.message}`)
}
