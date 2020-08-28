function getHistory(){
  return document.getElementById('history').innerText;
}
function setHistory(num){
  document.getElementById('history').innerText = num;
}
function getAnswer(){
  return document.getElementById('answer').innerText;
}
function setAnswer(num){
  if (num==''){
    document.getElementById('answer').innerText=num;
  }
  else{
    document.getElementById('answer').innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num){
  if(num=='-'){
    return '';
  }
  var n = Number(num)
  var value = n.toLocaleString('en')
  return value;
}
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''))
}
var operator = document.getElementsByClassName('operator');
for (var i=0;i<operator.length;i++){
  operator[i].addEventListener('click',function(){
    console.log(this.id)
    if(this.id == 'C'){
      setHistory('')
      setAnswer('')
    }
    else if(this.id=='CE'){
      var answer = reverseNumberFormat(getAnswer()).toString();
      if(answer){
        answer=answer.substr(0, answer.length-1);
        setAnswer(answer);
      }
    }
    else{
      console.log('working')
      var answer=getAnswer();
      var history=getHistory();
      // if(answer=='' && history!=''){
      //   if(isNaN(history[history.length-1])){
      //     history==history.substr(0, history.length-1);
      //   }
      // }
      if(answer!='') /*|| history!='')*/{       
        answer=reverseNumberFormat(answer);
        history=history+answer;
        if(this.id=='='){
          console.log('workinginside')
          var result = eval(history);
          setAnswer(result);
          setHistory('');
        }
        else{
          history=history+this.id;
          setHistory(history)
          setAnswer('');
        }
      }
    }
  })
}
var numbers = document.getElementsByClassName('numbers');
for (var i=0;i<numbers.length;i++){
  numbers[i].addEventListener('click',function(){
    var answer = reverseNumberFormat(getAnswer());
    if(answer!=NaN){
      answer += this.id;
      setAnswer(answer)
    }
  })
}