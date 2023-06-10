(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{288:function(r,t,e){"use strict";e.r(t);var a=e(14),_=Object(a.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"безопасность"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#безопасность"}},[r._v("#")]),r._v(" Безопасность")]),r._v(" "),t("h2",{attrs:{id:"безопасность-веб-приложении"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#безопасность-веб-приложении"}},[r._v("#")]),r._v(" Безопасность веб-приложений")]),r._v(" "),t("p",[r._v("Есть плохие люди, которые могут и хотят взломать ваши веб-приложения. Важно принять необходимые меры предосторожности, чтобы укрепить безопасность вашего приложения. К счастью, прекрасные люди в "),t("a",{attrs:{href:"https://www.owasp.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("The Open Web Application Security Project"),t("OutboundLink")],1),r._v(" (OWASP) составили полный список известных проблем безопасности и методов защиты от них. Это должно быть прочитано любым разработчиком, заботящимся о безопасности.")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.owasp.org/index.php/Guide_Table_of_Contents",target:"_blank",rel:"noopener noreferrer"}},[r._v("Прочитать руководство по безопасности OWASP"),t("OutboundLink")],1)])]),r._v(" "),t("h2",{attrs:{id:"хэширование-паролеи"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#хэширование-паролеи"}},[r._v("#")]),r._v(" Хэширование паролей")]),r._v(" "),t("p",[r._v("Наверное, каждый PHP-разработчик занимается разработкой приложений, которые нуждаются в пользовательской авторизации. Имя пользователя и пароль хранятся в базе данных и позже используются для авторизации пользователя.")]),r._v(" "),t("p",[r._v("Очень важно правильно "),t("a",{attrs:{href:"http://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%85%D0%B5%D1%88-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F",target:"_blank",rel:"noopener noreferrer"}},[t("em",[r._v("хэшировать")]),t("OutboundLink")],1),r._v(" пароль перед его сохранением. Хэширование пароля является необратитым, односторонняя функция применяется на пользовательских паролях. Она возвращает строку определенной длины, которую невозможно расшифровать. Это значит, что вы можете сравнить один хэш с другим, чтобы понять, что они пришли из одной и той же исходной строки, но вы не можете определить оригинальную строку. Если ваши пароли не захэшированы, и доступ к базе данных получен третьй стороной, то ваши пользовательские аккаунты теперь скомпрометированы. Некоторые пользователи (к сожалению) могут использовать один и тот же пароль для разных сервисов. Как бы то ни было, очень важно серьезно относиться к безопасности.")]),r._v(" "),t("p",[t("strong",[r._v("Хэширование паролей с функцией "),t("code",[r._v("password_hash")])])]),r._v(" "),t("p",[r._v("В PHP 5.5 была представлена функция "),t("code",[r._v("password_hash")]),r._v(". Сейчас она использует BCrypt, сильнейший алгоритм, поддерживаемый PHP. Она будет обновлена в будущем, для поддержки бОльшего числа алгоритмов, по мере необходимости. Библиотека "),t("code",[r._v("password_compat")]),r._v(" была создана для обратной совместимости с PHP >= 5.3.7.")]),r._v(" "),t("p",[r._v("Ниже мы хэшируем строку и далее сверяем её с новой строкой. Поскольку наши две исходные строки отличаются ('secret-password' и 'bad-password') эта авторизация будет неудачной.")]),r._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[r._v("<?php")]),r._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("require")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[r._v("'password.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(";")]),r._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[r._v("$passwordHash")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[r._v("=")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("password_hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[r._v("'secret-password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(",")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[r._v("PASSWORD_DEFAULT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(";")]),r._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("if")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("password_verify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[r._v("'bad-password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(",")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[r._v("$passwordHash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),r._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[r._v("//Правильный пароль")]),r._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("else")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),r._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[r._v("//Неправильный пароль")]),r._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),r._v("\n")])])])]),t("ul",[t("li",[r._v("[Подробнее о "),t("code",[r._v("password_hash")]),r._v("] "),t("a",{attrs:{href:"https://www.owasp.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("1"),t("OutboundLink")],1)]),r._v(" "),t("li",[r._v("["),t("code",[r._v("password_compat")]),r._v(" для PHP  >= 5.3.7 && < 5.5] "),t("a",{attrs:{href:"https://www.owasp.org/index.php/Guide_Table_of_Contents",target:"_blank",rel:"noopener noreferrer"}},[r._v("2"),t("OutboundLink")],1)]),r._v(" "),t("li",[r._v("[Подробнее о хэшировании в отношении криптографии] "),t("a",{attrs:{href:"http://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%85%D0%B5%D1%88-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F",target:"_blank",rel:"noopener noreferrer"}},[r._v("3"),t("OutboundLink")],1)]),r._v(" "),t("li",[r._v("[PHP "),t("code",[r._v("password_hash")]),r._v(" RFC] "),t("a",{attrs:{href:"https://wiki.php.net/rfc/password_hash",target:"_blank",rel:"noopener noreferrer"}},[r._v("4"),t("OutboundLink")],1)])]),r._v(" "),t("h2",{attrs:{id:"фильтрация-данных"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#фильтрация-данных"}},[r._v("#")]),r._v(" Фильтрация данных")]),r._v(" "),t("p",[r._v("Никогда не доверяйте пользовательскому вводу, который передаётся вашему PHP коду. Всегда проверяйте и очищайте пользовательский ввод перед его использованием в коде. Функции "),t("code",[r._v("filter_var")]),r._v(" и "),t("code",[r._v("filter_input")]),r._v(" помогут очистить переменные, а также проверить соответствие введённых данных некоторому формату (например, адрес электронной почты).")]),r._v(" "),t("p",[r._v("Пользовательский ввод может быть различным: "),t("code",[r._v("$_GET")]),r._v(" и "),t("code",[r._v("$_POST")]),r._v(", данные введённые в форму, некоторые значения в суперглобальной переменной "),t("code",[r._v("$_SERVER")]),r._v(" и тело HTTP запроса, открытое с помощью "),t("code",[r._v("fopen('php://input', 'r')")]),r._v(". Запомните, что пользовательский ввод не ограничивается данными формы, отправленной пользователем. Отправляемые и загружаемые файлы, значения сессий, данные cookie и данные сторонних веб-сервисов также приравниваются к пользовательскому вводу.")]),r._v(" "),t("p",[r._v("Хотя пользовательские данные могут быть без проблем сохранены, скомбинированы и к ним может быть получен доступ позже, они всё ёще являются пользовательским вводом. Каждый раз, когда вы что-либо обрабатываете, объединяете или подключаете данные в ваш код, спросите себя, отфильтрованы ли эти данные и можно ли им доверять.")]),r._v(" "),t("p",[r._v("Данные могут быть "),t("em",[r._v("отфильтрованы")]),r._v(" по-разному, в зависимости от их назначения. Например, когда нефильтрованные данные, введённые пользоватем, передаются в HTML код страницы, он может выполнить HTML и JavaScript на вашем сайте! Этот тип атаки известен, как Cross-Site-Scripting (XSS) и может иметь очень серьёзные последствия. Один из способов избежать XSS заключается в очистке ввода от всех HTML тэгов (их удалением, или заменой на HTML символы) с помощью функции "),t("code",[r._v("strip_tags")]),r._v(" или экранирование символов в равносильные им HTML сущности с функцией "),t("code",[r._v("htmlentities")]),r._v(" или "),t("code",[r._v("htmlspecialchars")]),r._v(".")]),r._v(" "),t("p",[r._v("Другой пример, передача данных для выполнения командной строкой. Это может быть крайне опасно (и, как правило — это плохая идея), но вы можете использовать встроенную функцию "),t("code",[r._v("escapeshellarg")]),r._v(" для очистки аргументов командной строки.")]),r._v(" "),t("p",[r._v('Последний пример, принимает пользовательский ввод, чтобы определить, какой файл загружать из файловой системы. Это может быть использовано для изменения имени файла на путь файла. Вам нужно убрать "/", "../", '),t("a",{attrs:{href:"http://php.net/manual/ru/security.filesystem.nullbytes.php",target:"_blank",rel:"noopener noreferrer"}},[r._v("нулевые байты"),t("OutboundLink")],1),r._v(" или другие символы из пути файла, так чтобы скрипт не мог загружать скрытые, непубличные или конфиденциальные файлы.")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.owasp.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Подробнее о фильтрации данных"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://wiki.php.net/rfc/password_hash",target:"_blank",rel:"noopener noreferrer"}},[r._v("Подробнее о функции "),t("code",[r._v("filter_var")]),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"http://www.php.net/manual/ru/function.filter-input.php",target:"_blank",rel:"noopener noreferrer"}},[r._v("Подробнее о функции "),t("code",[r._v("filter_input")]),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"http://php.net/manual/ru/security.filesystem.nullbytes.php",target:"_blank",rel:"noopener noreferrer"}},[r._v("Подробнее об обработке нулевых байтов"),t("OutboundLink")],1)])]),r._v(" "),t("h3",{attrs:{id:"санитизация"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#санитизация"}},[r._v("#")]),r._v(" Санитизация")]),r._v(" "),t("p",[r._v("Санитизация удаляет (или экранирует) неправильные или небезопасные символы из пользовательского ввода.")]),r._v(" "),t("p",[r._v("Например, вам необходимо нормализовать пользовательский ввод перед подключением ввода в HTML или\nего вставкой в сырой SQL запрос. Когда вы используете связанные параметры с "),t("a",{attrs:{href:"#databases"}},[r._v("PDO")]),r._v(",\nони будут очищать ввод за вас.")]),r._v(" "),t("p",[r._v("Иногда требуется разрешить некоторые безопасные HTML тэги в вводе, когда он подключается в HTML\nстраницу. Это очень трудно сделать и многие избегают этого, используя ограниченное форматирование,\nкак например Markdown или BBCode, либо библиотеки с белым списком, как "),t("a",{attrs:{href:"http://htmlpurifier.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("HTML Purifier"),t("OutboundLink")],1),r._v(",\nсуществующие по этой причине.")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.owasp.org/index.php/Guide_Table_of_Contents",target:"_blank",rel:"noopener noreferrer"}},[r._v("Санитизационные фильтры"),t("OutboundLink")],1)]),r._v(" "),t("h3",{attrs:{id:"валидация"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#валидация"}},[r._v("#")]),r._v(" Валидация")]),r._v(" "),t("p",[r._v("Валидация гарантирует, что пользовательский ввод, является тем, что вы ожидаете. Например, вы\nможете валидировать адрес электронной почты, номер телефона или возраст при обработке запроса\nрегистрации.")]),r._v(" "),t("p",[t("a",{attrs:{href:"http://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%85%D0%B5%D1%88-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F",target:"_blank",rel:"noopener noreferrer"}},[r._v("Валидационные фильтры"),t("OutboundLink")],1)]),r._v(" "),t("h2",{attrs:{id:"конфигурационные-фаилы"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#конфигурационные-фаилы"}},[r._v("#")]),r._v(" Конфигурационные файлы")]),r._v(" "),t("p",[r._v("Когда вы создаёте файлы конфигурации для ваших приложений, рекомендуется использование одного из следующих способов:")]),r._v(" "),t("ul",[t("li",[r._v("Рекомендуется хранить вашу конфигурационную информацию там, где к ней не может быть получен доступ напрямую, а доступ к ней осуществлялся через файловую систему.")]),r._v(" "),t("li",[r._v("Если вы вынуждены хранить конфигурационные файлы в корневом каталоге, именуйте файл с расширением "),t("code",[r._v(".php")]),r._v(". Это гарантирует, что, если к скрипту обратятся напрямую, он не будет выведен, как обычный текст.")]),r._v(" "),t("li",[r._v("Информация в файлах конфигурации, должна быть защищена соответственно, либо с помощью шифрования или системных прав группы/пользователя файла.")])]),r._v(" "),t("h2",{attrs:{id:"использование-глобальных-переменных"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#использование-глобальных-переменных"}},[r._v("#")]),r._v(" Использование глобальных переменных")]),r._v(" "),t("p",[t("strong",[r._v("Примечание:")]),r._v(" С появлением PHP 5.4 директива "),t("code",[r._v("register_globals")]),r._v(" была удалена и больше не может быть использована. Это касается тех, кому нужно обновить старое приложение.")]),r._v(" "),t("p",[r._v("Включенный параметр конфигурации "),t("code",[r._v("register_globals")]),r._v(" делает несколько типов переменных (в том числе из "),t("code",[r._v("$_POST")]),r._v(", "),t("code",[r._v("$_GET")]),r._v(" и "),t("code",[r._v("$_REQUEST")]),r._v(") глобальными, доступными в глобальной области видимости вашего приложение. Это может легко привести к проблемам с безопасностью, поскольку ваше приложение не сможет эффективно определить откуда пришли данные.")]),r._v(" "),t("p",[r._v("Например : "),t("code",[r._v("$_GET['foo']")]),r._v(" будет доступна через "),t("code",[r._v("$foo")]),r._v(", которая может заместить переменную, которая не была объявлена. Если вы используете PHP < 5.4.0 "),t("strong",[r._v("убедитесь")]),r._v(" что "),t("code",[r._v("register_globals")]),r._v(" "),t("strong",[r._v("off")]),r._v(" (выключена).")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.php.net/manual/ru/security.globals.php",target:"_blank",rel:"noopener noreferrer"}},[r._v("Register_globals в руководстве PHP"),t("OutboundLink")],1)])]),r._v(" "),t("h2",{attrs:{id:"сообщения-об-ошибках"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#сообщения-об-ошибках"}},[r._v("#")]),r._v(" Сообщения об ошибках")]),r._v(" "),t("p",[r._v("Логирование ошибок полезно при поиске проблемных мест вашего приложения, также логирование может выдать информацию о структуре вашего приложения. Для эффективной защиты вашего приложения от проблем, которые могут быть вызваны выводом этих сообщений, вам необходимы различные настройки сервера для разработки и продакшна.")]),r._v(" "),t("h3",{attrs:{id:"разработка"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#разработка"}},[r._v("#")]),r._v(" Разработка")]),r._v(" "),t("p",[r._v("Для того, чтобы видеть все возможные ошибки во время "),t("strong",[r._v("разработки")]),r._v(", настройте следующие параметры в вашем "),t("code",[r._v("php.ini")]),r._v(":")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("display_errors = On\ndisplay_startup_errors = On\nerror_reporting = -1\nlog_errors = On\n")])])]),t("blockquote",[t("p",[r._v("Установка значения в "),t("code",[r._v("-1")]),r._v(" покажет каждую возможную ошибку, даже если новые уровни и константы будут добавлены в новых версиях PHP. Константа "),t("code",[r._v("E_ALL")]),r._v(" ведёт себя так-же в PHP 5.4. — "),t("a",{attrs:{href:"http://php.net/manual/function.error-reporting.php",target:"_blank",rel:"noopener noreferrer"}},[r._v("php.net"),t("OutboundLink")],1)])]),r._v(" "),t("p",[r._v("Константа уровня ошибок "),t("code",[r._v("E_STRICT")]),r._v(" была введена в 5.3.0 и не является частью "),t("code",[r._v("E_ALL")]),r._v(", как бы то ни было, она стала частью "),t("code",[r._v("E_ALL")]),r._v(" в 5.4.0 Что это значит? Для вывода всех возможных ошибок в версии 5.3 вам нужно использовать либо "),t("code",[r._v("-1")]),r._v(" либо "),t("code",[r._v("E_ALL | E_STRICT")]),r._v(".")]),r._v(" "),t("p",[t("strong",[r._v("Вывод всех ошибок разными версиями PHP")])]),r._v(" "),t("ul",[t("li",[r._v("< 5.3 "),t("code",[r._v("-1")]),r._v(" or "),t("code",[r._v("E_ALL")])]),r._v(" "),t("li",[r._v("  5.3 "),t("code",[r._v("-1")]),r._v(" or "),t("code",[r._v("E_ALL | E_STRICT")])]),r._v(" "),t("li",[r._v("> 5.3 "),t("code",[r._v("-1")]),r._v(" or "),t("code",[r._v("E_ALL")])])]),r._v(" "),t("h3",{attrs:{id:"продакшн"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#продакшн"}},[r._v("#")]),r._v(" Продакшн")]),r._v(" "),t("p",[r._v("Чтобы спрятать все ошибки вашей среды во время "),t("strong",[r._v("продакшна")]),r._v(", настройте ваш "),t("code",[r._v("php.ini")]),r._v(" следующим образом:")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("display_errors = Off\ndisplay_startup_errors = Off\nerror_reporting = E_ALL\nlog_errors = On\n")])])]),t("p",[r._v("С этими настройками в продакшне, ошибки всё также будут записываться в лог ошибок веб сервера, но не будут показаны пользователю. Для подробной информации об этих настройках, смотрите руководство PHP:")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://php.net/manual/errorfunc.configuration.php#ini.error-reporting",target:"_blank",rel:"noopener noreferrer"}},[r._v("error_reporting"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"http://php.net/manual/errorfunc.configuration.php#ini.display-errors",target:"_blank",rel:"noopener noreferrer"}},[r._v("display_errors"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"http://php.net/manual/errorfunc.configuration.php#ini.display-startup-errors",target:"_blank",rel:"noopener noreferrer"}},[r._v("display_startup_errors"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"http://php.net/manual/errorfunc.configuration.php#ini.log-errors",target:"_blank",rel:"noopener noreferrer"}},[r._v("log_errors"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);