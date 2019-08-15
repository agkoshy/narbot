const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');

const nar = 135151849320873986;
const humza = 160979652792418304;
const pubert = 153195158689546241;
const fei = 110314921610182656;
const haval = 224625607256965130;
const loki = 523612684969574401;
const shawn = 197962769696423936;
const seb = 136672623542140929;
const srn = 256441174926032897;
const donqi = 136830856864989184;
const fabio = 82997901051035648;
const tyrese = 235633754390003712;
const yasha = 181155554310357002;
const hafiz = 142333941137932288;
const dummy = 0;
let pubecount = 10;
let ocount = 0;
let havalcount = 0;
let hbool = 0;
var seconds = 0;
let feicount = 10;
let testcount = 0;

let gamebool = 0;
let gamelock = 1;
let ponelock = 1;
let ptwolock = 1;
let gm = 0;
let pone = 0;
let ptwo = 0;
let ponecount = 0;
let ptwocount = 0;
let HP = 0;
let myhp = 0;
let otherhp = 0;
let hm1count = 0;
let hm2count = 0;

let coins = require('./coins.json');
let dumbcount = 0;
let dcount = 0;

var date = new Date();
let sugounitinfo = ['hafiz', 'humza', 'haval', 'fei', 'pubert'];
const moon2DUMB = '608692163269754933';
const moon2D = '608692136828862475';
var rolls = ["Haval", "Fei", "Humza", "Pubert", "SRN", "Nar", "Asian", "Donqi", "Alpha", "Shawn", "Loki", "Janser", "Kari", "T"];
let silvers = ["Young Haval",
        "Humza v1",
        "Haram Fei",
        "Pubert",
        "Lolicon Loki",
        "Gears 5 Donqi",
        "Hangover Fabio",
        "WeirdAlpha",
        "Nippon Raijin",
        "Haram naRnaR",
        "Old Man Morgan",
        "Lolicon Fei",
        "Innocent Yasha",
        "Inshallah Kevin",
        "Boa's Slave Hafiz",
        "Instagram Fiend T"];
let rrs = ["Manga God Haval",
"Haram King Humza",
"Collector Fei",
"Lover naRnaR",
"Viral Tweeter Donqi",
"Capistran",
"LN God Fabio",
"Rich Mans Sebastien",
"Shawn the Hugger",
"SRN the Whale",
"Master Lolicon Humza",
"Hans Peter Jürgen",
"Yasha the Fighter",
"Mexican Druglords Alpha/Yasha",
"Drive-by Criminal Fei",
"Married Man Hafiz",
"Humza v2",
"Wrong Account Shawn/Fei"];
let legend = ["**King Haval**",
        "**Great General Fei**",
        "**Mudae Lord Humza**",
        "**From Another World, naRnaR**",
        "**Supreme NEET Donqi**",
        "**Drunken Master Asian**",
        "**Weird Lord Alpha**",
        "**Super Saiyan Shawn**",
        "**King of Caps, Pubert**",
        "**Boxing Genius T**",
        "**Gacha Whale Loki**",
        "**Hoard King SRN**",
        "**Jansert Yasha**",
        "**Simps Pubert/Donqi**",
        "**Oil Tycoon Hafiz**"];

let xp = require('./xp.json');

let classes = ["Hero",  "Haram", "Whale", "Waifu General", "NEET", "Drunken Master", "Weird Mans", "Cap", "Boxer", "Saiyan", "Fighter", "Merchant"];
let heroC = ["Beginner Hero", "Young Hero",	"Intermediate Hero", "Experienced Hero", "Great Hero", "Mighty Hero", "Fabled Hero", "Epic Hero", "Mythical Hero", "Legendary Hero"];
let haramC = ["Haram Beginner", "Lesser Haram", "Medium Haram", "Higher Haram", "Great Haram", "Haram Knight", "Haram Captain", "Haram General", "Haram Prince", "Haram King"];
let whaleC =["Baby Whale", "Small Whale", "Teenage Whale", "Whale", "Higher Whale", "Giant Whale", "Wailord", "Whale King", "Epic Whale", "Legendary Whale"];
let wgeneralC = ["Slack Leader",	"Leader", "Experienced Leader",	"Captain", "Acclaimed Captain",	"Commander", "High Commander", "General", "Great General", "Great General Under The Waifus"];
let NEETC = ["Shut-in", "Hardcore Shut-in", "Small Lesser NEET", "Lesser NEET", "NEET", "Advanced NEET", "Mighty NEET", "Epic NEET", "Supreme NEET",	"Supreme NEET Overlord"];
let drunkC = ["Drunken Novice", "Drunken", "Drunken Pro", "Drunken Expert", "Drunken Master", "Mighty Drunken Master", "Fabled Drunken Master", "Epic Drunken Master", "Mythical Drunken Master", "Legendary Drunken Master"];
let weirdC = ["PeepoWeird", "PepoWeird", "Weirdga", "PogWeird", "WeirdChamp",	"WeirdChampion", "FeelsWeirdMan", "MonkaWeird",	"WeirdKing", "WeirdLord"];
let capC = ["Young Cap", "Small Lesser Cap", "Lesser Cap", "Cap", "Capistran", "Capper", "Capper Pro", "Capper Expert", "Master Capper", "King of Caps"];
let boxerC = ["Beginner Boxer", "Intermediate Boxer", "Boxer Pro", "Boxer Expert", "Boxer Genius", "Boxer Master", "Famed Boxer", "Epic Boxer", "Mythical Boxer", "Legendary Boxer"];
let saiyanC = ["Saiyan", "Great Ape Saiyan", "Kaioken Saiyan", "Super Saiyan", "Super Saiyan 2", "Super Saiyan 3", "Super Saiyan 4", "Super Saiyan God", "Super Saiyan Blue", "Ultra Instinct Saiyan"];
let fighterC = ["Novice Fighter", "Intermediate Fighter", "Expert Fighter", "Notable Fighter", "Extraordinary Fighter", "Distinguished Fighter", "Master Fighter", "Epic Fighter Master", "Mythical Fighter Master", "Legendary Fighter Master"];
let merchantC = ["Beginner Merchant", "Intermediate Merchant", "Expert Merchant", "Wealthy Merchant", "Known Merchant", "Notable Merchant", "Celebrated Merchant", "Renowed Magnate", "Epic Merchant Magnate", "Legendary Merchant Magnate"];

// https://discordapp.com/oauth2/authorize?client_id=606880175464120329&scope=bot&permissions=1275448512

client.once('ready', () => {
	console.log('ready!');
});

setInterval(function() {    
    seconds++;     
}, 1000);


