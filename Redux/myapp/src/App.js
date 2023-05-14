import './App.css';
import AddForm from './components/AddForm/AddForm';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Button from './components/UI/Button/Button';

function App() {

  return (
    <div>
      <AddForm />
      <CardsContainer />
      <Button text='rus' />
      <Button text='eng' />
    </div>
  );
}

export default App;
