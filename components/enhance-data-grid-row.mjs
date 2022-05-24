function EnhanceDataGridRow({ html, state = {} }) {
  const { type = '' } = state.attrs
  console.log(state.attrs)
  if (type) {
    console.log('we got a header')
  }

  return html`
    <style>
      enhance-data-grid-row {
        padding: 1px 0px;
        box-sizing: border-box;
        width: 100%;
        font-weight: 400;
        border-bottom: 1px solid lightgrey;
      }
      enhance-data-grid-row[type='header'] {
        font-weight: 600;
      }
    </style>

    <slot></slot>
  `
}

export { EnhanceDataGridRow }
