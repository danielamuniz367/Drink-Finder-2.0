import { Container } from "@chakra-ui/react";

interface InstructionsProps {
  strInstructions: string | null;
}

export default function Instructions({ strInstructions }: InstructionsProps) {
  return (
    <Container m={0} p={4}>
      {strInstructions}
    </Container>
  );
}
