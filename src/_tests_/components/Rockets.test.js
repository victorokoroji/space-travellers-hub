import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../../pages/Rockets';
import store from '../../redux/configureStore';

describe('rockets component renders datas accurately', () => {
  test('expect rockets component to render correctly', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
