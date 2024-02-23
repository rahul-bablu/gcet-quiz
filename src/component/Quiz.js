import { Pagination } from '@mui/material';
import Container from '@mui/material/Container';
function Quiz(params) {
  return (
    <Container component="main" maxWidth="xs">
      Hi From Quiz
      <Pagination  count={10} color="primary" />
    </Container>
  );
}

export default Quiz;
