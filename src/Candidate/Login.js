import '../App.css';
const Login = ()=>{
    return(
        <>
            <div className="container">
                <div className="wrapper border border-dark">
                    <div className="box border border-dark " >                       
                        <div className='input-filed'>
                            <label className='text-light h5'>Mobile</label>
                            <input type='' maxlength="10" className='border border-0 inputfield border-bottom'></input>
                        </div>
                        <div className='input-filed'>
                            <label className='text-light h5'>Password</label>
                            <input type='password' className='border border-0 inputfield border-bottom' ></input>
                        </div>
                        <div className='input-filed'>
                            <button className='btn btn-warning text-dark h5'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default Login;