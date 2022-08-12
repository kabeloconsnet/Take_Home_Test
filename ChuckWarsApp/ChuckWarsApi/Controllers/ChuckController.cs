using ChuckWarsApi.Models;
using ChuckWarsApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChuckWarsApi.Controllers
{
    [Route("chuck")]
    [ApiController]
    public class ChuckController : ControllerBase
    {
        private readonly ILogger<ChuckController> _logger;
        private readonly IConfiguration _configuration;

        private ChuckNorrisService chuckBusinessLogic;
        private StarwwarsBusinessLogic starwwarsBusinessLogic;


        public ChuckController(ILogger<ChuckController> logger,
            IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;

            chuckBusinessLogic = new ChuckNorrisService(_configuration);
            starwwarsBusinessLogic = new StarwwarsBusinessLogic(_configuration);

        }

        [HttpGet]
        public List<string> Get()
        {
            Task<List<string>> result = chuckBusinessLogic.GetChuckCategories();
            return result.Result;
        }

        [HttpGet("jokebycategory")]
        public ChuckNorrisFact GetRandomJoke(string category)
        {
            Task< ChuckNorrisFact > result = chuckBusinessLogic.GetRandomChuckFact(category);
            return result.Result;
        }
    }
}
