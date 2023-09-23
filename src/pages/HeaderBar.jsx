
import {Header,Nav,Text} from 'grommet'

function HeaderBar() {
  return (
    <Header background={'brand'} sticky="scrollup"> 
      <Nav direction="row" title='Quiz' pad='medium'>
        <Text size='large' alignSelf='center' textAlign='center'>Quiz App</Text>
      </Nav>
    </Header>
  )
}

export default HeaderBar