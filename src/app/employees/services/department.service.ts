export class DepartmentService {
  departments = [
    {
      departmentId: '573c3237-cbe5-4328-a714-c9cb863d25af',
      departmentName: 'Management',
      employeesCount: 0,
      isActive: true,
    },
    {
      departmentId: 'e73b1136-a3c5-45d3-a6e6-0fee20eabe8d',
      departmentName: 'iOS Department',
      employeesCount: 0,
      isActive: true,
    },
    {
      departmentId: '5811c5b3-e337-4412-9f8c-3502a9832a82',
      departmentName: 'Social Media Marketing',
      employeesCount: 1,
      isActive: true,
    },
    {
      departmentId: '2813cf9b-762b-4b5d-825b-5bb7a35d052d',
      departmentName: 'UI UX Department',
      employeesCount: 0,
      isActive: true,
    },
    {
      departmentId: 'ea246b8f-a4da-4fac-96ec-8eeaba3ab91c',
      departmentName: 'Content Writer',
      employeesCount: 1,
      isActive: true,
    },
    {
      departmentId: '1904480a-6f75-4e6b-afbe-40d4ff0ffc1b',
      departmentName: 'Website Development',
      employeesCount: 1,
      isActive: true,
    },
    {
      departmentId: '007ac546-51cf-40ef-adf0-7bbddc4ffd6f',
      departmentName: 'DevOps',
      employeesCount: 0,
      isActive: true,
    },
    {
      departmentId: '3daf88b7-568f-45a8-9adc-4e08847ef83a',
      departmentName: 'Quality Assurance',
      employeesCount: 2,
      isActive: true,
    },
    {
      departmentId: '086269ea-d2b2-4100-aeab-00fd41d9db5b',
      departmentName: 'Marketing and SEO',
      employeesCount: 1,
      isActive: true,
    },
    {
      departmentId: '8d7cae19-4fdf-4345-9b83-b7e622b0feff',
      departmentName: 'Business Developer',
      employeesCount: 1,
      isActive: true,
    },
  ];

  getDepartments() {
    return this.departments;
  }
}
