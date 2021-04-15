import { customElement, LitElement, html, css } from 'lit-element';

@customElement('animated-arrow')
export class AnimatedArrow extends LitElement {

  render() {
    return html`
      <svg height='100px' width='100px'>
        <defs>
          <filter id="filter" primitiveUnits="objectBoundingBox" >
            <feFlood flood-color="rgba(9,9,9, .8)"/>
            <feOffset>
              <animate attributeName="dx" from="0" to="1" dur="4s" repeatCount="indefinite" />
            </feOffset>
            <feComposite operator="in" in2="SourceGraphic" />
            <feComposite operator="over" in2="SourceGraphic" />
          </filter>
        </defs>
        <g id="filter" filter="url(#filter)">
          <path fill="purple" d="M94.36,42.07,60.16,7.86A10.73,10.73,0,0,0,45,23L61.17,39.2H13.22a10.72,10.72,0,0,0,0,21.44H61.33L45,77A10.73,10.73,0,1,0,60.16,92.14l34.2-34.21a10.68,10.68,0,0,0,3.14-7.58c0-.12,0-.24,0-.35A10.66,10.66,0,0,0,94.36,42.07Z"/>
        </g>
      </svg>
    `;
  }
}
