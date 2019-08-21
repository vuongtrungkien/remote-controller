let Remote = function (name) {
    this.name = name;
    this.status = false;

    this.getName = function () {
        return this.name;
    };


    this.statusOnAndOff = function (television) {
        if (!this.status) {
            television.turnOn();
            this.status = true;
        } else {
            television.turnOff();
            this.status = false;
        }
    };


    this.volumeUp = function (television) {
        television.upVolume();
    };

    this.volumeDow = function (television) {
        television.dowVolume();
    };

    this.selectChanelTv = function (television, value) {
        television.selectChannel(value);
    }
};

