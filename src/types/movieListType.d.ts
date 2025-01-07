interface listDataType {
  dates?: {
    maximum: string | Date;
    minimum: string | Date;
  };
  page: number;
  results: ResultsType[];
  total_pages: number;
  total_results: number;
}

interface ResultsType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
