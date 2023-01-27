import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store';

import MyList from './MyList';

const toDos = ['Buy ice cream', 'Eat ice cream', 'Go to the gym'];

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <MyList theList={toDos} />
    </StrictMode>
  </Provider>
);
