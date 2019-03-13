import { dayReturn, haikuPusher } from './../src/daily-haiku.js';


describe('dayReturn', function(){

  it('should return the day of the week for inputted date', function() {
  expect(dayReturn("13", "03", "2019")).toEqual('Wednesday')
  });

  it('should return the day of the week for inputted date', function() {
  expect(dayReturn("14", "03", "2019")).toEqual('Thursday')
  });

  it('should return false if the day of the week does not exist', function() {
    expect(dayReturn("31", "04", "2019")).toEqual(false)
  });

  it('should return the correct haiku for the day of the week in relation to the day input', function() {
    expect(haikuPusher('Saturday')).toEqual(' thick in the jungle. My code has grown far too dense. Testing is awful.')
  });

  it('should return the correct haiku for the day of the week in relation to the day input', function() {
    expect(haikuPusher('Monday')).toEqual(' molasses. My flat stone, skipping along. Avoid still water.')
  });

});
