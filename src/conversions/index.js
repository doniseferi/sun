import getTimeFromScientificDecimalTime from './getTimeFromScientificDecimalTime';
import getUtcDateTimeFromScientificDecimalTimeBuilder from './getUtcDateTimeFromScientificDecimalTime';

const getUtcDateTimeFromScientificDecimalTime = getUtcDateTimeFromScientificDecimalTimeBuilder(
  getTimeFromScientificDecimalTime
).getUtcDateTimeFromScientificDecimalTime;

export {
  getUtcDateTimeFromScientificDecimalTime,
  getTimeFromScientificDecimalTime,
  getUtcDateTimeFromScientificDecimalTimeBuilder
};
