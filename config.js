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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hBSFhGVTN3eGNBUEZtMkFIY1hJSVZkVTYzRWdEanZwREcwUk1XMkIyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2VCVmJadDFFRHY1bG5xYmpyalRRRkxBVlBucjJlV0xMRWNkK1JyZmgzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRTVyYXArMUNmMk1HNkd2NU1xd1gwejNvUng4OHdPVzdhcERQQU5mVTJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjNFRDVHJIQ2JraW5VU0ZDMkpmZ0NGU2ZNanhqWXpaaTZaN2tBWEMxam5vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDenNMQkVUeEpQSDV1eGMyMWdCcVN5VUV3Zmc1Y0VSNkxHWDBWNU5EVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpZYXIrNGlyeEZ4cDBDZTlHMit0QlNzMkR2TkhBQlRPS2N6M3BBYi9Ua1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0J0MmR1TmQwQ1Y3Q0svMktNUTlKbGRFclRmVDVZZVhWOHUzeENLKyszYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGN1K1pzSVRyRXY0cXdWUzU0WGVHMHZNRi85Yi82ejVlZld0R0FPb0ZBVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImsrT3hQL1IxK01PVDNJek1wTVN2UldqaGVoYmFVK2JIVDJudUg3Y1FSZ1N3ZVY1TzR5V3pZV3cvYU45VXQwWDZ5REtyMnJ4ejFxZHBYOWFnSkhyYWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJzZGx3Z2ovM2lQYmZvQkViVHdNTmJaNFNBN2N1Q1hQR2tMcjJDS3p4clhFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzcwMzAwNDE2MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQTFEREZCMjU1QjFDOEE1MUJBODhBOTE5NDM3QzdFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5OTk3ODE1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUckdMT3dKcVJJbTI0N2haOXF1SHV3IiwicGhvbmVJZCI6IjFkZTFjNzNmLWM5NWQtNDgwMy05NGUwLWFkMmFlNTc0ZWQ2OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtVUUzOXZ2cUhEYUg1N1ByUzhVb1pSTEhpTW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3cyN0UrdHpiSTBjVlFFODlZcjR2QVFtTlZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlEyM05FWU04IiwibWUiOnsiaWQiOiI5MjM3MDMwMDQxNjE6NDFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xhMThha0NFT2FxbExRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhqOHlFc1ZKWkh0N3h1R2JSaFl3VWZvc0lSQk5ZdWNZdTU1eko0R3h3Q3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlkxZzloK1ZZSTZadFpFS0ZGaEtOdi91N1I0RUpVTkNvOEMyQ28xSFRIQmVRY2xTNTNWV2pudWhiMGx3KzRkOS9nWEMrWnpKcDE4cGE3dzhtWWJjSkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJETWpXTEtod25CNzM0THVGeHZUUDM2em92RFZleENJOVd1Q3NTZGpzMVRucHBXSysrdGlkcDJmcTFQeWExUUNnWDZuYkcvMEZWa2xxbVpvRHY1V0RoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzcwMzAwNDE2MTo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWNC9NaExGU1dSN2U4YmhtMFlXTUZINkxDRVFUV0xuR0x1ZWN5ZUJzY0FyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTk3ODExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpzMyJ9"
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
