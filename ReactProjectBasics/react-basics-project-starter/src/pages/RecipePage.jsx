import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Tag,
  Center,
  Wrap,
  Button,
  Tooltip,
  Box,
  Grid,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, clickFn }) => {
  const Nutrients = [
    recipe.totalNutrients.ENERC_KCAL,
    recipe.totalNutrients.FAT,
    recipe.totalNutrients.CHOCDF,
    recipe.totalNutrients.PROCNT,
    recipe.totalNutrients.CHOLE,
    recipe.totalNutrients.NA,
  ];

  return (
    <Center bg="blue.300" h="100%">
      <Card
        mt={["20px", "50px"]}
        mb={["20px", "50px"]}
        width={["80%", "60%"]}
        boxShadow="2xl"
        bg="white"
        cursor={"pointer"}
        
      >
        <CardHeader>
          <Center>
            <Image
              src="/src/assets/Chef.png"
              width={"40px"}
              bg="orange.300"
              p={2}
              borderRadius={"50%"}
              transform="rotate(25deg)"
              mb={2}
            />
          </Center>
          <Center>
            <Box
              backgroundImage={`url(${recipe.image})`}
              h="200px"
              w="100%"
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              borderRadius={"xl"}
              opacity={0.5}
            ></Box>
          </Center>
        </CardHeader>
        <CardBody>
          <Grid gridTemplateColumns={["1fr", "3fr 2fr"]}>
            <Stack mt={[1, 6]} spacing="3">
              <Text
                color="orange.600"
                fontSize="xs"
                textTransform={"uppercase"}
                fontWeight={"semibold"}
              >
                {recipe.mealType.length > 1
                  ? recipe.mealType.join("/")
                  : recipe.mealType}{" "}
              </Text>
              <Text
                fontSize={["l", "xl"]}
                color="orange.700"
                fontWeight={"bold"}
                pb={3}
              >
                {recipe.label}
              </Text>
              <Stack direction="row">
                
                <Text fontStyle={"italic"} fontSize={"sm"}>
                  {"Cooking time: "}{recipe.totalTime} minutes
                    </Text>
                
              </Stack>
              <Stack direction="row">
                <Text fontStyle={"italic"} fontSize={"sm"}>
                  {"Amount of servings: "}{recipe.yield} servings
                </Text>
              
                 </Stack>
              <Text fontWeight={"bold"} pt={3} color="orange.600">
                Ingredients:
              </Text>
              <List>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <ListItem key={ingredient.text} fontSize={["xs", "sm"]}>
                      <Tooltip label="Click to see an image of the ingredient">
                        <Link href={ingredient.image} isExternal="true">
                          {ingredient.text}
                        </Link>
                      </Tooltip>
                    </ListItem>
                  );
                })}
              </List>
              <Text fontWeight={"bold"} pt={3} color="orange.600">
                Total nutrients:
              </Text>
              <Stack direction={["column", "row"]} gap={[1, 5]}>
                {Nutrients.map((nutri) => {
                  return (
                    <Stack
                      direction="column"
                      key={nutri.label}
                      bg="orange.100"
                      p={1}
                      borderRadius={"25px"}
                      fontSize={["xs", "sm"]}
                      textAlign={"center"}
                    >
                      <Text mb={-2}>
                        {Math.round(nutri.quantity)} {nutri.unit}
                      </Text>
                      <Text
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                        fontSize={"xs"}
                      >
                        {nutri.label}
                      </Text>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
            <Stack mt="6" spacing="3">
              <Text fontWeight={"semibold"} pt={3} color="orange.600">
                {recipe.healthLabels.length >= 1 ? "Health labels:" : ""}
              </Text>
              <Wrap>
                {recipe.healthLabels.map((label) => {
                  return (
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
                  );
                })}
              </Wrap>
              <Text fontWeight={"semibold"} pt={3} color="orange.600">
                {recipe.dietLabels.length >= 1 ? "Diet:" : ""}
              </Text>
              <Wrap>
                {recipe.dietLabels.map((label) => {
                  return (
                    <Tag
                      key={label}
                      size={"sm"}
                      maxBlockSize={2}
                      bg="green.100"
                      textAlign={"center"}
                      color="green.600"
                      fontWeight={"semibold"}
                      py={1}
                      textTransform={"uppercase"}
                    >
                      {label}
                    </Tag>
                  );
                })}
              </Wrap>
              <Stack direction="row">
                <Text fontWeight={"semibold"} pt={3} color="orange.600">
                  {recipe.cautions.length >= 1 ? "Cautions:" : ""}
                </Text>
                <Tooltip label="Watch out if you allergic to one of the following things">
                  <WarningIcon
                    w={recipe.cautions.length >= 1 ? 5 : 0}
                    h={5}
                    color="red.500"
                    transform={"translateY(15px)"}
                  />
                </Tooltip>
              </Stack>
              <Wrap>
                {recipe.cautions.map((warning) => {
                  return (
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
                    </Tag>
                  );
                })}
              </Wrap>
            </Stack>
          </Grid>
        </CardBody>
        <CardFooter>
            <Tooltip label="Klik om terug te gaan naar het overzicht">
                <Button
                   borderRadius={"50%"}
                      bg="blue.400"
                      w="40px"
                      h="40px"
                      p={2}
                       _hover={{ backgroundColor: "blue.200" }}
                       onClick={() => clickFn()}
                       >
                  Go Back
                   </Button>
                  </Tooltip>
            </CardFooter>
          </Card>
        </Center>
  );
};
              
             
