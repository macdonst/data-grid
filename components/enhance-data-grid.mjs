function EnhanceDataGrid({ html, state = {} }) {
  const { columns = 1 } = state.attrs
  const templateColumns = Number.isInteger(Number(columns))
    ? `repeat(${columns}, 1fr)`
    : columns

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
    </style>

    <slot></slot>
  `
}

export { EnhanceDataGrid }
