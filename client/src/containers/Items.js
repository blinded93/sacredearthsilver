import React, { Component, Fragment } from 'react'
import { CardDeck, Container } from 'react-bootstrap'
import Item from '../components/Item'
import { getItems } from '../actions/items'
import Loading from '../components/Loading'
import { connect } from 'react-redux'

class Items extends Component {
  componentWillMount() {
    if (this.props.items.data.length <= 0) this.props.getItems()
  }
  
  render() {
    const { loading, data } = this.props.items

    return (
      <Fragment>
        <Container className='mt-6'>
          <CardDeck>
            {
              loading ? <Loading /> : data.map(item => {
                return <Item key={item.id} {...item.attributes} />
              })
            }
          </CardDeck>
        </Container>
      </Fragment>
    )
  }
}

const mapsStateToProps = state => ({ items: state.items })

export default connect(mapsStateToProps, { getItems })(Items)