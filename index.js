// const { parse } = require('url')

module.exports = (req, res) => {
  // const { query } = parse(req.url, true)
  // const { name = 'World' } = query
  console.log("log test");
  const name = "bar3";
  res.end(`Hello ${name}!`)
}
