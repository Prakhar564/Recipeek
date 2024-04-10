  import React from 'react';
  import { shallow } from 'enzyme';
  import App from 'frontend\src\App.js';
  describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
    shallow(<App />);
  });
  });