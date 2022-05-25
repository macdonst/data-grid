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

## API

### enhance-data-grid

**Fields**

| Name | Type | Default | Description |
| ---- | ---- | ---- | ---- |
| `columns` | `Integer` or `String` | 1 | If the `columns` attribute is an integer then each grid row will be divided into that many equally sized columns. It would be equivalent to `grid-template-columns: repeat(columns, 1fr)`. Otherwise, if the `columns` attribute is a string then it should be a valid [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) value. |

### enhance-data-grid-row

**Fields**

| Name | Type | Default | Description |
| ---- | ---- | ---- | ---- |
| `type` | `String` |  | If the `type` attribute is not provided then no additional styling is applied to the row. If the `type` attribute is set to `header` then the rows text will appear bold. If the `type` attribute is set to `sticky-header` the then the rows text will appear in bold, a background color appears behind the header row and that row will remain at the top of the data grid when scrolling rows.  |

