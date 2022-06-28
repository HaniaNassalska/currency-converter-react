import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Result from "./Result";


function App() {

  return (
    <Container>
      <Header title={"Przelicz złotówki na dolary / euro / funty"} />
      <Form />
      <Result />

    </Container>
  );
}

export default App;
