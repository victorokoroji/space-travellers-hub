import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../../components/Mission';
import store from '../../redux/configureStore';

describe('mission component renders datas accurately', () => {
  test('expect mission component to render correctly', () => {
    const missionTest = render(
      <Provider store={store}>
        <Mission mission={store} />
      </Provider>,
    );
    expect(missionTest).toMatchSnapshot();
  });
});
