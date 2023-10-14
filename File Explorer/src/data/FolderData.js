export const explore = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "index.html",
          isFolder: false
        }
      ]
    },
    {
      id: 3,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 5,
          name: "App.js",
          isFolder: false
        },
        {
          id: 6,
          name: "components",
          isFolder: true,
          items: [
            {
              id: 9,
              name: "Header.js",
              isFolder: false
            },
            {
              id: 10,
              name: "Footer.js",
              isFolder: false
            }
          ]
        },
        {
          id: 7,
          name: "pages",
          isFolder: true,
          items: [
            {
              id: 11,
              name: "HomePage.js",
              isFolder: false
            },
            {
              id: 12,
              name: "ProductList.js",
              isFolder: false
            }
          ]
        },
        {
          id: 8,
          name: "index.js",
          isFolder: false
        }
      ]
    },
    {
      id: 4,
      name: "package.json",
      isFolder: false
    }
  ]
};
