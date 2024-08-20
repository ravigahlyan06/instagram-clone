import "./Login.css";


const Login = ()=>{
    return(
       <div className="login-container">

      
  <div className="container my-5 login" >
  <form>
    <h1>Login Here</h1>
  <div className="mb-3">
    <label htmlFor="email" className="form-label"></label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label"></label>
    <input type="password" className="form-control" id="password" placeholder="Password"/>
  </div>
  <div className="form-btn">
  <button type="submit" className=" btn-primary">Submit</button>
  </div>
</form>
  </div>
  </div>
    )
}
export default Login;