using Microsoft.AspNetCore.Mvc;

namespace joaWebApp.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class JoaCVInfoController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<JoaCVInfoController> _logger;

    public JoaCVInfoController(ILogger<JoaCVInfoController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetJoaCVInfo")]
    public IEnumerable<JoaCVInfo> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new JoaCVInfo
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
