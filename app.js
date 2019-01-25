new Vue({
  el: '#app',
  data: {
    topics: [
      { name: "Technology" },
      { name: 'Football' },
      { name: 'Music' },
      { name: 'Aviation' },
      { name: 'History' },
      { name: 'Travel' },
    ],
    courses: [
      { 
        platform: 'IBM', 
        subjects: [
          {
            name: "Agile",
            courses: [
              {
                name: "A Taste of Agile",
                link: "https://agile-ibm.mybluemix.net/courses/taste-of-agile",
                time: "2h2min",
                paid: false 
              },
              {
                name: "Operations Fundamentals",
                link: "https://agile-ibm.mybluemix.net/courses/agile-operations-fundamentals",
                time: "1h21min",
                paid: false 
              },
            ]
          }
        ]
      },
      { 
        platform: 'Udemy', 
        subjects: [
          {
            name: "ElasticSearch",
            courses: [
              {
                name: "Complete Guide to Elasticsearch",
                link: "https://www.udemy.com/elasticsearch-complete-guide/learn/v4/",
                time: "13h",
                paid: true 
              }
            ]
          }
        ]
      },
    ]
  }
}) 
