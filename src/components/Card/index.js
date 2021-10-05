import { useState } from 'react';
import Button from '../Button/index'

const Card = () =>{

    const [value, setValue] = useState(0);

    const incrementValue = () =>{
        setValue(value+1);
    }
    
    const decrementValue = () =>{
        setValue(value-1);
    }

    return(
        <div className="card">
            <div className="card-header">
                CONTADOR
            </div>
            <div className="card-body">
                <Button className="btn btn-success" onClick={incrementValue}>
                    Adicionar
                </Button>
                <Button className="btn btn-danger" onClick={decrementValue}>
                    Remover
                </Button>
                <blockquote className="blockquote mb-0">
                    <p>Contador: {value}</p>
                    <footer className="blockquote-footer">
                        Apenas um teste com contador <cite title="Source Title">GUSTAVO NOGUEIRA</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Card;