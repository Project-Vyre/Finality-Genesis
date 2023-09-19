if (Platform.isLoaded('create_central_kitchen')) {
    console.log("Removing unnecessary recipes from Create Central Kitchen.")
    ServerEvents.recipes(event => {
        event.remove([
            { id: 'create_central_kitchen:craft/dough_1' },
            { id: 'create_central_kitchen:craft/dough_2' },
            { id: 'create_central_kitchen:craft/dough_3' },
            { id: 'create_central_kitchen:craft/dough_4' }
        ])
    })
}