(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
  
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  
    console.log("\n--- Додатковий критерій: парна чи непарна довжина імені ---");

    for (let i = 0; i < names.length; i++) { // використовуємо let
      let length = names[i].length; // let тут також доречний
    
      if (length % 2 === 0) {
        console.log("Even length: " + names[i]);
      } else {
        console.log("Odd length: " + names[i]);
      }
    }
    
  })();
  