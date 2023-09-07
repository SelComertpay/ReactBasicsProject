import { Center, Heading, Grid, Text, Image, Stack } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/ui/RecipeItemCard";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";
import "./RecipeListPage.css";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <Center h="100%" flexDir="column" bg="#EFE6DD" pb="200px" w="100%">
      <Stack
        direction="row"
        mt={2}
        width="60%"
        bg={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.5)"]}
        py={8}
        borderRadius={"55px"}
        boxShadow={[0, "2xl"]}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Stack direction="column">
          <Heading
            color={["white", "blue.400"]}
            fontSize={["sm", "xl"]}
            pb={2}
            mt={-3}
          >
            World dish App:
          </Heading>
          <Heading id="font" color="#FF5733">
            Choose wisely!
          </Heading>
        </Stack>
        <Image
          src="/src/assets/Chef.png"
          w={"50px"}
          h={"50px"}
          bg="#EFE6DD"
          p={2}
          borderRadius={"50%"}
          transform="translateX(50px) rotate(25deg)"
        />
      </Stack>

      <Text fontWeight={500} fontSize={["sm", "lg"]} mt={[1, 8]} color="#FF5733">
        Search for recipes:
      </Text>
      <TextInput changeFn={handleChange} w={[200, 500]} mt={2} />
      <Grid
        alignContent={"center"}
        justifyContent={"center"}
        gridTemplateColumns={[
          "1fr",
          matchedRecipes.length >= 4
            ? "repeat(4, 1fr)"
            : matchedRecipes.length === 3
            ? "repeat(3, 1fr)"
            : matchedRecipes.length === 2
            ? "repeat(2, 1fr)"
            : "1fr",
        ]}
        columnGap={10}
        pb={matchedRecipes.length === 0 && "500px"}
      >
        {matchedRecipes.map((recipe) => (
          <RecipeItemCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            clickFn={clickFn}
          />
        ))}
      </Grid>
    </Center>
  );
};
