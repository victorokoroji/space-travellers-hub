import rocketReducer from '../redux/rockets/rockets'
import { fetchRocketsFromServer } from '../redux/rockets/rockets'

describe('reducer should return lists of rockets', () => {
	it('should return lists of rockets in the state', () => {
		const previousState = []
		expect(rocketReducer(previousState, fetchRocketsFromServer())).toBeDefined()
	})
})
