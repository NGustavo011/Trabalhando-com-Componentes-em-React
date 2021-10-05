const Button = ({ type, changeValue }) =>{
    return(
        type==="sucess" ?(
            <button type="button" className="btn btn-success" onClick = {changeValue}>Adicionar</button>
        ):(
            <button type="button" className="btn btn-danger" onClick = {changeValue}>Remover</button>
        )
    )
}

export default Button;