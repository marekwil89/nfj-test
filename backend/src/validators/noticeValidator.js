import { body, check } from 'express-validator/check';

export const noticeValidator = [
  check('title').isLength({ min: 1 }).withMessage('To pole jest wymagane'),
  check('company').isLength({ min: 1 }).withMessage('To pole jest wymagane'),
  check('city').isLength({ min: 1 }).withMessage('To pole jest wymagane'),
  check('street').isLength({ min: 1 }).withMessage('To pole jest wymagane'),
  check('salaryMin').isLength({ min: 1 }).withMessage('To pole jest wymagane'),
  check('salaryMax').isLength({ min: 1 }).withMessage('To pole jest wymagane'),
  check('postalCode').isLength({ min: 1 }).withMessage('To pole jest wymagane'),
  check('postalCode').matches(/[0-9]{2}\-[0-9]{3}/).withMessage('Proszę wpisać prawidłowy kod pocztowy'),
];

export const salaryValidator = body('salaryMin').custom((salaryMin, { req }) => {
  const doubleMinSalary = 2 * salaryMin;

  if (doubleMinSalary > req.body.salaryMax) throw new Error('widełki są zbyt szerokie');
  return true;
});
