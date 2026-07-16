# Ambiya Dimas Galystan Portfolio — Design System

## Direction

The portfolio uses a premium editorial direction built around restraint, asymmetric composition, and strong content pacing. The opening preserves the phrase-led rhythm inspired by Danny White’s website; everything below it uses an original layout system designed around Ambiya’s existing CV content.

No portfolio copy, project information, experience, education, skills, links, or contact details are changed by this design system.

## Principles

1. **One focal point at a time.** The opening phrase, portrait, project visuals, and contact statement each receive their own moment.
2. **Asymmetry with alignment.** Compositions vary, but every element resolves to a shared twelve-column grid.
3. **Editorial flow instead of cards.** Content is separated with space and rules rather than boxes, shadows, or rounded containers.
4. **Typography by function.** Display, reading, and metadata each use a purpose-built typeface.
5. **Quiet interface.** There is no header, navigation chrome, floating control, or decorative interaction competing with the work.
6. **Responsive re-composition.** Mobile is not a scaled desktop layout; sections collapse into deliberate reading order.

## Typography

| Role | Typeface | Weight | Fluid range |
|---|---|---:|---:|
| Opening display | Libre Franklin | 600 | 44–67px |
| Headings and body | Instrument Sans | 400–600 | 16–50px |
| Labels and metadata | IBM Plex Mono | 400–500 | 11–12.5px |

The opening uses tight tracking and a `1.035` line height to preserve the compact Franklin Gothic character of the reference. Body copy uses a more open `1.55` line height. Mono is limited to dates, section numbers, tags, captions, and availability status.

## Color

### Light

| Token | Value |
|---|---:|
| Canvas | `#F1EFE9` |
| Media surface | `#E7E4DC` |
| Primary ink | `#171815` |
| Secondary ink | `#454740` |
| Muted ink | `#777A71` |
| Accent | `#687653` |

### Dark

| Token | Value |
|---|---:|
| Canvas | `#0B0D0B` |
| Media surface | `#131613` |
| Primary ink | `#F0EFE9` |
| Secondary ink | `#C5C8C0` |
| Muted ink | `#7E8379` |
| Accent | `#BDCAA0` |

Project visuals use one muted coral (`#C96D49`) and one cobalt (`#4149D8`) as controlled exceptions to the monochrome system.

## Grid and spacing

- Content maximum: `1312px` / `82rem`.
- Outer gutter: `20–56px`.
- Desktop foundation: twelve equal columns.
- Primary breakpoint: `1024px`.
- Tablet breakpoint: `760px`.
- Major section interval: `144–224px`.
- Section boundaries: 1px translucent rules.

## Section compositions

### Opening

- Begins 40vh down the desktop viewport and 25vh down mobile.
- Only the primary statement appears in the first viewport.
- The second phrase uses a smaller Instrument Sans display size.
- Supporting profile and availability text occupy separate desktop columns below the fold.
- Motion is a short opacity, blur, and vertical-position transition.

### Section headings

- Numbered automatically from `01` to `05`.
- Number, title, and description align to the twelve-column grid.
- Section titles are intentionally smaller than the opening and project imagery.

### Profile

- Portrait anchors the first four columns.
- Profile statement occupies the upper-right seven columns.
- Target role, duration, schedule, and contact form a four-part ledger below the statement.
- Mobile reading order is statement, portrait, then details.

### Experience and education

- Experience uses one compact record: a small company mark, role/company/date header, and numbered responsibility grid.
- Education uses compact full-width records with small brand marks and right-aligned date/status metadata.
- No cards or filled backgrounds.
- Dates use mono; titles use Instrument Sans; details remain subdued.
- Section titles sit near `28px`, row titles near `18px`, and supporting copy near `14.5px` on desktop so hierarchy stays visible without abrupt scale changes.

### Projects

- Each project receives a compact full-width horizontal directory row.
- The visual occupies four columns; all project information forms one cohesive eight-column content area on desktop.
- Outcomes use a compact two-column list with aligned separators instead of a stretched third column.
- Technology metadata and project actions share a restrained footer row.
- Every row follows the same reading direction to keep scanning calm and predictable.
- Evo-Botics uses a real two-image project diptych with separate GitHub and presentation-download actions.
- Descriptions are introduced by a small “What it does” label for faster recruiter scanning.
- Mobile always places the visual first and project detail second.
- Existing descriptions, project points, technology tags, and links remain intact.

### Skills

- A single compact capability index aligns each numbered category with its technologies.
- The section uses the same restrained heading scale and spacing rhythm as the portfolio case-study sections.
- Soft skills, languages, and interests form one secondary three-column band.

### Contact and footer

- Contact is a minimum 60vh closing composition.
- The prompt and action occupy opposite sides of the desktop grid.
- Footer returns to a compact two-directory layout.

## Interaction and accessibility

- Semantic headings, lists, figures, links, and sections are retained.
- System light/dark preference is respected automatically.
- Hover motion is limited to a 1.5% project-media scale.
- `prefers-reduced-motion` removes animation and smooth scrolling.
- Every image has meaningful alternative text.
- Link underlines remain visible without requiring hover.
