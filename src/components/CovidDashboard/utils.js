export const WorldDataUrl = "https://disease.sh/v3/covid-19/all";

export const TableDataUrl =
  "https://corona.lmao.ninja/v2/countries?yesterday&sort";

export const NewsDataUrl =
  "https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True";

export const newsOptionsUrl = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f8da45c009msh74293eeec542a1fp1e067ajsn208f5584d4eb",
    "X-RapidAPI-Host": "covid-19-news.p.rapidapi.com",
  },
};

export const graphUrl =
  "https://disease.sh/v3/covid-19/historical/all?lastdays=200";

export const twitterUrl =
  "https://twitter154.p.rapidapi.com/hashtag/hashtag?hashtag=%23covid18&limit=20&section=top&language=en";

export const twitterOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0aa0ac0b63msh09f10d25616a21fp103b00jsn82228c18fa27",
    "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
  },
};
export let loadedDataTable = [];
export let loadedDataGraph = [
  {
    labels: [],
    datasets: [
      {
        label: "cases",
        borderColor: "red",
        data: [],
        fill: false,
      },
    ],
  },
  {
    labels: [],
    datasets: [
      {
        label: "recovered",
        borderColor: "green",
        data: [],
        fill: false,
      },
    ],
  },
  {
    labels: [],
    datasets: [
      {
        label: "deaths",
        borderColor: "blue",
        data: [],
        fill: false,
      },
    ],
  },
];
