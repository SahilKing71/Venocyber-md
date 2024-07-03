//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "923239956476";
global.owner = process.env.OWNER_NUMBER || "923239956476";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dTekhyZno5VXpDL3VMMFcxWGxTa0NiSG9IdzRidzNuTXB5V1FNT0tWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnUxd291L1lSdUVnek5WNVN3dk83UE5ucm5SRTRqYXZZa3ZjSWY0ZnFrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSUFYb25CVEV2KzdEbUZzUGM4WUNNdisyQWMycC8vcHhvd2NnR01ucmswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQb0VSSTlleDNOL0NZL1BZWXg1S0E3YXdob3RsQXBrclA3dWNTT29RbTJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNQQmZaa1NKQUplY2orVkUxVm0xVWYrcys0VUxEN2FpTUIzK0RMS0thWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imptd3BpSXRmby82NHlUSFRDNzA4UTNlM000R1poNEpyd2JjR3ZhK1dRVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBXcW1PbjZMN0YvS1VjUnlSM3V6aDJ6ckJrUVBrSStWNld5aUNDY2owdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGUrVTZDRTlzTGJ6VXlQSzRlVm9hU1VEUWNldVFjQ3dEdzFuQ1lIYW1ndz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlhMTMvVE41aEFrVFF6eWhlZWlheU9KVmtvSTE5V1BKT1BKZFdJVC9uMXR0Zjlla1BYdGpZM2ErRkZFRG1jTmFZbzBjU2lJaEh0ZnV2Z2tOOUJNWEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IlJKQXZZZ0tsTmJ5Y0dRMHdsaDVPM0hncVcwQjlhUW5maDFuakw1ZDVjWkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNUNkItWkJrVHVPcE9PTnJIZHVoaVEiLCJwaG9uZUlkIjoiMzY2MjYyZGQtMjE5ZC00YmNiLTg1ODItZDNhOGVhMjExYjA4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik53TDVIR3FIUExoTjJRSHRtRStoUnExQXI2Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0WlZsWGNMczZ0WmdHYmkzejV0MnkvYm5ZWlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTZRNTc0OU4iLCJtZSI6eyJpZCI6IjkyMzQ3MDA4Mjg3Mzo3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLeVUvUVFRM3M2VHRBWVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvNWFnRndpaHBOWWdQWCtHTlNFSDlwZ2J5QkRiRFFoSHRMOGMvN0pRN3drPSIsImFjY291bnRTaWduYXR1cmUiOiJlS0NqVkRWVU1jSEN4VEpCbkc1OWNES1FmM3VPbk04ZVI3RnQ1cXFWSGFZU2NFUHdqdlhqSHFEcWcvc1FQL3ZsY2FZYzlNZmwwUU1zdTRRRVRzMTZCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZUdrd0hJZlc2eVZKK3lUS05kZEhhQ1NoTUMreXNOQXp2RnFNdlAwbW1JSmlxRE5VTVM3RW5EWXA0QmlWSHU5c3dLYnA2WHNOazlnWHFZakxTWEltQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0NzAwODI4NzM6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmK1dvQmNJb2FUV0lEMS9oalVoQi9hWUc4Z1EydzBJUjdTL0hQK3lVTzhKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTg2MDI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURqayJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*_🇲‌𝐮𝐝𝐚𝐬𝐢𝐫  ☻︎ 🇸𝐩𝐨𝐫𝐭𝐬™⁹⁵_*",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MUDASIR KING⁹⁵",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
