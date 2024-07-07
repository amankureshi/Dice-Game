import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arryNumber = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumber);

  const numberSelectHander = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arryNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectHander(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 1rem;
  }
  p {
    padding-top: 10px;
    font-size: 1rem;
    font-weight: 700;
  }
  .error {
    color: red;
    font-size: 1.3rem;
  }
  @media (max-width: 786px) {
    div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
    }
    p {
      margin: 0 auto;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "transparent ")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  transition: 0.4s all ease-in-out;
`;
