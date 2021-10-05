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
                Quote
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
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Card;