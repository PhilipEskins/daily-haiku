import './sass/styles.scss';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { dayReturn } from './daily-haiku.js';

$(document).ready(function() {
  $('.dateInput').submit(function(event) {
    event.preventDefault();
    $("#field").empty();
    const month = $("#month").val();
    const day = $("#date").val();
    const year = $("#year").val();
    const joinedDate = month + " " + day + " " + year;
    $("#field").append("<li> The month is " + month + "</li>");
    $("#field").append("<li> The day is " + day + "</li>");
    $("#field").append("<li> The year is " + year + "</li>");
    const showDate = dayReturn(joinedDate);
    $("#field").append("<li> The day of the week is " + showDate + "</li>");
    console.log(joinedDate);
  });
});
