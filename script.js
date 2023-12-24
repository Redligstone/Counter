const actions = Array.from(document.querySelectorAll("[data-action]"));
console.log(actions);
// hei, i am a new counter
// no I AM

// if counter !== 0, counter == counter's saved value
var counter = localStorage.getItem("counter") || 0;
document.querySelector(".num").innerText = counter;

actions.forEach((action) => {
  action.addEventListener("click", () => {
    const type = action.dataset.action;

    switch (type) {
      case "reduce":
        counter--;
        break;
      case "reset":
        counter = 0;
        break;
      case "add":
        counter++;
        break;
      case "save":
        //to save counter's value in localStorage
        localStorage.setItem("counter", counter);
        break;
      case "clear":
        localStorage.clear();
        counter = 0;
        break;
    }
    document.querySelector(".num").innerText = counter;
  });
});
