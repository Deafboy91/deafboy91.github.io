var app = app || {};

app.Layout = Backbone.Marionette.Layout.extend({
    el: '#content',
    tagName: 'div',
    regions: {
        'regionDrivers': '#regionDrivers',
        'regionBodies': '#regionBodies',
        'regionTires': '#regionTires',
        'regionGliders': '#regionGliders',
        'regionBuild1': '#regionBuild1',
        'regionBuild2': '#regionBuild2',
        'regionBuild3': '#regionBuild3'
    },
    template: Handlebars.compile($('#main-layout-template').html()),
    onRender: function () {
        var model = new app.Model();

        var myDrivers = new app.DriverCollection([
            new app.MediumDriverModel4({ name: 'Mario', size: 'Medium' }),
            new app.MediumDriverModel3({ name: 'Luigi', size: 'Medium' }),
            new app.MediumDriverModel1({ name: 'Peach', size: 'Medium' }),
            new app.MediumDriverModel1({ name: 'Daisy', size: 'Medium' }),
            new app.HeavyDriverModel0({ name: 'Rosalina', size: 'Large' }),
			new app.MediumDriverModel2({ name: 'Tanooki Mario', size: 'Medium' }),
			new app.MediumDriverModel0({ name: 'Cat Peach', size: 'Medium' }),
            new app.MediumDriverModel1({ name: 'Birdo', size: 'Medium', incomplete: true }),
            new app.MediumDriverModel1({ name: 'Yoshi', size: 'Medium' }),
            new app.LightDriverModel5({ name: 'Toad', size: 'Small' }),
            new app.LightDriverModel3({ name: 'Koopa Troopa', size: 'Small' }),
            new app.LightDriverModel5({ name: 'Shy Guy', size: 'Small' }),
            new app.LightDriverModel3({ name: 'Lakitu', size: 'Small' }),
            new app.LightDriverModel4({ name: 'Toadette', size: 'Small' }),
			new app.HeavyDriverModel0({ name: 'King Boo', size: 'Large' }),
            new app.LightDriverModel2({ name: 'Baby Mario', size: 'Small' }),
            new app.LightDriverModel2({ name: 'Baby Luigi', size: 'Small' }),
            new app.LightDriverModel0({ name: 'Baby Peach', size: 'Small' }),
            new app.LightDriverModel0({ name: 'Baby Daisy', size: 'Small' }),
            new app.LightDriverModel1({ name: 'Baby Rosalina', size: 'Small' }),
			new app.HeavyDriverModel3({ name: 'Metal Mario', size: 'Medium' }),
            new app.HeavyDriverModel3({ name: 'Pink Gold Peach', size: 'Medium' }),
			new app.HeavyDriverModel2({ name: 'Wario', size: 'Large' }),
            new app.HeavyDriverModel1({ name: 'Waluigi', size: 'Large' }),
			new app.HeavyDriverModel1({ name: 'Donkey Kong', size: 'Large' }),
            new app.HeavyDriverModel4({ name: 'Bowser', size: 'Large' }),
			new app.LightDriverModel2({ name: 'Dry Bones', size: 'Small' }),
			new app.LightDriverModel3({ name: 'Bowser Jr', size: 'Small' }),
			new app.HeavyDriverModel2({ name: 'Dry Bowser', size: 'Large' }),
			new app.LightDriverModel1({ name: 'Lemmy', size: 'Small' }),
			new app.LightDriverModel5({ name: 'Larry', size: 'Small' }),
			new app.LightDriverModel4({ name: 'Wendy', size: 'Small' }),
			new app.MediumDriverModel4({ name: 'Ludwig', size: 'Medium' }),
            new app.MediumDriverModel3({ name: 'Iggy', size: 'Medium' }),
            new app.HeavyDriverModel1({ name: 'Roy', size: 'Large' }),
            new app.HeavyDriverModel4({ name: 'Morton', size: 'Large' }),
			new app.MediumDriverModel0({ name: 'Inkling Girl', size: 'Medium' }),
			new app.MediumDriverModel2({ name: 'Inkling Boy', size: 'Medium' }),
			new app.HeavyDriverModel0({ name: 'Link', size: 'Large' }),
			new app.MediumDriverModel2({ name: 'Villager (male)', size: 'Medium' }),
			new app.MediumDriverModel0({ name: 'Villager (female)', size: 'Medium' }),
			new app.LightDriverModel4({ name: 'Isabelle', size: 'Small' }),
			new app.LightDriverModel2({ name: 'Mii (Light)', size: 'Small' }),
			new app.MediumDriverModel4({ name: 'Mii (Medium)', size: 'Medium' }),
			new app.HeavyDriverModel4({ name: 'Mii (Heavy)', size: 'Large' })

        ]);
        var myBodies = new app.BodyCollection([
            new app.BodyModel({
                name: 'Standard Kart',
                miniturbo: 0.25,
            }),
            new app.BodyModel({
                name: 'Pipe Frame',
                speedGnd: -0.5,
                speedWtr: 0,
                speedAir: -0.5,
                speedGty: -0.5,
                acceleration: 0.5,
                weight: -0.25,
                handlingGnd: 0.5,
                handlingWtr: 0.5,
                handlingAir: -0.25,
                handlingGty: 0.25,
                grip: 0.25,
                miniturbo: 0.5,
                invincibility: -0.25
            }),
            new app.BodyModel({
                name: 'Mach 8',
                speedGnd: 0,
                speedWtr: 0,
                speedAir: 0.25,
                speedGty: 0.5,
                acceleration: -0.25,
                weight: 0.25,
                handlingGnd: -0.25,
                handlingWtr: 0,
                handlingAir: -0.25,
                handlingGty: 0.25,
                grip: 0.25,
                miniturbo: 0.25,
                invincibility: 0.25
            }),
            new app.BodyModel({
                name: 'Steel Driver',
                speedGnd: 0.25,
                speedWtr: 0.5,
                speedAir: -0.75,
                speedGty: -0.25,
                acceleration: -0.75,
                weight: 0.5,
                handlingGnd: -0.5,
                handlingWtr: 0.75,
                handlingAir: -0.5,
                handlingGty: -0.5,
                grip: 0,
                miniturbo: -0.25,
                invincibility: 0.75
            }),
            new app.BodyModel({
                name: 'Cat Cruiser',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: 0.25,
                speedGty: 0,
                acceleration: 0.25,
                weight: 0,
                handlingGnd: 0.25,
                handlingWtr: 0,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: 0,
                miniturbo: 0.5,
                invincibility: 0
            }),
            new app.BodyModel({
                name: 'Circuit Special',
                speedGnd: 0.5,
                speedWtr: -0.5,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: -0.75,
                weight: 0.25,
                handlingGnd: -0.5,
                handlingWtr: -0.25,
                handlingAir: -0.75,
                handlingGty: -0.25,
                grip: -0.5,
                miniturbo: -0.5,
                invincibility: 0.75
            }),
            new app.BodyModel({
                name: 'Tri-Speeder',
                speedGnd: 0.25,
                speedWtr: 0.5,
                speedAir: -0.75,
                speedGty: -0.25,
                acceleration: -0.75,
                weight: 0.5,
                handlingGnd: -0.5,
                handlingWtr: 0.75,
                handlingAir: -0.5,
                handlingGty: -0.5,
                grip: 0,
                miniturbo: -0.25,
                invincibility: 0.75
            }),
            new app.BodyModel({
                name: 'Badwagon',
                speedGnd: 0.5,
                speedWtr: -0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -1,
                weight: 0.5,
                handlingGnd: -0.75,
                handlingWtr: -0.25,
                handlingAir: -0.75,
                handlingGty: -0.5,
                grip: 0.5,
                miniturbo: -0.75,
                invincibility: 1
            }),
            new app.BodyModel({
                name: 'Prancer',
                speedGnd: 0.25,
                speedWtr: 0,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: -0.25,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0,
                invincibility: 0.5
            }),
            new app.BodyModel({
                name: 'Biddybuggy',
                speedGnd: -0.75,
                speedWtr: -0.5,
                speedAir: -0.5,
                speedGty: -0.25,
                acceleration: 0.75,
                weight: -0.5,
                handlingGnd: 0.5,
                handlingWtr: 0.5,
                handlingAir: 0.25,
                handlingGty: 0.5,
                grip: 0.25,
                miniturbo: 0.75,
                invincibility: -0.75
            }),
            new app.BodyModel({
                name: 'Landship',
                speedGnd: -0.5,
                speedWtr: 0.5,
                speedAir: -0.25,
                speedGty: -0.75,
                acceleration: 0.5,
                weight: -0.5,
                handlingGnd: 0.25,
                handlingWtr: 0.75,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: 0.75,
                miniturbo: 0.5,
                invincibility: -0.5
            }),
            new app.BodyModel({
                name: 'Sneeker',
                speedGnd: 0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: -0.25,
                handlingGty: 0,
                grip: -0.75,
                miniturbo: 0,
                invincibility: 0.5
            }),
            new app.BodyModel({
                name: 'Sports Coupe',
                speedGnd: 0,
                speedWtr: 0,
                speedAir: 0.25,
                speedGty: 0.5,
                acceleration: -0.25,
                weight: 0.25,
                handlingGnd: -0.25,
                handlingWtr: 0,
                handlingAir: -0.25,
                handlingGty: 0.25,
                grip: 0.25,
                miniturbo: 0.25,
                invincibility: 0.25
            }),
            new app.BodyModel({
                name: 'Gold Standard',
                speedGnd: 0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: -0.25,
                handlingGty: 0,
                grip: -0.75,
                miniturbo: 0,
                invincibility: 0.25
            }),
            new app.BodyModel({
                name: 'GLA',
                speedGnd: 0.5,
                speedWtr: -0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -1,
                weight: 0.5,
                handlingGnd: -0.75,
                handlingWtr: -0.25,
                handlingAir: -0.75,
                handlingGty: -0.5,
                grip: 0.5,
                miniturbo: -0.75,
                invincibility: 1
            }),
            new app.BodyModel({
                name: 'W 25 Silver Arrow',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: -0.25,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: 0.25,
                grip: 0.5,
                miniturbo: 0.25,
                invincibility: 0
            }),
            new app.BodyModel({
                name: '300 SL Roadster',
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
                miniturbo: 0.25,
                invincibility: 0.25
            }),
            new app.BodyModel({
                name: 'Blue Falcon',
                speedGnd: 0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: -0.25,
                weight: -0.5,
                handlingGnd: -0.25,
                handlingWtr: 0.25,
                handlingAir: -0.5,
                handlingGty: 0.5,
                grip: 0,
                miniturbo: 0,
                invincibility: 0.25
            }),
            new app.BodyModel({
                name: 'Tanooki Kart',
                speedGnd: -0.25,
                speedWtr: 0.25,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0.25,
                handlingGnd: 0.25,
                handlingWtr: 0.5,
                handlingAir: 0,
                handlingGty: 0,
                grip: 1,
                miniturbo: 0,
                invincibility: 0.25
            }),
            new app.BodyModel({
                name: 'B Dasher',
                speedGnd: 0.5,
                speedWtr: -0.5,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: -0.75,
                weight: 0.25,
                handlingGnd: -0.5,
                handlingWtr: -0.25,
                handlingAir: -0.75,
                handlingGty: -0.25,
                grip: -0.5,
                miniturbo: -0.5,
                invincibility: 0.75
            }),
			new app.BodyModel({
				name: 'Streetle',
                speedGnd: -0.5,
                speedWtr: 0.5,
                speedAir: -0.25,
                speedGty: -0.75,
                acceleration: 0.5,
                weight: -0.5,
                handlingGnd: 0.25,
                handlingWtr: 0.75,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: 0.75,
                miniturbo: 0.5,
                invincibility: -0.25
            }),
			new app.BodyModel({
                name: 'P-Wing',
                speedGnd: 0.5,
                speedWtr: -0.5,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: -0.75,
                weight: 0.25,
                handlingGnd: -0.5,
                handlingWtr: -0.25,
                handlingAir: -0.75,
                handlingGty: -0.25,
                grip: -0.5,
                miniturbo: -0.5,
                invincibility: 0.75
            }),
			new app.BodyModel({
                name: 'Koopa Clown',
                speedGnd: -0.25,
                speedWtr: 0.25,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0.25,
                handlingGnd: 0.25,
                handlingWtr: 0.5,
                handlingAir: 0,
                handlingGty: 0,
                grip: 1,
                miniturbo: 0,
                invincibility: 0
            }),
            new app.BodyModel({
                name: 'Standard Bike',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: -0.25,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: 0.25,
                grip: 0.5,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.BodyModel({
                name: 'Comet',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: 0.25,
                speedGty: 0,
                acceleration: 0.25,
                weight: 0,
                handlingGnd: 0.25,
                handlingWtr: 0,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: 0,
                miniturbo: 0.5,
                invincibility: -0.25,
                insideDrift: true
            }),
            new app.BodyModel({
                name: 'Sport Bike',
                speedGnd: 0.25,
                speedWtr: 0,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: -0.25,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0,
                invincibility: 0,
                insideDrift: true
            }),
            new app.BodyModel({
                name: 'The Duke',
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
                miniturbo: 0.25,
                invincibility: 0
            }),
            new app.BodyModel({
                name: 'Flame Rider',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: -0.25,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: 0.25,
                grip: 0.5,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.BodyModel({
                name: 'Varmint',
                speedGnd: -0.5,
                speedWtr: 0,
                speedAir: -0.5,
                speedGty: -0.5,
                acceleration: 0.5,
                weight: -0.25,
                handlingGnd: 0.5,
                handlingWtr: 0.5,
                handlingAir: -0.25,
                handlingGty: 0.25,
                grip: 0.25,
                miniturbo: 0.5,
                invincibility: -0.5
            }),
            new app.BodyModel({
                name: 'Mr Scooty',
                speedGnd: -0.75,
                speedWtr: -0.5,
                speedAir: -0.5,
                speedGty: -0.25,
                acceleration: 0.75,
                weight: -0.5,
                handlingGnd: 0.5,
                handlingWtr: 0.5,
                handlingAir: 0.25,
                handlingGty: 0.5,
                grip: 0.25,
                miniturbo: 0.75,
                invincibility: -0.75
            }),
            new app.BodyModel({
                name: 'Jet Bike',
                speedGnd: 0.25,
                speedWtr: 0,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: -0.25,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0,
                invincibility: 0,
                insideDrift: true
            }),
            new app.BodyModel({
                name: 'Yoshi Bike',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: 0.25,
                speedGty: 0,
                acceleration: 0.25,
                weight: 0,
                handlingGnd: 0.25,
                handlingWtr: 0,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: 0,
                miniturbo: 0.5,
                invincibility: -0.25,
                insideDrift: true
            }),
            new app.BodyModel({
                name: 'Master Cycle',
                speedGnd: 0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: -0.25,
                handlingGty: 0,
                grip: -0.75,
                miniturbo: 0,
                invincibility: 0,
                insideDrift: true
            }),
			new app.BodyModel({
                name: 'Master Cycle Zero',
                speedGnd: -0.25,
                speedWtr: 0.25,
                speedAir: 0,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0.25,
                handlingGnd: 0.25,
                handlingWtr: 0.5,
                handlingAir: 0,
                handlingGty: 0,
                grip: 1,
                miniturbo: 0,
                invincibility: 0
            }),
			new app.BodyModel({
                name: 'City Tripper',
                speedGnd: -0.5,
                speedWtr: 0,
                speedAir: -0.5,
                speedGty: -0.5,
                acceleration: 0.5,
                weight: -0.25,
                handlingGnd: 0.5,
                handlingWtr: 0.5,
                handlingAir: -0.25,
                handlingGty: 0.25,
                grip: 0.25,
                miniturbo: 0.5,
                invincibility: -0.5
            }),
            new app.BodyModel({
                name: 'Standard ATV',
                speedGnd: 0.5,
                speedWtr: -0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -1,
                weight: 0.5,
                handlingGnd: -0.75,
                handlingWtr: -0.25,
                handlingAir: -0.75,
                handlingGty: -0.5,
                grip: 0.5,
                miniturbo: -0.75,
                invincibility: 0.75
            }),
            new app.BodyModel({
                name: 'Wild Wiggler',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: -0.25,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: 0.25,
                grip: 0.5,
                miniturbo: 0.25,
                invincibility: -0.5
            }),
            new app.BodyModel({
                name: 'Teddy Buggy',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: 0.25,
                speedGty: 0,
                acceleration: 0.25,
                weight: 0,
                handlingGnd: 0.25,
                handlingWtr: 0,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: 0,
                miniturbo: 0.5,
                invincibility: 0
            }),
			new app.BodyModel({
                name: 'Bone Rattler',
                speedGnd: 0.25,
                speedWtr: 0.5,
                speedAir: -0.75,
                speedGty: -0.25,
                acceleration: -0.75,
                weight: 0.5,
                handlingGnd: -0.5,
                handlingWtr: 0.75,
                handlingAir: -0.5,
                handlingGty: -0.5,
                grip: 0,
                miniturbo: -0.25,
                invincibility: 0.5
            }),
				new app.BodyModel({
                name: 'Splat Buggy',
                speedGnd: 0.25,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: -0.25,
                weight: -0.5,
                handlingGnd: -0.25,
                handlingWtr: 0.25,
                handlingAir: -0.5,
                handlingGty: 0.5,
                grip: 0,
                miniturbo: 0,
                invincibility: 0
            }),
			new app.BodyModel({
                name: 'Inkstriker',
                speedGnd: 0,
                speedWtr: 0,
                speedAir: 0.25,
                speedGty: 0.5,
                acceleration: -0.25,
                weight: 0.25,
                handlingGnd: -0.25,
                handlingWtr: 0,
                handlingAir: -0.25,
                handlingGty: 0.25,
                grip: 0.25,
                miniturbo: 0.25,
                invincibility: 0
            })
        ]);
        var myTires = new app.TireCollection([
            new app.TireModel({
                name: 'Standard',
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
                miniturbo: 0.25,
                invincibility: 0
            }),
            new app.TireModel({
                name: 'Monster',
                speedGnd: 0,
                speedWtr: -0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0.5,
                handlingGnd: -0.75,
                handlingWtr: -0.5,
                handlingAir: -0.5,
                handlingGty: -0.75,
                grip: 0.5,
                miniturbo: 0,
                invincibility: 0.5
            }),
            new app.TireModel({
                name: 'Roller',
                speedGnd: -0.5,
                speedWtr: 0,
                speedAir: 0,
                speedGty: -0.5,
                acceleration: 0.5,
                weight: -0.5,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: 0.25,
                grip: -0.25,
                miniturbo: 0.75,
                invincibility: -0.75
            }),
            new app.TireModel({
                name: 'Slim',
                speedGnd: 0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0.5,
                acceleration: -0.5,
                weight: 0,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: -1,
                miniturbo: 0,
                invincibility: 0.25
            }),
            new app.TireModel({
                name: 'Slick',
                speedGnd: 0.5,
                speedWtr: -0.75,
                speedAir: -0.75,
                speedGty: 0.5,
                acceleration: -0.75,
                weight: 0.25,
                handlingGnd: -0.25,
                handlingWtr: -0.75,
                handlingAir: -0.5,
                handlingGty: -0.25,
                grip: -1.25,
                miniturbo: -0.5,
                invincibility: 0.25
            }),
            new app.TireModel({
                name: 'Metal',
                speedGnd: 0.5,
                speedWtr: 0,
                speedAir: -0.25,
                speedGty: -0.25,
                acceleration: -1,
                weight: 0.5,
                handlingGnd: -0.25,
                handlingWtr: -0.25,
                handlingAir: -0.75,
                handlingGty: -0.5,
                grip: -0.75,
                miniturbo: -0.5,
                invincibility: 0.5
            }),
            new app.TireModel({
                name: 'Button',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0,
                acceleration: 0.25,
                weight: -0.5,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: -0.25,
                handlingGty: 0.25,
                grip: -0.5,
                miniturbo: 0.5,
                invincibility: -0.25
            }),
            new app.TireModel({
                name: 'Off-Road',
                speedGnd: 0.25,
                speedWtr: 0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -0.25,
                weight: 0.25,
                handlingGnd: -0.5,
                handlingWtr: -0.5,
                handlingAir: -0.25,
                handlingGty: -0.25,
                grip: 0.25,
                miniturbo: -0.25,
                invincibility: 0.75
            }),
            new app.TireModel({
                name: 'Sponge',
                speedGnd: -0.25,
                speedWtr: -0.5,
                speedAir: 0.25,
                speedGty: -0.25,
                acceleration: 0,
                weight: -0.25,
                handlingGnd: -0.25,
                handlingWtr: -0.5,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: 0.25,
                miniturbo: 0.5,
                invincibility: 0
            }),
            new app.TireModel({
                name: 'Wood',
                speedGnd: 0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0.5,
                acceleration: -0.5,
                weight: 0,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: -1,
                miniturbo: 0,
                invincibility: 0.25
            }),
            new app.TireModel({
                name: 'Cushion',
                speedGnd: -0.25,
                speedWtr: -0.5,
                speedAir: 0.25,
                speedGty: -0.25,
                acceleration: 0,
                weight: -0.25,
                handlingGnd: -0.25,
                handlingWtr: -0.5,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: 0.25,
                miniturbo: 0.5,
                invincibility: 0.5
            }),
            new app.TireModel({
                name: 'Blue Standard',
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
                miniturbo: 0.25,
                invincibility: 0
            }),
            new app.TireModel({
                name: 'Hot Monster',
                speedGnd: 0,
                speedWtr: -0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0.5,
                handlingGnd: -0.75,
                handlingWtr: -0.5,
                handlingAir: -0.5,
                handlingGty: -0.75,
                grip: 0.5,
                miniturbo: 0,
                invincibility: 0.5
            }),
            new app.TireModel({
                name: 'Azure Roller',
                speedGnd: -0.5,
                speedWtr: 0,
                speedAir: 0,
                speedGty: -0.5,
                acceleration: 0.5,
                weight: -0.5,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: 0.25,
                grip: -0.25,
                miniturbo: 0.75,
                invincibility: -0.75
            }),
            new app.TireModel({
                name: 'Crimson Slim',
                speedGnd: 0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0.5,
                acceleration: -0.5,
                weight: 0,
                handlingGnd: 0.25,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: -1,
                miniturbo: 0,
                invincibility: 0.25
            }),
            new app.TireModel({
                name: 'Cyber Slick',
                speedGnd: 0.5,
                speedWtr: -0.75,
                speedAir: -0.75,
                speedGty: 0.5,
                acceleration: -0.75,
                weight: 0.25,
                handlingGnd: -0.25,
                handlingWtr: -0.75,
                handlingAir: -0.5,
                handlingGty: -0.25,
                grip: -1.25,
                miniturbo: -0.5,
                invincibility: 0.25
            }),
            new app.TireModel({
                name: 'Retro Off-Road',
                speedGnd: 0.25,
                speedWtr: 0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -0.25,
                weight: 0.25,
                handlingGnd: -0.5,
                handlingWtr: -0.5,
                handlingAir: -0.25,
                handlingGty: -0.25,
                grip: 0.25,
                miniturbo: -0.25,
                invincibility: 0.75
            }),
            new app.TireModel({
                name: 'Gold Tires',
                speedGnd: 0.5,
                speedWtr: 0,
                speedAir: -0.25,
                speedGty: -0.25,
                acceleration: -1,
                weight: 0.5,
                handlingGnd: -0.25,
                handlingWtr: -0.25,
                handlingAir: -0.75,
                handlingGty: -0.5,
                grip: -0.75,
                miniturbo: -0.5,
                invincibility: 0.25
            }),
            new app.TireModel({
                name: 'GLA Tires',
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
                miniturbo: 0.25,
                invincibility: 0.25
            }),
            new app.TireModel({
                name: 'Triforce Tires',
                speedGnd: 0.25,
                speedWtr: 0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -0.25,
                weight: 0.25,
                handlingGnd: -0.5,
                handlingWtr: -0.5,
                handlingAir: -0.25,
                handlingGty: -0.25,
                grip: 0.25,
                miniturbo: -0.25,
                invincibility: 0.5
            }),
			new app.TireModel({
                name: 'Ancient Tires',
                speedGnd: 0,
                speedWtr: -0.25,
                speedAir: -0.5,
                speedGty: 0,
                acceleration: -0.5,
                weight: 0.5,
                handlingGnd: -0.75,
                handlingWtr: -0.5,
                handlingAir: -0.5,
                handlingGty: -0.75,
                grip: 0.5,
                miniturbo: 0,
                invincibility: 0.25
            }),
			new app.TireModel({
                name: 'Leaf Tires',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0,
                acceleration: 0.25,
                weight: -0.5,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: -0.25,
                handlingGty: 0.25,
                grip: -0.5,
                miniturbo: 0.5,
                invincibility: -0.25
            })
        ]);
        var myGliders = new app.GliderCollection([
            new app.TireModel({
                name: 'Super Glider',
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
                invincibility: 0
            }),
            new app.TireModel({
                name: 'Cloud Glider',
                speedGnd: -0.25,
                speedWtr: 0,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: -0.25,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: 0,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.TireModel({
                name: 'Wario Wing',
                speedGnd: 0,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: 0,
                weight: 0.25,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0,
                invincibility: 0
            }),
            new app.TireModel({
                name: 'Waddle Wing',
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
                invincibility: 0
            }),
            new app.TireModel({
                name: 'Peach Parasol',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: 0,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.TireModel({
                name: 'Parachute',
                speedGnd: -0.25,
                speedWtr: 0,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: -0.25,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: 0,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.TireModel({
                name: 'Parafoil',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: 0,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.TireModel({
                name: 'Flower Glider',
                speedGnd: -0.25,
                speedWtr: 0,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: -0.25,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: 0,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.TireModel({
                name: 'Bowser Kite',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: 0,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.TireModel({
                name: 'Plane Glider',
                speedGnd: 0,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: 0,
                weight: 0.25,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0,
                invincibility: 0
            }),
            new app.TireModel({
                name: 'MKTV Parafoil',
                speedGnd: -0.25,
                speedWtr: -0.25,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: 0,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0.25,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0.25,
                invincibility: -0.25
            }),
            new app.TireModel({
                name: 'Gold Glider',
                speedGnd: 0,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: 0,
                weight: 0.25,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0,
                invincibility: 0
            }),
            new app.TireModel({
                name: 'Hylian Kite',
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
                invincibility: 0
            }),
			new app.TireModel({
                name: 'Paraglider',
                speedGnd: 0,
                speedWtr: -0.25,
                speedAir: 0,
                speedGty: 0.25,
                acceleration: 0,
                weight: 0.25,
                handlingGnd: 0,
                handlingWtr: 0.25,
                handlingAir: 0,
                handlingGty: -0.25,
                grip: -0.25,
                miniturbo: 0,
                invincibility: 0
            }),
			new app.TireModel({
                name: 'Paper Glider',
                speedGnd: -0.25,
                speedWtr: 0,
                speedAir: -0.25,
                speedGty: 0.25,
                acceleration: 0.25,
                weight: -0.25,
                handlingGnd: 0,
                handlingWtr: 0,
                handlingAir: 0.25,
                handlingGty: 0,
                grip: 0,
                miniturbo: 0.25,
                invincibility: -0.25
            })
        ]);



        this.regionDrivers.show(new app.Drivers({ model: model, collection: myDrivers }));
        this.regionBodies.show(new app.Bodies({ model: model, collection: myBodies }));
        this.regionTires.show(new app.Tires({ model: model, collection: myTires }));
        this.regionGliders.show(new app.Gliders({ model: model, collection: myGliders }));

        this.regionBuild1.show(new app.Build1({ model: model }));
        this.regionBuild2.show(new app.Build2({ model: model }));
        this.regionBuild3.show(new app.Build3({ model: model }));
    }
});

app.ItemView = Backbone.Marionette.ItemView.extend({
    tagName: 'div',
    initialize: function (options) {
        this.parentsModel = options.parentsModel;
    },
    modelEvents: {
        'change': 'render'
    },
    selectDriver: function () {
        this.parentsModel.set('driver' + this.parentsModel.get('activeBuild'), this.model.toJSON());
        this.parentsModel.trigger('set:activeDriver');
    }
});
app.Driver = app.ItemView.extend({
    template: Handlebars.compile($('#driver-template').html()),
    events: {
        'click .driver': 'selectDriver'
    },
    selectDriver: function () {
        this.parentsModel.set('driver' + this.parentsModel.get('activeBuild'), this.model.toJSON());
        this.parentsModel.trigger('set:activeDriver');
    }
});
app.Body = app.ItemView.extend({
    template: Handlebars.compile($('#body-template').html()),
    events: {
        'click .body': 'selectBody'
    },
    selectBody: function () {
        this.parentsModel.set('body' + this.parentsModel.get('activeBuild'), this.model.toJSON());
        this.parentsModel.trigger('set:activeBody');
    }
});
app.Tire = app.ItemView.extend({
    template: Handlebars.compile($('#tire-template').html()),
    events: {
        'click .tire': 'selectTire'
    },
    selectTire: function () {
        this.parentsModel.set('tire' + this.parentsModel.get('activeBuild'), this.model.toJSON());
        this.parentsModel.trigger('set:activeTire');

    }
});
app.Glider = app.ItemView.extend({
    template: Handlebars.compile($('#glider-template').html()),
    events: {
        'click .glider': 'selectGlider'
    },
    selectGlider: function () {
        this.parentsModel.set('glider' + this.parentsModel.get('activeBuild'), this.model.toJSON());
        this.parentsModel.trigger('set:activeGlider');
    }
});

app.CompositeView = Backbone.Marionette.CompositeView.extend({
    itemViewOptions: function () { return { parentsModel: this.model }; },
    itemViewContainer: 'div',
    itemView: app.Driver
});

app.Drivers = app.CompositeView.extend({
    template: Handlebars.compile($('#drivers-template').html()),
    itemView: app.Driver,
    modelEvents: {
        'set:activeDriver': 'setActiveDriver'
    },
    setActiveDriver: function () {
        var that = this;
        this.collection.each(function (model) {
            switch (that.model.get('activeBuild')) {
                case 1:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('driver1').name) {
                        model.set('active', true);
                    }
                    break;

                case 2:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('driver2').name) {
                        model.set('active', true);
                    }
                    break;

                case 3:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('driver3').name) {
                        model.set('active', true);
                    }
                    break;
            }
        }, this);
    }
});

app.Bodies = app.CompositeView.extend({
    template: Handlebars.compile($('#bodies-template').html()),
    itemView: app.Body,
    modelEvents: {
        'set:activeBody': 'setActiveBody'
    },
    setActiveBody: function () {
        var that = this;
        this.collection.each(function (model) {
            switch (that.model.get('activeBuild')) {
                case 1:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('body1').name) {
                        model.set('active', true);
                    }
                    break;

                case 2:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('body2').name) {
                        model.set('active', true);
                    }
                    break;

                case 3:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('body3').name) {
                        model.set('active', true);
                    }
                    break;
            }
        }, this);
    }
});

app.Tires = app.CompositeView.extend({
    template: Handlebars.compile($('#tires-template').html()),
    itemView: app.Tire,
    modelEvents: {
        'set:activeTire': 'setActiveTire'
    },
    setActiveTire: function () {
        var that = this;
        this.collection.each(function (model) {
            switch (that.model.get('activeBuild')) {
                case 1:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('tire1').name) {
                        model.set('active', true);
                    }
                    break;

                case 2:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('tire2').name) {
                        model.set('active', true);
                    }
                    break;

                case 3:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('tire3').name) {
                        model.set('active', true);
                    }
                    break;
            }
        }, this);
    }
});

app.Gliders = app.CompositeView.extend({
    template: Handlebars.compile($('#gliders-template').html()),
    itemView: app.Glider,
    modelEvents: {
        'set:activeGlider': 'setActiveGlider'
    },
    setActiveGlider: function () {
        var that = this;
        this.collection.each(function (model) {
            switch (that.model.get('activeBuild')) {
                case 1:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('glider1').name) {
                        model.set('active', true);
                    }
                    break;

                case 2:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('glider2').name) {
                        model.set('active', true);
                    }
                    break;

                case 3:
                    model.set('active', false);
                    if (model.get('name') == that.model.get('glider3').name) {
                        model.set('active', true);
                    }
                    break;
            }
        }, this);
    }
});


app.BuildView = Backbone.Marionette.ItemView.extend({
    serializeData: function () {
        var data = this.model.toJSON();

        function removeNegative(data) {
            if (data < 0) {
                data = 0;
            }
            return data;
        }

        switch (this.build) {
            case 1:
                data.build1status = data.activeBuild == this.build ? true : false;
                data.speedGnd1 = data.driver1.speedGnd + data.body1.speedGnd + data.tire1.speedGnd + data.glider1.speedGnd;
                data.speedWtr1 = data.driver1.speedWtr + data.body1.speedWtr + data.tire1.speedWtr + data.glider1.speedWtr;
                data.speedAir1 = data.driver1.speedAir + data.body1.speedAir + data.tire1.speedAir + data.glider1.speedAir;
                data.speedGty1 = data.driver1.speedGty + data.body1.speedGty + data.tire1.speedGty + data.glider1.speedGty;
                data.acceleration1 = data.driver1.acceleration + data.body1.acceleration + data.tire1.acceleration + data.glider1.acceleration;
                data.weight1 = data.driver1.weight + data.body1.weight + data.tire1.weight + data.glider1.weight;
                data.handlingGnd1 = data.driver1.handlingGnd + data.body1.handlingGnd + data.tire1.handlingGnd + data.glider1.handlingGnd;
                data.handlingWtr1 = data.driver1.handlingWtr + data.body1.handlingWtr + data.tire1.handlingWtr + data.glider1.handlingWtr;
                data.handlingAir1 = data.driver1.handlingAir + data.body1.handlingAir + data.tire1.handlingAir + data.glider1.handlingAir;
                data.handlingGty1 = data.driver1.handlingGty + data.body1.handlingGty + data.tire1.handlingGty + data.glider1.handlingGty;
                data.grip1 = data.driver1.grip + data.body1.grip + data.tire1.grip + data.glider1.grip;
                data.miniturbo1 = data.driver1.miniturbo + data.body1.miniturbo + data.tire1.miniturbo + data.glider1.miniturbo;
				data.invincibility1 = data.driver1.invincibility + data.body1.invincibility + data.tire1.invincibility + data.glider1.invincibility;

                data.speedGnd1percent = (data.driver1.speedGnd + data.body1.speedGnd + data.tire1.speedGnd + data.glider1.speedGnd) / 6 * 100;
                data.speedWtr1percent = (data.driver1.speedWtr + data.body1.speedWtr + data.tire1.speedWtr + data.glider1.speedWtr) / 6 * 100;
                data.speedAir1percent = (data.driver1.speedAir + data.body1.speedAir + data.tire1.speedAir + data.glider1.speedAir) / 6 * 100;
                data.speedGty1percent = (data.driver1.speedGty + data.body1.speedGty + data.tire1.speedGty + data.glider1.speedGty) / 6 * 100;
                data.acceleration1percent = (data.driver1.acceleration + data.body1.acceleration + data.tire1.acceleration + data.glider1.acceleration) / 6 * 100;
                data.weight1percent = (data.driver1.weight + data.body1.weight + data.tire1.weight + data.glider1.weight) / 6 * 100;
                data.handlingGnd1percent = (data.driver1.handlingGnd + data.body1.handlingGnd + data.tire1.handlingGnd + data.glider1.handlingGnd) / 6 * 100;
                data.handlingWtr1percent = (data.driver1.handlingWtr + data.body1.handlingWtr + data.tire1.handlingWtr + data.glider1.handlingWtr) / 6 * 100;
                data.handlingAir1percent = (data.driver1.handlingAir + data.body1.handlingAir + data.tire1.handlingAir + data.glider1.handlingAir) / 6 * 100;
                data.handlingGty1percent = (data.driver1.handlingGty + data.body1.handlingGty + data.tire1.handlingGty + data.glider1.handlingGty) / 6 * 100;
                data.grip1percent = (data.driver1.grip + data.body1.grip + data.tire1.grip + data.glider1.grip) / 6 * 100;
                data.miniturbo1percent = (data.driver1.miniturbo + data.body1.miniturbo + data.tire1.miniturbo + data.glider1.miniturbo) / 6 * 100;
                data.invincibility1percent = (data.driver1.invincibility + data.body1.invincibility + data.tire1.invincibility + data.glider1.invincibility) / 6 * 100;

                data.speedGnd1 = removeNegative(data.speedGnd1);
                data.speedWtr1 = removeNegative(data.speedWtr1);
                data.speedAir1 = removeNegative(data.speedAir1);
                data.speedGty1 = removeNegative(data.speedGty1);
                data.acceleration1 = removeNegative(data.acceleration1);
                data.weight1 = removeNegative(data.weight1);
                data.handlingGnd1 = removeNegative(data.handlingGnd1);
                data.handlingWtr1 = removeNegative(data.handlingWtr1);
                data.handlingAir1 = removeNegative(data.handlingAir1);
                data.handlingGty1 = removeNegative(data.handlingGty1);
                data.grip1 = removeNegative(data.grip1);
                data.miniturbo1 = removeNegative(data.miniturbo1);
                data.invincibility1 = removeNegative(data.invincibility1);

                break;

            case 2:
                data.build2status = data.activeBuild == this.build ? true : false;
                data.speedGnd2 = data.driver2.speedGnd + data.body2.speedGnd + data.tire2.speedGnd + data.glider2.speedGnd;
                data.speedWtr2 = data.driver2.speedWtr + data.body2.speedWtr + data.tire2.speedWtr + data.glider2.speedWtr;
                data.speedAir2 = data.driver2.speedAir + data.body2.speedAir + data.tire2.speedAir + data.glider2.speedAir;
                data.speedGty2 = data.driver2.speedGty + data.body2.speedGty + data.tire2.speedGty + data.glider2.speedGty;
                data.acceleration2 = data.driver2.acceleration + data.body2.acceleration + data.tire2.acceleration + data.glider2.acceleration;
                data.weight2 = data.driver2.weight + data.body2.weight + data.tire2.weight + data.glider2.weight;
                data.handlingGnd2 = data.driver2.handlingGnd + data.body2.handlingGnd + data.tire2.handlingGnd + data.glider2.handlingGnd;
                data.handlingWtr2 = data.driver2.handlingWtr + data.body2.handlingWtr + data.tire2.handlingWtr + data.glider2.handlingWtr;
                data.handlingAir2 = data.driver2.handlingAir + data.body2.handlingAir + data.tire2.handlingAir + data.glider2.handlingAir;
                data.handlingGty2 = data.driver2.handlingGty + data.body2.handlingGty + data.tire2.handlingGty + data.glider2.handlingGty;
                data.grip2 = data.driver2.grip + data.body2.grip + data.tire2.grip + data.glider2.grip;
                data.miniturbo2 = data.driver2.miniturbo + data.body2.miniturbo + data.tire2.miniturbo + data.glider2.miniturbo;
				data.invincibility2 = data.driver2.invincibility + data.body2.invincibility + data.tire2.invincibility + data.glider2.invincibility;

                data.speedGnd2percent = (data.driver2.speedGnd + data.body2.speedGnd + data.tire2.speedGnd + data.glider2.speedGnd) / 6 * 100;
                data.speedWtr2percent = (data.driver2.speedWtr + data.body2.speedWtr + data.tire2.speedWtr + data.glider2.speedWtr) / 6 * 100;
                data.speedAir2percent = (data.driver2.speedAir + data.body2.speedAir + data.tire2.speedAir + data.glider2.speedAir) / 6 * 100;
                data.speedGty2percent = (data.driver2.speedGty + data.body2.speedGty + data.tire2.speedGty + data.glider2.speedGty) / 6 * 100;
                data.acceleration2percent = (data.driver2.acceleration + data.body2.acceleration + data.tire2.acceleration + data.glider2.acceleration) / 6 * 100;
                data.weight2percent = (data.driver2.weight + data.body2.weight + data.tire2.weight + data.glider2.weight) / 6 * 100;
                data.handlingGnd2percent = (data.driver2.handlingGnd + data.body2.handlingGnd + data.tire2.handlingGnd + data.glider2.handlingGnd) / 6 * 100;
                data.handlingWtr2percent = (data.driver2.handlingWtr + data.body2.handlingWtr + data.tire2.handlingWtr + data.glider2.handlingWtr) / 6 * 100;
                data.handlingAir2percent = (data.driver2.handlingAir + data.body2.handlingAir + data.tire2.handlingAir + data.glider2.handlingAir) / 6 * 100;
                data.handlingGty2percent = (data.driver2.handlingGty + data.body2.handlingGty + data.tire2.handlingGty + data.glider2.handlingGty) / 6 * 100;
                data.grip2percent = (data.driver2.grip + data.body2.grip + data.tire2.grip + data.glider2.grip) / 6 * 100;
                data.miniturbo2percent = (data.driver2.miniturbo + data.body2.miniturbo + data.tire2.miniturbo + data.glider2.miniturbo) / 6 * 100;
                data.invincibility2percent = (data.driver2.invincibility + data.body2.invincibility + data.tire2.invincibility + data.glider2.invincibility) / 6 * 100;

                data.speedGnd2 = removeNegative(data.speedGnd2);
                data.speedWtr2 = removeNegative(data.speedWtr2);
                data.speedAir2 = removeNegative(data.speedAir2);
                data.speedGty2 = removeNegative(data.speedGty2);
                data.acceleration2 = removeNegative(data.acceleration2);
                data.weight2 = removeNegative(data.weight2);
                data.handlingGnd2 = removeNegative(data.handlingGnd2);
                data.handlingWtr2 = removeNegative(data.handlingWtr2);
                data.handlingAir2 = removeNegative(data.handlingAir2);
                data.handlingGty2 = removeNegative(data.handlingGty2);
                data.grip2 = removeNegative(data.grip2);
                data.miniturbo2 = removeNegative(data.miniturbo2);
                data.invincibility2 = removeNegative(data.invincibility2);

                break;

            case 3:
                data.build3status = data.activeBuild == this.build ? true : false;
                data.speedGnd3 = data.driver3.speedGnd + data.body3.speedGnd + data.tire3.speedGnd + data.glider3.speedGnd;
                data.speedWtr3 = data.driver3.speedWtr + data.body3.speedWtr + data.tire3.speedWtr + data.glider3.speedWtr;
                data.speedAir3 = data.driver3.speedAir + data.body3.speedAir + data.tire3.speedAir + data.glider3.speedAir;
                data.speedGty3 = data.driver3.speedGty + data.body3.speedGty + data.tire3.speedGty + data.glider3.speedGty;
                data.acceleration3 = data.driver3.acceleration + data.body3.acceleration + data.tire3.acceleration + data.glider3.acceleration;
                data.weight3 = data.driver3.weight + data.body3.weight + data.tire3.weight + data.glider3.weight;
                data.handlingGnd3 = data.driver3.handlingGnd + data.body3.handlingGnd + data.tire3.handlingGnd + data.glider3.handlingGnd;
                data.handlingWtr3 = data.driver3.handlingWtr + data.body3.handlingWtr + data.tire3.handlingWtr + data.glider3.handlingWtr;
                data.handlingAir3 = data.driver3.handlingAir + data.body3.handlingAir + data.tire3.handlingAir + data.glider3.handlingAir;
                data.handlingGty3 = data.driver3.handlingGty + data.body3.handlingGty + data.tire3.handlingGty + data.glider3.handlingGty;
                data.grip3 = data.driver3.grip + data.body3.grip + data.tire3.grip + data.glider3.grip;
                data.miniturbo3 = data.driver3.miniturbo + data.body3.miniturbo + data.tire3.miniturbo + data.glider3.miniturbo;
				data.invincibility3 = data.driver3.invincibility + data.body3.invincibility + data.tire3.invincibility + data.glider3.invincibility;

                data.speedGnd3percent = (data.driver3.speedGnd + data.body3.speedGnd + data.tire3.speedGnd + data.glider3.speedGnd) / 6 * 100;
                data.speedWtr3percent = (data.driver3.speedWtr + data.body3.speedWtr + data.tire3.speedWtr + data.glider3.speedWtr) / 6 * 100;
                data.speedAir3percent = (data.driver3.speedAir + data.body3.speedAir + data.tire3.speedAir + data.glider3.speedAir) / 6 * 100;
                data.speedGty3percent = (data.driver3.speedGty + data.body3.speedGty + data.tire3.speedGty + data.glider3.speedGty) / 6 * 100;
                data.acceleration3percent = (data.driver3.acceleration + data.body3.acceleration + data.tire3.acceleration + data.glider3.acceleration) / 6 * 100;
                data.weight3percent = (data.driver3.weight + data.body3.weight + data.tire3.weight + data.glider3.weight) / 6 * 100;
                data.handlingGnd3percent = (data.driver3.handlingGnd + data.body3.handlingGnd + data.tire3.handlingGnd + data.glider3.handlingGnd) / 6 * 100;
                data.handlingWtr3percent = (data.driver3.handlingWtr + data.body3.handlingWtr + data.tire3.handlingWtr + data.glider3.handlingWtr) / 6 * 100;
                data.handlingAir3percent = (data.driver3.handlingAir + data.body3.handlingAir + data.tire3.handlingAir + data.glider3.handlingAir) / 6 * 100;
                data.handlingGty3percent = (data.driver3.handlingGty + data.body3.handlingGty + data.tire3.handlingGty + data.glider3.handlingGty) / 6 * 100;
                data.grip3percent = (data.driver3.grip + data.body3.grip + data.tire3.grip + data.glider3.grip) / 6 * 100;
                data.miniturbo3percent = (data.driver3.miniturbo + data.body3.miniturbo + data.tire3.miniturbo + data.glider3.miniturbo) / 6 * 100;
                data.invincibility3percent = (data.driver3.invincibility + data.body3.invincibility + data.tire3.invincibility + data.glider3.invincibility) / 6 * 100;

                data.speedGnd3 = removeNegative(data.speedGnd3);
                data.speedWtr3 = removeNegative(data.speedWtr3);
                data.speedAir3 = removeNegative(data.speedAir3);
                data.speedGty3 = removeNegative(data.speedGty3);
                data.acceleration3 = removeNegative(data.acceleration3);
                data.weight3 = removeNegative(data.weight3);
                data.handlingGnd3 = removeNegative(data.handlingGnd3);
                data.handlingWtr3 = removeNegative(data.handlingWtr3);
                data.handlingAir3 = removeNegative(data.handlingAir3);
                data.handlingGty3 = removeNegative(data.handlingGty3);
                data.grip3 = removeNegative(data.grip3);
                data.miniturbo3 = removeNegative(data.miniturbo3);
                data.invincibility3 = removeNegative(data.invincibility3);

                break;
        };

        return data;
    },
    modelEvents: {
        'change': 'render'
    },
    events: {
        'click h3': 'setActiveBuild',
        'click .clear': 'clearBuild'
    },
    setActiveBuild: function () {
        this.model.set('activeBuild', this.build)
        this.model.trigger('set:activeDriver');
        this.model.trigger('set:activeBody');
        this.model.trigger('set:activeTire');
        this.model.trigger('set:activeGlider');
    },
    clearBuild: function () {
        this.model.set('driver' + this.build, { name: '', size: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 });
        this.model.set('body' + this.build, { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 });
        this.model.set('tire' + this.build, { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 });
        this.model.set('glider' + this.build, { name: '', speedGnd: 0, speedWtr: 0, speedAir: 0, speedGty: 0, acceleration: 0, weight: 0, handlingGnd: 0, handlingWtr: 0, handlingAir: 0, handlingGty: 0, grip: 0, miniturbo: 0, invincibility: 0 });
        this.model.trigger('set:activeDriver');
        this.model.trigger('set:activeBody');
        this.model.trigger('set:activeTire');
        this.model.trigger('set:activeGlider');
    }
});

app.Build1 = app.BuildView.extend({
    build: 1,
    template: Handlebars.compile($('#build1-template').html()),
});
app.Build2 = app.BuildView.extend({
    build: 2,
    template: Handlebars.compile($('#build2-template').html()),
});
app.Build3 = app.BuildView.extend({
    build: 3,
    template: Handlebars.compile($('#build3-template').html()),
});