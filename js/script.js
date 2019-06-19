    var button = document.querySelector(".button");
    var popup = document.querySelector(".search-form");
    var arrival = popup.querySelector(".date-arrival");

    var departure = popup.querySelector(".date-departure");
    var adultsIput = document.querySelector('#adults');
    var childrenIput = document.querySelector('#children');

    adultsIput.type = 'text';
    childrenIput.type = 'text';

    button.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("search-form-show");
      arrival.focus();
    });

    popup.addEventListener("submit", function (evt) {
      if (!arrival.value || !departure.value) {
        evt.preventDefault();
      }
      console.log("Нужно заполнить дату заезда и выезда");
    });

    popup.classList.remove("search-form-show");
