var app = angular.module("mainApp", ["ngRoute", "ngTable"]);
// controller start
app.controller(
  "mainCtrl",
  function ($scope, $http, NgTableParams, $location, $rootScope) {
    $rootScope.$on("$routeChangeStart", function () {
      $scope.mylocation = $location.path();
    });
    var vm = $scope;
    vm.loader = false;
    vm.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    vm.modiData = [];

    //
    // request for homepage books data
    //

    $http({
      method: "GET",
      url: "https://openlibrary.org/search.json?q=the+lord+of+the+rings",
    }).then(
      function mySuccess(response) {
        vm.searchData = [response.data.docs];
        // console.log(response.data.docs);
        var dat = response.data.docs;
        for (var i = 0; i < response.data.docs.length; i++) {
          vm.modiData.push({
            title: dat[i].title,
            name: dat[i].author_name,
            latest_publish_yr: dat[i].publish_year,
            first_publis_yr: dat[i].first_publish_year,
          });
        }
        // console.log(vm.modiData);
        vm.usersTable = new NgTableParams({}, { dataset: vm.modiData });
        vm.loader = true;
      },
      function myError(response) {
        vm.searchData = response.statusText;
      }
    );

    //
    // request for subject data
    //
    $http({
      method: "GET",
      url: " https://openlibrary.org/subjects/love.json",
    }).then(
      function mySuccess(response) {
        vm.subjects = response.data;
        // console.log(response.data);
      },
      function myError(response) {
        vm.subjects = response.statusText;
      }
    );

    //
    // given api for subjects not provided the sufficient data according to requirement so for second table i use stattic data
    //
    vm.preDeSubjects = [
      {
        title: "Pride and Prejudice",
        name: "Jane Austen",
        title1: "One Hundred Years of Solitude",
        name1: "Jane",
        latest: 2012,
        first: 1813,
      },
      {
        title: "It Ends with Us",
        name: "George Orwel",
        title1: "Men Without Women",
        name1: "Jane",
        latest: 2012,
        first: 1349,
      },
      {
        title: "The Great Gatsby",
        name: "F. Scott Fitzgerald",
        title1: "One Hundred Years of Solitude",
        name1: "Jane",
        latest: 2012,
        first: 1925,
      },
      {
        title: "Beloved",
        name: "Toni Morrison",
        title1: "Weathering With You",
        name1: "Luffy",
        latest: 2012,
        first: 1947,
      },
      {
        title: "The Kite Runner",
        name: "Khaled Hosseini",
        title1: "One Hundred Years of Solitude",
        name1: "Margaret Atwood",
        latest: 2012,
        first: 2003,
      },
      {
        title: "One Hundred Years of Solitude",
        name: "Gabriel García Márquez",
        title1: "The Handmaid's Tale",
        name1: "Margaret Atwood",
        latest: 2012,
        first: 1969,
      },
      {
        title: "The Alchemist",
        name: "Paulo Coelho",
        title1: "Lolita",
        name1: "Vladimir Nabokov",
        latest: 2012,
        first: 1847,
      },
      {
        title: "One Hundred Years of Solitude",
        name: "Roronoa Zoro",
        title1: "Chainsaw man",
        name1: "Makima",
        latest: 2012,
        first: 1989,
      },
      {
        title: "The Handmaid's Tale",
        name: "Margaret Atwood",
        title1: "The Alchemist",
        name1: "Jane",
        latest: 2012,
        first: 1985,
      },
      {
        title: "Searching Of God",
        name: "Makima",
        title1: "Searching Of God",
        name1: "Makima",
        latest: 2012,
        first: 1989,
      },
      {
        title: "Lolita",
        name: "Vladimir Nabokov",
        title1: "The Handmaid's Tale",
        name1: "Vladimir Nabokov",
        latest: 2022,
        first: 1989,
      },
      {
        title: "The Handmaid's Tale",
        name: "Margaret Atwood",
        title1: "The Handmaid's Tale",
        name1: "Margaret Atwood",
        latest: 2019,
        first: 1999,
      },
      {
        title: "Lolita",
        name: "Vladimir Nabokov",
        title1: "Searching Of God",
        name1: "Makima",
        latest: 2015,
        first: 1970,
      },
    ];

    vm.subjectTable = new NgTableParams({}, { dataset: vm.preDeSubjects });
  }
);
// controller ends

// tabley

// input serach for sidenavbar
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  // console.log(tr);
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    // console.log(td);
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
fun = function (params) {
  // console.log("fun");
  return true;
};

// for input search of homepage
searchBar = function (searchBar, usersTable) {
  var input, filter, table, tr, td1, td, i, txtValue;
  input = document.getElementById(searchBar);
  filter = input.value.toUpperCase();
  table = document.getElementById(usersTable);
  tr = table.getElementsByTagName("tr");

  // console.log(tr);
  // console.log(tr["ng-scope"]);
  for (i = 2; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    td1 = tr[i].getElementsByTagName("td")[2];
    // console.log(td);
    if (td || td1) {
      txtValue = td.textContent || td.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      if (
        txtValue.toUpperCase().indexOf(filter) > -1 ||
        txtValue1.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
// given api for subjects not provided the sufficient data according to requirement so for second table i use stattic data
