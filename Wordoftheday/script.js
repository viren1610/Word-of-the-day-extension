chrome.runtime.sendMessage({ name: "fetchWords" }, (response) => {
  console.log(response);

  document.querySelector('h1').innerHTML = response.words;
  document.querySelector('p').innerHTML = response.wordsDes
});
