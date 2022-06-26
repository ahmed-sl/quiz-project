import {
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Container,
  color,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ name, qustions, setScore, score }) => {
  const [qustionIndex, setQuistionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [buttonDisable, setButtonDisabile] = useState(false);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const toast = useToast();
  const rendomOption = option => {
    return option.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const getOptins = () => {
      if (qustions.length > 0) {
        setOptions(
          qustions &&
            rendomOption([
              qustions[qustionIndex]?.correct_answer,
              ...qustions[qustionIndex]?.incorrect_answers,
            ])
        );
      }
    };
    getOptins();
  }, [qustionIndex]);
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Container width="100%">
        <VStack width="100%">
          <HStack width="100%" justifyContent="space-between">
            <Text>Name: {name}</Text>
            <Text>Score: {score}</Text>
          </HStack>
          <Text>
            Qustion {[qustionIndex + 1]}: {qustions[qustionIndex].question}
          </Text>

          {options.map((option, index) => {
            return (
              <>
                <HStack width="100%">
                  <Button
                    variant="outline"
                    isDisabled={buttonDisable}
                    width="100%"
                    value={options}
                    onClick={() => {
                      setButtonDisabile(true);
                      if (option === qustions[qustionIndex].correct_answer) {
                        setScore(score + 1);
                        toast({
                          title: 'currect answer',
                          status: 'success',
                          isClosable: true,
                        });
                      } else {
                        toast({
                          title: 'wrong answer',
                          status: 'error',
                          isClosable: true,
                        });
                      }
                    }}
                    key={index}
                    colorScheme={'green'}
                  >
                    <text olor={'white'}>{option}</text>
                  </Button>
                </HStack>
              </>
            );
          })}
          <Button
            width="100%"
            colorScheme={'green'}
            onClick={() => {
              setQuistionIndex(qustionIndex + 1);

              setButtonDisabile(false);
              setCounter(counter + 1);
             
              if (counter === 5) {
                navigate('/result');
              }
              {
                console.log(counter);
              }
            }}
          >
            Next Question
          </Button>
          <Button width="100%" backgroundColor="red">
            Quit
          </Button>
        </VStack>
      </Container>
    </Flex>
  );
};
export default Quiz;
