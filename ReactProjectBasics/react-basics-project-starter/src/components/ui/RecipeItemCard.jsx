import {
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Heading,
  Tag,
  Center,
  Wrap,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

export const RecipeItemCard = ({ recipe, clickFn }) => {
  return (
    <Card
      mt={8}
      width={["300px", "340px"]}
      boxShadow="2xl"
      bg="white"
      onClick={() => clickFn(recipe)}
      cursor={"pointer"}
      _hover={{
        opacity: 0.6,
        transform: "scale(.95)",
        filter: "auto",
        blur: "0.5px",
      }}
    >
      <CardBody>
        <Center>
          <Image
            src={recipe.image}
            height={200}
            width="auto"
            borderRadius={"xl"}
          />
        </Center>
        <Stack mt="6" spacing="3" alignItems={"center"}>
          <Text
            color="blue.600"
            fontSize="xs"
            textTransform={"uppercase"}
            fontStyle={"italic"}
          >
            {recipe.mealType.length > 1
              ? recipe.mealType.join("/")
              : recipe.mealType}{" "}
          </Text>
          <Heading size="md" textAlign={"center"}>
            {recipe.label}
          </Heading>
          <Stack direction={"row"}>
            <Text color="blue.600" fontSize="sm">
              Dish:
            </Text>
            <Text
              color="blue.600"
              fontSize="sm"
              fontWeight={"semibold"}
              textTransform={"capitalize"}
            >
              {" "}
              {recipe.dishType}
            </Text>
          </Stack>
        </Stack>
        <Center mt={3}>
          {recipe.healthLabels.map(
            (label) =>
              label === "Vegan" ? (
                <Tag
                  key={label}
                  size={"sm"}
                  maxBlockSize={2}
                  bg="purple.100"
                  m={2}
                  textAlign={"center"}
                  color="purple.600"
                  fontWeight={"semibold"}
                  py={1}
                  textTransform={"uppercase"}
                >
                  {label}
                </Tag>
              ) : (
                label === "Vegetarian" && (
                  <Tag
                    key={label}
                    size={"sm"}
                    m={2}
                    bg="purple.100"
                    textAlign={"center"}
                    color="purple.600"
                    fontWeight={"semibold"}
                    py={1}
                    textTransform={"uppercase"}
                  >
                    {label}
                  </Tag>
                )
              )
          )}
        </Center>
        <Center>
          {recipe.dietLabels.map((label) => (
            <Tag
              key={label}
              size={"sm"}
              m={2}
              bg="green.100"
              textAlign={"center"}
              color="green.600"
              fontWeight={"semibold"}
              py={1}
              textTransform={"uppercase"}
            >
              {label}
            </Tag>
          ))}
        </Center>
        <Wrap spacing="15px" justify="center" mt={1.5}>
          {recipe.cautions.map((warning) => (
            <Tag
              key={warning}
              size={"sm"}
              bg="red.100"
              textAlign={"center"}
              color="red.600"
              fontWeight={"bold"}
              py={1}
              textTransform={"uppercase"}
              wrap={"wrap"}
            >
              {warning}
              <WarningIcon
                mx={1}
                w={5}
                h={5}
                color="red.500"
                alignSelf={"center"}
              />
            </Tag>
          ))}
        </Wrap>
      </CardBody>
    </Card>
  );
};
