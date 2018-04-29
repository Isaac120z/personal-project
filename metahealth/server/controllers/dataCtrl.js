const getScreeningData = (req, res) => {
  req.app
    .get("db")
    .getScreeningData([req.user.id])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const addScreeningData = (req, res) => {
  console.log(req.user, req.body);
  // const { id } = req.user;
  const {
    gender,
    screeningDate,
    waistCircumference,
    triglycerides,
    cholesterol,
    bloodPressureSystolic,
    bloodPressureDiastolic,
    bloodSugar
  } = req.body;
  req.app
    .get("db")
    .addScreeningData([
      req.user.id,
      gender,
      screeningDate,
      waistCircumference,
      triglycerides,
      cholesterol,
      bloodPressureSystolic,
      bloodPressureDiastolic,
      bloodSugar
    ])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const updateScreeningData = (req, res) => {
  // console.log(req.user.id, req.params.id);
  const {
    waist,
    cholesterol,
    triglycerides,
    bloodPressureDiastolic,
    bloodPressureSystolic,
    bloodSugar
  } = req.body;
  req.app
    .get("db")
    .updateScreeningData([
      waist,
      cholesterol,
      triglycerides,
      bloodPressureDiastolic,
      bloodPressureSystolic,
      bloodSugar,
      req.user.id,
      req.params.id
    ])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const deleteScreeningData = (req, res) => {
  const { id, user_id } = req.params;
  // const { user_id } = req.body;
  // console.log(user_id.user_id);
  console.log(req.params);
  req.app
    .get("db")
    .deleteScreeningData([id, user_id])
    .then(response => {
      console.log(response), res.status(200).json(response);
      // getReportScreeningData(req.res);
    })
    .catch(err => res.status(500).json(err));
};

const getReportingScreeningData = (req, res) =>
  // const { gender, screeningDate, triglycerides, cholesterol, bloodPressureSystolic, bloodPressureDiastolic, bloodSugar} = req.body;
  req.app
    .get("db")
    .getReportingScreeningData([req.user.id])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));

module.exports = {
  getScreeningData,
  addScreeningData,
  updateScreeningData,
  deleteScreeningData,
  getReportingScreeningData
};
