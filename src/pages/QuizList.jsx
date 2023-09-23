import { useEffect, useState } from 'react'
import { Box,Card,CardBody,CardHeader,CardFooter,Text,Button } from 'grommet';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
    const [quizs, setQuizs] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8765/quiz-service/quiz/getAll").then((response)=>{
            setQuizs(response.data)
          //console.log(response.data)
        });
    }, [])
  const navigate=useNavigate();
    if(quizs.length!=0){
    return (
      
      <Box align='center' pad={"large"}>
  
      {
      quizs.map((quiz,index)=>(
        <Card key={index} width="large" align='starting' pad="large" margin={"small"}>
          <CardHeader >{quiz.title}</CardHeader>
          <CardBody pad="medium">
            <Text>Category:{quiz.categoryName}</Text>
            <Text>Number of Questions:{quiz.numQuestions}</Text>
          </CardBody>
          <CardFooter><Button primary label="Try" onClick={()=>{navigate(`/${quiz.id}`)}}/></CardFooter>
        </Card>
        ))
      }
         </Box>  
        )}
        else{
          return(
          <>Loading...</>)
        }
  }
