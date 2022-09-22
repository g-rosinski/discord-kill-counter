export const userMention = (userID: string):string => `<@${userID}>`
export const usernicknameMention = (userID: string):string => `<@!${userID}>`
export const roleMention = (userID: string):string => `<@&${userID}>`
export const channelMention = (channelID: string):string => `<#${channelID}>`