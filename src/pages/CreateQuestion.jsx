import axios from 'axios';
import { Box, Button, Card, CardBody, CardFooter, Form, FormField, Layer, Menu, RadioButton, Text, TextInput } from 'grommet'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateQuestion() {
    //const [question, setQuestion] = React.useState({});
    const [questionTitle, setQuestionTitle] = useState()
    const [categoryName, setCategoryName] = useState()
    const [option1, setOption1] = useState()
    const [option2, setOption2] = useState()
    const [option3, setOption3] = useState()
    const [option4, setOption4] = useState()
    const [difficulty, setDifficulty] = useState()
    const [isCorrectAnswer, setIsCorrectAnswer] = React.useState();
    const [show, setShow] = useState()
    const [response, setResponse] = useState()
    const navigate=useNavigate();
  return (
    <Form
      //onChange={nextValue => setQuestion(nextValue)}
      onReset={() => setValue({})}
      onSubmit={() => {
        let rightAnswer=isCorrectAnswer==1?option1:(isCorrectAnswer==2)?option2:(isCorrectAnswer==3)?option3:option4
        let question={
            "questionTitle":questionTitle,
            "category":categoryName,
            "option1":option1,
            "option2":option2,
            "option3":option3,
            "option4":option4,
            "difficultylevel":difficulty,
            "rightAnswer":rightAnswer
        }
        console.log(question)
        axios.post("http://localhost:8765/question-service/question/add",question).then((response)=>{
        setShow(true)
        setResponse(response.data)
        console.log(response)
      })
      }}
    >
      <FormField name="Question Title" htmlFor="questionTitle" label="Question Title">
        <TextInput id="questionTitle" name="questionTitle"onChange={(e)=>setQuestionTitle(e.target.value)} />
      </FormField>
      <Menu
        label="Difficulty"
        items={[
            { label: 'Easy', onClick: () => setDifficulty('Easy')},
            { label: 'Hard', onClick: () => setDifficulty('Hard')},
        ]}
        />
      <FormField name="Category" htmlFor="category" label="Category">
        <TextInput id="category" name="category"onChange={(e)=>setCategoryName(e.target.value)} />
      </FormField>  
      <FormField name="Option 1" htmlFor="Option 1" label="Option 1">
      <RadioButton
            name="radio"
            checked={isCorrectAnswer==1}
            label="Is Correct Answer"
            onChange={(event) => setIsCorrectAnswer(1)}
        />
        <TextInput id="option1" name="option1" onChange={(e)=>setOption1(e.target.value)}/>
      </FormField>
      <FormField name="Option 2" htmlFor="Option 2" label="Option 2">
      <RadioButton
            name="radio"
            checked={isCorrectAnswer==2}
            label="Is Correct Answer"
            onChange={(event) => setIsCorrectAnswer(2)}
        />
        <TextInput id="option2" name="option2" onChange={(e)=>setOption2(e.target.value)}/>
      </FormField>
      <FormField name="Option 3" htmlFor="Option 3" label="Option 3">
      <RadioButton
            name="radio"
            checked={isCorrectAnswer==3}
            label="Is Correct Answer"
            onChange={(event) => setIsCorrectAnswer(3)}
        />
        <TextInput id="option3" name="option3" onChange={(e)=>setOption3(e.target.value)}/>
      </FormField>
      <FormField name="Option 4" htmlFor="Option 4" label="Option 4">
      <RadioButton
            name="radio"
            checked={isCorrectAnswer==4}
            label="Is Correct Answer"
            onChange={(event) => setIsCorrectAnswer(4)}
        />
        <TextInput id="option4" name="option4" onChange={(e)=>setOption4(e.target.value)}/>
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
      {show && (<Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <Card>
            <CardBody pad={"medium"}>
            {response}
            </CardBody>
            <CardFooter pad={"medium"} alignSelf='center'>
            <Button label="Ok" onClick={()=>{navigate("/")}}/>
            </CardFooter>
            </Card>
          </Layer>)
          }

    </Form>
  )
}

export default CreateQuestion
