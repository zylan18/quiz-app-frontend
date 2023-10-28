import { useEffect, useState } from 'react'
import { Grommet,Box,Card,CardBody,CardHeader,RadioButtonGroup,Layer,Button,Text,CardFooter,Spinner} from 'grommet';
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
import HeaderBar from'./HeaderBar'

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const {id}= useParams()

    useEffect(() => {
        axios.get(`http://localhost:8765/quiz-service/quiz/get/${id}`).then((response)=>{
          setQuestions(response.data)
          //console.log(response.data)
        });
    }, [id])
  
    const [answers,setAnswers]=useState([])
    const [show, setShow] = useState()
    const [score, setScore] = useState()
    //debugger
    console.log(questions)
    const submit=()=>{
      console.log(answers)
      axios.post("http://localhost:8765/quiz-service/quiz/submit",answers).then((response)=>{
        setScore(response.data)
        console.log(score)
        setShow(true)  
      })
      
    }
    const navigate=useNavigate()
    const addAnswer=(newAnswer)=>{
      let newAnswers=[...answers]
      newAnswers=newAnswers.filter((oldAnswer)=>oldAnswer.id!=newAnswer.id)
      newAnswers.push(newAnswer)
      setAnswers(newAnswers)
    }
  
    if(questions.length!=0){
    return (
      <Box align='center' pad={"large"}>
  
      {
      questions.map((question,index)=>(
        <Card key={index} width="large" align='starting' pad="large" margin={"small"}>
          <CardHeader >{question.questionTitle}</CardHeader>
          <CardBody pad="medium">
          <RadioButtonGroup 
          name={`question${index}`}
          options={[question.option1,question.option2,question.option3,question.option4]}
          onChange={(e)=>addAnswer({"id":`${question.id}`,"response":e.target.value})}
          hoverIndicator
        />
          </CardBody>
        </Card>
        ))
      }
        {show && (<Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <Card>
            <CardBody pad={"medium"}>
            you have scored{ <Text color={"brand"} alignSelf='center'>{score}</Text>}
            </CardBody>
            <CardFooter pad={"medium"} alignSelf='center'>
            <Button label="Close" onClick={() => setShow(false)}/>
            <Button label="Back to Quiz list" onClick={()=>{navigate("/")}}/>
            </CardFooter>
            </Card>
          </Layer>)
          }
          <Button type='button' primary id="submit" label="submit" onClick={submit} busy={show}/>
         </Box>  
        )}
        else{
          return(
          <Box align='center' alignContent='center' alignSelf='center' pad={'large'}>
            <Box>
              <Spinner/>
            </Box>
          </Box>
          )
        }
  }
