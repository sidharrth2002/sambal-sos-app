import React, { useState, useEffect, useRef } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { resources } from "../../i18n";

import * as SSIcons from "../../assets";

const Index = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    `${i18n.languages[0]}`
  );
  const [focused, setFocused] = useState(false);

  const componentRef = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (componentRef && componentRef.current) {
        const ref = componentRef.current;
        if (ref.contains(e.target)) {
          setFocused(true);
        } else {
          setFocused(false);
        }
      }
    }
  }, []);

  const changeLanguage = (value) => {
    setCurrentLanguage(value);
    i18n.changeLanguage(value);
  };

  const LanguageChooserBlockRenderer = () => {
    return Object.keys(resources).map((key) => {
      return (
        <Flex
          key={key}
          justifyContent="center"
          alignItems="center"
          borderRadius="8px"
          w="100%"
          backgroundColor={currentLanguage === key ? "#EAEAEA" : "#FFFFFF"}
          padding="0.5rem"
          mb="10px"
          onClick={() => {
            changeLanguage(key);
          }}
        >
          {key === "English" ? ( // display flag on each language
            <img src={SSIcons.UKFlag} />
          ) : (
            <img src={SSIcons.MalaysiaFlag} />
          )}
          <Text marginLeft="5px">{key}</Text>
        </Flex>
      );
    });
  };

  // styles that make me feel better xd
  const smoothTransition = {
    transition:
      "all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080) !important;",
    "transition-timing-function":
      "cubic-bezier(0.740, -0.175, 0.000, 1.080) !important;",
  };

  return (
    <Flex
      ref={componentRef}
      borderRadius="50%"
      padding="1rem"
      backgroundColor="#FFFFFF"
      border="1px solid #EAEAEA"
      zIndex="1001"
      position="fixed"
      bottom="225px"
      right="20px"
      boxShadow="0px 8px 20px rgba(147, 147, 147, 0.25)"
    >
      <Image
        src={SSIcons.LanguageIcon}
        alt="Language Switcher"
        height="20px"
        width="20px"
      />

      <Flex
        position="absolute"
        right="0px"
        bottom="65px"
        padding="0.5rem"
        borderRadius="8px"
        border="1px solid #EAEAEA "
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
        maxH="250px"
        w="250%"
        backgroundColor="#FFFFFF"
        transformOrigin="bottom"
        transform={focused === true ? "scaleY(1.00)" : "scaleY(0.00)"}
        opacity={focused === true ? "1" : "0"}
        zIndex={focused === true ? "-1" : "1001"}
        {...smoothTransition}
      >
        <LanguageChooserBlockRenderer />
      </Flex>
    </Flex>
  );
};

export default Index;
