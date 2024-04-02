import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";

export function Counter() {
  return(
    <CounterContainer>
      <Minus size={14} />
      <span>0</span>
      <Plus size={14} />
    </CounterContainer>
  )
}