"use client";
import { Box, Flex, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icon";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <Flex>
      <HStack {...rest} spacing="24px" align="start">
        <Icon as={icon} boxSize={{ base: "8", lg: "12" }} />
        <Text textAlign="left" fontSize="18px" fontWeight="700">
          {children}
        </Text>
      </HStack>
    </Flex>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" mt="25px" px="50px">
      <Flex direction={{ base: "column", lg: "row" }}>
        <HStack mb="20px">
          <Feature icon={MoneyBackGuaranteeIcon}>
            30 days money back Guarantee
          </Feature>
        </HStack>

        <HStack mb="20px">
          <Feature icon={HassleFreeIcon}>
            No setup fees 100% hassle-free
          </Feature>
        </HStack>

        <HStack mb="20px">
          <Feature icon={MonthlySubscriptionIcon}>
            No monthly subscription Pay once and for all
          </Feature>
        </HStack>
      </Flex>
    </Box>
  );
}
