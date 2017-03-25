/* STRING MATCHES */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringMatches(str, regex) {
    var matches = [];
    var match;
    while (match = regex.exec(str)) {
        matches.push(match);
    }
    return matches;
}
/* EXPORT */
exports.default = stringMatches;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esb0JBQW9COzs7QUFFcEIsdUJBQXlCLEdBQVcsRUFBRSxLQUFhO0lBRWpELElBQU0sT0FBTyxHQUFzQixFQUFFLENBQUM7SUFFdEMsSUFBSSxLQUFLLENBQUM7SUFFVixPQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFHLEdBQUcsQ0FBRSxFQUFHLENBQUM7UUFFcEMsT0FBTyxDQUFDLElBQUksQ0FBRyxLQUFLLENBQUUsQ0FBQztJQUV6QixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUVqQixDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLGFBQWEsQ0FBQyJ9