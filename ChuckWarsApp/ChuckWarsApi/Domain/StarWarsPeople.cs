using ChuckWarsApi.Models;

namespace ChuckWarsApi.Domain
{
    public class StarwarsPeople
    {
        public int count { get; set; }
        public string next { get; set; }
        public object previous { get; set; }
        public List<StarwarsModel> results { get; set; }
    }
}
