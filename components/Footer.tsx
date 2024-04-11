"use client";

import Link from "./Link";
import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/social-icons";

import { useParams } from "next/navigation";
import { LocaleTypes } from "app/[locale]/i18n/settings";
import { useTranslation } from "app/[locale]/i18n/client";

import { useContactModal } from "./formspree/store";
import { ContactModal } from "./formspree";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  // background-color: #f1f1f1;
  color: #333;
`;

const IconList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #999;
  display: flex;
`;

export default function Footer() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "footer");
  const contactModal = useContactModal();

  const handleContactClick = (): void => {
    contactModal.onOpen();
  };

  return (
    <>
      <StyledFooter>
        <IconList>
          <Icon>
            {siteMetadata.formspree === false ? (
              <SocialIcon
                kind="mail"
                href={`mailto:${siteMetadata.email}`}
                size={25}
              />
            ) : (
              <button
                className="flex items-center focus:outline-none"
                onClick={handleContactClick}
              >
                <SocialIcon kind="mail" size={25} />
              </button>
            )}
          </Icon>
          <Icon>
            <SocialIcon kind="github" href={siteMetadata.github} size={20} />
          </Icon>
          <Icon>
            <SocialIcon
              kind="facebook"
              href={siteMetadata.facebook}
              size={20}
            />
          </Icon>
          <Icon>
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={20} />
          </Icon>
          <Icon>
            <SocialIcon
              kind="linkedin"
              href={siteMetadata.linkedin}
              size={20}
            />
          </Icon>
          <Icon>
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={20} />
          </Icon>
        </IconList>
        <Text>
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </Text>
        <Text>
          <Link href="https://google.com">{t("theme")}</Link>
        </Text>
      </StyledFooter>
      <ContactModal />
    </>
  );
}
