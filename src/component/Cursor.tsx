import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={14}
        outerSize={50}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid white",
          
        }}
      />
    </div>
  );
};

export default Cursor;

/* import { CursorProps, useCursorify } from '@cursorify/react'
import React from 'react'

export const Cursor: React.FC<CursorProps> = ({ disabled }) => {
  const { mouseState, style } = useCursorify()

  return (
    <div
      data-hover={style}
      style={{
        width: 40,
        height: 40,
        fontSize: 30,
      }}
    >
      {(() => {
        if (disabled) return '🖐️'
        if (mouseState === 'mouseDown') return '✊'
        if (style === 'pointer') return '👆'
        return '🖐️'
      })()}
    </div>
  )
}
 */
