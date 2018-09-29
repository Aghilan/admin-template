export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      title: true,
      name: 'Communication Portal',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Workers',
      url: '/worker',
      icon: 'fa fa-user-md',
    },
    {
      name: 'Broadcasts',
      url: '/broadcast',
      icon: 'fa fa-bullhorn',
      children: [
        {
          name: 'Create New',
          url: '/broadcast/new.js',
          icon: 'fa fa-plus-square',
        },
        {
          name: 'Open',
          url: '/broadcast/open',
          icon: 'fa fa-envelope-open',
        },
        {
          name: 'Closed',
          url: '/broadcast/closed',
          icon: 'fa fa-window-close',
        },
        {
          name: 'Configure Employees',
          url: '/broadcast/configure-employees',
          icon: 'fa fa-pencil-square',
        },
      ],
    },
    {
      name: 'Customers',
      url: '/customers',
      icon: 'fa fa-user',
    },
    {
      name: 'Competitors',
      url: '/competitors',
      icon: 'fa fa-user-secret'
    },
    {
      divider: true,
    }
  ],
};
