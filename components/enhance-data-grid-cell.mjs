function EnhanceDataGridCell({ html }) {
  return html`
    <style>
      :host,
      enhance-data-grid-cell {
        padding: 12px 4px;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
      }
    </style>

    <slot></slot>
  `
}

export { EnhanceDataGridCell }
