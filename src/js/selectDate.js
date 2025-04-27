'use strict';
import moment from "moment";

export default function selectDate() {
    const now = moment().format("YYYY-MM-DD");

    const inputDate = document.querySelector('#date');
    const inputDateTo = document.querySelector('#date-to');
    const inputDateBack = document.querySelector('#date-back');

    inputDate.min = now;
    inputDateTo.min = now;

    inputDateTo.addEventListener('change', () => {
        inputDateBack.min = inputDateTo.value;
    })
}
