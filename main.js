let Television = function (name, volume, x) {
    this.name = name;
    this.volume = volume;
    this.status = false;
    this.channel = ["VTV1", "VTV2", "VTV3", "HN2", "VTC1", "VTC2", "VTC3", "VTC14", "VTC7", "VTC9"];
    this.val = x;


    this.getNameTv = function () {
        return this.name;
    };

    this.getStatus = function () {
        return this.status;
    };

    this.setVolume = function (volume) {
        this.volume = volume;
    };


    this.upVolume = function () {
        if (this.volume < 100) {
            this.volume++;
            console.log(this.volume);
        }
    };

    this.dowVolume = function () {
        if (this.volume > 0) {
            this.volume--;
            console.log(this.volume);
        }
    };

    this.getVolume = function () {
        if (this.status) {
            return this.volume;
        } else {
            return false;
        }


    };

    this.setChannel = function (channel) {
        this.channel.push(channel);
    };

    this.getChannel = function () {
        return this.channel;
    };
    this.selectChannel = function (data) {
        this.val = data;
        console.log(this.channel[this.val]);
    };

    this.getStatusChannel = function () {
        if (this.status) {
            return this.channel[this.val];
        }
        return false;

    };

    this.turnOn = function () {
        this.status = true;
    };

    this.turnOff = function () {
        this.status = false;
    };


};


