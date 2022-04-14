import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import Navbar from '../../components/Navbar';

describe('component renders correctly', () => {
  test('Navbar should render correctly', () => {
    const navbar = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
