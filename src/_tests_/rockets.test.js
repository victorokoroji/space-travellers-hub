import missionReducer from '../redux/missions/mission'
import { getMissions } from '../redux/missions/mission'

describe('reducer should return lists of rockets', () => {
	it('should return lists of rockets in the state', () => {
		const previousState = []
		expect(missionReducer(previousState, getMissions())).toBeDefined()
	})
})
