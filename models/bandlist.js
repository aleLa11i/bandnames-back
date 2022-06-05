const Band = require("./band");

class BandList {

    constructor() {

        this.bands = [
            new Band("Banda 1"),
            new Band("Banda 2"),
            new Band("Banda 3"),
            new Band("Banda 4"),
            new Band("Banda 4"),
        ];
    }


    addBand(  name  ){

        const newBand = new Band ( name );
        this.bands.push(  newBand  );
        return this.band;
    }

    removeBand( id ){
        this.bands = this.bands.filter(  band => band.id != id );
    }

    getBands(){
        return this.bands;
    }

    increaseVotes(  id  ){
        this.bands = this.bands.map( band => {
            if(band.id === id){
                band.votes += 1;
            };

            return band;
        })
    }

    changeName( id, name ){
        this.bands = this.bands.map( band => {
            if(band.id === id){
                band.name = name;
            };

            return band;
        })
    }

}

module.exports = BandList;