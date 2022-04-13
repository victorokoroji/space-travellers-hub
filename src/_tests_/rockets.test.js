import missionReducer from '../redux/missions/mission'
import { getMissions } from '../redux/missions/mission'

describe('reducer should return lists of missions', () => {
	it('should return lists of objects in the state', () => {
		const previousState = []
		expect(missionReducer(previousState, getMissions())).toBeDefined()
	})
})
