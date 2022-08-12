using ChuckWarsApi.Domain;

namespace ChuckWarsApi.Services
{
    public class FormatSearchResults
    {
        public List<CleanSearchResults> getFormattedSearchResults(ChuckWarsSearchResults chuckWarsSearchResults)
        {

           List< CleanSearchResults> cleanSearchResults = new List< CleanSearchResults>();

            var chuckitems = from res in chuckWarsSearchResults.chucknorrisresults.result select res;
            var starwarsitems = from starres in chuckWarsSearchResults.starwarsresults.results select starres;

            foreach(var item in chuckitems)
            {

                CleanSearchResults temp = new CleanSearchResults();
                temp.valueresp = item.value;
                temp.source = item.url;
                cleanSearchResults.Add(temp);

            }

            foreach (var item in starwarsitems)
            {

                CleanSearchResults temp = new CleanSearchResults();
                temp.valueresp = item.name;
                temp.source = item.url;
                cleanSearchResults.Add(temp);

            }

            return cleanSearchResults;
        }
    }
}
