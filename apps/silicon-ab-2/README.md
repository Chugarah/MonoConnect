# Silicon 2.0.0

Hej och välkommen till mitt slutprojekt för kursen JavaScript Frontend. Jag kommer att uppdatera denna README och
även finputsa på detta projekt efter att lärarna har graderat det.

Detta projekt ligger under en mono-repo och det kan vara så att jag omvandlar denna till ett vanligt repo eller
får godkännande av lärarna att fortsätta bygga vidare på detta monorepo.

Får jag godkännande kommer jag att lägga in andra projekt som jag har fått lära mig från utbildningen.
Så fort lärarna har validerat och graderat projektet kommer jag att då och då finputsa på detta. Planen
är att React/TypeScript är den ena yin där C# är yang. :)

## Lärdomar & Inspiration

Under projektets gång har jag lärt mig extremt mycket genom:

- **Lärarnas Vägledning**: Joakim och Hans har bidragit med ovärderlig kunskap och stöd
- **AI-Assistans**: Använt AI för att förstå och generera komplexa kodsnuttar
- **Video-Tutorials**: Särskilt användbara resurser har varit:
  - [useContext Tutorial](https://youtu.be/n0idOMaWbF8?si=jChs9OWj6UoVP-pF) - Hjälpte mig förstå state management
  - [Theme Switching Guide](https://youtu.be/bnMaCZzOX1Q?si=eurR12lXr9HxdRAo) - Gjorde det möjligt att implementera tema-växling

## Tekniska Höjdpunkter

### React Hooks & Context

- **useContext**: Implementerat för:
  - Tema-hantering
  - API-datahämtning

### State Management

- **useState**: Använt för:
  - Formulärhantering
  - Accordion-komponenter
  - Testimonials
  - Animationer

### UI Components

- **shadcn/ui**: Moderna, tillgängliga komponenter
- **React Hook Form**: Effektiv formulärhantering
- **Zod**: Robust validering av formulär och data

## Teknologier

![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?style=flat-square&logo=tailwind-css)
![SASS](https://img.shields.io/badge/SASS-1.81.0-CC6699?style=flat-square&logo=sass)
![Zod](https://img.shields.io/badge/Zod-3.23.8-blue?style=flat-square)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.53.2-pink?style=flat-square)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11.17-black?style=flat-square&logo=framer)

## Kodkomplexitet & AI-Användning

Under projektets utveckling har jag använt en kombination av egen kodning och AI-assistans. Här är en översikt över olika delar av projektet och deras komplexitetsnivåer:

### Kod Jag Skrev Själv

- **Grundläggande Komponenter**: Enklare React-komponenter med JSX och grundläggande styling
- **useState Implementationer**: Hantering av formulär och enklare tillståndsändringar
- **Komponentstruktur**: Uppdelning av komponenter i logiska mappar och filer
- **Grundläggande SCSS**: Basal styling och responsiv design

### AI-Assisterad Kod

- **Avancerad TypeScript Konfiguration**: Komplexa TypeScript-inställningar och type definitions
- **Komplexa SCSS Patterns**: Avancerade SCSS-strukturer med mixins och responsiva layouts
- **Context Implementationer**: Avancerad state management med React Context

### Hybrid-Utveckling (Kombination)

- **Komponentlogik**: Började med egen grundstruktur, använt AI för optimering
- **Styling**: Skrev bas-CSS själv, använt AI för komplexa animationer och responsivitet
- **Form Validering**: Implementerade grundläggande validering själv, använt AI för komplex Zod-integration

### Lärdomar

- Började med att skriva enkel React/JSX-kod själv
- Gradvis lärt mig mer avancerade mönster genom att studera AI-genererad kod
- Utvecklat förståelse för:
  - Komponentstrukturering
  - State management patterns
  - TypeScript best practices
  - SCSS/CSS arkitektur

### Utvecklingsprocess

1. **Fas 1**: Skrev grundläggande komponenter och funktionalitet själv
2. **Fas 2**: Använde AI för att förbättra och optimera koden
3. **Fas 3**: Lärde mig av AI-genererad kod för att förbättra mina egna kodningsfärdigheter
4. **Fas 4**: Började implementera mer avancerade mönster själv baserat på tidigare lärdomar

Detta projekt representerar min resa från nybörjare till mer erfaren utvecklare, där AI har varit ett värdefullt verktyg för inlärning och utveckling.

## Projektstruktur

### SCSS-Arkitektur

- Använder BEM-metodologi för namngivning
- Strukturerad i moduler för bättre underhåll
- Responsiv design med mixins och funktioner

### Komponenter

- Återanvändbara UI-komponenter
- Implementering av tillgänglighet (ARIA)
- Bildoptimering med Next.js Image

## Utmaningar & Lösningar

### Responsiv Design

- Implementerat mobile-first approach
- Använt Tailwind breakpoints tillsammans med custom SCSS mixins
- Anpassat komponenter för olika skärmstorlekar

### Prestanda

- Optimerat bildladdning
- Implementerat lazy loading
- Använt Next.js built-in optimeringar

### Framtida Förbättringar

- Migrera helt till CSS Modules och Tailwind
- Förbättra tillgänglighet ytterligare
- Implementera fler animationer med Framer Motion
- Utöka test coverage
- Bygga om Kontakt sidan helt.

Dessa tillägg skulle ge en mer komplett bild av projektet och dess tekniska aspekter. Jag ser också att du har en del avancerad SCSS-kod och komponentstruktur som är värd att lyfta fram mer i dokumentationen.