console.log(seconds);
client.on('message', message => {
    // me: 135151849320873986
    // humza: 160979652792418304
    if(message.author.id == humza) {
        if(message.content.includes('halal') + message.content.includes('Halal')) {
            message.channel.send(':eggplant: humza ');
        }
    }
    if (message.author.id == pubert) {
        if(pubecount > 10) {
            message.react('599768750819901471');
            pubecount = 1;
            console.log(pubecount);
        }
        else {
           // message.react('606898724395941888');
            console.log(pubecount);
            pubecount++;
        }
    }
     
    /* if(message.author.id == seb) {
        if(message.content.includes(client.emojis.get('597880625118052369')) && !message.author.bot ) {
            message.channel.send(client.emojis.get('597880625118052369') + " ");
        }
    } */
    if(message.author.id == fei) {
        if(message.content.includes('halal') || message.content.includes('Halal')) {
            message.channel.send(client.emojis.get('599352079034613762') + ' fei ');
        } 
        
        if(message.content.includes(client.emojis.get('597849639764623390'))) {
            feicount++;
            if (feicount > 10) {
                message.channel.send('fei :peach: :tongue:');
                feicount = 0;
            }
        }
    }
    if((message.content.includes('gacha') || message.content.includes('gasha')) && !message.author.bot) {
        if(message.author.id == loki) {
            message.channel.send('Jurgen is bicc :whale:');
        } else {
            message.channel.send(':whale:');
        }
    }
    if(message.content.includes('haram af') || message.content.includes('Haram af')) {
        message.channel.send(client.emojis.get('599352079034613762') + ' haram');
    }
    if(message.content === 'o' && !message.author.bot) {
        console.log(seconds);
        if(seconds > 10) {
            message.channel.send('o');
            seconds = 0;
        }
    }
    // feelsaiyaman
    if(message.content.includes(client.emojis.get('597855443142049795')) && !message.author.bot) {
        if(seconds > 25) {
            message.channel.send(client.emojis.get('597855443142049795') + " ");
            seconds = 0;
        }
    }
    if(message.content.includes(':walking:') && !message.author.bot) {
        if(seconds > 25) {
            message.channel.send(':walking:');
            seconds = 0;
        }
    }
    // HAhaa
    if(message.content.includes(client.emojis.get('356789072062316544')) && !message.author.bot) {
        
        if(seconds > 25) {
            message.channel.send(client.emojis.get('356789072062316544') + " ");
            seconds = 0;
        } 
    }
    if(message.author.id == seb && !message.author.bot) {
        if(message.content.includes(client.emojis.get('597880625118052369'))) {
            message.channel.send(client.emojis.get('597880625118052369') + " ");
        }
    } 
    if(message.content.startsWith(`${prefix}haval`) && !message.author.bot) {
            
        message.channel.send(':bow:');
    }

    if(message.author.id == dummy) {
        if(message.content.startsWith(`${prefix}haval`) && hbool == 0) {
            
            message.channel.send(':bow:');
        }
    }
    if((message.content === (`${prefix}h1`)) && !message.author.bot) {
        if(message.author.id == loki) {
            message.channel.send('You are banned for modding.');
        } else {
            h1_gacha();
        }
        
    }
    if(message.content.startsWith(`${prefix}haram`)) {

    }
    if((message.content.startsWith(`${prefix}help`))) {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('Help me senpai')
        .setDescription('All the commands for the bot')
        .setThumbnail('https://i.imgur.com/4105Ab6.png')
        .addBlankField()
        .addField('Commands: ', '!news: Get the latest at Pepitos News!\n!h1: Single Pull\n!h10: Multi Pull\n!sugo: Details on sugofest\n!dream: One can only dream\n!narshop: Buy my' +  client.emojis.get('609115120726966277') + 'qzgems in exchange for your soul\n!qzgem: Check your' +  client.emojis.get('609115120726966277') + 'qzgems\n!haval: Pay respects to the king\n!hajimari: Play my very nice game\n!roll: Roll for your next attack(Only works in game)\n!exith1: Exit game.\n'
        + '!haram: Soon :runner:\n**NEW PATCH COMMANDS**:\n!oracle: Check your divine blessing!\n!status: Open your status page\n')
        .setColor('#FFFF00');
        message.channel.send(helpEmbed).catch(console.err);

    }
    if(message.content.startsWith(`${prefix}dream`)) {
        message.channel.send('https://i.imgur.com/a2VO8xy.png');
    }
    //RED: client.emojis.get('608426406476775472')
    //GOLD: client.emojis.get('608426406627770368')
    //SILVERS: client.emojis.get('608426406271123469')
    if(message.content.startsWith(`${prefix}sugo`)) {
        message.channel.send(client.emojis.get('608426406476775472') + '**OLD GODS SUGOFEST**' + client.emojis.get('608426406476775472') + '\n\nFirst Sugo is now over! Thank you for participating! Next Sugo will contain all new units from old times!! Stay tuned!\n\n' 
        + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368')
        + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368')
        + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368')
        + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368') + client.emojis.get('608426406627770368'));
    }

    if((message.content.startsWith(`${prefix}test`))) {
       /*  testcount = 1;
        this.dcount = 0;
        let testEmbed = new Discord.RichEmbed()
        .setTitle('SugoFest Units!')
        .addField(sugounitinfo[this.dcount], 'user info');
        message.embeds[0] = testEmbed;
        message.channel.send(testEmbed); */
    }
    if(testcount == 1 && message.author.bot) {
        
      /*   message.react('608692163269754933');
        message.react('608692136828862475');
        client.on('messageReactionAdd', (reaction, user) => {
            if(reaction.emoji.name == moon2DUMB) {
                this.dcount--;
                if(this.dcount == -1) {
                    this.dcount == 4;
                }
            }
            if(reaction.emoji.name == moon2D) {
                this.dcount++;
               if(this.dcount == 5) {
                   this.dcount == 0;
               }
            }
        });
        message.embeds[0].fields[0] = sugounitinfo[this.dcount];
        message.edit(new Discord.RichEmbed(message.embeds[0]));
        testcount = 0; */
    } 
    function h1_gacha() {
       
        let rng_legend = Math.floor((Math.random() * 15));  
        let rng_rr = Math.floor((Math.random() * 18));         
        let rng_silver = Math.floor((Math.random() * 16));   
        let rng_all = Math.floor((Math.random() * 100) + 1);
        if(rng_all < 10 && rng_all >= 1) {
            if (rng_legend == 0 ) {
                message.channel.send(legend[0] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary king that blesses your team :raised_hands:');
            }
            if (rng_legend == 1 ) {
                message.channel.send(legend[1] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! This legendary general is empowered by waifus');
            }
            if (rng_legend == 2 ) {
                message.channel.send(legend[2] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary lord that grows stronger the more money you waste on him');
            }
            if (rng_legend == 3 ) {
                message.channel.send(legend[3] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary being that has skills from another world');
            }
            if (rng_legend == 4 ) {
                message.channel.send(legend[4] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary neet that grows stronger the longer he stays in his room', {files: ["https://i.imgur.com/piQoBog.png"]});
            }
            if (rng_legend == 5 ) {
                message.channel.send(legend[5] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary master that boosts strength to an unbelievable level if hes drunk', {files: ["https://i.imgur.com/bFnQiSC.png"]});
            }
            if (rng_legend == 6 ) {
                message.channel.send(legend[6] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary lord that curses the enemy with powerful *weird* curses');
            }
            if (rng_legend == 7 ) {
                message.channel.send(legend[7] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary being that gives the highest levels of vitality to your team');
            }
            if (rng_legend == 8 ) {
                message.channel.send(legend[8] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary summoner that summons 6 Capistrans to fight alongside him');
            }
            if (rng_legend == 9 ) {
                message.channel.send(legend[9] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary boxer capabale of one-shotting his opponent');
            }
            if (rng_legend == 10 ) {
                message.channel.send(legend[10] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary whale that boasts great power when paired with other legendaries');
            }
            if (rng_legend == 11 ) {
                message.channel.send(legend[11] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary king that gains more strength equivalent to how much is hoarded');
            }
            if (rng_legend == 12 ) {
                message.channel.send(legend[12] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary person who grows exponentially the more he janserts');
            }
            if (rng_legend == 13 ) {
                message.channel.send(legend[13] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary dual character that gains strength through egirl twitter trashtalk');
            }
            if (rng_legend == 14 ) {
                message.channel.send(legend[14] + '\n' + client.emojis.get('608426406476775472') +  'Ultra Super Rare! A legendary oil magnate who utilizes his riches to provide great strength.');
            }
            
        } else if(rng_all < 40 && rng_all >= 10) {
            if(rng_rr == 0) {
                message.channel.send('**' + rrs[0] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A god with unparalleled manga knowledge');
            }
            if(rng_rr == 1) {
                message.channel.send('**' + rrs[1] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A king with unlimited ability to be haram');
            }
            if(rng_rr == 2) {
                message.channel.send('**' + rrs[2] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A character that gains strength with the amount of figurines it owns');
            }
            if(rng_rr == 3) {
                message.channel.send('**' + rrs[3] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A character who will get strength if he is on teams with other characters he harams with');
            }
            if(rng_rr == 4) {
                message.channel.send('**' + rrs[4] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A character who has a small chance to do 100x damage');
            }
            if(rng_rr == 5) {
                message.channel.send('**' + rrs[5] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A character who can deal damage if his ankles are not broken', {files: ["https://i.imgur.com/ottzGYj.png"]});
            }
            if(rng_rr == 6) {
                message.channel.send('**' + rrs[6] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A god with unparalleled LN knowledge');
            }
            if(rng_rr == 7) {
                message.channel.send('**' + rrs[7] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A character with a lot of money');
            }
            if(rng_rr == 8) {
                message.channel.send('**' + rrs[8] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! Randomly hugs a member of your team who gets strength and vitality');
            }
            if(rng_rr == 9) {
                message.channel.send('**' + rrs[9] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A whale who can gain strength equivalent to the number of gachas he whales on');
            }
            if(rng_rr == 10) {
                message.channel.send('**' + rrs[10] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A lolicon that gains power when he sees a loli(<154cm & flat chest)');
            }
            if(rng_rr == 11) {
                message.channel.send('**' + rrs[11] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A disguised :spy: german that can take the identity of another Super Rare or below character', {files: ["https://i.imgur.com/g1XTfh1.png"]});
            }
            if(rng_rr == 12) {
                message.channel.send('**' + rrs[12] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A character with immense fighting game knowledge, converted to his actual power');
            }
            if(rng_rr == 13) {
                message.channel.send('**' + rrs[13] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A dual unit that has strong poison abilities from the drugs they cultivate');
            }
            if(rng_rr == 14) {
                message.channel.send('**' + rrs[14] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A criminal who does drive-bys that have a 50% of dealing damage (Breaking sideview mirror)');
            }
            if(rng_rr == 15) {
                message.channel.send('**' + rrs[15] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A married man that has a lot of responsibilities proving to have immense support capabilities');
            }
            if(rng_rr == 16) {
                message.channel.send('**' + rrs[16] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A man who just finished his 100th anime. His power is slowly starting to manifest into admirable strength');
            }
            if(rng_rr == 17) {
                message.channel.send('**' + rrs[17] + '**\n' + client.emojis.get('608426406627770368') +  'Super Rare! A dual unit with an identity crisis. They each have their own benefits for their team, however they gain the benefits of themselves and their dual partner due to identity crisis');
            }

        } else if(rng_all <= 100 && rng_all >= 40) {
           if(rng_silver == 0) {
               message.channel.send('**' + silvers[0] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A young swed who just started reading One Piece');
           }
            if(rng_silver == 1) {
                message.channel.send('**' + silvers[1] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A kind and uncorrupted Humza');
            }
            if(rng_silver == 2) {
                message.channel.send('**' + silvers[2] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A character who harams every chance he gets');
            }
            if(rng_silver == 3) {
                message.channel.send('**' + silvers[3] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A pubert');
            }
            if(rng_silver == 4) {
                message.channel.send('**' + silvers[4] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! He likes his lolis');
            }
            if(rng_silver == 5) {
                message.channel.send('**' + silvers[5] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A man who awaits his misfortune');
            }
            if(rng_silver == 6) {
                message.channel.send('**' + silvers[6] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A man who just cannot stop drinking');
            }
            if(rng_silver == 7) {
                message.channel.send('**' + silvers[7] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A man who ' + client.emojis.get('597880625118052369') + 's you');
            }
            if(rng_silver == 8) {
                message.channel.send('**' + silvers[8] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A japanese that all weebs aspire to become');
            }
            if(rng_silver == 9) {
                message.channel.send('**' + silvers[9] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A character who harams every chance he gets');
            }
            if(rng_silver == 10) {
                message.channel.send('**' + silvers[10] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! An old man who has Boa Hancock locked in');
            }
            if(rng_silver == 11) {
                message.channel.send('**' + silvers[11] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! He likes his lolis', {files: ["https://i.imgur.com/02r2AIk.png"]});
            }
            if(rng_silver == 12) {
                message.channel.send('**' + silvers[12] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! An innocent man who has yet to find the cruelty of his world ');
            }
            if(rng_silver == 13) {
                message.channel.send('**' + silvers[13] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A recent muslim convert');
            }
            if(rng_silver == 14) {
                message.channel.send('**' + silvers[14] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! A slave to Boa Hancock. Cannnot do anything without her');
            }
            if(rng_silver == 15) {
                message.channel.send('**' + silvers[15] + '**\n' + client.emojis.get('608426406271123469') +  'Rare! An insta fiend. (Note: All Puberts/Capistrans stats are halved if this unit is on the same team)');
            }
        } 
    }
    if(message.content === (`${prefix}h10`) && !message.author.bot) {
        if(message.author.id == loki) {
            message.channel.send('You are banned for modding.');
        } else {
            if(coins[message.author.id].coins < 100) {
                message.channel.send('You have ' + coins[message.author.id].coins + client.emojis.get('609115120726966277') + 'Please consult !narshop on how to get more qz. ' + client.emojis.get('608405346683322368'));
            } else {
                coins[message.author.id] = {
                    coins: coins[message.author.id].coins - 100
                };
                var multi = []
                for (let i = 0; i<10; i++) {
                    multi[i] = h1_multi();
                }
                message.channel.send('You used **100** ' +  client.emojis.get('609115120726966277') + '\n\n**H1 Gacha Multi**\n' + multi[0] + '\n' + multi[1] + '\n' + multi[2] + '\n' + multi[3] + '\n' + multi[4] + '\n'
                + multi[5] + '\n' + multi[6] + '\n' + multi[7] + '\n' + multi[8] + '\n' + multi[9] + '\n' + 'Your extra poster is: ' + h1_multiplusone());
                fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
                    if(err) console.log(err);
                });
            }  
        }
        
    }    

    function h1_multi() {
        let rng_legend = Math.floor((Math.random() * 15));  
        let rng_rr = Math.floor((Math.random() * 18));         
        let rng_silver = Math.floor((Math.random() * 16));
        let rng_all = Math.floor((Math.random() * 100) + 1);
        
        
        if(rng_all >= 1 && rng_all < 5) {
            return client.emojis.get('608426406476775472') + legend[rng_legend];
        } else if (rng_all >= 10 && rng_all < 40) {
            return client.emojis.get('608426406627770368') + rrs[rng_rr];
        } else if(rng_all >= 40 && rng_all <= 100) {
            return client.emojis.get('608426406271123469') + silvers[rng_silver];
        }
    }
    
    function h1_multiplusone() {
        let rng_legend = Math.floor((Math.random() * 15));  
        let rng_rr = Math.floor((Math.random() * 18));         
        let rng_silver = Math.floor((Math.random() * 16));
        let rng_all = Math.floor((Math.random() * 100) + 1);
       

        if(rng_all >= 1 && rng_all < 10) {
            return client.emojis.get('608426406476775472') + legend[rng_legend];
        } else if (rng_all >= 10 && rng_all <= 100) {
            return client.emojis.get('608426406627770368') + rrs[rng_rr];
        } /* else if(rng_all >= 70 && rng_all < 100) {
            return client.emojis.get('608426406271123469') + silvers[rng_silver];
        } */
    }
    function PlayerHP(myhp, otherhp) {
        this.myhp = myhp;
        this.otherhp = otherhp;
    }
    
    if(gamebool == 0) {
        if((message.content.startsWith(`${prefix}hajimari`)) && !message.author.bot) {
            let playerone = message.guild.members.get(message.author.id);
            let playertwo = message.mentions.members.first();
            gamebool = 1;
            gamelock = 0;
            gm = new yesfunct(playerone, playertwo);
            message.channel.send(playertwo.displayName + ' type y to confirm.');
            console.log('gamebool = ' + gamebool);
            console.log('gamelock = ' + gamelock);            
        }
    }
    function yesfunct(poneid, ptwoid) {
        this.pone = poneid;
        this.ptwo = ptwoid;
    }
    if(gamelock == 0) {
        if(message.author.id == gm.ptwo.id) {
            if(message.content === 'y' || message.content === 'Y') {
                HP = new PlayerHP(20, 20);
                message.channel.send('Type !roll');
                ponelock = 0;
                ptwolock = 0;
            }
        }
    }
    if(ponelock == 0) {
        if(message.content.startsWith(`${prefix}roll`) && message.author.id == gm.pone.id) {
            if(hm1count == 1) {
                message.channel.send('You lost a turn.');
                ponecount = 1;
                hm1count = 0;
            } else {
                ponecount = 1;
                pone_roll();
                
            }
            ponelock = 1;
        }
    }
    if(ptwolock == 0) {
        if(message.content.startsWith(`${prefix}roll`) && message.author.id == gm.ptwo.id) {
            if(hm2count == 1) {
                message.channel.send('You lost a turn.');
                ptwocount = 1;
                hm2count = 0;
            } else {
                ptwocount = 1;
                ptwo_roll();
                
            }
            ptwolock = 1;
        }
    }
    
    if(ponecount == 1 && ptwocount == 1) {
        if(HP.myhp > 20) {
            HP.myhp = 20;
        } 
        if(HP.otherhp > 20) {
            HP.otherhp = 20;
        }  
        if(HP.myhp <= 0 && HP.otherhp <= 0) {
            message.channel.send('**Its a tie! Both Players Lose**');
            ponelock = 1;
            ptwolock = 1;
            gamelock = 1;
            gamebool = 0;
        } else if (HP.otherhp <= 0) {
            message.channel.send('**Player ' + gm.pone.displayName + ' wins!**');
            ponelock = 1;
            ptwolock = 1;
            gamelock = 1;
            gamebool = 0;
        } else if (HP.myhp <= 0) {
            message.channel.send('**Player ' + gm.ptwo.displayName + ' wins!**');
            ponelock = 1;
            ptwolock = 1;
            gamelock = 1;
            gamebool = 0;
        } else {
            message.channel.send('**Player ' + gm.pone.displayName + ', you have ' + HP.myhp + '/20 HP.\nPlayer ' + gm.ptwo.displayName + ', you have ' + HP.otherhp + '/20 HP.**');
            ponelock = 0;
            ptwolock = 0;
        }
        ponecount = 0;
        ptwocount = 0;
    }
    if(message.content.startsWith(`${prefix}exith1`) && !message.author.bot) {
        ponelock = 1;
        ptwolock = 1;
        gamelock = 1;
        gamebool = 0;
        message.channel.send('Game exited.');
    }

    
            /* client.on('message', msg => {
                if(&& msg.content.startsWith(`${prefix}roll`)) {
                    
                }
            }); */
    
    function pone_roll() {
        let rng_legend = Math.floor((Math.random() * 2));  
        let rng_rr = Math.floor((Math.random() * 27));         
        let rng_silver = Math.floor((Math.random() * 2));   
        let rng_all = Math.floor((Math.random() * 100) + 1);
        
        if(rng_all < 3 && rng_all >= 1) {
            if(rng_legend == 0) {
                message.channel.send('**:crown: King Haval\'s Might :crown: **\nYou are graced with Haval\'s Might. You deal 20 damage.', {files: ["https://i.imgur.com/jjFlQEG.gif"]});
                HP.otherhp = HP.otherhp - 20;
            }
            if(rng_legend == 1) {
                message.channel.send('**:crown: King Haval\'s Blessing :crown: **\nYou are graced with Haval\'s Blessing. You heal for 20 health.');
                HP.myhp = HP.myhp + 20;
            }
        } else if(rng_all < 50 && rng_all >= 3) {
            if(rng_rr == 0) {
                message.channel.send('**Tyrese\'s Uppercut**\n A strong uppercut from a legendary boxer. You deal 8 damage but lose a turn due to recoil');
                HP.otherhp = HP.otherhp - 8;
                hm1count = 1;
            }
            if(rng_rr == 1) {
                message.channel.send('**Humza\'s Mudae Collection**\n You make the enemy read Humza\'s mudae collection. They lose their next turn');
                hm2count = 1;
            }
            if(rng_rr == 2) {
                message.channel.send('**naRnaR\'s Reincarnation**\n You are isekai\'d into another world. You deal 3 damage and heal for 3 health');
                HP.otherhp = HP.otherhp - 3;
                HP.myhp = HP.myhp + 3;
            }
            if(rng_rr == 3) {
                message.channel.send('**Pubert\'s Roar**\n A roar exclaiming "LETSGOOOOO". You deal 3 damage but lose 2 health.');
                HP.otherhp = HP.otherhp - 3;
                HP.myhp = HP.myhp - 2;
            }
            if(rng_rr == 4) {
                message.channel.send('**Capistran\'s Ankles**\n Capistran\'s ankles are broken. You lose a turn.');
            }
            if(rng_rr == 5) {
                message.channel.send('**Fabio\'s Drunken Stupor**\n You have a 50% chance to deal 7 damage, otherwise you miss.');
                let rnger = Math.floor((Math.random() * 2));
                if(rnger == 0) {
                    message.channel.send('You missed because Fabio was too drunk!');
                }
                if(rnger == 1) {
                    message.channel.send('You successfully hit and deal 7 damage!');
                    HP.otherhp = HP.otherhp - 7;
                }
            }
            if(rng_rr == 6) {
                message.channel.send('**Loki\'s Whale Soundwave**\n A shriek from this whale possibly doing great damage! Deal (2-7) damage to your enemy');
                let rnger = Math.floor((Math.random() * 6));
                if(rnger == 0) {
                    message.channel.send('You deal 2 damage.');
                    HP.otherhp = HP.otherhp - 2;
                }
                if(rnger == 1) {
                    message.channel.send('You deal 3 damage.');
                    HP.otherhp = HP.otherhp - 3;
                }
                if(rnger == 2) {
                    message.channel.send('You deal 4 damage.');
                    HP.otherhp = HP.otherhp - 4;
                }
                if(rnger == 3) {
                    message.channel.send('You deal 5 damage.');
                    HP.otherhp = HP.otherhp - 5;
                }
                if(rnger == 4) {
                    message.channel.send('You deal 6 damage.');
                    HP.otherhp = HP.otherhp - 6;
                }
                if(rnger == 5) {
                    message.channel.send('You deal 7 damage.');
                    HP.otherhp = HP.otherhp - 7;
                }
            }
            if(rng_rr == 7) {
                message.channel.send('**Morgan\'s Addiction**\n A gacha addict who spins the roulette to get more health. You can gain (2-7) health.');
                let rnger = Math.floor((Math.random() * 6));
                if(rnger == 0) {
                    message.channel.send('You heal for 2 health.');
                    HP.myhp = HP.myhp + 2;
                }
                if(rnger == 1) {
                    message.channel.send('You heal for 3 health.');
                    HP.myhp = HP.myhp + 3;
                }
                if(rnger == 2) {
                    message.channel.send('You heal for 4 health.');
                    HP.myhp = HP.myhp + 4;
                }
                if(rnger == 3) {
                    message.channel.send('You heal for 5 health.');
                    HP.myhp = HP.myhp + 5;
                }
                if(rnger == 4) {
                    message.channel.send('You heal for 6 health.');
                    HP.myhp = HP.myhp + 6;
                }
                if(rnger == 5) {
                    message.channel.send('You heal for 7 health.');
                    HP.myhp = HP.myhp + 7;
                }
            }
            if(rng_rr == 8) {
                message.channel.send('**Shawn\'s Super Saiyan Transformation**\n Heal depending on which transformation you get.');
                let rnger = Math.floor((Math.random() * 3));
                if(rnger == 0) {
                    message.channel.send('Shawn transforms into SSJ1. You heal for 4 health.');
                    HP.myhp = HP.myhp + 4;
                }
                if(rnger == 1) {
                    message.channel.send('Shawn transforms into SSJ2. You heal for 5 health.');
                    HP.myhp = HP.myhp + 5;
                }
                if(rnger == 2) {
                    message.channel.send('Shawn transforms into SSJ3. You heal for 6 health.');
                    HP.myhp = HP.myhp + 6;
                }
            }
            if(rng_rr == 9) {
                message.channel.send('**Donqi\'s Viral Tweet**\n If you make a viral tweet, you deal 10 damage! If not, :pensive:');
                let rnger = Math.floor((Math.random() * 10));
                if(rnger == 0) {
                    message.channel.send('Donqi makes a viral tweet! You deal 10 damage!');
                    HP.otherhp = HP.otherhp - 10;
                } else {
                    message.channel.send('Donqi failed at making a viral tweet! You don\'t deal damage. :pensive:');
                }
            }
            if(rng_rr == 10) {
                message.channel.send('**Donqi\'s Gears 5 Preorder**\n Donqi\'s anticipation for Gears 5 prevents you from doing anything. You lose a turn.');
            }
            if(rng_rr == 11) {
                message.channel.send('**Humza\'s Haramness**\n Deal 6 damage to your enemy but lose 2 health due to being haram');
                HP.otherhp = HP.otherhp - 6;
                HP.myhp = HP.myhp - 2;
            }
            if(rng_rr == 12) {
                message.channel.send('**Humza\'s Loli Vigor**\n Humza sees a picture of a loli and is reinvigorated. You heal for 5 health');
                HP.myhp = HP.myhp + 5;
            }
            if(rng_rr == 13) {
                message.channel.send('**Alpha\'s WeirdChamp**\n Alpha ' + client.emojis.get('597880625118052369') + '\'s you. You deal 5 damage');
                HP.otherhp = HP.otherhp - 5;
            }
            if(rng_rr == 14) {
                message.channel.send('**Sébastien\'s Tacos**\n You eat Sébastien\'s tacos. You heal 4 health');
                HP.myhp = HP.myhp + 4;
            }
            if(rng_rr == 15) {
                message.channel.send('**Jansertion**\n Jansertion. You deal 3 damage and heal for 3 health.');
                HP.otherhp = HP.otherhp - 3;
                HP.myhp = HP.myhp + 3;
            }
            if(rng_rr == 16) {
                message.channel.send('**Yasha\'s Might**\n A fighting game expert. Deals 4 damage but loses 1 health due to improper imitation');
                HP.otherhp = HP.otherhp - 4;
                HP.myhp = HP.myhp - 1;
            }
            if(rng_rr == 17) {
                message.channel.send('**Shawn\'s Hug**\n A hug with great benefits. You deal 2 damage and heal for 4 health.');
                HP.otherhp = HP.otherhp - 2;
                HP.myhp = HP.myhp + 4;
            }
            if(rng_rr == 18) {
                message.channel.send('**Fei\'s Waifus**\n Fei grants the ability to summon one of his waifus! Each waifu has her own effect.');
                let rnger = Math.floor((Math.random() * 2));
                if(rnger == 0) {
                    message.channel.send('Fei summons Scathach who wields Gáe Bolg Alternative. You deal 6 damage.');
                    HP.otherhp = HP.otherhp - 6;
                }
                if(rnger == 1) {
                    message.channel.send('Fei summons Skadi who wields Gate of Skye. You heal for 6 health.');
                    HP.myhp = HP.myhp + 6;
                }
            }
            if(rng_rr == 19) {
                message.channel.send('**Fei\'s Haram Sword**\n A sword that converts Fei\'s haram energy into power. You deal 5 damage but lose 1 health.');
                HP.otherhp = HP.otherhp - 5;
                HP.myhp = HP.myhp - 1;
            }
            if(rng_rr == 20) {
                message.channel.send('**Haval\'s Manga Intellect**\n You are brimming with manga knowledge. You heal for 5 health.');
                HP.myhp = HP.myhp + 5;
            }
            if(rng_rr == 21) {
                message.channel.send('**Fabio\'s LN Intellect**\n You are brimming with LN knowledge. You heal for 3 health and deal 2 damage');
                HP.otherhp = HP.otherhp - 2;
                HP.myhp = HP.myhp + 3;
            }
            if(rng_rr == 22) {
                message.channel.send('**naRnaR\'s Haram Craving**\n naRnaR craves to haram with someone. You heal the enemy for 1 health and heal for 4 health');
                HP.otherhp = HP.otherhp + 1;
                HP.myhp = HP.myhp + 4;
            }
            if(rng_rr == 23) {
                message.channel.send('**Morgan\'s Back**\n The back of an old man breaks. You lose one turn');
            }
            if(rng_rr == 24) {
                message.channel.send('**Pokemon Trainer Loki**\n He\'s trying to collect them all for Cynthia. You deal 3 damage but take 3 damage due to being so haram about Cynthia.');
                HP.otherhp = HP.otherhp - 3;
                HP.myhp = HP.myhp - 3;
            }
            if(rng_rr == 25) {
                message.channel.send('**Weebs Unite**\n The collection of weeb power in h1 unites. Deal 7 damage');
                HP.otherhp = HP.otherhp - 7;
            }
            if(rng_rr == 26) {
                message.channel.send('**Gacha\'s Boon**\n The better your rolls, the better the things you do.');
                let rnger = Math.floor((Math.random() * 100) + 1);
                message.channel.send('You rolled ' + rnger);

                if(rnger >= 98 && rnger < 100) {
                    message.channel.send('Legendary attack! You deal 7 damage and heal for 7 health!');
                    HP.myhp = HP.myhp + 7;
                    HP.otherhp = HP.otherhp - 7;
                }
                if(rnger >= 90 && rnger < 98) {
                    message.channel.send('Epic attack! You deal 6 damage and heal for 6 health!');
                    HP.myhp = HP.myhp + 6;
                    HP.otherhp = HP.otherhp - 6;
                }
                if(rnger >= 75 && rnger < 90) {
                    message.channel.send('Rare attack! You deal 5 damage and heal for 5 health!');
                    HP.myhp = HP.myhp + 5;
                    HP.otherhp = HP.otherhp - 5;
                }
                if(rnger >= 50 && rnger < 75) {
                    message.channel.send('Uncommon attack! You deal 4 damage and heal for 4 health!');
                    HP.myhp = HP.myhp + 4;
                    HP.otherhp = HP.otherhp - 4;
                }
                if(rnger >= 0 && rnger < 50) {
                    message.channel.send('Common attack! You deal 3 damage and heal for 3 health!');
                    HP.myhp = HP.myhp + 3;
                    HP.otherhp = HP.otherhp - 3;
                }
            }
        } else if(rng_all < 100 && rng_all >= 50) {
            message.channel.send('You do succ attack. You deal 2 damage.');
            HP.otherhp = HP.otherhp - 2;
            /* if(rng_silver == 0) {
                
            } 
            if (rng_silver == 1) {
                message.channel.send('You do succ heal. You heal for 2 health.');
                HP.myhp = HP.myhp + 2;
            } */
        }
    }
    function ptwo_roll() {
        let rng_legend = Math.floor((Math.random() * 2));  
        let rng_rr = Math.floor((Math.random() * 27));         
        let rng_silver = Math.floor((Math.random() * 2));   
        let rng_all = Math.floor((Math.random() * 100) + 1);
        
        if(rng_all < 3 && rng_all >= 1) {
            if(rng_legend == 0) {
                message.channel.send('**:crown: King Haval\'s Might :crown:**\nYou are graced with Haval\'s Might. You deal 20 damage.', {files: ["https://i.imgur.com/jjFlQEG.gif"]});
                HP.myhp = HP.myhp - 20;
            }
            if(rng_legend == 1) {
                message.channel.send('**:crown: King Haval\'s Blessing :crown:**\nYou are graced with Haval\'s Blessing. You heal for 20 health.');
                HP.otherhp = HP.otherhp + 20;
            }
        } else if(rng_all < 50 && rng_all >= 3) {
            if(rng_rr == 0) {
                message.channel.send('**Tyrese\'s Uppercut**\n A strong uppercut from a legendary boxer. You deal 8 damage but lose a turn due to recoil');
                HP.myhp = HP.myhp - 8;
                hm2count = 1;
            }
            if(rng_rr == 1) {
                message.channel.send('**Humza\'s Mudae Collection**\n You make the enemy read Humza\'s mudae collection. They lose their next turn');
                hm1count = 1;
            }
            if(rng_rr == 2) {
                message.channel.send('**naRnaR\'s Reincarnation**\n You are isekai\'d into another world. You deal 3 damage and heal for 3 health');
                HP.myhp = HP.myhp - 3;
                HP.otherhp = HP.otherhp + 3;
            }
            if(rng_rr == 3) {
                message.channel.send('**Pubert\'s Roar**\n A roar exclaiming "LETSGOOOOO". You deal 3 damage but lose 2 health.');
                HP.myhp = HP.myhp - 3;
                HP.otherhp = HP.otherhp - 2;
            }
            if(rng_rr == 4) {
                message.channel.send('**Capistran\'s Ankles**\n Capistran\'s ankles are broken. You lose a turn.');
            }
            if(rng_rr == 5) {
                message.channel.send('**Fabio\'s Drunken Stupor**\n You have a 50% chance to deal 7 damage, otherwise you miss.');
                let rnger = Math.floor((Math.random() * 2));
                if(rnger == 0) {
                    message.channel.send('You missed because Fabio was too drunk!');
                }
                if(rnger == 1) {
                    message.channel.send('You successfully hit and deal 7 damage!');
                    HP.myhp = HP.myhp - 7;
                }
            }
            if(rng_rr == 6) {
                message.channel.send('**Loki\'s Whale Soundwave**\n A shriek from this whale possibly doing great damage! Deal (2-7) damage to your enemy');
                let rnger = Math.floor((Math.random() * 6));
                if(rnger == 0) {
                    message.channel.send('You deal 2 damage.');
                    HP.myhp = HP.myhp - 2;
                }
                if(rnger == 1) {
                    message.channel.send('You deal 3 damage.');
                    HP.myhp = HP.myhp - 3;
                }
                if(rnger == 2) {
                    message.channel.send('You deal 4 damage.');
                    HP.myhp = HP.myhp - 4;
                }
                if(rnger == 3) {
                    message.channel.send('You deal 5 damage.');
                    HP.myhp = HP.myhp - 5;
                }
                if(rnger == 4) {
                    message.channel.send('You deal 6 damage.');
                    HP.myhp = HP.myhp - 6;
                }
                if(rnger == 5) {
                    message.channel.send('You deal 7 damage.');
                    HP.myhp = HP.myhp - 7;
                }
            }
            if(rng_rr == 7) {
                message.channel.send('**Morgan\'s Addiction**\n An addict who spins the roulette to get more health. You can gain (2-7) health.');
                let rnger = Math.floor((Math.random() * 6));
                if(rnger == 0) {
                    message.channel.send('You heal for 2 health.');
                    HP.otherhp = HP.otherhp + 2;
                }
                if(rnger == 1) {
                    message.channel.send('You heal for 3 health.');
                    HP.otherhp = HP.otherhp + 3;
                }
                if(rnger == 2) {
                    message.channel.send('You heal for 4 health.');
                    HP.otherhp = HP.otherhp + 4;
                }
                if(rnger == 3) {
                    message.channel.send('You heal for 5 health.');
                    HP.otherhp = HP.otherhp + 5;
                }
                if(rnger == 4) {
                    message.channel.send('You heal for 6 health.');
                    HP.otherhp = HP.otherhp + 6;
                }
                if(rnger == 5) {
                    message.channel.send('You heal for 7 health.');
                    HP.otherhp = HP.otherhp + 7;
                }
            }
            if(rng_rr == 8) {
                message.channel.send('**Shawn\'s Super Saiyan Transformation**\n Heal depending on which transformation you get.');
                let rnger = Math.floor((Math.random() * 3));
                if(rnger == 0) {
                    message.channel.send('Shawn transforms into SSJ1. You heal for 4 health.');
                    HP.otherhp = HP.otherhp + 4;
                }
                if(rnger == 1) {
                    message.channel.send('Shawn transforms into SSJ2. You heal for 5 health.');
                    HP.otherhp = HP.otherhp + 5;
                }
                if(rnger == 2) {
                    message.channel.send('Shawn transforms into SSJ3. You heal for 6 health.');
                    HP.otherhp = HP.otherhp + 6;
                }
            }
            if(rng_rr == 9) {
                message.channel.send('**Donqi\'s Viral Tweet**\n If you make a viral tweet, you deal 10 damage! If not, :pensive:');
                let rnger = Math.floor((Math.random() * 10));
                if(rnger == 0) {
                    message.channel.send('Donqi makes a viral tweet! You deal 10 damage!');
                    HP.myhp = HP.myhp - 10;
                } else {
                    message.channel.send('Donqi failed at making a viral tweet! You don\'t deal damage. :pensive:');
                }
            }
            if(rng_rr == 10) {
                message.channel.send('**Donqi\'s Gears 5 Preorder**\n Donqi\'s anticipation for Gears 5 prevents you from doing anything. You lose a turn.');
            }
            if(rng_rr == 11) {
                message.channel.send('**Humza\'s Haramness**\n Deal 6 damage to your enemy but lose 2 health due to being haram');
                HP.myhp = HP.myhp - 6;
                HP.otherhp = HP.otherhp - 2;
            }
            if(rng_rr == 12) {
                message.channel.send('**Humza\'s Loli Vigor**\n Humza sees a picture of a loli, he is reinvigorated. You heal for 5 health');
                HP.otherhp = HP.otherhp + 5;
            }
            if(rng_rr == 13) {
                message.channel.send('**Alpha\'s WeirdChamp**\n Alpha '+ client.emojis.get('597880625118052369') + '\'s you. You deal 5 damage');
                HP.myhp = HP.myhp - 5;
            }
            if(rng_rr == 14) {
                message.channel.send('**Sébastien\'s Tacos**\n You eat Sébastien\'s tacos. You heal 4 health');
                HP.otherhp = HP.otherhp + 4;
            }
            if(rng_rr == 15) {
                message.channel.send('**Jansertion**\n Jansertion. You deal 3 damage and heal for 3 health.');
                HP.myhp = HP.myhp - 3;
                HP.otherhp = HP.otherhp + 3;
            }
            if(rng_rr == 16) {
                message.channel.send('**Yasha\'s Might**\n A fighting game expert. Deals 4 damage but loses 1 health due to improper imitation');
                HP.myhp = HP.myhp - 4;
                HP.otherhp = HP.otherhp - 1;
            }
            if(rng_rr == 17) {
                message.channel.send('**Shawn\'s Hug**\n A hug with great benefits. You deal 2 damage and heal for 4 health.');
                HP.myhp = HP.myhp - 2;
                HP.otherhp = HP.otherhp + 4;
            }
            if(rng_rr == 18) {
                message.channel.send('**Fei\'s Waifus**\n Fei grants the ability to summon one of his waifus! Each waifu has her own effect.');
                let rnger = Math.floor((Math.random() * 2));
                if(rnger == 0) {
                    message.channel.send('Fei summons Scathach who wields Gáe Bolg Alternative. You deal 6 damage.');
                    HP.myhp = HP.myhp - 6;
                }
                if(rnger == 1) {
                    message.channel.send('Fei summons Skadi who ie Gate of Skye. You heal for 6 health.');
                    HP.otherhp = HP.otherhp + 6;
                }
            }
            if(rng_rr == 19) {
                message.channel.send('**Fei\'s Haram Katana**\n A katana that converts Fei\'s haram into power. You deal 5 damage but lose 1 health.');
                HP.myhp = HP.myhp - 5;
                HP.otherhp = HP.otherhp - 1;
            }
            if(rng_rr == 20) {
                message.channel.send('**Haval\'s Manga Intellect**\n You are brimming with manga knowledge. You heal for 5 health.');
                HP.otherhp = HP.otherhp + 5;
            }
            if(rng_rr == 21) {
                message.channel.send('**Fabio\'s LN Intellect**\n You are brimming with LN knowledge. You heal for 3 health and deal 2 damage');
                HP.myhp = HP.myhp - 2;
                HP.otherhp = HP.otherhp + 3;
            }
            if(rng_rr == 22) {
                message.channel.send('**naRnaR\'s Haram Craving**\n naRnaR craves to haram with someone. You heal the enemy 1 health and heal for 4 health');
                HP.myhp = HP.myhp + 1;
                HP.otherhp = HP.otherhp + 4;
            }
            if(rng_rr == 23) {
                message.channel.send('**Morgan\'s Back**\n The back of an old man breaks. You lose one turn');
            }
            if(rng_rr == 24) {
                message.channel.send('**Pokemon Trainer Loki**\n He\'s trying to collect them all for Cynthia. You deal 3 damage but take 3 damage due to being so haram about Cynthia.');
                HP.myhp = HP.myhp - 3;
                HP.otherhp = HP.otherhp - 3;
            }
            if(rng_rr == 25) {
                message.channel.send('**Weebs Unite**\n The collection of weeb power in h1 unites. Deal 7 damage');
                HP.myhp = HP.myhp - 7;
            }
            if(rng_rr == 26) {
                message.channel.send('**Gacha\'s Boon**\n The better your rolls, the better the things you do.');
                let rnger = Math.floor((Math.random() * 100) + 1);
                message.channel.send('You rolled ' + rnger);

                if(rnger >= 98 && rnger < 100) {
                    message.channel.send('Legendary attack! You deal 7 damage and heal for 7 health!');
                    HP.otherhp = HP.otherhp + 7;
                    HP.myhp = HP.myhp - 7;
                }
                if(rnger >= 90 && rnger < 98) {
                    message.channel.send('Epic attack! You deal 6 damage and heal for 6 health!');
                    HP.otherhp = HP.otherhp + 6;
                    HP.myhp = HP.myhp - 6;
                }
                if(rnger >= 75 && rnger < 90) {
                    message.channel.send('Rare attack! You deal 5 damage and heal for 5 health!');
                    HP.otherhp = HP.otherhp + 5;
                    HP.myhp = HP.myhp - 5;
                }
                if(rnger >= 50 && rnger < 75) {
                    message.channel.send('Uncommon attack! You deal 4 damage and heal for 4 health!');
                    HP.otherhp = HP.otherhp + 4;
                    HP.myhp = HP.myhp - 4;
                }
                if(rnger >= 0 && rnger < 50) {
                    message.channel.send('Common attack! You deal 3 damage and heal for 3 health!');
                    HP.otherhp = HP.otherhp + 3;
                    HP.myhp = HP.myhp - 3;
                }
            }
        } else if(rng_all < 100 && rng_all >= 50) {
            message.channel.send('You do succ attack. You deal 2 damage.');
            HP.myhp = HP.myhp - 2;
            /* if(rng_silver == 0) {
               
            } 
            if (rng_silver == 1) {
                message.channel.send('You do succ heal. You heal for 2 health.');
                HP.otherhp = HP.otherhp + 2;
            } */
        }
    }
    if(!coins[message.author.id]) {
        coins[message.author.id] = {
            coins: 0
        };
    }
    if((message.content.includes('haram') || message.content.includes('Haram')) && !message.author.bot) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + 5
        };
        fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
            if(err) console.log(err);
        });
    }
    if(client.emojis.get('356789072062316544') && !message.author.bot) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + 10
        };
        fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
            if(err) console.log(err);
        });
    }
    if((message.content.includes('i love being haram') || message.content.includes('I love being haram')) && !message.author.bot) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + 40
        };
        message.react('607674124042502176');
        fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
            if(err) console.log(err);
        });
    }
    if((message.content === ('im haram af') || message.content === ('Im haram af')) && !message.author.bot) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + 65
        };
        message.react('607674158796636270');
        fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
            if(err) console.log(err);
        });
    }
    if((message.content === ('I want to be as haram as humza') || message.content === ('i want to be as haram as humza') || message.content === ('I want to be as haram as Humza') || message.content === ('i want to be as haram as Humza')) && !message.author.bot) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + 100
        };
        message.react('608405346683322368');
        fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
            if(err) console.log(err);
        });
    }
    if(message.content.startsWith(`${prefix}qzgem`) && !message.author.bot) {
        let uCoins = coins[message.author.id].coins;
        let coinEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('#0000FF')
        .addField('Rainbow Quartz Gems: ', client.emojis.get('609115120726966277') + uCoins + '\n(You get 10 free' + client.emojis.get('609115120726966277') + 'per message.)');
        message.channel.send(coinEmbed).catch(console.error);
    }
    if(message.content.startsWith(`${prefix}narshop`) && !message.author.bot) {
        let shopEmbed = new Discord.RichEmbed()
        .setTitle(client.emojis.get('608405346683322368') + ' **NARNAR\'S SHOP**' + client.emojis.get('608405346683322368') + " ")
        .setThumbnail('https://i.imgur.com/KtSmKlE.png')
        .setColor('#FF0000')
        .addField('Welcome to naRnaR\'s shop.', 'All prices are subject to change ;)\n')
        .addBlankField()
        .addField(client.emojis.get('609115120726966277') + 'Rainbow Quartz Gem Prices' + client.emojis.get('609115120726966277'), '5' + client.emojis.get('609115120726966277') + '= haram\n10' + client.emojis.get('609115120726966277') + '= ' + client.emojis.get('356789072062316544')  + '**\n30' + client.emojis.get('609115120726966277') + 
        '+ 10 bonus' + client.emojis.get('609115120726966277') + '= i love being haram\n50 ' + client.emojis.get('609115120726966277') + 
        '+ 15 bonus' + client.emojis.get('609115120726966277') + '= im haram af\*\n80' + client.emojis.get('609115120726966277') + 
        '+ 20 bonus' + client.emojis.get('609115120726966277') + '= I want to be as haram as humza')
        // .addField('**SPECIAL:**', '150' + client.emojis.get('609115120726966277') + '+ 50 bonus' + client.emojis.get('609115120726966277') + '= I love pubert*')
        .setFooter('*Must be the exact message.\n**sry nitro. \n');
        message.channel.send(shopEmbed).catch(console.err);
    }
    if(message.content.startsWith(`${prefix}news`) && !message.author.bot) {
        let newsEmbed = new Discord.RichEmbed()
        .setTitle(client.emojis.get('606898724395941888') + ' **PEPITO\'S NEWS** ' + client.emojis.get('606898724395941888') + " ")
        .setColor('2FF2FB')
        .addField('#1: **FIRST SUGOFEST** is now over!', 'Stay tuned for the next batch!')
        .addField('#2: **PUBERT GEM PACK** is now over!', 'Never forget the cap that left!');
        message.channel.send(newsEmbed).catch(console.err);
    }
    
    if(!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 1,
            str: 1,
            dex: 1,
            vit: 1,
            int: 1,
            fth: 1,
            luk: 1,
            cha: 1,
            wis: 1,
            count: -1,
            xpb: 0,
            class: 'Villager',
            advclass: 'N/A'            
        };
    }
    
    let curCount = xp[message.author.id].count;
    let xpAdd = 0;
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let curstr = xp[message.author.id].str;
    let curdex = xp[message.author.id].dex;
    let curvit = xp[message.author.id].vit;
    let curint = xp[message.author.id].int;
    let curfth = xp[message.author.id].fth;
    let curluk = xp[message.author.id].luk;
    let curcha = xp[message.author.id].cha;
    let curwis = xp[message.author.id].wis;
    let nxtLvl = 0;
    let xpbool = xp[message.author.id].xpb;
    function xpaddition() {
        if(xp[message.author.id].xpb == 0) {
            return xpAdd = Math.floor(Math.random() * 7) + 20;
        }
        if(xp[message.author.id].xpb == 1) {
            return xpAdd = Math.floor(Math.random() * 7) + 100;
        }
        if(xp[message.author.id].xpb == 2) {
            return xpAdd = Math.floor(Math.random() * 7) + 500;
        }
        if(xp[message.author.id].xpb == 3) {
            return xpAdd = Math.floor(Math.random() * 7) + 750;
        }
        if(xp[message.author.id].xpb == 4) {
            return xpAdd = Math.floor(Math.random() * 7) + 1000;
        }
        if(xp[message.author.id].xpb == 5) {
            return xpAdd = Math.floor(Math.random() * 7) + 2000;
        }
        if(xp[message.author.id].xpb == 6) {
            return xpAdd = Math.floor(Math.random() * 7) + 4000;
        }
        if(xp[message.author.id].xpb == 7) {
            return xpAdd = Math.floor(Math.random() * 7) + 10000;
        }
        if(xp[message.author.id].xpb == 8) {
            return xpAdd = Math.floor(Math.random() * 7) + 12500;
        }
        if(xp[message.author.id].xpb == 9) {
            return xpAdd = Math.floor(Math.random() * 7) + 900;
        }
        
    }
    function nxtLvlcalc() {
        if(xp[message.author.id].xpb == 0) {
            return nxtLvl = xp[message.author.id].level * 300;
        }
        if(xp[message.author.id].xpb == 1) {
            return nxtLvl = xp[message.author.id].level * 600;
        }
        if(xp[message.author.id].xpb == 2) {
            return nxtLvl = xp[message.author.id].level * 900;
        }
        if(xp[message.author.id].xpb == 3) {
            return nxtLvl = xp[message.author.id].level * 1200;
        }
        if(xp[message.author.id].xpb == 4) {
            return nxtLvl = xp[message.author.id].level * 1500;
        }
        if(xp[message.author.id].xpb == 5) {
            return nxtLvl = xp[message.author.id].level * 1800;
        }
        if(xp[message.author.id].xpb == 6) {
            return nxtLvl = xp[message.author.id].level * 2100;
        }
        if(xp[message.author.id].xpb == 7) {
            return nxtLvl = xp[message.author.id].level * 2400;
        }
        if(xp[message.author.id].xpb == 8) {
            return nxtLvl = xp[message.author.id].level * 2700;
        }
        if(xp[message.author.id].xpb == 9) {
            return nxtLvl = xp[message.author.id].level * 3000;
        }/* 
        if(xp[message.author.id].xpb == 0) {
            return nxtLvl = xp[message.author.id].level * 300;
        }
        if(xp[message.author.id].xpb == 1) {
            return nxtLvl = xp[message.author.id].level * 900;
        }
        if(xp[message.author.id].xpb == 2) {
            return nxtLvl = xp[message.author.id].level * 2700;
        }
        if(xp[message.author.id].xpb == 3) {
            return nxtLvl = xp[message.author.id].level * 8100;
        }
        if(xp[message.author.id].xpb == 4) {
            return nxtLvl = xp[message.author.id].level * 24300;
        }
        if(xp[message.author.id].xpb == 5) {
            return nxtLvl = xp[message.author.id].level * 72900;
        }
        if(xp[message.author.id].xpb == 6) {
            return nxtLvl = xp[message.author.id].level * 218700;
        }
        if(xp[message.author.id].xpb == 7) {
            return nxtLvl = xp[message.author.id].level * 656100;
        }
        if(xp[message.author.id].xpb == 8) {
            return nxtLvl = xp[message.author.id].level * 1968300;
        }
        if(xp[message.author.id].xpb == 9) {
            return nxtLvl = xp[message.author.id].level * 5904900;
        } */
    }
    let statarr = [1, 2, 5, 8, 10, 25, 50, 100, 200, 500];
    
    let diffLvl = nxtLvlcalc() - curxp;
    xp[message.author.id].xp = xp[message.author.id].xp + xpaddition();

    function advancedClass(count) {
        if(xp[message.author.id].class == classes[0]) {
            return xp[message.author.id].advclass = heroC[count]; 
        }
        if(xp[message.author.id].class == classes[1]) {
            return xp[message.author.id].advclass = haramC[count]; 
        }
        if(xp[message.author.id].class == classes[2]) {
            return xp[message.author.id].advclass = whaleC[count]; 
        }
        if(xp[message.author.id].class == classes[3]) {
            return xp[message.author.id].advclass = wgeneralC[count]; 
        }
        if(xp[message.author.id].class == classes[4]) {
            return xp[message.author.id].advclass = NEETC[count]; 
        }
        if(xp[message.author.id].class == classes[5]) {
            return xp[message.author.id].advclass = drunkC[count]; 
        }
        if(xp[message.author.id].class == classes[6]) {
            return xp[message.author.id].advclass = weirdC[count]; 
        }
        if(xp[message.author.id].class == classes[7]) {
            return xp[message.author.id].advclass = capC[count]; 
        }
        if(xp[message.author.id].class == classes[8]) {
            return xp[message.author.id].advclass = boxerC[count]; 
        }
        if(xp[message.author.id].class == classes[9]) {
            return xp[message.author.id].advclass = saiyanC[count]; 
        }
        if(xp[message.author.id].class == classes[10]) {
            return xp[message.author.id].advclass = fighterC[count]; 
        }
        if(xp[message.author.id].class == classes[11]) {
            return xp[message.author.id].advclass = merchantC[count]; 
        }
    }
    if(nxtLvlcalc() <= xp[message.author.id].xp && xp[message.author.id].level < 100) {
        xp[message.author.id].level = curlvl + 1;
        
        if(message.author.id == haval) {
            xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
            xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
            xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
            xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
            xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
            xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
            xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
       if(message.author.id == humza) {
          //  xp[message.author.id].str = curstr statarr[xp[message.author.id].xpb];
            xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
            xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
            xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == fei) {
        //    xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
        //    xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
        //    xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
            xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
            xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
            xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
        //    xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == loki || message.author.id == srn) {
            xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
            xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
            xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == donqi) {
         //   xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
            xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
            xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
            xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == seb) {
           // xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
            xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
            xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
            xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == shawn) {
            xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
           // xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
            xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
            xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
            xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
           // xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == yasha) {
          //  xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
            xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
            xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
            xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == hafiz) {
         //   xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
            xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
            xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
            xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == tyrese) {
            xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
            xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
            xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
        //    xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
            xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == pubert) {
            xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
            xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
         //   xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
            xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
            xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
           // xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
          //  xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        }
        if(message.author.id == fabio) {
            //xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
            xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb];
            xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb];
           // xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb];
           // xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb];
            xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb];
           // xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
           // xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb];
        } 
        if (xp[message.author.id].level > 10) {
            if(message.author.id == humza) {
                xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == fei) {
                xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == loki || message.author.id == srn) {
               
                xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == donqi) {
                xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == seb) {
                xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == shawn) {
                xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == yasha) {
                xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == hafiz) {
                xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].dex = curdex + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == tyrese) {
                xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == pubert) {
                xp[message.author.id].vit = curvit + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].luk = curluk + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb - 1];
            }
            if(message.author.id == fabio) {
                xp[message.author.id].str = curstr + statarr[xp[message.author.id].xpb];
                xp[message.author.id].int = curint + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].fth = curfth + statarr[xp[message.author.id].xpb - 1];
                xp[message.author.id].cha = curcha + statarr[xp[message.author.id].xpb];
                xp[message.author.id].wis = curwis + statarr[xp[message.author.id].xpb - 1];
            }
        }
        if (xp[message.author.id].level % 10 == 0) {
            xp[message.author.id].count = xp[message.author.id].count + 1;
            xp[message.author.id].xpb = xp[message.author.id].xpb + 1; 
            if(message.author.id == haval) {
                xp[message.author.id].class = classes[0];
            }
            if(message.author.id == humza) {
                xp[message.author.id].class = classes[1];
            }
            if(message.author.id == loki ||  message.author.id == srn) {
                xp[message.author.id].class = classes[2];
            }
            if(message.author.id == fei) {
                xp[message.author.id].class = classes[3];
            }
            if(message.author.id == donqi) {
                xp[message.author.id].class = classes[4];
            }
            if(message.author.id == fabio) {
                xp[message.author.id].class = classes[5];
            }
            if(message.author.id == seb) {
                xp[message.author.id].class = classes[6];
            }
            if(message.author.id == pubert) {
                xp[message.author.id].class = classes[7];
            }
            if(message.author.id == tyrese) {
                xp[message.author.id].class = classes[8];
            }
            if(message.author.id == shawn) {
                xp[message.author.id].class = classes[9];
            }
            if(message.author.id == yasha) {
                xp[message.author.id].class = classes[10];
            }
            if(message.author.id == hafiz) {
                xp[message.author.id].class = classes[11];
            }
            let advEmbed = new Discord.RichEmbed()
            .setTitle('Class Advancement!')
            .setColor('#850f75')
            .addField('Class ' + xp[message.author.id].class, 'You have advanced into **' + advancedClass(xp[message.author.id].count) + '**');
            message.channel.send(advEmbed);
        }
        
        let lvlUpEmbed = new Discord.RichEmbed()
        .setTitle('You have leveled up!')
        .setColor('#eb4710')
        .addField('Level', xp[message.author.id].level, true)
        .addField('XP', xp[message.author.id].xp, true)
        .addField('Status: ', 'STR: ' + xp[message.author.id].str + '\(\+' + (xp[message.author.id].str - curstr) + ')\n' 
        + 'DEX: ' + xp[message.author.id].dex + '\(\+' + (xp[message.author.id].dex - curdex) + ')\n' + 'VIT: ' + xp[message.author.id].vit + '\(\+' + (xp[message.author.id].vit - curvit) + ')\n'
        + 'INT: ' + xp[message.author.id].int + '\(\+' + (xp[message.author.id].int - curint) + ')\n' + 'FTH: ' + xp[message.author.id].fth + '\(\+' + (xp[message.author.id].fth - curfth) + ')\n' + 
        'LUK: ' + xp[message.author.id].luk + '\(\+' + (xp[message.author.id].luk - curluk) + ')\n' + 'CHA: ' + xp[message.author.id].cha + '\(\+' + (xp[message.author.id].cha - curcha) + ')\n' + 'WIS: ' + xp[message.author.id].wis + '\(\+' + (xp[message.author.id].wis - curwis) + ')\n')
        .setFooter(`${diffLvl} XP needed for next level up!`, message.author.displayAvatarURL);
        message.channel.send(lvlUpEmbed);
         
    }
    if(xp[message.author.id].level >= 100) {
        xp[message.author.id].level = 100;
    }

    if(message.content.startsWith(`${prefix}status`)) {
        let statEmbed = new Discord.RichEmbed()
        .setTitle('Status Page')
        .setColor('#22f2a2')
        .addField('Class: ' , xp[message.author.id].class)
        .addField('Advanced Class: ', xp[message.author.id].advclass)
        .addField('Level', xp[message.author.id].level, true)
        .addField('XP', xp[message.author.id].xp, true)
        .addField('Status: ', 'STR: ' + xp[message.author.id].str + '\n' 
        + 'DEX: ' + xp[message.author.id].dex + '\n' + 'VIT: ' + xp[message.author.id].vit + '\n'
        + 'INT: ' + xp[message.author.id].int + '\n' + 'FTH: ' + xp[message.author.id].fth + '\n' + 
        'LUK: ' + xp[message.author.id].luk + '\n' + 'CHA: ' + xp[message.author.id].cha + '\n' + 'WIS: ' + xp[message.author.id].wis + '\n')
        .setFooter(`${diffLvl} XP needed for next level up!`, message.author.displayAvatarURL);
        message.channel.send(statEmbed);
    }
    fs.writeFile('./xp.json', JSON.stringify(xp), (err) => {
        if(err) console.log(err);
    });

    if(message.content.startsWith(`${prefix}oracle`)) {
       if(xp[message.author.id].level >= 10) {
           if(message.author.id == haval) {
               message.channel.send('Your class is the legendary class: **' + classes[0] + '**');
           } else if(message.author.id == humza) {
            message.channel.send('Your class is the secret mythical class: **' + classes[1] + '**');
           } else if(message.author.id == loki || message.author.id == srn) {
            message.channel.send('Your class is the secret advanced class: **' + classes[2] + '**');
           } else if(message.author.id == fei) {
            message.channel.send('Your class is the epic class: **' + classes[3] + '**');
           } else if(message.author.id == donqi) {
            message.channel.send('Your class is the hidden class: **' + classes[4] + '**');
           } else if(message.author.id == fabio) {
            message.channel.send('Your class is the ultimate class: **' + classes[5] + '**');
           } else if(message.author.id == seb) {
            message.channel.send('Your class is the epic class: **' + classes[6] + '**');
           } else if(message.author.id == pubert) {
            message.channel.send('Your class is the pubert class: **' + classes[7] + '**');
           } else if(message.author.id == tyrese) {
            message.channel.send('Your class is the ultimate class: **' + classes[8] + '**');
           } else if(message.author.id == shawn) {
            message.channel.send('Your class is the legendary class: **' + classes[9] + '**');
           } else if(message.author.id == yasha) {
            message.channel.send('Your class is the ultimate class: **' + classes[10] + '**');
           } else if(message.author.id == hafiz) {
            message.channel.send('Your class is the super rare class: **' + classes[11] + '**');
           } else {
               message.channel.send('You are succ mans.');
           }
       } else {
           message.channel.send('You are not high enough level to get your divine blessing. You need to be level 10. Your current level is: ' + xp[message.author.id].level);
       }
    }

    //qzgem: 609115120726966277
    //moon2H: 502706928170827777
    //moon2S: 606898724395941888
    //moon2SMERG: 502706928170827777
    //moon2BED: 607674189037699133
    //moon2DOIT: 607674124042502176
    console.log(message.content);
});

client.login(token);