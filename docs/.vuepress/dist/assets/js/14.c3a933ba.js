(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{287:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"базы-данных"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#базы-данных"}},[t._v("#")]),t._v(" Базы данных")]),t._v(" "),s("p",[t._v("Скорее всего, ваш PHP код будет использовать базу данных для сохранения информации. Существует несколько вариантов для подключения и взаимодействия с базой данных. Рекомендуемым вариантом "),s("em",[t._v("до PHP 5.1.0")]),t._v(" было использование нативных (родных) драйверов, таких как "),s("a",{attrs:{href:"http://php.net/mysql",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"http://php.net/mysqli",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysqli"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"http://php.net/pgsql",target:"_blank",rel:"noopener noreferrer"}},[t._v("pgsql"),s("OutboundLink")],1),t._v(", etc.")]),t._v(" "),s("p",[t._v("Встроенные драйвера замечательны, если вы используете ОДНУ базу данных в ваших приложениях, но если, например, вы используете MySQL и немного MSSQL, или вам нужно подключиться в базе данных Oracle, тогда вы не сможете использовать те же драйвера. Вам нужно будет изучить новый API для каждой базы данных — и это может оказаться нерациональным.")]),t._v(" "),s("p",[t._v("Обратите внимание, что расширение mysql для PHP больше не поддерживается, и его официальным статусом, начиная с PHP версии 5.4.0, является «Устарело в связи с длительным сроком использования». Это значит, что оно будет удалено в течение нескольких следующих релизов, так что в PHP 5.6 (или в версиях, следующих за 5.5) оно вполне может пропасть. Если вы используете "),s("code",[t._v("mysql_connect()")]),t._v(" и "),s("code",[t._v("mysql_query()")]),t._v(" в своих приложениях, тогда вам придется столкнуться с переписыванием кода, поэтому лучшим вариантом сейчас является использование в приложениях mysqli или PDO вместо mysql, прежде чем вы в дальнейшем столкнётесь с нерабочими приложениями. "),s("em",[t._v("Если вы начинаете изучение баз данных с нуля, тогда полностью откажитесь от использования расширения mysql — используйте "),s("a",{attrs:{href:"http://php.net/mysqli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Расширение MySQLi"),s("OutboundLink")],1),t._v(" или PDO.")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://php.net/manual/ru/mysqlinfo.api.choosing.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP: Выбор API для MySQL"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"pdo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pdo"}},[t._v("#")]),t._v(" PDO")]),t._v(" "),s("p",[t._v("PDO — это абстрактная библиотека для подключения к базе данных, встроенная в PHP с версии 5.1.0, которая обеспечивает единый интерфейс для взаимодействия с большим количеством различных баз данных. PDO не будет переводить ваши SQL запросы или эмулировать отсутствующие возможности; он чист для подключения к нескольким типам баз данных с тем же API.")]),t._v(" "),s("p",[t._v("Более важно, что "),s("code",[t._v("PDO")]),t._v(" позволяет вам безопасно вводить пользовательские данные (например идентификатор) в ваши SQL запросы, без беспокойства о SQL-инъекциях. Это возможно благодаря использованию PDO выражений и связывания (bound) параметров.")]),t._v(" "),s("p",[t._v("Предположим, что PHP скрипт получает числовой идентификатор в качестве параметра из запроса. Этот идентификатор должен быть использован для получения пользовательских записей из базы данных. Ниже приведён "),s("code",[t._v("неправильный")]),t._v(" способ реализации этого:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PDO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sqlite:users.db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"SELECT name FROM users WHERE id = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- Это неправильно!")]),t._v("\n")])])])]),s("p",[t._v("Это ужасный код. Вы вставляете необработанные параметры в SQL запрос. Это приведёт к взлому. Просто представьте, что взломщик сделает запрос "),s("code",[t._v("http://domain.com/?id=1%3BDELETE+FROM+users")]),t._v(", который присвоит переменной "),s("code",[t._v("$_GET['id']")]),t._v(" значение "),s("code",[t._v("1;DELETE FROM users")]),t._v(" и приведёт к удалению всех ваших пользователей! Вместо этого, вы должны очистить ввод идентификатора с помощью связывания параметров PDO.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PDO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sqlite:users.db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stmt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SELECT name FROM users WHERE id = :id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stmt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("':id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PDO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAM_INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//<-- Автоматически очищено с помощью PDO")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stmt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("p",[t._v("Это правильный код. Он использует связанный параметр в выражении PDO. Это позволяет избежать ввода некоректного ID перед тем, как передать запрос в базу данных, тем самым предотвращая потенциальные SQL-инъекции.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.php.net/manual/ru/book.pdo.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Подробнее о PDO"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Вы также должны понимать, если подключение не закрыто должным образом, то оно использует много ресурсов, которые тратятся впустую, впрочем это больше относится к другим языкам. Используя PDO, вы можете неявно закрывать подключение уничтожив объект — все ссылки на него будут удалены, т.е. установлены в NULL. Если не сделать этого явно, PHP закроет подключение за вас, когда выполнение скрипта завершится, если только вы не используете постоянные подключения.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://php.net/manual/ru/pdo.connections.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Подробнее о подключениях PDO"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"уровни-абстракции"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#уровни-абстракции"}},[t._v("#")]),t._v(" Уровни абстракции")]),t._v(" "),s("p",[t._v("Многие фреймворки предоставляют собственный уровень абстракции, который может строиться на основе PDO. Такая фактическая абстракция баз данных позволяет оборачивать запросы на PHP в методы, которые отсутствуют в одной системе баз данных, но работают в другой. Это, конечно, добавит небольшие накладные расходы, но если вы строите портативные приложения, которым необходима работа с MySQL, PostgreSQL и SQLite, тогда, для чистоты кода, минимальными накладными расходами можно пренебречь.")]),t._v(" "),s("p",[t._v("Некоторые уровни абстракции построены с использованием PSR-0 стандарта, поэтому могут быть установлены в любое приложение:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/auraphp/Aura.Sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aura SQL"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.doctrine-project.org/projects/dbal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Doctrine2 DBAL"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://packages.zendframework.com/docs/latest/manual/en/index.html#zend-db",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZF2 Db"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://framework.zend.com/manual/ru/zend.db.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZF1 Db"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);