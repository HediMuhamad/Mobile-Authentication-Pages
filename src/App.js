import './App.css';
import { MobileLayout } from './components/mobile-layout/mobile-layout-component.jsx'
import { TextContent } from './components/text-content/text-content.component.jsx'
import { TextField } from './components/text-field/text-field.components';
import { Description } from './components/description/description.component.jsx'
import { Button } from './components/button/button.component.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusSquare , faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative z-10
    before:w-full before:h-full before:content-[''] before:absolute before:-z-10 before:bg-background-pattern before:bg-blue-400/20 before:opacity-10">
      <MobileLayout className="aspect-[1/1.9] bg-slate-50">
          <TextContent
            headerText="Hello Again!"
            paragraphText={["Welcome back, you've",<br/>,"been missed!"]}
            paragraphTextStyle='text-xl'
            className='items-center justify-center gap-3 h-48'
          />
          <TextField additionalStyles="my-3" placeholder="Enter username" type='text' name="username" required/>
          <TextField additionalStyles="my-3 tracking-wider" placeholder="Password" type='Password' name="username" required/>
          <Description className="text-right text-xs w-10/12 mt-1"><a className='focus:text-red-500/90 hover:text-red-500/90 focus:outline-none transition-colors duration-200' href='password-recovery'>Recovery Password</a></Description>
          <Button className="w-10/12 my-8 py-3 text-md rounded-md bg-red-500/90 text-white">Sign in</Button>
          <Description className="text-xs w-10/12 my-4">ــــــــــــــــ Or continue with ــــــــــــــــ</Description>
          <div className='w-9/12 flex justify-evenly items-center h-12 mt-1'>
            <FontAwesomeIcon icon={faGooglePlusSquare} className='text-4xl text-gray-900/80 hover:text-gray-900 hover:-translate-y-[0.025em] transition-all duration-100 ease-in' />
            <FontAwesomeIcon icon={faFacebookSquare}   className='text-4xl text-gray-900/80 hover:text-gray-900 hover:-translate-y-[0.025em] transition-all duration-100 ease-in' />
            <FontAwesomeIcon icon={faTwitterSquare}    className='text-4xl text-gray-900/80 hover:text-gray-900 hover:-translate-y-[0.025em] transition-all duration-100 ease-in' />
          </div>
          <Description className="text-xs mt-20" >Not a member? <a className='text-red-500/90' href='/'>Register now</a></Description>
      </MobileLayout>
    </div>
  );
}

export default App;
