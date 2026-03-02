# Action Plan (Refactoring & Responsiveness)

## 1. Extract Inline Templates
- **Goal:** Clean up all TypeScript component files (`.ts`) containing inline HTML code by moving them into external `.html` files.
- **Why:** To adhere to Angular best practices regarding separation of template structures from component logic.

## 2. Make Dashboard Fully Responsive
- **Goal:** Ensure the dashboard adapts elegantly to smaller display bounds, such as tablets and mobiles.
- **Strategy:**
  - Introduce fluid grid wrapping to `DashboardPage`.
  - Add specific flex breakpoints to handle widget stacking for stats, charts, and data boxes.
  - Implement a hidden canvas transition technique for the `Sidebar` on screens below 1024px wide.
  - Minimize and auto-size margins for the `DashboardLayout` container.

## 3. Apply Authentic Mock Text
- **Goal:** Replace arbitrary fallback text (long blind 'lorem ipsum' variants) originally used with text identical to the designer's image proof.
- **Why:** The UI strings like "DATA TEXT", "Consectetuer adipiscing", "LOREM IPSUM", and exact sizing blocks form part of the fundamental aesthetic flow that needs replicated verbatim.
