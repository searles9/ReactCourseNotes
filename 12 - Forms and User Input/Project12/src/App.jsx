import Header from './components/Header.jsx';
import Signup from './components/Signup.jsx';
import StateLogin from './components/StateLogin.jsx'; // State Login
import RefLogin from './components/RefLogin.jsx'; // State Login
import UpdatedStateLogin from './components/UpdatedStateLogin.jsx'; //with custom input componenet

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <StateLogin /> */}
        {/* <RefLogin /> */}
        {/* <Signup /> */}
        <UpdatedStateLogin />
      </main>
    </>
  );
}

export default App;
