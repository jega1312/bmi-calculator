const weightValue = document.getElementById("weight");
const heightValue = document.getElementById("height");
const calBMI = document.getElementById("btn");
const result = document.getElementById("result");

calBMI.addEventListener("click", () => {
  const bmi = weightValue.value / (heightValue.value / 100) ** 2;

  result.textContent = `Your BMI: ${bmi.toFixed(2)}`;
  result.style.padding = "10px";

  if (!weightValue.value || !heightValue.value) {
    result.textContent = `Invalid input. Both fields are required.`;
    result.style.padding = "10px";
  }
});
