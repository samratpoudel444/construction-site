const LoginForm= ()=>
{
    return (
      <div className="flex flex-col justify-center items-center mt-16">
        <div>Sign In</div>
        <div>
          <label></label>
          <input type="text" />
        </div>

        <div>
          <label></label>
          <input type="text" />
        </div>

        <div>
            <button>Login</button>
        </div>
      </div>
    );
}
export default LoginForm;