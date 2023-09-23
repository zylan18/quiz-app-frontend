import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Quiz from './pages/Quiz'
import QuizList from './pages/QuizList'
import HeaderBar from './pages/HeaderBar'
import { Grommet} from 'grommet';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<QuizList />}/>
      <Route path="/:id" element={<Quiz/>}/>
    </>
  )
)

function App({routes}) {

  return (
    <Grommet full>
      <HeaderBar/>
      <RouterProvider router={router}/>
    </Grommet>
  );
}

export default App;