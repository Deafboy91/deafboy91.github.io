var app = app || {};

app.DriverModel = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 0,
        speedWtr: 0,
        speedAir: 0,
        speedGty: 0,
        acceleration: 0,
        weight: 0,
        handlingGnd: 0,
        handlingWtr: 0,
        handlingAir: 0,
        handlingGty: 0,
        grip: 0,
        miniturbo: 0,
		active: false
    }
});

app.LightDriverModel0 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 2.5,
        speedWtr: 2.75,
        speedAir: 3,
        speedGty: 2.25,
        acceleration: 4,
        weight: 2,
        handlingGnd: 5,
        handlingWtr: 4.5,
        handlingAir: 5,
        handlingGty: 5,
        grip: 4.25,
        miniturbo: 4,
        invincibility: 4,
        active: false
    }
});

app.LightDriverModel1 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 2.5,
        speedWtr: 2.75,
        speedAir: 3,
        speedGty: 2.25,
        acceleration: 4.25,
        weight: 2,
        handlingGnd: 4.75,
        handlingWtr: 4.25,
        handlingAir: 4.75,
        handlingGty: 4.75,
        grip: 3.75,
        miniturbo: 4,
        invincibility: 4,
        active: false
    }
});

app.LightDriverModel2 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 2.75,
        speedWtr: 3,
        speedAir: 3.25,
        speedGty: 2.5,
        acceleration: 4.25,
        weight: 2.25,
        handlingGnd: 4.5,
        handlingWtr: 4,
        handlingAir: 4.5,
        handlingGty: 4.5,
        grip: 4,
        miniturbo: 4,
        invincibility: 3.75,
        active: false
    }
});

app.LightDriverModel3 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 3,
        speedWtr: 3.25,
        speedAir: 3.5,
        speedGty: 2.75,
        acceleration: 4,
        weight: 2.5,
        handlingGnd: 4.5,
        handlingWtr: 4,
        handlingAir: 4.5,
        handlingGty: 4.5,
        grip: 4.25,
        miniturbo: 3.75,
        invincibility: 3.5,
        active: false
    }
});

app.LightDriverModel4 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 3,
        speedWtr: 3.25,
        speedAir: 3.5,
        speedGty: 2.75,
        acceleration: 4.25,
        weight: 2.5,
        handlingGnd: 4.25,
        handlingWtr: 3.75,
        handlingAir: 4.25,
        handlingGty: 4.25,
        grip: 3.5,
        miniturbo: 3.75,
        invincibility: 3.25,
        active: false
    }
});

app.LightDriverModel5 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 3.25,
        speedWtr: 3.5,
        speedAir: 3.75,
        speedGty: 3,
        acceleration: 4,
        weight: 2.75,
        handlingGnd: 4.25,
        handlingWtr: 3.75,
        handlingAir: 4.25,
        handlingGty: 4.25,
        grip: 4,
        miniturbo: 3.75,
        invincibility: 3.25,
        active: false
    }
});

app.MediumDriverModel0 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 3.5,
        speedWtr: 3.75,
        speedAir: 4,
        speedGty: 3.25,
        acceleration: 4,
        weight: 2.75,
        handlingGnd: 4,
        handlingWtr: 3.5,
        handlingAir: 4,
        handlingGty: 4,
        grip: 3.75,
        miniturbo: 3.75,
        invincibility: 3.25,
        active: false
    }
});

app.MediumDriverModel1 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 3.75,
        speedWtr: 4,
        speedAir: 4.25,
        speedGty: 3.5,
        acceleration: 3.75,
        weight: 3,
        handlingGnd: 3.75,
        handlingWtr: 3.25,
        handlingAir: 3.75,
        handlingGty: 3.75,
        grip: 3.75,
        miniturbo: 3.75,
        invincibility: 2.75,
        active: false
    }
});

