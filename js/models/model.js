var app = app || {};

app.Model = Backbone.Model.extend({
    defaults: {
        activeBuild: 1,
        driver1: { name: '', size: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        driver2: { name: '', size: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        driver3: { name: '', size: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        body1: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        body2: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        body3: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        tire1: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        tire2: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        tire3: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        glider1: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        glider2: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        glider3: { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 },
        speedGnd1: 0,
        speedGnd2: 0,
        speedGnd3: 0
    }
});
