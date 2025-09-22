
import DetailPage from '../../components/DetailPage';
import { newsData } from '../../data/news';

export default function NewsyDetail() {
  return <DetailPage data={newsData} pageKey="news" />;
}
