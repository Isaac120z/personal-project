const getScreenigData = (req, res) => {
    req.app
      .get("db")
      .getScreeningData()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  };
  
  
  const addScreeningData = (req, res) => {
    console.log(req.user.id, req.body);
    req.app
      .get("db")
      .addScreeningData([req.user.id, req.body])
      .then(response => (req, res))
      .catch(err => res.status(500).json(err));
  };
  
  const updateScreeningData = (req, res) => {
    console.log(req.user.id, req.params.id);
    req.app
      .get("db")
      .updateScreeningData([req.user.id, req.params.id])
      .then(response => getCart(req, res))
      .catch(err => res.status(500).json(err));
  };

  const deleteScreeningData = (req, res) => {
    console.log(req.user.id, req.params.id);
    req.app
      .get("db")
      .deleteScreeningData([req.user.id, req.params.id])
      .then(response => getCart(req, res))
      .catch(err => res.status(500).json(err));
  };

  module.exports = {
    getScreenigData,
    addScreeningData,
    updateScreeningData,
    deleteScreeningData,
  };