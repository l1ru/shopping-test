import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Home from '../pages/index';

describe('Home', () => {
  it('Renders the home', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  })

})