import createJSProperties from '../CreateJSProperties';

it('should return object with valid JS properties', () => {
  const data = {
    name: 'Angola',
    id: '',
    regions: [],
    today_new_open_cases: 8599,
    today_new_recovered: 858,
    today_new_deaths: 858,
    today_open_cases: 303,
    today_confirmed: 304,
    today_recovered: 134,
    today_deaths: 455,
  };

  const newObj = createJSProperties(data);

  expect(newObj.name).toEqual(data.name);
  expect(newObj.todayNewCases).toEqual(data.today_new_open_cases);
  expect(newObj.totalCasesRecorded).toEqual(data.today_confirmed);
});
