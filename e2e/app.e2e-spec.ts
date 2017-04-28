import { WorkoutTrackerPage } from './app.po';

describe('workout-tracker App', function() {
  let page: WorkoutTrackerPage;

  beforeEach(() => {
    page = new WorkoutTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
