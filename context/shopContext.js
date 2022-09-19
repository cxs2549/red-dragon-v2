import React, { Component } from "react"
import client from "../lib/shopify"
const ShopContext = React.createContext()

class ShopProvider extends Component {
  state = {
    checkout: {},
  }
  componentDidMount() {
    if (localStorage.getItem('checkout_id')) {
      this.fetchCheckout(localStorage.getItem("checkout_id"))
    } else {
      this.createCheckout()
    }
  }
  createCheckout = async () => {
    const checkout = await client.checkout.create()
    localStorage.setItem("checkout_id", checkout.id)
    this.setState({ checkout: checkout })
  }
  fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout })
    })
  }
  addItemTocheckout = async (variantId, quantity) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ]
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemToAdd
    )
    this.setState({ checkout: checkout })
  }

  removeItem = async (checkoutId, lineItemIds) => {
    client.checkout
      .removeLineItems(checkoutId, lineItemIds)
      .then((checkout) => {
        this.setState({ checkout: checkout })
      })
  }

  updateItem = async (checkoutId, lineItems) => {
    client.checkout.updateLineItems(checkoutId, lineItems).then((checkout) => {
      this.setState({ checkout: checkout })
    })
  }

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          addItemTocheckout: this.addItemTocheckout,
          updateItem: this.updateItem,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}
const ShopConsumer = ShopContext.Consumer
export { ShopConsumer, ShopContext }
export default ShopProvider
