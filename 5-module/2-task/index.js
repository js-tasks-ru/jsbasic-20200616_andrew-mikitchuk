function toggleText() {
  const button = document.getElementsByClassName("toggle-text-button");
  button[0].addEventListener("click", () => {
    const text = document.getElementById("text");
    if(text.hidden == false) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  })
}
