let handover = document.getElementById("handover");
let hideItem1 = document.getElementById("hideItem1");
let hideItem2 = document.getElementById("hideItem2");
let workComplete = document.getElementById("workComplete");

handover.addEventListener("change", () => {
  const value = handover.value;
  if (value === "true") {
    hideItem1.classList.remove("hideClass");
    hideItem2.classList.remove("hideClass");
  } else {
    hideItem1.classList.add("hideClass");
    hideItem2.classList.add("hideClass");
  }
});

workComplete.addEventListener("change", () => {
  const value = workComplete.value;
  if (value === "bar") {
    window.location.href = "screan2.html";
  }
});
