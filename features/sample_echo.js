/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

	controller.hears('Pradedam','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Labas! Malonu, kad pasirinkai mane, aš esu Ingrida, tavo gidė :) malonu susipažinti. O dabar klausyk manęs ir kai išgirsi pirmajį raktinį žodį - įvesk jį čia.');
    });
	controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Atsiprašau, raktas arba atsakymas neteisingas - ${ message.text }`);
    });
	controller.hears('raktas1','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Šaunu, suradai mane! Siunčiu tavo pirmajį klausimą - Kokios trys kalbos yra atvaizduotos prie įėjimo į užupį? 3; 4; 5;');
    });
	controller.hears('4','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Nu pize malačius, o daba klausyk ir įrašyk antrą raktą.');
    });
	controller.hears('raktas2','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'o kurwa, važiojem - ką ingrida myli labiau? - Vyrą; Katiną;');
    });
	controller.hears('katina','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Nu pize malačius, o daba klausyk ir įrašyk trečią raktą.');
    });
	controller.hears('raktas3','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'o kurwa, važiojem - kiek vidutiniskai sveria vienas martyno pakakojimas? - 1kg; 200gr; 2kg;');
    });
	controller.hears('2kg','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Nu pize malačius, o daba klausyk ir įrašyk ketvirtą raktą.');
    });
	controller.hears('raktas4','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'o kurwa, važiojem - ar golfas cianit? - Cianit; Nicianit;');
    });
	controller.hears('cianit','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Nu pize malačius, o daba klausyk ir įrašyk penktą raktą.');
    });
	controller.hears('raktas5','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'o kurwa, važiojem - Ar dofusas zjbs? Zjbs; Nezjbs;');
    });
	controller.hears('zjbs','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Nu pize malačius, pabaigei žaidimą klausyk. SVEIJKINU GI NU. FOMFAROS TIESIOG PIZDEC.');
    });




}
