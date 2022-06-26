import { Select } from '@chakra-ui/react';
import React from 'react';

const Option = ({ List, placeholder, onChange }) => {
  return (
    <Select onChange={onChange} variant="filled" marginBottom="4" width="100%">
      <option selected hidden disabled value="notSelected">
        {placeholder}
      </option>
      {List?.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.lable}
          </option>
        );
      })}
    </Select>
  );
};

export default Option;
