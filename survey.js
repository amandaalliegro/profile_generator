const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  console.log(`Nice to meet you! ${name}`);
  rl.question("What's an activity you like doing?", (activity) => {
    console.log(`${activity} seems nice!`);
    rl.question("What do you listen to while doing that?", (song) => {
      console.log(`Good to know, I am putting ${song} on my list so I can hear it later!`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        console.log(`I love ${meal} too!`);
        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          console.log(`I bet you could have some ${food} now!`);
          rl.question("Which sport is your absolute favourite?", (sport) => {
            console.log(`${sport} is really nice, for sure!`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superPower) => {
              console.log(`So now I know who I should call whenever I need ${superPower}`);
              rl.question("So, that's all!", (answer) => {
              console.log(`So, in summary: ${name} loves listening to ${song} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower}.`);
              rl.close();
              })
            });
          });
        });
      });
    });
  });
});


