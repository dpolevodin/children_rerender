import React, {FC} from "react";

type Props = {
  x: number | null,
  y: number | null
}

export const OtherTextComponent: FC<Props> = ({x, y}) => {
  return <>
    <span>Текущие координаты мыши: x:</span>
    <span className="App-parent-item">{x}</span>

    <span>Текущие координаты мыши: y:</span>
    <span className="App-parent-item">{y}</span>
  </>
}