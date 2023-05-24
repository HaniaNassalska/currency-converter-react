import { StyledFooter } from "./styled";

const Footer = ({ footerDateContent, footerDate, footerExtraContent }) => (
  <StyledFooter>
    {footerDateContent} {footerDate}.
    <br />
    {footerExtraContent}
  </StyledFooter>
);

export default Footer;
