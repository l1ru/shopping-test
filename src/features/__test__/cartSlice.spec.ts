import cartReducer, {
  CartState,
  decrement,
  increment,
  toggleOpened
} from '../cartSlice'

describe('cart reducer', () => {
  const initialState: CartState = {
    opened: false,
    products: [
      {
        id: 1,
        quantity: 2,
      },
      {
        id: 2,
        quantity: 1,
      }
    ]
  }
  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
      products: [],
      opened: false,
    })
  })

  it("should handle increment", () => {
    const actual = cartReducer(initialState, increment(1));
    expect(actual.products.find(product => product.id === 1)?.quantity).toEqual(3)
  })

  it("should create a new product in cart", () => {
    const actual = cartReducer(initialState, increment(3))
    expect(actual.products.length).toEqual(3)
  })

  it("should handle decrement", () => {
    const actual = cartReducer(initialState, decrement(2))
    expect(actual.products.length).toEqual(2)
  })

  it("should toggle the cart", () => {
    const actual  = cartReducer(initialState, toggleOpened())
    expect(actual.opened).toEqual(true)
  })
})