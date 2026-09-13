import { Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { LiaHotelSolid } from "react-icons/lia";
import ariseLogo from "@/assets/arise-white.jpeg";
import akwaIbomLogo from "@/assets/akwa-ibom-logo-main.png";
import {
  Bar,
  Content,
  LogosGroup,
  LogoImgSmall,
  EmailGroup,
  EmailLink,
  SocialIcons,
  SocialIconLink,
  Spacer,
  HotelIconSlot,
  RegisterButton,
  RegisterLabelShort,
  RegisterLabelFull,
} from "./TopBar.styles";

interface TopBarProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/akwaibomtourism", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/akwaibomtourism", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/akwaibomtourism", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/akwaibomtourism", label: "YouTube" },
];

const TopBar = ({ setIsModalOpen }: TopBarProps) => {
  return (
    <Bar>
      <Content>
        <LogosGroup>
          <LogoImgSmall src={ariseLogo} alt="Arise Logo" />
          <LogoImgSmall src={akwaIbomLogo} alt="Akwa Ibom State Government Logo" />
        </LogosGroup>

        <EmailGroup>
          <Mail size={14} />
          <EmailLink href="mailto:info@akwaibomtourism.com">info@akwaibomtourism.com</EmailLink>
        </EmailGroup>

        <SocialIcons>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <SocialIconLink key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={14} />
            </SocialIconLink>
          ))}
        </SocialIcons>

        <Spacer />

        <HotelIconSlot>
          <LiaHotelSolid size={16} />
        </HotelIconSlot>

        <RegisterButton onClick={() => setIsModalOpen(true)}>
          <RegisterLabelShort>Register</RegisterLabelShort>
          <RegisterLabelFull>Register your hospitality establishment</RegisterLabelFull>
        </RegisterButton>
      </Content>
    </Bar>
  );
};

export default TopBar;
