
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import Store from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './components/ErrorElement'
import Shorts from './components/Shorts';
import WatchContainer from './components/WatchContainer';
import History from './components/History';
import Notifications from './components/Notifications';
import Library from './components/Library';
import Music from './components/Music';
import Watchlater from './components/Watchlater';
import { useState } from 'react';
import SearchVideos from './components/SearchVideos';


const Applayout=createBrowserRouter([{
  path:'/',
  element:<Header/>,
  errorElement:<ErrorElement/>,
  children:[
   
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/watch',
      element:<WatchContainer/>
    },
    {
      path:'/shorts',
      element:<Shorts/>
    },
    {
      path:'/history',
      element:<History/>
    },
    {
      path:'/watchlater',
      element:<Watchlater/>
    }
    ,
    {
      path:'/library',
      element:<Library/>
    },
    {
      path:'/notifications',
      element:<Notifications/>
    },
    {
      path:'/music',
      element:<Music/>
    },
    
{
  path:'/results',
  element:<SearchVideos/>
}

  ]
}])

function App() {
  return (
  <>
  <Provider store={Store}>
   <RouterProvider router={Applayout}/>
  </Provider>
 
  </>
  );
}

export default App;
