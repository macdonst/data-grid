function EnhanceDataGrid({ html, state = {} }) {
  const { attrs, store } = state
  const { columns, key } = attrs
  const header = attrs?.header === ''
  const sticky = attrs?.sticky === ''
  const templateColumns = detectColumns({ columns, key, store })
  const rows = rowsFromStore({ key, store, header, sticky })

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
      enhance-data-grid[header] enhance-data-grid-row:first-of-type {
        font-weight: 600;
      }
      enhance-data-grid[header] enhance-data-grid-row:first-of-type {
        font-weight: 600;
        background-color: lightgrey;
        position: sticky;
        top: 0;
      }
      @media only screen and (max-width: 25em) {
        enhance-data-grid enhance-data-grid-row {
          display: grid;
          grid-template-rows: ${templateColumns};
          grid-template-columns: 1fr;
        }
        enhance-data-grid[header] enhance-data-grid-row:first-of-type,
        enhance-data-grid[sticky] enhance-data-grid-row:first-of-type {
          display: none;
        }
        enhance-data-grid-cell {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        enhance-data-grid-cell::before {
          content: attr(data-name);
          font-weight: 600;
        }
      }
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

function rowsFromStore({ key, store, header, sticky }) {
  if (store[key]) {
    const hasHeader = header || sticky
    const headerRow = store[key][0]
    return store[key]
      .map(
        (row) =>
          `<enhance-data-grid-row>${row
            .map(
              (cell, index) =>
                `<enhance-data-grid-cell ${
                  hasHeader ? `data-name="${headerRow[index]}"` : ''
                }>${cell}</enhance-data-grid-cell>`
            )
            .join('')}</enhance-data-grid-row>`
      )
      .join('')
  } else {
    return ''
  }
}

export { EnhanceDataGrid }
