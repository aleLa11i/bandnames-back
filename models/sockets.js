const BandList = require("./bandlist");

class Sockets {

    constructor(  io  ) {

        this.io = io;

        this.bandList = new BandList();

        this.socketsEvents();

    }

    socketsEvents() {

        // On connection
        this.io.on("connection", (   socket  ) => {
            console.log(`Cliente conectado!! Clientes conectados: ${this.io.eio.clientsCount}`);
            
            //Emitir al cliente conectado, todas las bandas actuales
            socket.emit("GetBands", this.bandList.getBands() );

            socket.on("ClientServerMsg", (data) => {
                console.log( data );

                this.io.emit(  "ClientServerMsg" , data );
            });

            socket.on("IncreaseVotes", (id) => {
                this.bandList.increaseVotes(id);
                this.io.emit("GetBands", this.bandList.getBands() );
            });

            socket.on("DeleteBand", (id) => {
                this.bandList.removeBand(id);
                this.io.emit("GetBands", this.bandList.getBands() );
            });

            socket.on("ChangeNameBand", ({id,name}) => {
                this.bandList.changeName( id, name );
                this.io.emit("GetBands", this.bandList.getBands() );
            });

            socket.on("NewBand", (name) => {
                this.bandList.addBand( name );
                this.io.emit("GetBands", this.bandList.getBands() );
            });
        
        });
    }

}

module.exports = Sockets;