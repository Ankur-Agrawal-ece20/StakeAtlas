
function LoadingScreen() {
  return (
    <div className=" bg-app-primary">
      <header className="loading-screen bg-app-primary">
        {/* <img src={logo} className="App-logo animate-pulse" alt="logo" /> */}
        <img src={require('../assets/new design/Logo.png')} alt="" className="animate-pulse" />
      </header>
    </div>
  );
}

export default LoadingScreen;
