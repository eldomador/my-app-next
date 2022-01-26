import React, { useRef } from "react";
import { useIntl } from "react-intl";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormContent,
  TextArea,
  SocialIcons,
  SocialIconLink,
} from "./ContactMeElements";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const ContactMe = () => {
  const intl = useIntl();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xt9m823",
        "template_bevvu3t",
        form.current,
        "user_qVkaDtyLe7Ku34Hzxx84H"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(intl.formatMessage({ id: "toastSuccess" }));
        },
        (error) => {
          console.log(error.text);
          toast.error(intl.formatMessage({ id: "toastError" }));
        }
      );

    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <>
      <Container>
        <Link href={"/"} passHref>
          <Icon>Home</Icon>
        </Link>
        <FormWrap>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
              <FormH1>{intl.formatMessage({ id: "contact" })}</FormH1>
              <FormLabel htmlFor="for">
                {intl.formatMessage({ id: "email" })}
              </FormLabel>
              <FormInput id="email" type="email" name="email" required />
              <FormLabel htmlFor="for">
                {intl.formatMessage({ id: "message" })}
              </FormLabel>
              <TextArea
                id="message"
                rows="5"
                type="text"
                name="message"
                required
              />
              <FormButton type="submit" value="Send">
                {intl.formatMessage({ id: "send" })}
              </FormButton>
              <Text>{intl.formatMessage({ id: "socialText" })}</Text>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.linkedin.com/in/jakub-kosmalski-profil/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/kosmalski_jakub/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/jkosmalski"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/eldomador"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithubSquare />
                </SocialIconLink>
              </SocialIcons>
            </Form>
          </FormContent>
          <Toaster />
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactMe;
