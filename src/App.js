import logo from './logo.svg';
import './App.css';

function App() {
  const name = "matheus";
  const a = 1;
  const b = 2;

  function sum (){
    return a + b;
  }

  const url = "https://www.pixartprinting.it/blog/wp-content/uploads/2021/06/1_Mona_Lisa_300ppi.jpg";

  return(
    <div className='App'>
     <p>Testando o JSX</p>
     <p>Salve {name} </p>
     <p> Soma é {sum(1, 2)}</p>
     <img src='{url}' alt= 'informação da Imagem'></img>

    </div>
  )
}
  

export default App;
