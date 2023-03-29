
chrome.action.onClicked.addListener(function(){
  chrome.tabs.create({url:'https://tasks.google.com/embed/list/~default?origin=https%3A%2F%2Fmail.google.com'});
});
