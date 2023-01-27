import React, {FC, MouseEvent, useState} from "react";
import {ChildrenComponent} from "../ChildrenComponent";
import {OtherTextComponent} from "../OtherTextComponent";

type Props = {
  children?: React.ReactNode
};

interface Coordinates {
  x: number | null,
  y: number | null
}

const initialPosition: Coordinates = {
  x: 0,
  y: 0
}

export const ParentComponent: FC<Props> = () => {
  const [coordinates, setCoordinates] = useState(initialPosition)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setCoordinates({ x: event.clientX, y: event.clientY })
  }

  return <>
    <div
      className="App-parent"
      onMouseMove={handleMouseMove}
    >
      {/** Вложенный компонент, с передачей пропсов от родителей (Children) */}
      <OtherTextComponent x={coordinates.x} y={coordinates.y}/>

      {/** Вложенный компонент, который не зависит от props-ов родителя (Children) */}
      <ChildrenComponent />

    </div>
  </>
}