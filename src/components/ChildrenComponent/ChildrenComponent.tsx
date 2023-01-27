import React, {FC} from "react";

export const ChildrenComponent: FC = () => {
  console.log("ChildrenComponent render")

  return <>
    <div
      className="App-children"
    >
      Children-компонент, который не зависит от props-ов родителя
    </div>
  </>
}















{/** Мемоизация с помощью React.memo (Children) */}
// const ChildrenComponent: FC = () => {
//   console.log("ChildrenComponent render")
//
//   return <>
//     <div
//       className="App-children"
//     >
//       Children-компонент, который не зависит от props-ов родителя
//     </div>
//   </>
// }
//
// export default memo(ChildrenComponent)