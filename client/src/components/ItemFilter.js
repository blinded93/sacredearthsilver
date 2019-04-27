import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Form, InputGroup } from 'react-bootstrap'
import { getCategories } from '../actions/categories'

class ItemFilter extends Component {

  componentWillMount() {
    this.props.getCategories()
  }

  render() {
    const { changeFilter, selected, categories } = this.props

    return (
      <Fragment>
        <Form
          id='filter-items-select'
          className='pb-2'
          inline>
          <InputGroup
            className='filter'>
            <InputGroup.Prepend>
              <InputGroup.Text>
                Filter:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              onChange={changeFilter}
              value={selected}
              as='select'>
                {
                  categories.data.map((cat, i) => (
                      <option key={i}>{cat}</option>)
                  )
                }
            </Form.Control>
          </InputGroup>
        </Form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({ categories: state.categories })

export default connect(mapStateToProps, { getCategories })(ItemFilter)