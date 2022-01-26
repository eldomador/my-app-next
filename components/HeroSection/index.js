import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Button,
  HeroIcon,
} from "./HeroElements";

const HeroSection = () => {
  const intl = useIntl();
  return (
    <HeroContainer id="home">
      <HeroBg>
        {<VideoBg autoPlay loop muted src="/video.mp4" type="video/mp4" />}
      </HeroBg>
      <HeroContent>
        <HeroIcon />
        <HeroH1>{intl.formatMessage({ id: "hi" })} </HeroH1>
        <HeroP>{intl.formatMessage({ id: "heroText" })}</HeroP>
        <HeroBtnWrapper>
          <Link href="/CV.pdf" download passHref>
            <Button target="_blank">{intl.formatMessage({ id: "cv" })}</Button>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
