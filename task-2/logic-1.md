# Решение первой задачи

Важно учесть что вопросы задают по очереди и на каждый вопрос отвечает каждый человек, значит лгуны будут голосовать **"ДА"** дважды. То есть если человека спрашивают любит ли он что-то он будет говорить **"ДА"**, **"НЕТ"**, **"НЕТ"** - если он из категории тех кто гвоорит правду, ну а если он из категории тех кто лжет он будет говорить примерно следующее: **"ДА"**, **"ДА"**, **"НЕТ"**. **90** это сумма голосов за макароны, пельмени и вареники, с учетом того что ни кто не врет. **110** это сумма голосов лгунов и честных голосовавших за макароны, пельмени и вареники. Вот мы из **110** (лгуны + честные) вычитаем **90** (честные) и получаем лгунов **20**.

***Есть и визуальный способ решения этой задачи, для этого нарисуем таблицу:***

Если бы... | Макароны       | Пельмени       | Вареники       | Сумма
-----------|----------------|----------------|----------------|---------
Правду     | a + b = ?      | c + d = ?      | e + f = ?      | 90
Имеем      | a + d + f = 45 | c + b + f = 35 | e + b + d = 30 | 110

***Рассмотрим для начала первую линию, в ней лгуны не лгут, а говорят правду как и честные, но они все равно разделены.***

Где **`a`** это те кто проголосовали **"ДА"** для макарон, **`b`** кто проголосовали **"НЕТ"** для макарон (их сумма **`a + b`** как раз является настоящим показанием), **`c`**, **`d`** и **`e`**, **`f`** соотвецственно к пельменям и вареникам. А сумма всех голосов должна равняться количеству голосующих - **`90`**.

***На второй линии таблицы результат что мы имеем в задаче, когда у нас лгуны начинают врать***

Если подумать то станет понятно почему формулы записанны именно так. Ведь когда у человека спрашивают "Ваше любимое блюдо - макароны?", то если он из категории что говорят правду, скажет **"ДА"**, а на все другие вопросы скажет **"НЕТ"**, по этому голоса таких людей будут учтены (приплюсованы) только для макарон. Лгуны, которые любят макароны (**`b`**) должны будут ответить **"НЕТ"**, ведь они всегда лгут, а значит если они любят макароны то должны сказать что они их не любят (соврать), но они скажут **"ДА"** для пельменей и вареников, там мы и плюсум **`b`**. Голоса **`d`** и **`f`** приплюсованы там так как те лгуны по той эе логике должны соврать и сказать **"ДА"** для макарон. А равно это **`45`** по условию задачи. **Это мы разобрали формулу `a + d + f = 45`. Другие работают анологично.**

Приведем таблицу в две формулы:

**`a + b + c + d + e + f = 90`** и **`a + 2b + c + 2d + e + 2f = 110`**

Вычтем из нижней формулы вернюю и получим следующее:

a + 2b + c + 2d + e + 2f - a - b - c - d - e - f = **`b + d + f`**

110 - 90 = **`20`**

Значит **`b + d + f = 20`**, а это и есть наши лгуны.