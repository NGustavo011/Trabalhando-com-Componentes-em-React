import Item from './components/Item/index'
import Card from './components/Card/index'

const App = () =>{
  return(
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <li>
          <Item number="1">
            Primeiro item
          </Item>
        </li>
        <li>
          <Item number="2">
            Segundo item
          </Item>
        </li>
        <li>
          <Item number="3">
            Terceiro item
          </Item>
        </li>
      </ul>
      <Card />
    </>    
  )
}

export default App;