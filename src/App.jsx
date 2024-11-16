// components
import {GrFormNext, GrFormPrevious, GrEmoji, GrAmazon, GrApple} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import Steps from './components/Steps';

import './App.css'

// Hooks
import { useForm } from './hooks/useForm';



function App() {

  const formComponents = [
    <UserForm/>,
    <ReviewForm/>,
    <Thanks/>
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirststep} = useForm(formComponents)

 
  return (
    <>
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avliar o produto
        </p>
      </div>
      <div className="form-container">
       <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep +1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirststep && (<button type='button' onClick={() => changeStep(currentStep -1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>)}
           {!isLastStep ? (
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
            ) : ( 
              <button type="button">
              <span>Enviar</span>
              <FiSend />
            </button>
            )}
          </div>
        </form>
      </div>
      
    </div>
      
        
    </>
  )
}

export default App
