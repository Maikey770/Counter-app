// Import LitElement, html, and css from Lit library
import { LitElement, html, css } from "https://unpkg.com/lit@3.1.0?module";

class CounterApp extends LitElement {
  // Set up reactive properties
  static properties = {
    counter: { type: Number, reflect: true },
    min: { type: Number, reflect: true },
    max: { type: Number, reflect: true },
  };

  // Initialize values
  constructor() {
    super();
    this.counter = 0;
    this.min = 0;
    this.max = 10;
  }

  // Basic styles for layout and buttons
  static styles = css`
    :host {
      display: inline-block;
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 12px;
      margin: 8px;
      --gap: 12px;
      --btn-pad: 8px 14px;
      --count-color: #222;
    }

    .wrap {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: var(--gap);
    }

    .num {
      font-size: 48px;
      line-height: 1;
      color: var(--count-color);
    }

    .row {
      display: inline-flex;
      gap: var(--gap);
    }

    button {
      padding: var(--btn-pad);
      font-size: 18px;
      border-radius: 10px;
      border: 1px solid #ccc;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s;
    }

    /* hover effect */
    button:hover:not(:disabled),
    button:focus:not(:disabled) {
      background: #e0e7ff;
      border-color: #6b21a8;
      color: #fff;
    }

    /* disabled buttons */
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  // Render the counter display and buttons
  render() {
    const color = this._colorFor(this.counter);
    return html`
      <confetti-container id="confetti">
        <div class="wrap" style="--count-color:${color}">
          <div class="num">${this.counter}</div>
          <div class="row">
            <button @click=${this.dec} ?disabled=${this.counter === this.min}>-</button>
            <button @click=${this.inc} ?disabled=${this.counter === this.max}>+</button>
          </div>
        </div>
      </confetti-container>
    `;
  }

  // Add 1 to counter
  inc() {
    if (this.counter < this.max) {
      this.counter++;
    }
  }

  // Subtract 1 from counter
  dec() {
    if (this.counter > this.min) {
      this.counter--;
    }
  }

  // Runs when something updates
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    // When counter reaches 21, show confetti
    if (changedProperties.has("counter")) {
      if (this.counter === 21) {
        this.makeItRain();
      }
    }
  }

  // Load confetti animation when called
  makeItRain() {
    const load = (src) =>
      import(src).then(() => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti")?.setAttribute("popped", "");
        }, 0);
      });

    // Try a few different links to load confetti
    load("@haxtheweb/multiple-choice/lib/confetti-container.js")
      .catch(() =>
        load("https://unpkg.com/@haxtheweb/multiple-choice@latest/lib/confetti-container.js?module")
      )
      .catch(() =>
        load("https://cdn.jsdelivr.net/npm/@haxtheweb/multiple-choice@latest/lib/confetti-container.js")
      )
      .catch((e) => console.warn("confetti load failed", e));
  }

  // Change number color based on value
  _colorFor(v) {
    if (v === this.min || v === this.max) return "#3b82f6"; // blue
    if (v >= 21) return "#ef4444"; // red
    if (v >= 18) return "#f59e0b"; // orange
    return "#222"; // black
  }
}

// Register the custom element
customElements.define("counter-app", CounterApp);
