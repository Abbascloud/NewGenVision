//класс фильтра курсов принимает массив с курсами
class FilterCourses {
  constructor(courses) {
    this._courses = courses;
  }

  //метод, который принимает в себя массив из максимальных и минимальных цен и меняет null
  //на 0 или Infinity в зависимости от его индекса
  _changeNullValue(arrWithValues) {
    return arrWithValues.map((value, index) => {
      if (value === null && index === 0) {
        return (value = 0);
      }
      if (value === null && index === 1) {
        return (value = Infinity);
      }
      return value;
    });
  }

  //метод принимает в себя условия фильтрации и возвращает новый отфильтрованный массив
  filterByConditions(conditions) {
    // меняем условия поиска на удобные для сравнения
    const newConditionsArr = this._changeNullValue(conditions);

    const result = this._courses.filter((course) => {
      //проходим по всем курсам и сравниваем с условиями, предварительно изменив цены курса
      const coursConditions = this._changeNullValue(course.prices);
      if (
        coursConditions[0] <= newConditionsArr[1] &&
        coursConditions[1] >= newConditionsArr[0]
      ) {
        return course;
      }
    });

    return result;
  }

  //метод сортирует по возрастанию цены и возвращает новый массив
  minMaxSort() {
    const coursesToSort = this._courses;
    coursesToSort.forEach((course) => {
      course.prices = this._changeNullValue(course.prices);
    });

    coursesToSort.sort((currentCourse, nextCourse) => {
      if (currentCourse.prices[0] > nextCourse.prices[0]) {
        return 1;
      }
      if (currentCourse.prices[0] < nextCourse.prices[0]) {
        return -1;
      }
      if (currentCourse.prices[0] === nextCourse.prices[0]) {
        if (currentCourse.prices[1] > nextCourse.prices[1]) {
          return 1;
        }
        if (currentCourse.prices[1] < nextCourse.prices[1]) {
          return -1;
        }
      }

      return 0;
    });
    return coursesToSort;
  }

  //метод сортирует по убыванию цены и возвращает новый массив
  maxMinSort() {
    const coursesToSort = this._courses;
    coursesToSort.forEach((course) => {
      course.prices = this._changeNullValue(course.prices);
    });

    coursesToSort.sort((currentCourse, nextCourse) => {
      if (currentCourse.prices[1] < nextCourse.prices[1]) {
        return 1;
      }
      if (currentCourse.prices[1] > nextCourse.prices[1]) {
        return -1;
      }
      if (currentCourse.prices[1] === nextCourse.prices[1]) {
        if (currentCourse.prices[0] < nextCourse.prices[0]) {
          return 1;
        }
        if (currentCourse.prices[0] > nextCourse.prices[0]) {
          return -1;
        }
      }

      return 0;
    });
    return coursesToSort;
  }
}

module.exports = FilterCourses;
