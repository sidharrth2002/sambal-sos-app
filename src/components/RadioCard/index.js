import React from "react";
import { useRadio, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
        rounded="3xl"
      >
        {props.children}
      </Box>
    </Box>
  );
};

RadioCard.propTypes = {
  children: PropTypes.node,
};

export default RadioCard;
