import SocialLink from './SocialLink';
import { socialLinks } from '../data';

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default SocialLinks;
