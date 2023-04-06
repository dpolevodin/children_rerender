import React, {FC, memo} from "react";

export const ChildrenComponent: FC<{x: number, y: number}> = memo(({x,y}) => {
    console.log("ChildrenComponent render")
    return <>
      <div
        className="App-children"
      >
        Children-компонент, который не зависит от props-ов родителя
      </div>
    </>
},
//   ((prevProps, nextProps) => {
//   return nextProps.x > 500 && nextProps.y > 500
// })
)















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