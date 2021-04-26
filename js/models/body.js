var app = app || {};

app.BodyModel = Backbone.Model.extend({
    defaults: {
        name: '',
        type: '',
        weightClass: '',
        weight: 0,
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
        miniturbo: 0
    }
});