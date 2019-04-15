module.exports = function (db, log) {
    return {
        add: inspection => {
            log.log('insert inspection', inspection);
            return db.one({
                text: 'INSERT INTO inspection(colony_id,executed,queen_visible,eggs_count,larvae_count,pupae_count,minor_cast_count,median_cast_count,major_cast_count,soldier_cast_count,winged_cast_count,strength,temper,scent,facility_condition,issues,hibernating,notes)'
                    + 'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING * ',
                values: [
                    inspection.colonyId,
                    inspection.executed,
                    inspection.queenVisible,
                    inspection.eggsCount,
                    inspection.larvaeCount,
                    inspection.pupaeCount,
                    inspection.minorCount,
                    inspection.medianCount,
                    inspection.majorCount,
                    inspection.soldierCount,
                    inspection.wingedCount,
                    inspection.strength,
                    inspection.temper,
                    inspection.scent,
                    inspection.facilityCondition,
                    inspection.issues,
                    inspection.hibernating,
                    inspection.notes
                ]
            });
        }
    };
}