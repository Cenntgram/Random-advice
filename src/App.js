import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { useEffect, useState } from 'react';
import Loading from './components/Loading'


function App() {
  // ==== hooks ===== //
  // - useState
  // - useEffect
  // - useRef

  // ---------

  // - useRedcer
  // - useMemo
  // - useCallback
  // - useLayoutEffect

  const [name, setName] = useState('Kachi');
  const [adviceData, setAdviceData] = useState({});
  const [loading, setLoading] = useState(true);

  let changeName = ()=>{
    setName('obi')
  }

  useEffect(()=>{
  //   fetch('https://api.adviceslip.com/advice').then((res)=>{
  //     return res.json()
  //   }).then((data)=>{
  //     console.log(data);
  //   })
  // })

  // async await //

  let getData = async ()=> {
    let res = await fetch('https://api.adviceslip.com/advice')
    let finalData = await res.json();
    console.log(finalData);
    setAdviceData(finalData);
    setLoading(false);
  };

  setTimeout(()=>{
    getData();
  }, 2000);

}, []);
  
  


  return (
    <div className="App">
      {!loading && <Homepage newAdviceData={adviceData} />}
      {loading && <Loading newLoading={loading}/>}
      {/* <p>{name}</p>
      <button onClick={()=>{
        changeName()
      }}>Click Me</button> */}
    </div>
  );
    }

export default App;
