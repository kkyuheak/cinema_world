interface PeopleListType {
  page: number;
  results: PeopleResultsType[];
  total_pages: number;
  total_results: number;
}

interface PeopleResultsType {
  adult: boolean;
  gender: number;
  id: number;
  known_for: ResultsType[];
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}
