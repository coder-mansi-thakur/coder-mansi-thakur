function updateSM2Algorithm(userGrade, repetitionNumber, easinessFactor, interval) {
    if (userGrade >= 3) { // Correct response
        if (repetitionNumber === 0) {
            interval = 1;
        } else if (repetitionNumber === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easinessFactor);
        }
        repetitionNumber++;
    } else { // Incorrect response
        repetitionNumber = 0;
        interval = 1;
    }

    easinessFactor += (0.1 - (5 - userGrade) * (0.08 + (5 - userGrade) * 0.02));

    if (easinessFactor < 1.3) {
        easinessFactor = 1.3;
    }

    return { repetitionNumber, easinessFactor, interval };
}

export default updateSM2Algorithm
