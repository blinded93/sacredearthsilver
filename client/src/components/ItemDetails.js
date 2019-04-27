import React, { Fragment } from 'react'
import { Table } from  'react-bootstrap'
import ItemDetailsBtn from './ItemDetailsBtn'

const ItemDetails = props => {
  const { item, toggleDetails, caret, action } = props
  const yesOrNo = boolean => boolean ? "Yes" : "No"
  const { size,
          adjustable,
          category,
          customizable,
          materials,
          recycled,
          status
        } = item
  
  return (
    <Fragment>
      <div className={`item-details-table ${action === 'Show' ? 'closed' : ''}`}>
        <Table
          size='sm'
          borderless>
            <tbody>
              <tr><td>Size:</td><td>{size}</td></tr>
              <tr><td>Adjustable:</td><td>{yesOrNo(adjustable)}</td></tr>
              <tr><td>Category:</td><td>{category.name}</td></tr>
              <tr><td>Customizable:</td><td>{yesOrNo(customizable)}</td></tr>
              <tr><td>Materials:</td><td>{materials}</td></tr>
              <tr><td>Recycled:</td><td>{yesOrNo(recycled)}</td></tr>
              <tr><td>Status:</td><td>{status}</td></tr>
            </tbody>
        </Table>
      </div>
      <ItemDetailsBtn
        caret={caret}
        action={action}
        toggleDetails={toggleDetails} />
    </Fragment>
  )
}

export default ItemDetails