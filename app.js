const val1 = document.getElementById("2");

function myFunction() {
  const inputValue = document.getElementById("myInput").value;

  const val1 = document.getElementById("2");
  const val2 = document.getElementById("3");
  const emoji1 = document.getElementById("1");
  emoji1.innerText = String.fromCodePoint(128532);
  val1.innerText = inputValue;

  if (inputValue === "1") {
    emoji1.innerText = String.fromCodePoint(128532);
  } else if (inputValue === "2") {
    emoji1.innerText = String.fromCodePoint(128530);
  } else if (inputValue === "3") {
    emoji1.innerText = String.fromCodePoint(128578);
  } else if (inputValue === "4") {
    emoji1.innerText = String.fromCodePoint(128522);
  } else if (inputValue === "5") {
    emoji1.innerText = String.fromCodePoint(129321);
    val2.innerText = `Thank you for watching -- Yespal Singh ${String.fromCodePoint(
      128522
    )}`;
  }
}
