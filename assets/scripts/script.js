var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : ''
};

var demo = new CountUp("day-counter", 0, 12, 0, 2.5, options);
demo.start();
