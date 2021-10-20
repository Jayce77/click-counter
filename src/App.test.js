import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });
const setUp = () => shallow(<App />);

const findByTestAttr = (wrapper, attr) => wrapper.find(`[data-test="${attr}"]`);

test('renders without error', () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setUp();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
  const wrapper = setUp();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

test('click button increments counter display', () => {
  const wrapper = setUp();
  // find button
  const button = findByTestAttr(wrapper, 'increment-button');
  // click button
  button.simulate('click');
  // find the display and test that the number has been incremented
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});