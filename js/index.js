function readWords(){
  var array=[
    "i am glad to see you",
    "would you like to go with us",
    "would you like some coffee",
    "do you know how to use a computer",
    "it is difficult for me to speak English",
    "i want him to come here",
    "i told you to open the window",
    "could you tell me how to get to Haneda",
    "this is a letter written by Ken",
    "this is a picture he took",
    "i have an aunt who lives in Tokyo",
    "this is a bus that goes to Osaka",
    "i was thirteen last year",
    "was Ken busy yesterday",
    "i was reading a book",
    "you look happy",
    "i am going to visit Kyoto next year",
    "are you going to see him",
    "he gave me a watch",
    "we call him Sanchan",
    "may I open the window",
    "could you help me",
    "i went to Tokyo to see my friend",
    "i want to visit New York",
    "i want something to eat",
    "i have to get up early",
    "i do not have to go there",
    "i will go there this afternoon",
    "i must finish this homework",
    "you must not smoke here",
    "i think that the book is interesting",
    "which pencil is yours",
    "there is a park near my house",
    "are there any girls under the tree",
    "we enjoyed listening to music",
    "playing the guitar is fun",
    "your pen is longer than mine",
    "ken is the tallest in my class",
    "she is the most beautiful of the four",
    "white is the best player in his team",
    "you can run as fast as Yumi",
    "shall I help you",
    "he may not be a teacher",
    "do you know the truth of the world",
    "where were you spoken to by a stranger",
    "i cannot be a Martian",
    "tom has not eaten any for thirty years",
    "does Tom have to go home",
    "we will be able to play baseball",
    "the train I wanted to get on has gone",
    "i was born to play the guitar",
    "have you ever seen the movie",
    "she has never missed school",
    "he knows who I met yesterday",
    "were you cooking when I came home",
    "yumi finished making lunch an hour ago",
    "reading books is important for us",
    "ken left the store without paying",
    "my dream is to be a witch",
    "give me something cold to drink",
    "there is a house on the hill",
    "i have a book written in French",
    "yumi is as tall as Tom",
    "yumi is prettier than her sister",
    "mtFuji is the highest Mt in Japan",
    "jim is than any other kid in the class",
    "she is one of the best tennis players",
    "the people working there are all men",
    "i have an uncle who is a math teacher",
    "i saw an animal dog tail was very long",
    "i am Tanaka Kumi",
    "you are from Australia",
    "are you from Australia",
    "i am not thirsty",
    "this is a nice picture",
    "is that a fox",
    "what is  this",
    "it is  a word",
    "this is not a picture",
    "that is Meiling Ken",
    "she is my friend",
    "i have a toy",
    "do you know kendo",
    "i do not play the shamisen",
    "what do you have in your hand",
    "i have a shamisen pick",
    "i have two bags",
    "how many bags do you have",
    "i have three bags",
    "use my bag",
    "do not use my bag",
    "lets play tennis",
    "who is this boy",
    "he is Koji",
    "where do you play tennis",
    "i play tennis near my school",
    "when do you play tennis",
    "i play tennis every Sunday",
    "this is my brother",
    "miki plays tennis",
    "does Miki play tennis",
    "miki does not play table tennis",
    "where does Miki play tennis",
    "she plays tennis near the river",
    "when does Miki play tennis",
    "she plays tennis after school",
    "koji can play the piano",
    "can Koji play the piano",
    "koji cannot play the flute",
    "tom is playing baseball now",
    "is Tom playing baseball now",
    "tom is not playing baseball now",
    "amy played tennis last Sunday",
    "did Amy play tennis last Sunday",
    "amy did not play tennis last Sunday",
    "amy went to Hiroshima last year",

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
      timer = 1080;
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

        if(timer%180 === 0 &&timer!=1080){

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


      if(String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()){

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
