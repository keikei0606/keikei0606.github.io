function readWords(){
  var array=[
    "I am glad to see you",
    "Would you like to go with us",
    "Would you like some coffee",
    "Do you know how to use a computer",
    "It is difficult for me to speak English",
    "I want him to come here",
    "I told you to open the window",
    "Could you tell me how to get to Haneda",
    "This is a letter written by Ken",
    "This is a picture he took",
    "I have an aunt who lives in Tokyo",
    "This is a bus that goes to Osaka",
    "I was thirteen last year",
    "Was Ken busy yesterday",
    "I was reading a book",
    "You look happy",
    "I am going to visit Kyoto next year",
    "Are you going to see him",
    "He gave me a watch",
    "We call him Sanchan",
    "May I open the window",
    "Could you help me",
    "I went to Tokyo to see my friend",
    "I want to visit New York",
    "I want something to eat",
    "I have to get up early",
    "I do not have to go there",
    "I will go there this afternoon",
    "I must finish this homework",
    "You must not smoke here",
    "I think that the book is interesting",
    "Which pencil is yours",
    "There is a park near my house",
    "Are there any girls under the tree",
    "We enjoyed listening to music",
    "Playing the guitar is fun",
    "Your pen is longer than mine",
    "Ken is the tallest in my class",
    "She is the most beautiful of the four",
    "white is the best player in his team",
    "You can run as fast as Yumi",
    "Shall I help you",
    "He may not be a teacher",
    "Do you know the truth of the world",
    "Where were you spoken to by a stranger",
    "I cannot be a Martian",
    "Tom has not eaten any for thirty years",
    "Does Tom have to go home",
    "we will be able to play baseball",
    "The train I wanted to get on has gone",
    "I was born to play the guitar",
    "Have you ever seen the movie",
    "She has never missed school",
    "He knows who I met yesterday",
    "Were you cooking when I came home",
    "Yumi finished making lunch an hour ago",
    "Reading books is important for us",
    "Ken left the store without paying",
    "My dream is to be a witch",
    "Give me something cold to drink",
    "There is a house on the hill",
    "I have a book written in French",
    "Yumi is as tall as Tom",
    "Yumi is prettier than her sister",
    "MtFuji is the highest Mt in Japan",
    "Jim is than any other kid in the class",
    "She is one of the best tennis players",
    "The people working there are all men",
    "I have an uncle who is a math teacher",
    "I saw an animal dog tail was very long",
    "I am Tanaka Kumi",
    "You are from Australia",
    "Are you from Australia",
    "I am not thirsty",
    "This is a nice picture",
    "Is that a fox",
    "What is  this",
    "It is  a word",
    "This is not a picture",
    "That is Meiling Ken",
    "She is my friend",
    "I have a toy",
    "Do you know kendo",
    "I do not play the shamisen",
    "What do you have in your hand",
    "I have a shamisen pick",
    "I have two bags",
    "How many bags do you have",
    "I have three bags",
    "Use my bag",
    "Do not use my bag",
    "Lets play tennis",
    "Who is this boy",
    "He is Koji",
    "Where do you play tennis",
    "I play tennis near my school",
    "When do you play tennis",
    "I play tennis every Sunday",
    "This is my brother",
    "Miki plays tennis",
    "Does Miki play tennis",
    "Miki does not play table tennis",
    "Where does Miki play tennis",
    "She plays tennis near the river",
    "When does Miki play tennis",
    "She plays tennis after school",
    "Koji can play the piano",
    "Can Koji play the piano",
    "Koji cannot play the flute",
    "Tom is playing baseball now",
    "Is Tom playing baseball now",
    "Tom is not playing baseball now",
    "Amy played tennis last Sunday",
    "Did Amy play tennis last Sunday",
    "Amy did not play tennis last Sunday",
    "Amy went to Hiroshima last year",

  ];

  return array;
}


//typing  game
window.onload = function(){
    var words = readWords();
    var currentWord;
    var currentLocation;
    var score;
    var miss;
    var timer;
    var bgcolor = new Array("#dc8c8c","#8cdc8c","#8c8cdc","#dcdc8c","#000000");
    var fgcolor = new Array("#000000","#000000","#000000","#000000","#ffffff");
    var colorId = 0;
    var colorScore = [0,0,0,0,0,0];
    var colorMiss =[0,0,0,0,0,0];
    var target = document.getElementById('target');
    var scoreLabel = document.getElementById('score');
    var missLabel = document.getElementById('miss');
    var timerLabel = document.getElementById('timer');
    var isStarted;
    var timerId;
    function init(){
      currentWord ='click to start';
      currentLocation = 0;
      score = 0;
      miss = 0;
      timer = 30;
      target.innerHTML = currentWord;
      scoreLabel.innerHTML = score;
      missLabel.innerHTML = miss;
      timerLabel.innerHTML = timer;
      isStarted = false;
    }
//modal
    init();

    function updateTimer(){
      timerId = setTimeout(function(){
        timer--;
        timerLabel.innerHTML = timer;
        if(timer%5 === 0 &&timer!=30){
          document.bgColor = bgcolor[colorId];
          document.fgColor = fgcolor[colorId];
          if(colorId === 0){
            colorScore[colorId] = score;
            colorMiss[colorId] = miss;
          }else{
            var sum=0;
            var msum=0;
            for(var i =0;i<colorId;i++){
              sum=sum+colorScore[i];
              msum=msum+colorMiss[i];
            }
            colorScore[colorId] = score - sum;
            colorMiss[colorId] = miss - msum;
          }
          colorId++;
        }




        if(timer <=0){
          var sumj=0;
          var msumj=0;
          for(var j =0;j<5;j++){
            sumj=sumj+colorScore[j];
            msumj=msumj+colorMiss[j];
          }
          colorScore[5] = score - sumj;
          colorMiss[5] =miss - msumj;
          alert(colorScore[0] + ' letters, ' + colorMiss[0] + ' miss! ' + ' \n '+colorScore[1] + ' letters, ' + colorMiss[1] + ' miss! ' + ' \n '+colorScore[2] + ' letters, ' + colorMiss[2] + ' miss! ' + ' \n '+colorScore[3] + ' letters, ' + colorMiss[3] + ' miss! ' + ' \n '+colorScore[4] + ' letters, ' + colorMiss[4] + ' miss! ' + ' \n '+colorScore[5] + ' letters, ' + colorMiss[5] + ' miss! ' + ' \n '+'実験お疲れ様でした！！\n OKを押す前にこの表示を櫻井に見せてください！');
          location.reload();
          clearTimeout(timerId);
          init();
          return;
        }
        updateTimer();
      },1000);
    }

    function setTarget(){
      currentWord = words[Math.floor(Math.random()*words.length)];
      target.innerHTML = currentWord;
      currentLocation = 0;
    }

    window.addEventListener('click',function(){
      if(!isStarted) {
        isStarted = true;
        setTarget();
        updateTimer();
      }
    });

    window.addEventListener('keyup', function(e){
      if(!isStarted){
        return;
      }

      if(String.fromCharCode(e.keyCode) === currentWord[currentLocation].toLowerCase()){
        currentLocation++;
        var placeholder = '';
        for(var i = 0; i < currentLocation; i++){
          placeholder += '_';
        }
        target.innerHTML = placeholder + currentWord.substring(currentLocation);
        score++;
        scoreLabel.innerHTML = score;
        if (currentLocation === currentWord.length){
          setTarget();
        }
      } else {
        //console.log('miss!');
        miss++;
        missLabel.innerHTML = miss;
      }
    });
  }
