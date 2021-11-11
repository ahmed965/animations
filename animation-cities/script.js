(function () {
  //Dom selectors
  const cities = document.querySelectorAll(".city");
  let i = 0;
  //Events and functions
  setInterval(() => {
    hideAllcities();
    cities[i].classList.add("show");
    i++;
    if (i == cities.length - 1) {
      i = 0;
    }
  }, 1500);

  function hideAllcities() {
    cities.forEach((city) => city.classList.remove("show"));
  }
})();
