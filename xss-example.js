var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');

var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = "Hello " + name; 

function findWhat () {
  return (req: Request, res: Response, next: AnotherFunction) => {
    const id = req.params.accountName

    db.reviews.find({ $where: 'this.element == ' + id }).then((what: NextOne[]) => {
      res.json(utils.queryResultToJson(what))
    }, () => {
      res.status(400).json({ error: 'Wrong Params' })
    })
  }
}

findWhat();
