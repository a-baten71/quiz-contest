import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Main from './component/Main/Main';
import QuizDetails from './component/QuizDetails/QuizDetails';

import Topics from './component/Topics/Topics';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },

          element: <Topics></Topics>
        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <QuizDetails></QuizDetails>

        }
      ]
    },
    {
      path: '*', element: <div>This page is not found (404).</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
