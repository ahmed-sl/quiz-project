import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  useToast,
  VStack,
} from '@chakra-ui/react';
import Option from '../components/Option';
import { useNavigate } from 'react-router-dom';
const Home = ({
  setName,
  setDifficult,
  setCatgory,
  difficult,
  catagory,
  setQuistion,
  setScore,
}) => {
  const DiffList = [
    { lable: 'Easy', value: 'easy' },
    { lable: 'Medium', value: 'medium' },
    { lable: 'Hard', value: 'hard' },
  ];
  const CatList = [
    { lable: 'General knowledge', value: 9 },
    { lable: 'Entertainment: Books', value: 10 },
    { lable: 'Entertainment: Film', value: 11 },
    { lable: 'Entertainment: Music', value: 12 },
    { lable: 'Entertainment: Musicals & Theaters', value: 13 },
    { lable: 'Entertainment: Television', value: 14 },
    { lable: 'Entertainment: Video Games', value: 15 },
    { lable: 'Entertainment: Board Games', value: 16 },
    { lable: 'Science & Nature', value: 17 },
    { lable: 'Science: Computers', value: 18 },
    { lable: 'Science: Mathematics', value: 19 },
    { lable: 'Mythology', value: 20 },
    { lable: 'Sports', value: 21 },
    { lable: 'Geography', value: 22 },
    { lable: 'History', value: 23 },
    { lable: 'Politics', value: 24 },
    { lable: 'Art', value: 25 },
    { lable: 'Celebrities', value: 26 },
    { lable: 'Animals', value: 27 },
  ];
  const navigate = useNavigate();
  const [nameFild, setNameFild] = useState(false);
  const [difficultFild, setDifficultFild] = useState(false);
  const [catagoryFild, setCatgoryFild] = useState(false);
  const toast = useToast()
  const onChangeDiffcult = e => {
    setDifficult(e.target.value);
    setDifficultFild(true)
  };
  const onChangeCatgory = e => {
    setCatgory(e.target.value);
    setCatgoryFild(true)
  };
  const onClick = async () => {
    if (
      nameFild === false &&
      difficultFild === false &&
      catagoryFild === false
    ) {
      return (toast({
        title: 'all fild is required',
                status: 'error',
                isClosable: true,
      }))
    }
    try {
      const requst = await fetch(
        `https://opentdb.com/api.php?amount=5&category=${catagory}&difficulty=${difficult}&type=multiple`
      );
      const data = await requst.json();
      if (data.response_code === 1) {
        console.log('error in fetch data');
      }
      setQuistion(data.results);
      console.log(data.results);
      setScore(0);
      navigate('/quiz');
    } catch (error) {
      console.log('catch error');
    }
  };
  const onChangeName = e => {
    setName(e.target.value);
    setNameFild(true)
  };

  return (
    <>
      <Box width="100%" height="55.5rem">
        <Heading
          textAlign="center"
          noOfLines="1"
          textTransform="uppercase"
          size="4xl"
        >
          intuitive-quiz-hub
        </Heading>

        <HStack display="flex" spacing="0" marginTop="5rem">
          <Box
            px="4"
            h="30rem"
            width="40%"
            display="block"
            justifyContent="center"
            alignItems="center"
          >
            <Heading textAlign="center" textTransform="uppercase" fixed="top">
              quize setting
            </Heading>
            <VStack>
              <Box
                marginTop="3rem"
                display="block"
                justifyContent="space-between"
                alignItems="center"
              >
                <Input
                  placeholder="name"
                  marginBottom="5"
                  padding="1.5rem"
                  onChange={onChangeName}
                ></Input>
                <Option
                  onChange={onChangeDiffcult}
                  List={DiffList}
                  placeholder={'Difficulty'}
                />
                <Option
                  onChange={onChangeCatgory}
                  List={CatList}
                  placeholder={'Catgory'}
                />

                <Button
                  size="lg"
                  backgroundColor="blue.400"
                  width="100%"
                  marginBottom="5"
                  padding="1.5rem"
                  onClick={onClick}
                >
                  start
                </Button>
              </Box>
            </VStack>
          </Box>
          <Box
            px="4"
            h="30rem"
            width="60%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width="40rem"
              height="28rem"
              borderRadius="lg"
              src="https://img.freepik.com/free-vector/blue-quiz-background-with-megaphone_23-2147599490.jpg"
            ></Image>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Home;
