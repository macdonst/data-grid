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
      enhance-data-grid-row[type='header'],
      enhance-data-grid-row[type='sticky-header'] {
        font-weight: 600;
      }
      enhance-data-grid-row[type='sticky-header'] {
        background-color: lightgrey;
        position: sticky;
        top: 0;
      }
    </style>

    <slot></slot>
  `
}

export { EnhanceDataGridRow }
