/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Wrap,
  useRadioGroup,
  VStack,
  Text,
} from "@chakra-ui/react";
import { getIcon } from "../../functions";
import RadioCard from "../RadioCard";
import FlagInlineCard from "../FlagInlineCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const SideDrawer = (props) => {
  const { flags, currentLocation } = props;
  const [type, setTypeOfAid] = useState("GENERAL");
  const { isOpen, onOpen, onClose } = props;
  const btnRef = useRef();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: (aid) => {
      setTypeOfAid(aid.toUpperCase());
    },
  });
  const group = getRootProps();

  return (
    <>
      <Button
        position={"fixed"}
        top="20"
        left="5"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon={faList} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter SOS Reports</DrawerHeader>
          <DrawerBody>
            <VStack spacing={5}>
              <Wrap {...group}>
                {["General", "Food", "Baby Items", "Flood Shelter"].map(
                  (value) => {
                    const radio = getRadioProps({ value });
                    return (
                      <RadioCard key={value} {...radio}>
                        {`${getIcon(value.toUpperCase())} ${" "} ${value}`}
                      </RadioCard>
                    );
                  }
                )}
              </Wrap>
              <VStack>
                {flags
                  .filter((flag) => flag.type === type)
                  // sort by distance
                  .sort((a, b) => a.distance < b.distance)
                  .map((flag, key) => {
                    console.log(key);
                    return (
                      <FlagInlineCard
                        key={key}
                        description={flag.description}
                        phonenumber={flag.phonenumber}
                        type={flag.type}
                        latitude={flag.lat}
                        longitude={flag.lng}
                        distance={flag.distance}
                      />
                    );
                  })}
              </VStack>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

SideDrawer.propTypes = {
  flags: PropTypes.array,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  currentLocation: PropTypes.object,
};

export default SideDrawer;
