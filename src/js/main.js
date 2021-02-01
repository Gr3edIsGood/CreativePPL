import '../scss/style.scss';
import '../index.html';
import $ from 'jquery';
import 'slick-carousel';
import 'swiper';
import './slider';


let sumSlider = document.getElementById("sumRange");
let dateSlider = document.getElementById("dateRange");
let outputSum = document.getElementById("sumTotal");
let outputDate = document.getElementById("dateTotal");

outputSum.innerHTML = sumSlider.value;
outputDate.innerHTML = dateSlider.value;


sumSlider.oninput = function() {
    outputSum.innerHTML = this.value;
}
dateSlider.oninput = function() {
    outputDate.innerHTML = this.value;
}
