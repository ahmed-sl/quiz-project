import React, { useState } from 'react';
import { ChakraProvider, Select, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Quiz from './page/Quiz';
import Result from './page/Result';

function App() {
  const [name, setName] = useState('');
  const [difficult, setDifficult] = useState('');
  const [catagory, setCatgory] = useState('');
  const [qustion, setQuistion] = useState('');
  const [score, setScore] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setName={setName}
                setDifficult={setDifficult}
                setCatgory={setCatgory}
                difficult={difficult}
                catagory={catagory}
                setQuistion={setQuistion}
                setScore={setScore}
              />
            }
          />
          <Route path="/result" element={<Result name={name} score={score}/>} />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                qustions={qustion}
                setScore={setScore}
                score={score}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
