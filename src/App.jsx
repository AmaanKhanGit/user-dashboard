import { Button, Center } from "@chakra-ui/react";
import { Toaster, toaster } from "./components/ui/toaster";

function App() {
  const handleClick = () => {
    toaster.create({
      title: "Welcome !",
      type: "success",
      duration: 5000,
      closable: true,
    });
  };

  return (
    <>
      <Center h="100vh">
        <Button
          p="2"
          bg="orange.500"
          // color={{
          //   _light: "black",
          //   _dark: "white",
          // }}

          onClick={handleClick}
        >
          Welcom to initial UI
        </Button>
      </Center>
      <Toaster />
    </>
  );
}

export default App;
