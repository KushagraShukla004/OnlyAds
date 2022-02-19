const Login = function () {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center">Login Form</h2>

        <div className="mb-5">
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-5">
          <label htmlFor="">Password</label>
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default Login;
