exports.getDemo = (req, res) => {
  res.send("Hello World!");
};

exports.postDemo = (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
};

//postDemoWithId

exports.postDemoWithId = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log(id);
  res.json({ id, ...req.body });
};
