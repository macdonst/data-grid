function EnhanceDataGridRow({ html }) {
  return html`
    <style>
      enhance-data-grid-row {
        padding: 1px 0px;
        box-sizing: border-box;
        width: 100%;
        font-weight: 400;
        border-bottom: 1px solid lightgrey;
      }
    </style>

    <slot></slot>
  `
}

export { EnhanceDataGridRow }
