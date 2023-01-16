using Microsoft.AspNetCore.Mvc;
using myapp.Models;

namespace myapp.Controllers
{

[Route("api/[controller]")]
[ApiController]

    public class PersonController : ControllerBase
    {
        
        private readonly DBPersonContext _dbContext ;

        public PersonController(DBPersonContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetPersons")]
        public IActionResult GetPersons()
        {
            List<Person> list = _dbContext.Persons.ToList();
            return StatusCode(StatusCodes.Status200OK,list);
        }
    }
}
