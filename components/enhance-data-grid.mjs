function EnhanceDataGrid({ html, state = {} }) {
  const { columns = 'repeat(3, 1fr)' } = state.attrs

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
        grid-template-columns: ${columns};
      }
    </style>

    <slot></slot>
  `
}

export { EnhanceDataGrid }
