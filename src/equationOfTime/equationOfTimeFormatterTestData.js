export default [
  {
    input: 0,
    expectedMinutes: 0,
    expectedHours: 0,
    expectedSeconds: 0,
    expectedTotalSeconds: 0
  },
  {
    input: 0,
    expectedMinutes: 0,
    expectedHours: 0,
    expectedSeconds: 0,
    expectedTotalSeconds: 0
  },
  {
    input: 60,
    expectedMinutes: 60,
    expectedHours: 1,
    expectedSeconds: 0,
    expectedTotalSeconds: 3600
  },
  {
    input: -60,
    expectedMinutes: -60,
    expectedHours: -1,
    expectedSeconds: 0,
    expectedTotalSeconds: -3600
  },
  {
    input: 1,
    expectedMinutes: 1,
    expectedHours: 0.016666666666666666,
    expectedSeconds: 0,
    expectedTotalSeconds: 60
  },
  {
    input: -1,
    expectedMinutes: -1,
    expectedHours: -0.016666666666666666,
    expectedSeconds: 0,
    expectedTotalSeconds: -60
  },
  {
    input: -3.8548540199796353,
    expectedMinutes: -3,
    expectedHours: -0.06424756699966058,
    expectedSeconds: -51,
    expectedTotalSeconds: -231
  },
  {
    input: 3.8548540199796353,
    expectedMinutes: 3,
    expectedHours: 0.06424756699966058,
    expectedSeconds: 51,
    expectedTotalSeconds: 231
  },
  {
    input: 14.5,
    expectedMinutes: 14,
    expectedHours: 0.24166666666666667,
    expectedSeconds: 30,
    expectedTotalSeconds: 870
  },
  {
    input: -14.5,
    expectedMinutes: -14,
    expectedHours: -0.24166666666666667,
    expectedSeconds: -30,
    expectedTotalSeconds: -870
  },
  {
    input: -5.11701042,
    expectedMinutes: -5,
    expectedHours: -0.085283507,
    expectedSeconds: -7,
    expectedTotalSeconds: -307
  },
  {
    input: 5.11701042,
    expectedMinutes: 5,
    expectedHours: 0.085283507,
    expectedSeconds: 7,
    expectedTotalSeconds: 307
  },
  {
    input: 1.69638174,
    expectedMinutes: 1,
    expectedHours: 0.028273029,
    expectedSeconds: 42,
    expectedTotalSeconds: 102
  },
  {
    input: -1.69638174,
    expectedMinutes: -1,
    expectedHours: -0.028273029,
    expectedSeconds: -42,
    expectedTotalSeconds: -102
  },
  {
    input: -1.008836242176637,
    expectedMinutes: -1,
    expectedHours: -0.016813937369610617,
    expectedSeconds: -1,
    expectedTotalSeconds: -61
  },
  {
    input: 1.008836242176637,
    expectedMinutes: 1,
    expectedHours: 0.016813937369610617,
    expectedSeconds: 1,
    expectedTotalSeconds: 61
  },
  {
    input: 0.990245274045415,
    expectedMinutes: 0,
    expectedHours: 0.016504087900756918,
    expectedSeconds: 59,
    expectedTotalSeconds: 59
  },
  {
    input: -0.990245274045415,
    expectedMinutes: 0,
    expectedHours: -0.016504087900756918,
    expectedSeconds: -59,
    expectedTotalSeconds: -59
  }
];