const { getRandomNum, generatePerson } = require('./services');

exports.homeController = (_req, res) => {
  res.send('<h1>Full Statck Army : Advanced backend assignment-1</h1>');
};

// <---FAKE RANDOM NUMBER HANDLER--->
exports.randomNumberController = (req, res) => {
  const { start, end } = req.body;

  // Validate input
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return res
      .status(400)
      .json({ error: 'Invalid input: start and end must be integers' });
  }

  if (start >= end) {
    return res
      .status(400)
      .json({ error: 'Invalid input: start must be less than end' });
  }

  // Generate random number
  const randomNumber = getRandomNum(start, end);

  res.json({ randomNumber });
};

// <---FAKE PERSON HANDLER--->

exports.fakePersonController = async (req, res) => {
  const { properties } = req.body;

  // Validate input
  if (!Array.isArray(properties)) {
    return res
      .status(400)
      .json({ error: 'Invalid input: input must be an array' });
  }

  const validProps = [
    'firstName',
    'lastName',
    'email',
    'avatar',
    'age',
    'address',
  ];

  if (properties.some((prop) => !validProps.includes(prop))) {
    return res
      .status(400)
      .json({ error: 'Invalid input: arr contains invalid properties' });
  }

  // Generate fake person
  try {
    const data = await generatePerson(properties);
    res.json({ ...data });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
