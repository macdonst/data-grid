function EnhanceDataGridCell({ html }) {
  return html`
    <style>
      :host,
      enhance-data-grid-cell {
        padding: 0.667rem 0.222rem;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
      }
    </style>

    <slot></slot>
  `
}

export { EnhanceDataGridCell }
