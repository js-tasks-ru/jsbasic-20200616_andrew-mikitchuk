function hideSelf() {
  const button = document.getElementsByClassName("hide-self-button");

  button[0].addEventListener("click", ()=> button[0].hidden = true);

}
