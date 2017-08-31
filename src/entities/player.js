'use strict';
class player {
    constructor(name, x, y, id, ip, sid) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.vel = [0, 0];
        this.lvl = 0;
        this.score = 1000;
        this.speed = 5;
        this.r = 0;
        this.d = 40;
        this.id = id;
        this.ip = ip;
        this.keyMap = {};
        this.chatting = false;
        this.playing = false;
        this.sid = sid;
        this.config = require("../core/configService.js").getConfig();
    }

    update() {
        this.x+=this.vel[0]*2;
        this.y+=this.vel[1]*2;
        this.vel[0]/=1.015;
        this.vel[1]/=1.015;
        if(this.vel[0] > 1) this.vel[0] = 1;
        if(this.vel[1] > 1) this.vel[1] = 1;
        if(this.vel[0] < -1) this.vel[0] = -1;
        if(this.vel[1] < -1) this.vel[1] = -1;
        if(this.x>this.config.w) this.x=this.config.w;
        if(this.y>this.config.h) this.y=this.config.h;
        if(this.x<0) this.x=0;
        if(this.y<0) this.y=0;
        if (this.chatting) return;
        if (this.keyMap[38] || this.keyMap[87]) this.vel[1] -= 0.025;
        if (this.keyMap[40] || this.keyMap[83]) this.vel[1] += 0.025;
        if (this.keyMap[39] || this.keyMap[68]) this.vel[0] += 0.025;
        if (this.keyMap[37] || this.keyMap[65]) this.vel[0] -= 0.025;
    }
};

module.exports = player;
