import GoogleLogin from 'react-google-login';

function Login() {
  const onSuccess = (response) => {
    console.log(response);
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <div className="row">
      <GoogleLogin
        clientId="138911836112-9t0cldbq9hbbmp684k7dhhlha395t7gc.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Login;
