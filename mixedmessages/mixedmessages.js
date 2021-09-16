
//random messaages printing program // 

//Here i created a 'constant' vairable which will asign the keywords and facts to them keywords.// 
const randomFactsAndQuotes = () => {
    return {
      scary : [
        "even we Humans shed skin",
        " Your cellphone is more disgusting than a public toilet. It has 10 times more bacteria than a toilet",
        "Pine trees have proven that they can grow inside the body. Be Carefull!!",
        "Over 80 million bacteria can be exchanged in one kiss.",
    
      ],
      crazy : [
        "Humans are the Only Animals That Enjoy Spicy Foods",
        "Potato Chips Cause More Weight Gain Than Any Other Food",
        "Chewing Gum After a Meal Reduces Heartburn",
        "Dogs Can Smell Cancer",
        
      ],
      interesting : [
        "More human twins are being born now than ever before.",
        "Hair and nails grow faster during pregnancy.",
        "Many feet bones don't harden until you're an adult.",
        "The heads on Easter Island have bodies.",
        
      ],
      odd : [
        "There's a company that turns dead bodies into an ocean reef.",
        "Dolphins sleep with one eye open.",
        "McDonald's introduced drive-through service due to the military.",
        "Alfred Hitchcock was frightened of eggs.",
        
      ],
      Quotes : [
        "The journey of a thousand miles begins with one step.    Lao Tzu",
        "Dream big and dare to fail.  Norman Vaughan",
        "Don’t be afraid to give up the good to go for the great.    John D. Rockefeller",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.    Winston Churchill",
        
      ],
      // Here i have created a fucntion which will choose one of the 'adjectives' and as there are 5 it will choose from them//

      randomAdjective (){
        const adjectives = ['scary', 'crazy', 'interesting', 'odd', 'Quotes'];
        return adjectives[Math.floor(Math.random() * 5)];
      },

      //this after choosing the adjective will now choose a fact from the 4 options and then display that wth some additinal text to make it make sense.// 
      chooseFactsAndQuotes () {
        let adjective = this.randomAdjective();
        let randomNum = Math.floor(Math.random() * 5);
        switch (adjective){
          case 'scary':
            return `isn't it ${adjective} that \n${this.scary[randomNum]}`;
            break;
          case 'crazy':
            return `isn't it ${adjective} that \n${this.crazy[randomNum]}`;
           break;
          case 'interesting':
            return `isn't it ${adjective} that \n${this.interesting[randomNum]}`;
            break;
          case 'odd':
            return `isn't it ${adjective} that \n${this.odd[randomNum]}`;
            break;
            case 'Quotes':
              return `this is a ${adjective} which states \n${this.Quotes[randomNum]}`;
              break;
          
        }
       
      }
      
    }
  };

  // this will then make the program run choosing an adjective and a fact or quote from that adjective.//
  function runProgram(){
    var random_facts = randomFactsAndQuotes();
    console.log(random_facts.chooseFactsAndQuotes());
  };
  runProgram();
