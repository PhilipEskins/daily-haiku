import './sass/styles.scss';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { dayReturn, haikuPusher } from './daily-haiku.js';

$(document).ready(function() {
  $('.dateInput').submit(function(event) {
    event.preventDefault();
    $("#field").empty();
    const month = $("#month").val();
    const day = $("#date").val();
    const year = $("#year").val();
    const showDate = dayReturn(day, month, year);
    if (showDate === false) {
      $("#field").append("<li>Not a vaild date</li>");
      $("#field").append("<li>There is no haiku, here for you, no there is not, try a valid date.</li>");
    } else {
      $("#field").append("<li> The month is " + month + "</li>");
      $("#field").append("<li> The day is " + day + "</li>");
      $("#field").append("<li> The year is " + year + "</li>");
      $("#field").append("<li> The day of the week is " + showDate + "</li>");
      const weekHaiku = haikuPusher(showDate);
      $("#field").append("<li> Your daily Haiku..." + showDate + weekHaiku + "</li>");
    }
  });
});
