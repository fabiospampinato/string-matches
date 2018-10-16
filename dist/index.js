/* STRING MATCHES */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringMatches(str, regex) {
    if (regex.flags.indexOf('g') >= 0) {
        var matches = [];
        var match = void 0;
        regex.lastIndex = 0;
        while (match = regex.exec(str)) {
            matches.push(match);
        }
        return matches;
    }
    else {
        var match = regex.exec(str);
        return match ? [match] : [];
    }
}
/* EXPORT */
exports.default = stringMatches;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esb0JBQW9COzs7QUFFcEIsdUJBQXlCLEdBQVcsRUFBRSxLQUFhO0lBRWpELEVBQUUsQ0FBQyxDQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFHLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkMsSUFBTSxPQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUV0QyxJQUFJLEtBQUssU0FBQSxDQUFDO1FBRVYsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFcEIsT0FBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBRyxHQUFHLENBQUUsRUFBRyxDQUFDO1lBRXBDLE9BQU8sQ0FBQyxJQUFJLENBQUcsS0FBSyxDQUFFLENBQUM7UUFFekIsQ0FBQztRQUVELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFFakIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBRU4sSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBRyxHQUFHLENBQUUsQ0FBQztRQUVqQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTlCLENBQUM7QUFFSCxDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLGFBQWEsQ0FBQyJ9