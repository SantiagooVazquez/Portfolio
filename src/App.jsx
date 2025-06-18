// App.jsx
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';


function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-indigo-100 via-white to-indigo-200 text-gray-800">
      <Home />
      <div className="h-8 bg-gradient-to-b from-indigo-100 to-white w-full" />
      <About />
      <div className="h-8 bg-gradient-to-b from-white to-indigo-100 w-full" />
      <Projects />
      <div className="h-8 bg-gradient-to-b from-indigo-100 to-white w-full" />
      <Contact />
    </div>
  )
}

export default App;
