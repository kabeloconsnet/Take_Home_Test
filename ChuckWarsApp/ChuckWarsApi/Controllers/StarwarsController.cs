using ChuckWarsApi.Domain;
using ChuckWarsApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChuckWarsApi.Controllers
{
    [Route("swapi")]
    [ApiController]
    public class StarwarsController : ControllerBase
    {

        private readonly ILogger<StarwarsController> _logger;
        private readonly IConfiguration _configuration;
        private StarwwarsBusinessLogic starwwarsBusinessLogic;


        public StarwarsController(ILogger<StarwarsController> logger,
            IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;

            starwwarsBusinessLogic = new StarwwarsBusinessLogic(_configuration);

        }

        [HttpGet]
        public StarwarsPeople Get()
        {

            Task<StarwarsPeople> result = starwwarsBusinessLogic.GetStarwarsPeople();
            return result.Result;
        }

        [HttpGet("byPage")]
        public StarwarsPeople GetbyPage(string pageNo)
        {

            Task<StarwarsPeople> result = starwwarsBusinessLogic.GetStarwarsPeople(pageNo);
            return result.Result;
        }



    }
}
