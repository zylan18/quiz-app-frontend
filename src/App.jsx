import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Quiz from './pages/Quiz'
import QuizList from './pages/QuizList'
import HeaderBar from './pages/HeaderBar'
import { Grommet} from 'grommet';
import HomePage from './pages/HomePage';
import CreateQuestion from './pages/CreateQuestion';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<HomePage />}/>
      <Route path="/quizList" element={<QuizList />}/>
      <Route path="/:id" element={<Quiz/>}/>
      <Route path="/createQuestion" element={<CreateQuestion />}/>
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