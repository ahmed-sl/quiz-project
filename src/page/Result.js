import { Box, Text, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="gray.600"
    >
      <VStack width="100%" textColor="white">
        <Text fontSize="4xl">{name} finish quiz</Text>
        <Text fontSize="4xl">your score: {score} out of 5</Text>
        <Button
          textColor="black"
          onClick={() => {
            navigate('/');
          }}
        >
          take other quiz
        </Button>
      </VStack>
    </Box>
  );
};

export default Result;
