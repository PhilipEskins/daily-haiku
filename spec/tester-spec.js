import { dayReturn } from './../src/daily-haiku.js';

describe('dayReturn', function(){

  it('should return the day of the week for inputted date', function() {
  expect(dayReturn('03 13 2019')).toEqual('Wednesday')
  });

  it('should return the day of the week for inputted date', function() {
  expect(dayReturn('03 14 2019')).toEqual('Thursday')
  });
  
});
