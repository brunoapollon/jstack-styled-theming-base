import React, { useContext } from "react";
import { ToggleThemeContext } from "../../contexts/ToggleThemeContext";

import { Container } from "./styles";

export default function Footer() {
  const { onToggleTheme, selectedTheme } = useContext(ToggleThemeContext);
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}
