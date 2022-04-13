import { fireEvent, render, screen } from '@testing-library/react'
import Mission from '../../components/Mission'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import joinMission from '../../redux/missions/mission'
import missionReducer from '../../redux/missions/mission'

it('expect mission component to render correctly', () => {
	const missionTest = render(
		<Provider store={store}>
			<Mission mission={store} />
		</Provider>,
	)
	expect(missionTest).toMatchSnapshot()
})

// it('expect reserved to be truthy', () => {
// 	render(
// 		<Provider store={store}>
// 			<Mission mission={store} />
// 		</Provider>,
// 	)
// 	fireEvent.click(screen.getByRole('button', { name: /Join Mission/i }))
	
// 	expect().toContain({ reserved: true })
// })
