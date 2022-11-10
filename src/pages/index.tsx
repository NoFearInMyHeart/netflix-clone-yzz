import Layout from '@/components/layout';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import requests from '@/utils/request';
import { Movie } from '../../typings';
import Row from '@/components/Row';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

export default function IndexPage({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) {
  // console.log(netflixOriginals);
  // console.log(trendingNow);
  // console.log(topRated);
  // console.log(actionMovies);
  // console.log(comedyMovies);
  // console.log(horrorMovies);
  // console.log(romanceMovies);
  // console.log(documentaries);
  return (
    <Layout title="Home -Netflix">
      <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
        {/* Header */}
        <Header />
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
          {/* Banner */}
          <Banner netflixOriginals={netflixOriginals} />
          <section className="space-y-24">
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Top Rated" movies={topRated} />
            <Row title="Action Thrillers" movies={actionMovies} />
            {/* My List Component */}
            <Row title="Comedies" movies={comedyMovies} />
            <Row title="Scary Movies" movies={horrorMovies} />
            <Row title="Romance Movies" movies={romanceMovies} />
            <Row title="Documentaries" movies={documentaries} />
          </section>
        </main>
        {/* Modal */}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  // console.log(requests.fetchTrending);
  // console.log(requests.fetchNetflixOriginals);
  // console.log(requests.fetchTopRated);
  // console.log(requests.fetchActionMovies);
  // console.log(requests.fetchComedyMovies);
  // console.log(requests.fetchHorrorMovies);
  // console.log(requests.fetchRomanceMovies);
  // console.log(requests.fetchDocumentaries);
  const [
    trendingNow,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      trendingNow: trendingNow.results,
      netflixOriginals: netflixOriginals.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};