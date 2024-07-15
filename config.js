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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUllNGZFRDJuUU5rQ1VhdkVSY1dLdDdxd2JyS2RCWlUyVkVCZ0MxbFoxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdmN2EzQ2UrMzNjaERBWG1GaUZwRWZjd1lSL1FKWXU0ellZRkFocFBBcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ0s2ZDZoREhxL1Qxck5uT3pURVMvVktQZ1NrQkxVWjhTODJRQkQxMkZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q1hlb3NmRVlzVG1xcVJQVVFDQ2Y5ekg3MXNsRzJodm5nMU42WDNKNGgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHL0d3YytvMFFRbmFBTDRFT0NPaEQ2cDdDL0dhbTd6dzFrN3Fhb1dwRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNLWTM3N1ZvVGpUbjUrOS9yVzRkdWJZUUVTMXhVQzNCZk02L0dVYXd6R289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlArUjc1b29nUndmWXRabnorYlJyaFdZRG50TkZtblJxT0lQTGNtaFFWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3BBRWtlZzhRWEdLb2tzSXhNa1N6cDd3VFVYNGh1amhjNUxQdXIreU1GST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJGcGY0S1FsQitJYTUwVUFxWjJnOG1vN2ZGc0VpR2laMjlKUFNNZWdQSVAzTGFZZGgzYnltdDdYZis3MWN5RVFKUXZkL1U2OUpPZ2F6Wnc5OHFTR2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJqM2l5K0tqQ2grL2tBTmZjSkNoanBTU0VHTFo3TDJidnlrd2o4L0JxeFZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlc01IRDl2alRyeWV4a1A1TXNEYndBIiwicGhvbmVJZCI6Ijc4OWI0YzI3LWQ0ODctNDYyYS1iNzhhLTViZjQxYWUzOTBjMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZjYxZzlNbTJ2MWtWclNKUjVrem93MVhoMGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTlSSHlhbDNpbUU5QSswTjJxdVdmNkxZc1VRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhCNkFMNDhOIiwibWUiOnsiaWQiOiIyMzQ5MDY4NDIzNDc3OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FkYXNoaSB0diJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmlqeEdZUTl0L1Z0QVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNGp6UEZhYjJFYmNsRkNTbDBXVEIvZ25iNWxxL2tVWWpRYlNSNWFUcGhHaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWlFvZ092UHQ2NkdycVg3clM0ZGpBak12cVFOaU1RRzN6b1ZSRjlpRm9keUh6SWNNZ2JZWlNDWFlaS3dqNWx6dmt6dm42d3ltK0dSOEFMQzZuTVlnaEE9PSIsImRldmljZVNpZ25hdHVyZSI6Ikd4d2xJMktKalZZNWtDclh4cG56Skg5Ny9pTDBWQ0ZBRUdQY2RQdlkzVzRhVFRmY0JISG5mUHcvMVFhVE9kdkJDM2VGbUVUTkV2N3AzaU12OVZkWWpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2ODQyMzQ3Nzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVJOHp4V205aEczSlJRa3BkRmt3ZjRKMitaYXY1RkdJMEcwa2VXazZZUnAifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEwNjk1NzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjlHIn0="
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
