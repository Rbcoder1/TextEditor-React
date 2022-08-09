import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  return (
    <>
      <Navbar />
      {/* <Alert/> */}
      <TextForm title = "Edit Your Text Bellow :"/>
    </>
  );
}

export default App;
