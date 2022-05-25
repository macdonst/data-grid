function EnhanceDataGrid({ html, state = {} }) {
  const { attrs, store } = state
  const { columns, key, header = 'default' } = attrs
  const templateColumns = detectColumns({ columns, key, store })
  const rows = rowsFromStore({ key, store })
  const defaultHeaderCss =
    header === 'default'
      ? `enhance-data-grid-row:first-of-type {
  font-weight: 600;
}`
      : ''
  const stickyHeaderCss =
    header === 'sticky'
      ? `enhance-data-grid-row:first-of-type {
    font-weight: 600;
    background-color: lightgrey;
    position: sticky;
    top: 0;
  }`
      : ''

  return html`
    <style>
      :host,
      enhance-data-grid {
        display: flex;
        position: relative;
        flex-direction: column;
        overflow: auto;
      }
      enhance-data-grid enhance-data-grid-row {
        display: grid;
        grid-template-columns: ${templateColumns};
      }

      ${defaultHeaderCss}
      ${stickyHeaderCss}
    </style>

    ${rows}
    <slot></slot>
  `
}

function detectColumns({ columns, key, store }) {
  if (columns) {
    return Number.isInteger(Number(columns))
      ? `repeat(${columns}, 1fr)`
      : columns
  } else if (store[key] && store[key][0]) {
    return `repeat(${store[key][0].length}, 1fr)`
  }
}

function rowsFromStore({ key, store }) {
  if (store[key]) {
    return store[key]
      .map(
        (row) =>
          `<enhance-data-grid-row>${row
            .map(
              (cell) =>
                `<enhance-data-grid-cell>${cell}</enhance-data-grid-cell>`
            )
            .join('')}</enhance-data-grid-row>`
      )
      .join('')
  } else {
    return ''
  }
}

export { EnhanceDataGrid }
