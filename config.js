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
global.devs = "2349068423477";
global.sudo = process.env.SUDO || "2349068423477";
global.owner = process.env.OWNER_NUMBER || "2349068423477";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZ0ZVZ6TWordlhhZTBzUjdSM01mN2hWRVl1N0RjTXJhSkNOV2ZjbmdITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblc1dDRaczB1a0pzVWxYb0liWi81ZlI0OFQyMHRlbzV3bHgzQlR5eTlWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQk9DZXpLL3NTalluKyt0WUtydjd1K2toS3Q4MFpsdVUwZ21mdDd5V0VnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdU9KQjNUaHIvclcvS1NHSTB1VmE3NGlTVVQwWTZrM3pyaDkxN01oNmd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDbEU1TXRCYytYdVFtM2REa3ZzdnhoYVBWV25obWlic0wrNXJhN3hGM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNXRVlmaXRHNFhhVUJ1UWtrNUFKOFZKYUpuUDRUbjQ1NjQwWHUwZS8xR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1UbDNNdU4wNzZwM0xTaS9TVnR3bncvR05hd0xOVExMN3N5cnBYQXhrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dZN1hva3Z2MXQxS2EwZkxTc0Jhcmh2Vm9qODhqNDhuVUNWZ2FiMXBVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ4NlJoR0FKUGdmWHBEZWpwcGNndFdxalc4ZXFqUjVIUS95dysyeDAvSHVtODNHVTVYSkdYWm9IR3Z6SzhSb1NIeVZaR25tb0JQVnRsTVF0T0NyMEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiJKZHJUWWthL1Q3VE9WUDI1YTc5cldaVEJsK1FwcGZGQ3l6YWdNMEgvM05jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfVlY4S283MVFKdUwtY09YdGdmaUl3IiwicGhvbmVJZCI6IjZmMmQ4Mzg3LWQxZGMtNGRhYS1iYTNlLTlmNTNiZTQ1M2VkMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTllvSThDT3Bla2xXdkRrWmRCcGpBNUJnSW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUp5VFk1bzc2NkV2Z3JmYUlwTGUwaFVpOTFrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNaNEdIMjhGIiwibWUiOnsiaWQiOiIyMzQ5MDY4NDIzNDc3OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FkYXNoaSB0diJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmJsbEVvUWg3emJ0QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK0lpV1dReE9xblQ1eUdvTzh0Rk5pelprcVg4dFc0WG1RbDZSeU8wS1BnTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiamh0dDlXNStZRVJIellXVnJuaHBOUlBsV01udXZRdnpIZUt6NDRtUVZFM0RETXZHblNpK3hoNjdxSHF4b3E3enBxZFpjaFk0OUFJTEY1UCszbjVuQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6InlkbEZNV3Y0ZVNyd3BRSHBTa0NGb0kyb1lpZjRNZ0FmMzhhakZXaDJGMTlJSklPN29tQU9TMlRuMUd2MHlRUzhiZWFXa01oOHZjQUxObjBZVU50dUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2ODQyMzQ3Nzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZpSWxsa01UcXAwK2NocUR2TFJUWXMyWktsL0xWdUY1a0pla2NqdENqNEQifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjExNjMyODR9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "sadashitv",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Sadashitv",
  ownername: process.env.OWNER_NAME || "sadashi",
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
