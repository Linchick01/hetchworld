const Discord = require('discord.js') // подключение библиотеки                  Видео про бота https://youtu.be/1lzPIhTaPDY
const client = new Discord.Client() // создание клиента

client.on('ready', () =>{ // ивент, когда бот запускается https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-ready
    client.generateInvite("ADMINISTRATOR").then(invite => console.log(`Ссылка на добавление ${invite}`))
    console.log(`Привет! ${client.user.tag} запустился!`) // информация в консоль про успешный запуск
})

client.on('message', message =>{ // ивент, когда приходит любое сообщение в чат https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
    if (message.author.bot) return; // если автор сообщения - бот, ничего не происходит 
    if (message.content == '!profile') { // если пользователь написал "!профиль" 
    let embed = new Discord.MessageEmbed() // создание ембед сообщения
    .setTitle(message.author.username) // в тайтле имя автора 
    let status = ''
    switch (message.author.presence.status) { // проверка статусов 
        case 'online':
            status = 'онлайн'; break; 
            case 'idle':
                status = ':orange_circle: нет на месте'; break;
                case 'offline':
                    status = 'нет в сети'; break;
                    case 'dnd':
                        status = ':red_circle: не беспокоить'; break;
    }
    embed.setDescription(`**Ваш дискорд айди: ${message.author.id}
    Ваш статус: ${status}
    Дата создания аккаунта: ${message.author.createdAt.toLocaleDateString()}
    Дата входа на сервер: ${message.member.joinedAt.toLocaleDateString()}
    **`) // описание ембеда
    .setColor('RANDOM') // рандомный цвет ембеда
    .setThumbnail(message.author.avatarURL()) // вставляем в ембед аватарку пользователя
    message.channel.send(embed) // отправляем сообщение в канал где была написана команда   
    }
})

client.on('messageDelete', message =>{ // ивент, когда удаляется любое сообщение с сервера https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
    let embed = new Discord.MessageEmbed()
    .setTitle('Было удалено сообщение')
    .setColor('RANDOM')
    .addField(`Удалённое сообщение:`, message.content, true)
    .addField("Автор:",`${message.author.tag} (${message.author})`,true)
    .addField("Канал:", `${message.channel}`, false)
    .setFooter(' - ',`${message.author.avatarURL()}`)
    .setTimestamp(message.createdAt);
  client.channels.cache.get("976424282949320765").send(embed); // айди вашего канала с логами
})

client.on('guildMemberAdd', member =>{ // ивент, когда пользователь присоединяется к серверу https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
    let embed = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(`Привет, ${member.user.username}!`)
    .setDescription(`**Добро пожаловать в HetchWorld - Vanilla Plus! Тут у нас дружное сообщество и приятная атмосфера. Слушай музыку, участвуй в ивентах и исследуй мир новых механик. А если ты хочешь уединиться то зайди в наш Хаб.
     **`) // айди вашего сервера               !!!!!!!!!!
    .setFooter('Будь всегда на позитиве :3', 'https://cdn.discordapp.com/emojis/590614597610766336.gif?v=1')
    .setColor('RANDOM')
    member.send(embed); // отправка сообщения в лс 

    let embed2 = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(``)
    .addField('Привет', member.user, 'добро пожаловать в HetchWorld - Vanilla Plus! Тут у нас дружное сообщество и приятная атмосфера. Слушай музыку, участвуй в ивентах и исследуй мир новых механик. А если ты хочешь уединиться то зайди в наш Хаб.')
    .setColor('RANDOM')
    member.send(embed);
    client.channels.cache.get('976422339157827585').send(embed2) // айди вашего канала с логами
})

var interval = setInterval(function () { change(); }, 20000  ); // время обновления в миллисекундах

client.login('OTg2OTY0NTUyMjI0NzUxNjQ2.G1uNs8.siU_kcU2skueqV210LR9aTYs6UiVsd_1nDbISc') // токен вашего бота