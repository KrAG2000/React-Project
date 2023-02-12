import Main from './components/frontend/navigation';
import Login from './components/frontend/login-js-subsections/registration';
import Footer from './components/frontend/footer';
import './App.css';

function App() {

  return (
    <div className="root">
      <div className="App">
        {/* <Main /> */}
        <div className="login-division">
          <section className="login">
            <Login />
          </section>
        </div>
        <div className="parent-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
