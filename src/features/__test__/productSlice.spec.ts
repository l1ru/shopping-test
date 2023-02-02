import productsReducer, {setProducts, productSlice, getProducts, ProductState} from "../productsSlice";

describe("product reducer", () => {
  const initialState: ProductState = {
    count: 0,
    products: []
  }
  it("should handle the api products", () => {
    const actual = productsReducer(initialState, handle())
    expect(actual.count).toEqual(8)
  })
})