import React from "react";
import { useIntl } from "react-intl";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  const intl = useIntl();
  return (
    <ServicesContainer id="my-apps">
      <ServicesH1>{intl.formatMessage({ id: "apps" })}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
          href="https://randomrecipee.netlify.app/"
          target="_blank"
          aria-label="Random recipe app"
        >
          <ServicesIcon src={"/undraw_breakfast.svg"} />
          <ServicesH2> {intl.formatMessage({ id: "app1" })}</ServicesH2>
        </ServicesCard>
        <ServicesCard
          href="https://tooooodo.netlify.app/"
          target="_blank"
          aria-label="Todo app"
        >
          <ServicesIcon src={"/undraw_project_completed.svg"} />
          <ServicesH2> {intl.formatMessage({ id: "app2" })}</ServicesH2>
        </ServicesCard>

        <ServicesCard
          href="https://weeeatherapp.netlify.app/"
          target="_blank"
          aria-label="Weather app"
        >
          <ServicesIcon src={"/undraw_weather.svg"} />
          <ServicesH2>{intl.formatMessage({ id: "app3" })}</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
