using Sitecore.Feature.Speak.Models;
using Sitecore.Services.Core;
using Sitecore.Services.Infrastructure.Sitecore.Web.Http.Filters;
using Sitecore.Services.Infrastructure.Web.Http;
using System.Web.Mvc;

namespace Sitecore.Feature.Speak.Controllers
{
    [ServicesController("speak/sampleitem")]
    [SitecoreAuthorize]
    public class SampleItemController : ServicesApiController
    {
        [HttpGet]
        public System.Web.Http.IHttpActionResult Get(string itemId)
        {
            return Ok("Content here");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public System.Web.Http.IHttpActionResult Post(SampleItemModel model)
        {
            return Ok();
        }
    }
}