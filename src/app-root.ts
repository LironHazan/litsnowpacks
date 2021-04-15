import { customElement, LitElement, html, css } from 'lit-element';
import './arrow/arrow.component'
@customElement('app-root')
export class AppRoot extends LitElement {

  static get styles() {
    return css`
        .title {
          color: #000
        }
    `;
  }

  render() {
    return html`
      <div>
        <h3 class='title'> Animated SVG arrow as a LitElement</h3>
        <animated-arrow></animated-arrow>
      </div>
    `;
  }
}
