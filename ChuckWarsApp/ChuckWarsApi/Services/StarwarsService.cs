using ChuckWarsApi.ApiHelper;
using ChuckWarsApi.Domain;
using ChuckWarsApi.Models;

namespace ChuckWarsApi.Services
{
    public class StarwwarsBusinessLogic
    {
        private readonly IConfiguration _starwarsconfiguration;
        private string baseurl;
        private string searchurl;
        private string peopleurl;
        private string person;
        private string bypagenum;

        public StarwwarsBusinessLogic(IConfiguration configuration)
        {
            _starwarsconfiguration = configuration;
            baseurl = configuration.GetValue<string>("StarwarsBase");
            searchurl = baseurl + configuration.GetValue<string>("StarwarsSearch");
            peopleurl = baseurl + configuration.GetValue<string>("StarwarsPeople");
            bypagenum = baseurl + configuration.GetValue<string>("StarwarsPage");
            person = baseurl + configuration.GetValue<string>("StarwarsPerson");
        }

        public async Task<StarwarsPeople> GetStarwarsPeople()
        {
            StarwarsPeople starwarsPeople = await HTTPClientWrapper<StarwarsPeople>.Get(peopleurl);

            return starwarsPeople;
        }

        public async Task<StarwarsPeople> GetStarwarsPeople(string pageNo)
        {
            string personpageapiurl = string.Format(bypagenum, pageNo);
            StarwarsPeople starwarsPeople = await HTTPClientWrapper<StarwarsPeople>.Get(personpageapiurl);

            return starwarsPeople;
        }



        public async Task<StarwarsModel> GetStarwarsPerson(string personnumber)
        {
            string personurl = string.Format(person, personnumber);

            StarwarsModel starwarsperson = await HTTPClientWrapper<StarwarsModel>.Get(personurl);

            return starwarsperson;
        }

        public async Task<StarwarsSearchResults> GetStarwarsSearchResults(string query)
        {
            string searchapiurl = string.Format(searchurl, query);

            StarwarsSearchResults results = await HTTPClientWrapper<StarwarsSearchResults>.Get(searchapiurl);

            return results;
        }


    }
}
