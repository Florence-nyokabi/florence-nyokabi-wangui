import Layout from './components/Layout';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  return(
  <div>
    <Layout>
      <About/>
      <Skills/>
      <Projects/>
    </Layout>  
  </div>
);
}
export default App;