//конструктор класса FilterCourses принимает массив с курсами
//у класса есть методы:
//1.filterByConditions принимает массив с условиями возвращает отфильтрованный массив
//2.minMaxSort сортирует по возрастанию цены
//3.maxMinSort сортирует по убыванию цены

const FilterCourses = require("./Filter");

// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

//создаем образец класса FilterCourses
const filter = new FilterCourses(courses);

//сортировка по условию c помощью метода filterByConditions
console.log(filter.filterByConditions(requiredRange1));
console.log(filter.filterByConditions(requiredRange2));
console.log(filter.filterByConditions(requiredRange3));

//сортировка по возрастанию цены с помощью minMaxSort
console.log(filter.minMaxSort());

//сортировка по убыванию цены с помощью maxMinSort
console.log(filter.maxMinSort());
