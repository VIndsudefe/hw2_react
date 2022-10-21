import logo from './logo.svg';
import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';


function App() {
  const text={
    title:"hello",
    subtitle:"lorem lorem lorem"}
  return (
    <div className='APP'>
      <>
        <h1>AboutUs</h1>
        <AboutUs about={text} />
      </>  
        
    </div>
  )
}
export default App