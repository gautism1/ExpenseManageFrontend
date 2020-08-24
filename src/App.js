 import React, { lazy, Suspense } from 'react';
import './App.css';
import Income from'./components/income';
import Expenselist from './components/expenselist';
import Addtransaction from'./components/Addtransaction';
import {GlobalProvider} from './context/Globalstate';
const Nav= lazy(() => import('./components/Nav'));
const Title= lazy(() => import('./components/title'));
const Main= lazy(() => import('./components/mainScreen'));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
      <Suspense fallback={renderLoader()}>
       <div className="App">
         <div className="app_in">
          < GlobalProvider>
            <div className="left">
                <div className="left_in">
                  <Nav/>
                  <Title/>
                  <Main/>
                  <Income/>
                  <Expenselist/>
                 </div>
            </div>
            <div className="right">
               <div>Bell_icon</div>
                 <div>
                   Categories_list
                     <Addtransaction/>
                </div> 
            </div>
       </GlobalProvider>
      </div>
     </div>
 </Suspense>
  );
}
export default App;
