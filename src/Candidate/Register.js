import '../App.css';
const Register = ()=>{
    return(
        <>
            <div className="container">
                <div className="wrapper border border-dark">
                    <div className="box border border-dark " style={{'width':'100%','background-color':'#0000FF'}}>
                       <div className='input-filed'>
                            <label>Name</label>
                            <input type='' className='border border-0 inputfield border-bottom' maxlength="30"></input>
                        </div>
                        <div className='input-filed'>
                            <label>Mobile</label>
                            <input type='' maxlength="10" className='border border-0 inputfield border-bottom'></input>
                        </div>
                        <div className='input-filed'>
                            <label>Name</label>
                            <input type='' className='border border-0 inputfield border-bottom' ></input>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default Register;