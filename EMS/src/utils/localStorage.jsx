const employees = [
  {
    id: 1,
    first_name: "Aarav",
    email: "employee1@example.com",
    password: "123",
    task_number: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 1
    },
    categories: ["Finance", "Data Entry", "HR"],
    tasks: [
      {
        title: "Prepare Q2 Report",
        description: "Compile financial data and create a presentation for Q2.",
        date: "2025-07-01",
        category: "Finance",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Client Database",
        description: "Ensure client records are accurate and current.",
        date: "2025-07-04",
        category: "Data Entry",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Conduct Staff Training",
        description: "Run onboarding for 3 new hires.",
        date: "2025-07-03",
        category: "HR",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    first_name: "Isha",
    email: "employee2@example.com",
    password: "123",
    task_number: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 1
    },
    categories: ["Design", "Development", "Performance"],
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create mockups for the summer campaign landing page.",
        date: "2025-07-05",
        category: "Design",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve issue causing users to be logged out unexpectedly.",
        date: "2025-07-02",
        category: "Development",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress homepage graphics without losing quality.",
        date: "2025-07-01",
        category: "Performance",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    first_name: "Kabir",
    email: "employee3@example.com",
    password: "123",
    task_number: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 1
    },
    categories: ["Marketing", "Analytics", "Email"],
    tasks: [
      {
        title: "Social Media Calendar",
        description: "Create content plan for July.",
        date: "2025-07-01",
        category: "Marketing",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Review Ad Metrics",
        description: "Analyze ad performance for Q2.",
        date: "2025-07-02",
        category: "Analytics",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Draft Newsletter",
        description: "Write and schedule email newsletter for week 1 of July.",
        date: "2025-07-05",
        category: "Email",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    first_name: "Meera",
    email: "employee4@example.com",
    password: "123",
    task_number: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 1
    },
    categories: ["Operations", "Logistics", "Purchasing"],
    tasks: [
      {
        title: "Vendor Meeting",
        description: "Discuss upcoming hardware delivery schedules.",
        date: "2025-07-03",
        category: "Operations",
        active: true,
        new_task: true,
        completed: true,
        failed: true
      },
      {
        title: "Inventory Audit",
        description: "Verify current inventory levels.",
        date: "2025-07-04",
        category: "Logistics",
        active: true,
        new_task: true,
        completed: true,
        failed: true
      },
      {
        title: "Procurement Request",
        description: "Submit request for new laptops.",
        date: "2025-07-01",
        category: "Purchasing",
        active: true,
        new_task: true,
        completed: true,
        failed: true
      }
    ]
  },
  {
    id: 5,
    first_name: "Rohan",
    email: "employee5@example.com",
    password: "123",
    task_number: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 1
    },
    categories: ["Support", "Meetings", "Customer Success"],
    tasks: [
      {
        title: "Customer Support Tickets",
        description: "Close out all open tickets from last week.",
        date: "2025-07-01",
        category: "Support",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Stand-Up",
        description: "Host weekly team sync.",
        date: "2025-07-03",
        category: "Meetings",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Customer Survey Analysis",
        description: "Compile and present survey feedback data.",
        date: "2025-07-04",
        category: "Customer Success",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      }
    ]
  }
];


  const admin = [{
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }];



  export const setLocalStorage = ()=>{
     localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }

  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees,admin}
  }

  export const refreshLocalStorage = () => {
    // Force refresh by reading latest data
    const data = getLocalStorage();
    
    // Dispatch event for all components to update
    window.dispatchEvent(new CustomEvent('localStorageUpdated'));
    
    return data;
  }

  export const updateEmployeeData = (updatedEmployees) => {
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    refreshLocalStorage();
  }
