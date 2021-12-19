import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

const Popup = (props) => {
  const { className, visible, positionFromTop, children } = props;

  return (
    <Flex
      className={className}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      h="55%"
      mh="55%"
      w="100%"
      position="fixed"
      left="50%"
      transform="translate(-50%, -50%)"
      top={visible ? positionFromTop : "200%"}
      borderRadius="8px"
      // padding="0.8rem"
      overflowY="scroll"
      transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)"
      transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)"
    >
      {children}
    </Flex>
  );
};

Popup.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  positionFromTop: PropTypes.string,
  children: PropTypes.node,
};

export default Popup;

{
  /* <Flex
        className="foodbank-details-modal"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        h="55%"
        mh="55%"
        w="100%"
        position="fixed"
        left="50%"
        transform="translate(-50%, -50%)"
        top={foodbankModalVisible ? "75%" : "200%"}
        borderRadius="8px"
        // padding="0.8rem"
        overflowY="scroll"
        transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)"
        transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)"
      > */
}
