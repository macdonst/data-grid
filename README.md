# @enhance/data-grid

## Installation

```bash
npm i @enhance/data-grid
```

## Setup

```javascript
import enhance from '@enhance/ssr'
import {
  EnhanceDataGrid,
  EnhanceDataGridRow,
  EnhanceDataGridCell
} from '@enhance/data-grid'

const elements = {
  'enhance-data-grid': EnhanceDataGrid,
  'enhance-data-grid-row': EnhanceDataGridRow,
  'enhance-data-grid-cell': EnhanceDataGridCell
}

const html = enhance({ elements })
const str = html`<enhance-data-grid>
    <enhance-data-grid-row>
        <enhance-data-grid-cell>Cell 1</enhance-data-grid-cell>
        <enhance-data-grid-cell>Cell 2</enhance-data-grid-cell>
        <enhance-data-grid-cell>Cell 3</enhance-data-grid-cell>
    </enhance-data-grid-row>
    </enhance-data-grid>`
```

## Usage

### Declarative

```html
<enhance-data-grid>
    <enhance-data-grid-row>
        <enhance-data-grid-cell>Cell 1</enhance-data-grid-cell>
        <enhance-data-grid-cell>Cell 2</enhance-data-grid-cell>
        <enhance-data-grid-cell>Cell 3</enhance-data-grid-cell>
    </enhance-data-grid-row>
    <enhance-data-grid-row>
        <enhance-data-grid-cell>Cell 1</enhance-data-grid-cell>
        <enhance-data-grid-cell>Cell 2</enhance-data-grid-cell>
        <enhance-data-grid-cell>Cell 3</enhance-data-grid-cell>
    </enhance-data-grid-row>
</enhance-data-grid>
```
