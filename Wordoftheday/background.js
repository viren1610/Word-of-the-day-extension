function getRandomNumber(number){
    var max =( number+1)
return Math.floor(Math.random()*Math.floor(max))
}


chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name == "fetchWords") {
    const apiKey = "OUR-API-KEY";
    const dateStr = new Date().toISOString().slice(0, 10);
    const apiCall =
      "https://api.wordnik.com/v4/words.json/wordOfTheDay?date=" +
      dateStr +
      "&api_key=" +
      apiKey;

    //fetch(..).await...

    const words=[
        "Abomasum",
        "Absquatulate",
        "Adagio",
        "Alfresco",
        "Alcazar",
    ];

    const wordsDes = [
        "the fourth stomach of a ruminant, such as a cow or sheep (noun)",
        "to leave somewhere abruptly (verb)",
        "to perform in slow tempo (adverb)",
        "taking place or located in the open air (adverb)",
        " a Spanish palace or fortress (noun)",
    ]

    var number = getRandomNumber(4)

    response({ words: words[number], wordsDes:wordsDes[number] });
  }
});
