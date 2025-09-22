import ListPage from '../../components/ListPage';
import { socialData } from '../../data/social';

export default function SocialResponsibility() {
  return (
    <ListPage 
      pageKey="socialResponsibility" 
      data={socialData} 
      navBasePath="social-responsibility" 
    />
  );
}
