const createJSProperties = (data) => ({
  name: data.name.replace(/[^a-zA-Z0-9 ]/g, ''),
  id: data.id.replace('*', ''),
  regions: data.regions,
  todayNewCases: data.today_new_open_cases,
  todayRecoveries: data.today_new_recovered,
  todayDeaths: data.today_new_deaths,
  todayOpenCases: data.today_open_cases,
  totalCasesRecorded: data.today_confirmed,
  totalRecoveriesRecorded: data.today_recovered,
  totalDeathsRecorded: data.today_deaths,
});

export default createJSProperties;
