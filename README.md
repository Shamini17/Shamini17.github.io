## UI/UX Learner Portfolio

This is a simple, honest portfolio for a **UI/UX Design learner**. It focuses on learning, practice, and growth instead of claiming expertise.

You can open it directly in a browser — no build tools needed.

### How to run

- **Option 1:** Double–click `index.html` to open it in your browser.
- **Option 2:** Right–click `index.html` → “Open with” → choose your browser.

### What to customize

- **Your name**
  - Search in `index.html` for `Your Name` and replace all of them with your real name.
  - This appears in:
    - The header brand area
    - The hero title
    - The footer line

- **Contact details**
  - In `index.html`, search for `your.email@example.com` and replace it with your real email.
  - Search for `LinkedIn Profile` and replace the `href="#"` with your actual LinkedIn URL.

- **Practice works**
  - In the **Design Practice Works** section of `index.html`, you’ll see four example projects.
  - For each `<article class="work-card">`, you can change:
    - The title (`<h3>…</h3>`)
    - The type / tag (poster, logo, UI, etc.)
    - The tool used (`Tool: Figma` / `Tool: Canva`, etc.)
    - The three descriptions:
      - **What I tried**
      - **What I learned**
      - **Next time / notes**

- **Links to platforms**
  - In the **Tools & Platforms** section, replace `href="#"` with real links if you have:
    - Behance
    - Dribbble
    - GitHub (optional)

### Changing the look

- **Colors & gradients**
  - Open `styles.css` and look at the `:root` section at the top.
  - You can adjust the pastel colors by changing:
    - `--accent`, `--accent-soft`, `--accent-2`
    - Background gradients used in `body` if you want a different feel.

- **Micro–interactions**
  - Small animations (scroll reveal, buttons, and mobile nav) are handled in `styles.css` and `script.js`.
  - If you don’t want the scroll–reveal effect, you can remove or comment out the IntersectionObserver logic in `script.js`.

### Sections included

- **Hero:** Name, tagline, intro, and CTAs.
- **About:** Learner–focused story and practice style.
- **Skills:** Marked as “Learning”, “Practicing”, or “Exploring”.
- **Design Practice Works:** With “what I tried / what I learned / tool used”.
- **Learning Journey:** Past, present, and next steps.
- **Tools & Platforms:** Design tools and inspiration sites.
- **Contact:** Email, LinkedIn, and how others can help you grow.


