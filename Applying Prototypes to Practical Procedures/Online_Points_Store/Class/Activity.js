export default function Activity(type, awardedPoints) {
    this.type = type;
    this.awardedPoints = awardedPoints;
}

Activity.prototype.completeActivity() = function () { }