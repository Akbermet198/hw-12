import styled from "styled-components";
import BackgroundImg from "../../assets/images/summary_backround.jpg";
import Meals from "../meals/meals";
import { SummaryInfoCard } from "./SummaryInfoCard";

const Summary = () => {
  return (
    <Container>
      <Img src={BackgroundImg} alt="summary" />
      <SummaryInfoCard/>
      <Meals></Meals>
    </Container>
  );
};
export default Summary;

const Container = styled.div`
  height: 527px;
`;
const Img = styled.img`
  width: 100%;
  height: 432px;
`;
