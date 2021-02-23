import './App.css';

function Sum(props) {
 
 return <div className="Component">
   <div className="Sum">Sum = { props.a + props.b }</div>
 </div>;
}

function RandomNumber(props) {
 
 return <div className="Component">
   <div className="Rand">Random number = { props.min + (Math.round(Math.random() * props.max)) }</div>
 </div>;
}

function BiggerNum(props) {
 function Bigger (){
   if(props.a > props.b){
     return props.a;
   }
   else{
     return props.b;
   }
 }
 return <div className="Component">
   <div className="Rand">Bigger number = { Bigger() }</div>
 </div>;
}

function LiseItems(props) {
 
  function addSpace(){
    let res = "";
    for (const i of props.list) {
      res += i;
      res += " ";
    }
    
    console.log(res);
    return res;
  }

 return <div className="Component">
   <div className="Rand">List = { addSpace() }</div>
 </div>;
}



function App() {
  return (
    <div className="App">
   <Sum a={5} b={4}></Sum>
   <RandomNumber min={100} max={5000}></RandomNumber>
   <BiggerNum a={100} b={1}></BiggerNum>
   <LiseItems list = {['Apple', 'Pear', 'Limon', 'Tomato']}></LiseItems>
    </div>
  );
}

export default App;
