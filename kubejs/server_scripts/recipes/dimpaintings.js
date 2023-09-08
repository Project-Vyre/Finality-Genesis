// requires: dimpaintings
// requires: endrem
// requires: create

ServerEvents.recipes(event => {
    event.shaped('dimpaintings:end_painting', [
        'UXE',
        'BPC',
        'GMO'
    ], {
        E: 'endrem:evil_eye',
        B: 'endrem:black_eye',
        P: 'minecraft:painting',
        C: 'endrem:corrupted_eye',
        G: 'endrem:guardian_eye',
        M: 'endrem:magical_eye',
        O: 'endrem:old_eye',
        U: 'endrem:cursed_eye',
        X: 'endrem:cryptic_eye'
    }).id('dimpaintings:end_painting')
})