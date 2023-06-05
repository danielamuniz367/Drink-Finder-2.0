import { Box, Heading, Stack } from "@chakra-ui/react";

interface InstructionsProps {
  strInstructions: string | null;
}

export default function Instructions({ strInstructions }: InstructionsProps) {
  return (
    <Stack>
      <Heading size="md">Instructions</Heading>
      <Box>{strInstructions}</Box>
    </Stack>
  );
}
