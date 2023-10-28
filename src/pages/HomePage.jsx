import { Box, Button, Card, CardBody, CardFooter, CardHeader } from 'grommet'
import React from 'react'
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate=useNavigate();
  return (
    <Box align='center' pad={"large"}>
      <Button primary label="Create Question" onClick={()=>{navigate(`/createQuestion`)}} pad={"1%"} margin={"1%"}/>
      <Button primary label="Quiz List" onClick={()=>{navigate(`/quizList`)}} pad={"1%"} width={"50%"}/>
    </Box>
  )
}

export default HomePage
