function address(city,state) {
    const newAddress = { 
        city,state      // key:value

        console.log(newAddress);
    }
}

address('toronto','masc.');

function address(namePack) {

    const {city,state} = namePack;
    
    const newAddress = { 
        city,
        state,      // key:value
        country:'Pak'

        console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`)
    }
}

address('khi','sindh');