app.MediumDriverModel2 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 3.75,
        speedWtr: 4,
        speedAir: 4.25,
        speedGty: 3.5,
        acceleration: 3.75,
        weight: 3.25,
        handlingGnd: 3.75,
        handlingWtr: 3.25,
        handlingAir: 3.75,
        handlingGty: 3.75,
        grip: 3.25,
        miniturbo: 3.75,
        invincibility: 2.75,
        active: false
    }
});

app.MediumDriverModel3 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 4,
        speedWtr: 4.25,
        speedAir: 4.5,
        speedGty: 3.75,
        acceleration: 3.5,
        weight: 3.5,
        handlingGnd: 3.75,
        handlingWtr: 3.25,
        handlingAir: 3.75,
        handlingGty: 3.75,
        grip: 3.25,
        miniturbo: 3.5,
        invincibility: 3.25,
		active: false
    }
});

app.MediumDriverModel4 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 4,
        speedWtr: 4.25,
        speedAir: 4.5,
        speedGty: 3.75,
        acceleration: 3.5,
        weight: 3.5,
        handlingGnd: 3.5,
        handlingWtr: 3,
        handlingAir: 3.5,
        handlingGty: 3.5,
        grip: 3.5,
        miniturbo: 3.5,
        invincibility: 3.25,
		active: false
    }
});

app.HeavyDriverModel0 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 4.25,
        speedWtr: 4.5,
        speedAir: 4.75,
        speedGty: 4,
        acceleration: 3.25,
        weight: 3.75,
        handlingGnd: 3.25,
        handlingWtr: 2.75,
        handlingAir: 3.25,
        handlingGty: 3.25,
        grip: 3.75,
        miniturbo: 3.25,
        invincibility: 3.5,
		active: false
    }
});

app.HeavyDriverModel1 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 4.5,
        speedWtr: 4.75,
        speedAir: 5,
        speedGty: 4.25,
        acceleration: 3.25,
        weight: 4,
        handlingGnd: 3,
        handlingWtr: 2.5,
        handlingAir: 3,
        handlingGty: 3,
        grip: 3,
        miniturbo: 3,
        invincibility: 3.5,
        active: false
    }
});

app.HeavyDriverModel2 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 4.75,
        speedWtr: 5,
        speedAir: 5.25,
        speedGty: 4.5,
        acceleration: 3,
        weight: 4.25,
        handlingGnd: 2.75,
        handlingWtr: 2.25,
        handlingAir: 2.75,
        handlingGty: 2.75,
        grip: 3.25,
        miniturbo: 2.75,
        invincibility: 3.75,
        active: false
    }
});

app.HeavyDriverModel3 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 4.25,
        speedWtr: 4.5,
        speedAir: 4.75,
        speedGty: 4,
        acceleration: 3.25,
        weight: 4.5,
        handlingGnd: 3.25,
        handlingWtr: 2.75,
        handlingAir: 3.25,
        handlingGty: 3.25,
        grip: 3.25,
        miniturbo: 3,
        invincibility: 3.25,
        active: false
    }
});

app.HeavyDriverModel3a = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 4.25,
        speedWtr: 4.5,
        speedAir: 4.75,
        speedGty: 4,
        acceleration: 3.25,
        weight: 4.5,
        handlingGnd: 3.25,
        handlingWtr: 2.75,
        handlingAir: 3.25,
        handlingGty: 3.25,
        grip: 3.25,
        miniturbo: 3,
        invincibility: 4,
        active: false
    }
});

app.HeavyDriverModel4 = Backbone.Model.extend({
    defaults: {
        name: '',
        size: '',
        speedGnd: 4.75,
        speedWtr: 5,
        speedAir: 5.25,
        speedGty: 4.5,
        acceleration: 3,
        weight: 4.5,
        handlingGnd: 2.5,
        handlingWtr: 2,
        handlingAir: 2.5,
        handlingGty: 2.5,
        grip: 3,
        miniturbo: 2.75,
        invincibility: 4,
        active: false
    }
});