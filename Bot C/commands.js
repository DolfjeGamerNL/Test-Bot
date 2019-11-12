const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var text = "**GamesNL Commands:** \n\n **Game Commands:** \n ?sps - Speel steen, papier, schaar \n\n **Server Commands:** \n ?crew - Laat de crew van staff, youtubers en partners zien \n ?review - Plaats een review over iets binnen de server \n ?serverinfo - Laat de informatie zien over de server \n\n **Gebruiker Commands:** \n ?fortnite - Laat een speler zijn fortnite stats zien \n ?idee - Plaats een idee over iets binnen de server \n ?ping - Laat je ping zien \n ?report - Rapporteer een gebruiker \n ?ticket - Maak een ticket aan \n\n **Bot Commands:** \n ?commands - Krijg het commands menu van de bot in privé \n ?eten - Krijg een eetsmakelijk bericht van de bot \n ?goedemorgen - Krijg een goedemorgen bericht van de bot \n ?goedemiddag - Krijg een goedemiddag bericht van de bot \n ?goedenavond - Krijg een goedenavond bericht van de bot \n ?hallo - Krijg een hallo bericht van de bot \n ?info - Krijg het info menu te zien van de bot \n ?slapen - Krijg een weltrusten bericht van de bot \n\n **Muziek Commands**: \n ?buggs - Krijg de gemelde muziek buggs te zien \n ?leave - Laat de muziek bot het kanaal verlaten \n ?pause - Pauzeer de muziek \n ?play - Speel muziek af door middel van een URL \n ?queue - Laat de wachtlijst van nummers zien \n ?resume - Laat de muziek weer verder spelen \n ?search - Zoek op youtube een nummer \n ?skip - Sla een liedje over \n ?volume - Verander het volume van de muziek \n\n **Admin Commands:** \n ?ban - Verban een gebruiker van de server \n ?clear - Verwijder een bepaalde aantal berichten \n ?giveaway - Start een giveaway \n ?kick - Kick een gebruiker van de server \n ?mededeling - Plaats een mededeling \n ?prefix - Verander de prefix \n ?ticketclose - Sluit een ticket \n ?tempban - Verban een gebruiker tijdelijk van de server \n ?tempmute - Mute een gebruiker tijdelijk op de server \n ?warn - Geef een gebruiker een waarschuwing op de server \n\n **Let op:** \nDe muziek bot heeft een aantal buggs, wij vragen u de buggs te melden. Heeft u last van een bugg bij de muziek probeer het commando opnieuw.";

    message.author.send(text);

        message.channel.send("Al de commands kan je vinden in je privé");
}

module.exports.help = {
    name: "commands"
}