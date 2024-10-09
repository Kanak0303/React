import React from 'react'
import './App.css'

const App = () => {
  
  const ans={
    q1:"a",
    q2:"c",
    q3:"b",
  };
  
  const submit= () => {
  let score=0;
    const userans={
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value
    };

    if(!userans.q1 || !userans.q2 || !userans.q3){
        alert("Please answer all questions")
        return;
    }

    for(const ques in ans){
      if (ans[ques]===userans[ques]) {
        score++;
      }
    }
    const scoreElement=document.getElementById("result");
    scoreElement.textContent=`Your score is: ${score}`;
};


  return (
  <div>
    <h1>QUIZ</h1>
    <form id="quizform">
      <div className="quiz">
        <p>1. Calculate: 3+2</p>
        <label>
          <input type="radio" name="q1" value="a"/>5
          </label>
        <label>
          <input type="radio" name="q1" value="b"/>10
          </label>
        <label>
          <input type="radio" name="q1" value="c"/>4
          </label>
        <label>
          <input type="radio" name="q1" value="d"/>2
          </label>
      </div>
      <div className="quiz">
        <p>2. Calculate: 0+2</p>
        <label>
          <input type="radio" name="q2" value="a"/>0
          </label>
        <label>
          <input type="radio" name="q2" value="b"/>6
          </label>
        <label>
          <input type="radio" name="q2" value="c"/>2
          </label>
        <label>
          <input type="radio" name="q2" value="d"/>1
          </label>
      </div>
      <div className="quiz">
        <p>3. Calculate: 5-5</p>
        <label>
          <input type="radio" name="q3" value="a"/>10
        </label>
        <label>
          <input type="radio" name="q3" value="b"/>0
          </label>
        <label>
          <input type="radio" name="q3" value="c"/>5
          </label>
        <label>
          <input type="radio" name="q3" value="d"/>4
          </label>
      </div>
        <button type="button" id="submit" onClick={() => submit()}>Submit</button>
      </form>
      <div>
        <p id="result"></p>
      </div>
  </div>
  );
}
export default App;
