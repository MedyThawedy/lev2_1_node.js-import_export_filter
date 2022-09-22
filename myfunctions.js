

// eine function, die mit Hilfe von filter ein Array mit Objekten anhand von population filtert. 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=de

// Sie soll die Städte zurückgeben, die mehr als 100000 Einwohner haben. 
// https://www.geeksforgeeks.org/how-to-filter-object-array-based-on-attributes/

export const arrFilterPopulationMoreThan = (data) => {
    var newArray = data.filter(function (city) {
        return city.population >= 100000;
    }
    );
    return newArray;
}

export const arrFilterPopulationLessThan = (data) => {

    var newArray = data.filter(function (city) {
        return city.population <= 100000;
    }
    );

    return newArray;

}

export default arrFilterPopulationMoreThan;