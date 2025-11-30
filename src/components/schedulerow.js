// Header row for the schedule band
import { LitElement, html, css } from "lit";

export class ScheduleRow extends LitElement {
  static properties = {
    heading: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    h2 {
      margin: 0;
      font-size: 1.1rem;
    }

    p {
      margin: 0;
      font-size: 0.85rem;
      opacity: 0.8;
    }
  `;

  constructor() {
    super();
    this.heading = "Upcoming Games";
  }

  render() {
    return html`
      <div class="row">
        <div>
          <h2>${this.heading}</h2>
          <p>Most recent schedule is always visible near the top of the site.</p>
        </div>
      </div>
    `;
  }
}

customElements.define("schedule-row", ScheduleRow);
