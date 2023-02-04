app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./src/home.html",
    })
    .when("/Fiction", {
      templateUrl: "./src/subjects/fiction.html",
    })
    .when("/englishliterature", {
      templateUrl: "./src/subjects/englishliterature.html",
    })
    .when("/classicfiction", {
      templateUrl: "./src/subjects/classicfiction.html",
    })
    .when("/drama", {
      templateUrl: "./src/subjects/drama.html",
    })
    .when("/moralcondition", {
      templateUrl: "./src/subjects/moralconditions.html",
    });
});
