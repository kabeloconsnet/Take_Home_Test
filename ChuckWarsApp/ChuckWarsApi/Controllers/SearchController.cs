using ChuckWarsApi.Domain;
using ChuckWarsApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ChuckWarsApi.Controllers
{
    [Route("search")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ILogger<SearchController> _logger;
        private readonly IConfiguration _configuration;
        private StarwwarsBusinessLogic starwwarsBusinessLogic;
        private ChuckNorrisService chuckBusinessLogic;


        public SearchController(ILogger<SearchController> logger,
            IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;

            starwwarsBusinessLogic = new StarwwarsBusinessLogic(_configuration);
            chuckBusinessLogic = new ChuckNorrisService(_configuration);

        }

        [HttpGet]
        public CleanSearchResultsObjectList GetBothSearchResults(string query)
        {

            string query_lower = query.ToLower().Trim();
            ChuckWarsSearchResults bothapisearches = new ChuckWarsSearchResults();
            FormatSearchResults formatSearchResults = new FormatSearchResults();
            List<CleanSearchResults> cleanSearchResults = new List<CleanSearchResults>();

            if(query.Length >= 3)
            {
                Task<StarwarsSearchResults> result = starwwarsBusinessLogic.GetStarwarsSearchResults(query);
                bothapisearches.starwarsresults = result.Result;
            }
            
            Task<SearchResults> chuckresults = chuckBusinessLogic.GetSearchResults(query);

           
            bothapisearches.chucknorrisresults = chuckresults.Result;

            cleanSearchResults = formatSearchResults.getFormattedSearchResults(bothapisearches);

            CleanSearchResultsObjectList cleanSearchResultsObjectList = new CleanSearchResultsObjectList();
            cleanSearchResultsObjectList.cleanSearchResultsObjectList = cleanSearchResults;

           return cleanSearchResultsObjectList;
        }
    }
}
