const getSunsetTimeBuilder = (getNoonTime, getHourAngle) => {
  const getSunsetTime = (date, latitude, longitude) => {
    const solarNoonUtc = getNoonTime(date, longitude);
    const sunsetAngleOfSunOnHorizon = -0.833333333;
    const hourAngleAtSunrise = getHourAngle(
      date,
      latitude,
      sunsetAngleOfSunOnHorizon
    );

    return addHours(solarNoonUtc, hourAngleAtSunrise);
  };

  const addHours = (subject, scientificDecimalTime) => {
    const time = subject.getTime() + scientificDecimalTime * 60 * 60 * 1000;
    return new Date(time);
  };

  return Object.freeze({
    getSunsetDateTimeUtc: (date, latitude, longitude) =>
      getSunsetTime(date, latitude, longitude)
  });
};

export default getSunsetTimeBuilder;
