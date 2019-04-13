export const salaryValidator = control => {
  const salaryMax = control.root.value.salaryMax;
  const salaryMin = control.root.value.salaryMin;

  const doubleMinSalary = 2 * salaryMin;

  if (doubleMinSalary > salaryMax) {
    return {
      salary: true
    };
  }
};
