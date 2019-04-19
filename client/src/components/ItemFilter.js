import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import { getCategories } from '../actions/categories'

class ItemFilter extends Component {
  render() {
    const { changeFilter, selected } = this.props

    return (
      <Fragment>
        <Form
          id='filter-items-select'
          className='pb-2'
          inline>
          <Form.Group>
            <Form.Label>
              <span
                className='font-weight-bold pr-3'>Filter:
              </span>
            </Form.Label>
              <Form.Control
                onChange={changeFilter}
                value={selected}
                as='select'>
                  <option>All</option>
                  <option>Ring</option>
                  <option>Necklace</option>
              </Form.Control>
          </Form.Group>
        </Form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({ categories: state.categories })

export default connect(mapStateToProps, { getCategories })(ItemFilter)