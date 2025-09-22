import ListPage from '../../components/ListPage';
import { newsData } from '../../data/news';

export default function SocialResponsibility() {
  return (
    <ListPage 
      pageKey="news" 
      data={newsData} 
      navBasePath="news" 
    />
  );
}
