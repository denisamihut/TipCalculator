window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calculate").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount)) return;
    const tipEl = document.getElementById("tip");
    const tip = Number.parseInt(tipEl.options[tipEl.selectedIndex].value).toFixed(2);
    const tipInDollars = amount * (tip / 100);
    const total = parseFloat(amount + tipInDollars);

    document.querySelector(".info_tip").innerHTML = `Tip: $${parseFloat(
      tipInDollars
    ).toFixed(2)}`;
    document.querySelector(".info_total").innerHTML = `Total: $${total}`;
    document.querySelector(".info").style = "display: block";
  });
});