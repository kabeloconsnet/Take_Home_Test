namespace ChuckWarsApi.Domain
{
    public class CleanSearchResults
    {
        public string valueresp { get; set; }
        public string source { get; set; }
    }

    public class CleanSearchResultsObjectList
    {
        public List<CleanSearchResults> cleanSearchResultsObjectList { get; set; }
    }
}
