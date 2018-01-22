import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router'
import AppContainer from './AppContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <AppContainer />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
