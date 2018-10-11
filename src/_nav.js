export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
      },
    },
    {
      title: true,
      name: "People",
      wrapper: {
        element: "",
        attributes: {},
      },
    },
    // {
    //   name: "Workers",
    //   url: "/workers",
    //   icon: "fa fa-user-md",
    //   children: [
    //     {
    //       name: "Job Candidates",
    //       url: "/workers/candidates",
    //       icon: "fa fa-user-md"
    //     },
    //     {
    //       name: "Employees",
    //       url: "/workers/employees",
    //       icon: "fa fa-user-md"
    //     },
    //   ]
    // },


    {
      name: "Job Candidates",
      url: "/workers/candidates",
      icon: "fa fa-user-md"
    },
    {
      name: "Employees",
      url: "/workers/employees",
      icon: "fa fa-user-md"
    },
    {
      title: true,
      name: "Scheduling",
      wrapper: {
        element: "",
        attributes: {},
      },
    },


    // {
    //   name: "Time/Attendance",
    //   url: "/time",
    //   icon: "fa fa-user",
    //   children: [
    //     {
    //       name: "Schedule",
    //       url: "/time/schedule",
    //       icon: "fa fa-user",
    //     },
    //     {
    //       name: "Time Entries",
    //       url: "/time/entries",
    //       icon: "fa fa-user",
    //     },
    //     {
    //       name: "Who's Working",
    //       url: "/time/whos-working",
    //       icon: "fa fa-user",
    //     },
    //   ]
    // },


   {
      name: "Schedule",
      url: "/time/schedule",
      icon: "fa fa-user",
    },
    {
      name: "Time Entries",
      url: "/time/entries",
      icon: "fa fa-user",
    },
    {
      name: "Who's Working",
      url: "/time/whos-working",
      icon: "fa fa-user",
    },


    {
      name: "Broadcasts",
      url: "/broadcast",
      icon: "fa fa-bullhorn",
      children: [
        {
          name: "Create New",
          url: "/broadcast/new",
          icon: "fa fa-plus-square",
        },
        {
          name: "Open Casts",
          url: "/broadcast/open",
          icon: "fa fa-envelope-open",
        },
        {
          name: "Closed Casts",
          url: "/broadcast/closed",
          icon: "fa fa-window-close",
        },
        {
          name: "Configure Employees",
          url: "/broadcast/configure-employees",
          icon: "fa fa-pencil-square",
        },
      ],
    },
    {
      title: true,
      name: "Accounts",
      wrapper: {
        element: "",
        attributes: {},
      },
    },
    {
      name: "Leads",
      url: "/accounts/leads",
      icon: "fa fa-user",
    },
    {
      name: "Customers",
      url: "/accounts/customers",
      icon: "fa fa-user",
    },
    {
      name: "Competitors",
      url: "/accounts/competitors",
      icon: "fa fa-user"
    },
    {
      name: "Referral Sources",
      url: "/accounts/referral-sources",
      icon: "fa fa-user"
    },
    {
      name: "Other Accounts",
      url: "/accounts",
      icon: "fa fa-user",
      children: [
        {
          name: 'Advertising Agencies',
          url: '/accounts/advertising-agencies',
          icon: 'fa fa-user',
        },
        {
          name: 'Mentors/Coaches',
          url: '/accounts/coaches',
          icon: 'fa fa-user',
        },
        {
          name: 'Regulatory Agencies',
          url: '/accounts/regulatory-agencies',
          icon: 'fa fa-user',
        },
        {
          name: 'Vendors',
          url: '/accounts/vendors',
          icon: 'fa fa-user',
        },
      ]
    },

    {
      divider: true,
    }
  ],
};
