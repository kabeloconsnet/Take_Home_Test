using ChuckWarsApi.ApiHelper;
using ChuckWarsApi.Domain;
using ChuckWarsApi.Models;

namespace ChuckWarsApi.Services
{
    public class ChuckNorrisService
    {
        private readonly IConfiguration _chuckconfiguration;
        private string baseurl;
        private string categoryurl;
        private string searchurl;
        private string chuckrandomfact;

        public ChuckNorrisService(IConfiguration configuration)
        {
            _chuckconfiguration = configuration;
            baseurl = configuration.GetValue<string>("ChuckNorrisBase");
            categoryurl = baseurl + configuration.GetValue<string>("ChuckNorrisCategories");
            searchurl = baseurl + configuration.GetValue<string>("ChuckNorrisSearch");
            chuckrandomfact = baseurl + configuration.GetValue<string>("Chuckrandomfact");
        }

        public async Task<List<string>> GetChuckCategories()
        {
            List<string> chuckNorrisModel = await HTTPClientWrapper<List<string>>.Get(categoryurl);

            return chuckNorrisModel;
        }

        public async Task<ChuckNorrisFact> GetRandomChuckFact(string category)
        {
            string facturl = string.Format(chuckrandomfact, category);

            ChuckNorrisFact Chuckfact = await HTTPClientWrapper<ChuckNorrisFact>.Get(facturl);

            return Chuckfact;
        }

        public async Task<SearchResults> GetSearchResults(string query)
        {
            string searchapiurl = string.Format(searchurl, query);

            SearchResults results = await HTTPClientWrapper<SearchResults>.Get(searchapiurl);

            return results;
        }

    }
}
