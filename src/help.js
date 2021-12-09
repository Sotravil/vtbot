const help = (prefix) => {
	return `𝘴ꪮ𝘵𝘳ꪖꪚꩍꪶꪑꪖ𝘬ꫀ𝘳〽️ bot Menu Do Comandos
> *Comandos Do Figurinhas* <
command : *${prefix}sticker* o *${prefix}stiker*
Descri : convert image/gif/video to sticker
usage : reply image/gif/video, or send image/gif/video with caption\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
Descri : convert image to sticker while removing the background
usage : reply image, or send image with caption\n
command : *${prefix}toimg*
Descri : convert sticker to image
usage : reply sticker\n
command : *${prefix}tsticker* or *${prefix}tstiker*
Descri : convert text to sticker
usage : *${prefix}tsticker text in here*\n
> *Meme Commands* <
command : *${prefix}meme*
Descri : random meme images [english]
usage : just send the command\n
> *Others Commands* <
command : *${prefix}tp*
Descri : Text / Logo maker from textpro.me
usage : *${prefix}tp [no] [text]*\nexample : *${prefix}tp 1 YourText*
note : *${prefix}tp list* ( for show all theme )\n
command : *${prefix}ep*
Descri : Text / Logo maker from ephoto360.com
usage : *${prefix}ep [no] [text]*\nexample : *${prefix}ep 1 YourText*
note : *${prefix}ep list* ( for show all theme )\n
command : *${prefix}tahta*
Descri : Harta Tahta .....
usage : *${prefix}tahta [text]*\nexample : *${prefix}tahta YourText*\n
command : *${prefix}gtts*
Descri : convert text to speech/audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
Descri : random loli images
usage : just send the command\n
command : *${prefix}nsfwloli*
Descri : random nsfw loli images
usage : just send the command\n
command : *${prefix}url2img*
Descri : take web screenshots
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
Descri : your message will be replied to by simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
Descri : take the text in the picture
usage : reply image, or send image with caption\n
command : *${prefix}wait*
Descri : search anime with image [ What Anime Is This/That ]
usage : reply image, or send image with caption\n
command : *${prefix}setprefix*
Descri : replace prefix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> *Group Comands* <
command : *${prefix}add*
Descri : add member into group
usage : *${prefix}add 62813xxxxx*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}kick*
Descri : kick members from group
usage : *${prefix}kick @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}promote*
Descri : make the group member as group admin
usage : *${prefix}promote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}demote*
Descri : make the group admin as group member
usage : *${prefix}demote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}linkgroup*
Descri : take the group link
usage : just send the command
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}leave*
Descri : Make bot leave the group
usage : just send the command
note : Can only be used by Group admins and Bot owner\n
command : *${prefix}tagall*
Descri : tags all group members including admins too
usage : just send the command
note : This command can be used if you are a group admin\n
command : *${prefix}simih*
Descri : activate simi mode in the group
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : This command can be used if you are a group admin\n`
}

exports.help = help
