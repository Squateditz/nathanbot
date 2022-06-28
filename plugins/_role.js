let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Warrior III'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Warrior II'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Warrior I'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Elite III'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Elite II'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Elite I'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Master IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Master III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Master II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Master I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'GrandMaster V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'GrandMaster IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'GrandMaster III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'GrandMaster II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'GrandMaster I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Epic V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Epic IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Epic III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Epic II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Epic I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Legends V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Legends IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Legends III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Legends II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Legends I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Mythic Grading'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Mythic Grading'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Mythic Grading'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Mythic Grading'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Mythic Grading'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Mythic V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Mythic IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Mythic III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Mythic II'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? 'Mythic I'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? 'Mythical Glory'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? 'Majin'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? 'Demon lord seed'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? 'Demon lord'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? 'True demon lord'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? 'Octagram'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 400)) ? 'Older demon lord'
                                                                                                                                                                        : ((user.level >= 405) && (user.level <= 700)) ? 'Great demon lord'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? 'Strongest demon lord'
                                                                                                                                                                                : 'Star king dragon'


    user.role = role
    return true
}

module.exports = handler
