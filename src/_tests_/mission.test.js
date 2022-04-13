import missionReducer, { getMissions } from '../redux/missions/mission';

describe('reducer should return lists of missions', () => {
  it('should return lists of missions in the state', () => {
    const previousState = [];
    expect(missionReducer(previousState, getMissions())).toBeDefined();
  });
});
