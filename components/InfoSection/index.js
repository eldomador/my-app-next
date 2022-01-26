import React from "react";
import { Button } from "../ButtonElements";
import { useIntl } from "react-intl";
import Link from "next/link";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Img,
  ImgWrap,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  PlayerWrap,
  Player,
} from "./infoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  videoUrl,
}) => {
  const intl = useIntl();
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{intl.formatMessage({ id: topLine })} </TopLine>
                <Heading lightText={lightText}>
                  {intl.formatMessage({ id: headline })}
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {intl.formatMessage({ id: description })}
                </Subtitle>
                <BtnWrap>
                  <Link href="contact" passHref>
                    <Button
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {intl.formatMessage({ id: buttonLabel })}
                    </Button>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              {videoUrl ? (
                <PlayerWrap>
                  <Player url={videoUrl} width="100%" height="100%" />
                </PlayerWrap>
              ) : (
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              )}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
