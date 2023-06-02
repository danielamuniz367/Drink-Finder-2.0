import { Container } from "@chakra-ui/react";

interface InstructionsProps {
  strInstructions: string | null;
}

export default function Instructions({ strInstructions }: InstructionsProps) {
  return <Container>{strInstructions}</Container>;
}
