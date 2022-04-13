import missionReducer from '../redux/missions/mission'
import {getMissions} from '../redux/missions/mission'

it('should return lists of objects in the state', () => {
  const previousState = []
	expect(missionReducer(previousState, getMissions())).toBeDefined()
})

