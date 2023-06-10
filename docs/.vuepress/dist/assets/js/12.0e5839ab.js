(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{285:function(e,r,s){"use strict";s.r(r);var t=s(14),a=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"менеджер"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#менеджер"}},[e._v("#")]),e._v(" Менеджер")]),e._v(" "),r("p",[e._v("Существует много библиотек, фреймворков и компонентов PHP на выбор. Ваш проект, скорее всего, будет использовать некоторые из них — это и есть зависимости проекта. До недавнего времени в PHP не существовало удобного способа для управления зависимостями проекта. Даже если вы управляете ими вручную, вам приходилось беспокоиться об автозагрузчиках. Больше это не требуется.")]),e._v(" "),r("p",[e._v("В настоящее время существует две основные системы управления пакетами для PHP — Composer и PEAR. Какая из них подходит именно вам? Ответ — обе.")]),e._v(" "),r("ul",[r("li",[e._v("Используйте Composer для управления зависимостями одного проекта.")]),e._v(" "),r("li",[e._v("Используйте PEAR для управления зависимостями всех проектов во всей вашей системе.")])]),e._v(" "),r("p",[e._v("В общем, пакеты Composer будут доступны только в проектах, для которых вы явно укажете его использование, тогда как пакеты PEAR будут доступны во всех ваших PHP проектах. PEAR, на первый взгляд, может показаться более простым подходом, но есть преимущества в использовании подхода «проект-к-проекту» для зависимостей.")]),e._v(" "),r("h2",{attrs:{id:"composer-и-packagist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#composer-и-packagist"}},[e._v("#")]),e._v(" Composer и Packagist")]),e._v(" "),r("p",[e._v("Composer является "),r("strong",[e._v("блестящим")]),e._v(" менеджером зависимостей для PHP. Укажите список зависимостей вашего проекта в файле "),r("code",[e._v("composer.json")]),e._v(" и, с помощью нескольких простых команд, Composer автоматически скачает зависимости вашего проекта и установит для вас автозагрузку.")]),e._v(" "),r("p",[e._v("На данный момент существует много PHP библиотек, которые совместимы с Composer, готовых для использования в вашем проекте. Список этих «пакетов» есть на "),r("a",{attrs:{href:"http://packagist.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packagist"),r("OutboundLink")],1),e._v(", официальном репозитории для Composer-совместимых PHP библиотек.")]),e._v(" "),r("h3",{attrs:{id:"как-установить-composer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#как-установить-composer"}},[e._v("#")]),e._v(" Как установить Composer")]),e._v(" "),r("p",[e._v("Вы можете установить Composer локально (в вашей текущей рабочей директории; хотя это не рекомендуется) или глобально (например /usr/local/bin). Предположим, вы хотите установить Composer локально. Из корневой директории вашего проекта выполните:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("curl -s https://getcomposer.org/installer | php\n")])])]),r("p",[e._v("Это позволит загрузить файл "),r("code",[e._v("composer.phar")]),e._v(" (бинарный PHP-архив). Вы можете запустить его, используя "),r("code",[e._v("php")]),e._v(" для управления зависимостями вашего проекта. "),r("strong",[e._v("Обратите внимание:")]),e._v(" Если вы скачаете код напрямую в ваш интерпретатор, пожалуйста, сперва прочитайте код онлайн, для подтверждения его безопасности.")]),e._v(" "),r("h3",{attrs:{id:"как-установить-composer-вручную"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#как-установить-composer-вручную"}},[e._v("#")]),e._v(" Как установить Composer (вручную)")]),e._v(" "),r("p",[e._v("Ручная установка Composer — это продвинутая техника; однако, существуют причины, по которым разработчик может предпочесть именно этот метод использованию интерактивной установки. Интерактивная установка проверяет настройки PHP, чтобы подтвердить, что:")]),e._v(" "),r("ul",[r("li",[e._v("Используется необходимая версия PHP")]),e._v(" "),r("li",[e._v("Файлы "),r("code",[e._v(".phar")]),e._v(" могут быть верно выполнены")]),e._v(" "),r("li",[e._v("Определенные права на каталог достаточны")]),e._v(" "),r("li",[e._v("Не установлены конфликтные расширения")]),e._v(" "),r("li",[e._v("Установлены необходимые настройки "),r("code",[e._v("php.ini")])])]),e._v(" "),r("p",[e._v("В случае, если ни одно из этих условий не соблюдено, вы должны принять решение стоит ли идти на такой компромисс. Ниже описано, как установить Composer вручную:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("curl -s http://getcomposer.org/composer.phar -o $HOME/local/bin/composer\nchmod +x $HOME/local/bin/composer\n")])])]),r("p",[e._v("Путь "),r("code",[e._v("$HOME/local/bin")]),e._v(" (или другой каталог, выбранный вами) должен находиться в вашей переменной окружения "),r("code",[e._v("$PATH")]),e._v(". Это позволит быть доступной команде "),r("code",[e._v("composer")]),e._v(".")]),e._v(" "),r("p",[e._v("Если вы прочтете документацию Composer, которая гласит, что нужно запускать Composer с помощью команды "),r("code",[e._v("php composer.phar install")]),e._v(", вы можете заменить эту команду на:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("composer install\n")])])]),r("h3",{attrs:{id:"как-объявить-и-установить-зависимости"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#как-объявить-и-установить-зависимости"}},[e._v("#")]),e._v(" Как объявить и установить зависимости")]),e._v(" "),r("p",[e._v("Composer продолжает следить за зависимостями вашего проекта в файле "),r("code",[e._v("composer.json")]),e._v(". Вы можете управлять им вручную, если вам нравится, или же использовать сам Composer. Команда "),r("code",[e._v("php composer.phar require")]),e._v(" добавляет зависимость в проект и, если в каталоге нет файла "),r("code",[e._v("composer.json")]),e._v(", он будет создан. Далее мы рассмотрим пример, который добавляет "),r("a",{attrs:{href:"http://twig.sensiolabs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twig"),r("OutboundLink")],1),e._v(", как зависимость вашего проекта. Запустите это в корневой директории вашего проекта, куда вы загружали "),r("code",[e._v("composer.phar")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("php composer.phar require twig/twig:~1.8\n")])])]),r("p",[e._v("Аналогично команда "),r("code",[e._v("php composer.phar init")]),e._v("\tпроведет вас через создание полного файла "),r("code",[e._v("composer.json")]),e._v(" для вашего проекта. Есть и другой путь, когда вы создадите файл "),r("code",[e._v("composer.json")]),e._v(" вы можете сказать Composer, чтобы он скачал все ваши зависимости в папку "),r("code",[e._v("vendors/")]),e._v(". Это также применимо для проектов, которые вы загрузили и которые предоставляют файл "),r("code",[e._v("composer.json")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("php composer.phar install\n")])])]),r("p",[e._v("Затем добавьте этот код в основной PHP-файл вашего приложения; это укажет PHP использовать автозагрузчик Composer для зависимостей вашего проекта.")]),e._v(" "),r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token php language-php"}},[r("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("require")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'vendor/autoload.php'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),r("p",[e._v("Теперь вы можете использовать зависимости вашего проекта и они будут автоматически загружаться (по требованию).")]),e._v(" "),r("h3",{attrs:{id:"обновление-зависимостеи"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#обновление-зависимостеи"}},[e._v("#")]),e._v(" Обновление зависимостей")]),e._v(" "),r("p",[e._v("Composer создает файл "),r("code",[e._v("composer.lock")]),e._v(" который хранит точную версию каждого пакета, который он загрузил во время первого запуска "),r("code",[e._v("php composer.phar install")]),e._v(". Если вы поделились проектом с другими разработчиками и файл "),r("code",[e._v("composer.lock")]),e._v(" является частью него, то при запуске "),r("code",[e._v("php composer.phar install")]),e._v(" они получат ту же версию, что и вы. Чтобы обновить ваши зависимости запустите "),r("code",[e._v("php composer.phar update")]),e._v(".")]),e._v(" "),r("p",[e._v('Очень удобно гибко указывать требуемые версии. Если вы нуждаетесь в версии ~1.8, что значит "всё что новее 1.8.0, но меньше 2.0.x-dev". Вы также можете использовать шаблон '),r("code",[e._v("*")]),e._v(", например "),r("code",[e._v("1.8.*")]),e._v(". Теперь команда Composer "),r("code",[e._v("php composer.phar update")]),e._v(" обновит все ваши зависимости до новейших версий, которые соответствуют указанным ограничениям.")]),e._v(" "),r("h3",{attrs:{id:"проверка-ваших-зависимостеи-на-безопасность"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#проверка-ваших-зависимостеи-на-безопасность"}},[e._v("#")]),e._v(" Проверка ваших зависимостей на безопасность")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://security.sensiolabs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Advisories Checker"),r("OutboundLink")],1),e._v(" является веб-сервисом и инструментом командной строки, оба из которых изучают ваш файл "),r("code",[e._v("composer.lock")]),e._v(" и сообщают, если есть необходимость в обновлении какой-либо из ваших зависимостей.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://getcomposer.org/doc/00-intro.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Подробнее о Composer"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"pear"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pear"}},[e._v("#")]),e._v(" PEAR")]),e._v(" "),r("p",[e._v("Другим ветераном среди пакетных менеджеров, которым наслаждаются многие PHP-разработчики, является "),r("a",{attrs:{href:"http://packagist.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PEAR"),r("OutboundLink")],1),e._v(". Он работает практически так же, как и Composer, но имеет несколько важных отличий.")]),e._v(" "),r("p",[e._v("PEAR требует, чтобы каждый пакет имел определенную структуру, это означает, что автор пакета должен подготовить его для использования с PEAR. Использование проекта, который не был подготовлен для работы с PEAR невозможно.")]),e._v(" "),r("p",[e._v("PEAR устанавливает пакеты глобально, что означает то, что после установки, они доступны всем проектам на этом сервере. Это может быть полезно, если много проектов строятся на тех же пакетах с той же версией, но может привести к проблемам, если проекты разрабатывались для разных версий.")]),e._v(" "),r("h3",{attrs:{id:"как-установить-pear"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#как-установить-pear"}},[e._v("#")]),e._v(" Как установить PEAR")]),e._v(" "),r("p",[e._v("Вы можете установить PEAR, загрузив установщик phar и выполнив его. Документация PEAR содержит подробную\n"),r("a",{attrs:{href:"http://twig.sensiolabs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("инструкцию по установке"),r("OutboundLink")],1),e._v(" для каждой операционной системы.")]),e._v(" "),r("p",[e._v("Если вы используете Linux, вы также можете посмотреть наличие PEAR в пакетном менеджере вашего дистрибутива. Debian и Ubuntu, к примеру, содержат информацию о пакете "),r("code",[e._v("php-pear")]),e._v(" в пакетном менеджере apt.")]),e._v(" "),r("h3",{attrs:{id:"как-установить-пакет"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#как-установить-пакет"}},[e._v("#")]),e._v(" Как установить пакет")]),e._v(" "),r("p",[e._v("Если пакет существует в "),r("a",{attrs:{href:"https://security.sensiolabs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("списке пакетов PEAR"),r("OutboundLink")],1),e._v(", вы можете установить его, указав официальное название:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("pear install foo\n")])])]),r("p",[e._v("Если пакет выложен на другом канале, вам нужно сначало сделать "),r("code",[e._v("discover")]),e._v(" этого канала и затем указать его во время установки. Подробнее об этом в "),r("a",{attrs:{href:"http://getcomposer.org/doc/00-intro.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("использование каналов"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://packagist.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Подробнее о PEAR"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"обработка-зависимостеи-pear-с-composer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#обработка-зависимостеи-pear-с-composer"}},[e._v("#")]),e._v(" Обработка зависимостей PEAR с Composer")]),e._v(" "),r("p",[e._v("Если вы уже используете "),r("RouterLink",{attrs:{to:"/#composer_и_packagist"}},[e._v("Composer")]),e._v(" и желаете установить какой-то код из PEAR, вы можете использовать Composer для обработки зависимостей PEAR. Этот пример установит код из "),r("code",[e._v("pear2.php.net")]),e._v(":")],1),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"repositories"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pear"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"url"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://pear2.php.net"')]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"require"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pear-pear2/PEAR2_Text_Markdown"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pear-pear2/PEAR2_HTTP_Request"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Первый раздел "),r("code",[e._v('"repositories"')]),e._v(' даст понять Composer, что он должен сделать "initialise" (или "discover" в терминологии PEAR) репозиторий pear. Затем секция require укажет именам пакетов префикс, как ниже:')]),e._v(" "),r("blockquote",[r("p",[e._v("pear-channel/Package")])]),e._v(" "),r("p",[e._v('Префикс "pear" жестко ограничен, чтобы избежать любых конфликтов, так как каналы Pear могут быть схожи с другими поставщиками пакетов например, вместо короткого имени (или полного URL) может быть использовано для объявления в каком канале находится пакет.')]),e._v(" "),r("p",[e._v("Когда код будет установлен он будет доступен в вашей папке vendor и автоматически доступен через автозагрузчик (файл Autoload) Composer.")]),e._v(" "),r("blockquote",[r("p",[e._v("vendor/pear-pear2.php.net/PEAR2_HTTP_Request/pear2/HTTP/Request.php")])]),e._v(" "),r("p",[e._v("Чтобы использовать этот пакет PEAR просто объявите как ниже:")]),e._v(" "),r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[e._v("pear2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("HTTP"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Request")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("ul",[r("li",[r("a",{attrs:{href:"http://getcomposer.org/doc/05-repositories.md#pear",target:"_blank",rel:"noopener noreferrer"}},[e._v("Подробнее о использовании PEAR с Composer"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=a.exports}}]);