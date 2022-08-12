import styled from "styled-components";
import { Block } from "./Block";

export const Field = ({ fieldSize, pushList }) => {
  return (
    <div className="row-div">
      {" "}
      <StyledField fieldSize={fieldSize}>
        {new Array(fieldSize * fieldSize)
          .fill(undefined)
          .map((ignore, index) => (
            <Block
              pushList={pushList}
              fieldSize={fieldSize}
              index={index}
              key={`${index + "-" + fieldSize}`}
            />
          ))}
      </StyledField>
    </div>
  );
};

const StyledField = styled.div`
  display: grid;
  grid-template-rows: repeat(${(props) => props.fieldSize}, 25px);
  grid-template-columns: repeat(${(props) => props.fieldSize}, 25px);

  .grid-item {
    border: 1px solid black;

    &.active {
      background-color: blue;
    }
  }
`;

// [ - - - - - ]
// [ - - - - - ]
// [ - - - * - ]
// [ - - - - * ]
// [ - - - - - ]

// Row = Math.ceil((index / fieldSize) % fieldSize) -> 3
// Col = index % fieldSize -> 4
//
// row 3, col 4
// row 4, col 5
