MoreJS.playerStartTrading((event) => {
    event.forEachOffers((offer, index) => { 
        
        if (offer.output && offer.output.id === "immersiveengineering:bullet_he") {
            offer.setOutput("immersiveengineering:bullet_casull");
        }

        if (offer.output && offer.output.id === "immersiveengineering:bullet_flare") {
            offer.setOutput("immersiveengineering:bullet_buckshot");
        }

        if (offer.output && offer.output.id === "immersiveengineering:wire_copper") {
            offer.setOutput("electrodynamics:wirecopper")
        }

        if (offer.output && offer.output.id === "advancedperipherals:player_detector") {
            offer.setOutput("computercraft:wired_modem_full")
        }

        if (offer.output && offer.output.id === "advancedperipherals:chat_box") {
            offer.setOutput("computercraft:wired_modem_full")
        }
    });
});